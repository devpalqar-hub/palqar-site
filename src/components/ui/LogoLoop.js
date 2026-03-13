import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, memo } from 'react';

/* ─────────────────────────────────────────────
   Constants
───────────────────────────────────────────── */
const SMOOTH_TAU   = 0.25;   // easing time-constant (seconds)
const MIN_COPIES   = 2;
const COPY_HEADROOM = 2;

const toCssLength = v => (typeof v === 'number' ? `${v}px` : (v ?? undefined));

/* ─────────────────────────────────────────────
   CSS (injected once, no external file needed)
───────────────────────────────────────────── */
const STYLE = `
.logoloop {
  position: relative;
  --logoloop-gap: 32px;
  --logoloop-logoHeight: 28px;
  --logoloop-fadeColorAuto: #ffffff;
}
@media (prefers-color-scheme: dark) {
  .logoloop { --logoloop-fadeColorAuto: #0b0b0b; }
}
.logoloop--vertical { height: 100%; display: inline-block; }
.logoloop--scale-hover {
  padding-top:  calc(var(--logoloop-logoHeight) * .1);
  padding-bottom: calc(var(--logoloop-logoHeight) * .1);
}
.logoloop__track {
  display: flex;
  width: max-content;
  /* NO will-change here — set only when animating, removed on idle */
  user-select: none;
  position: relative;
  z-index: 0;
}
.logoloop--vertical .logoloop__track { flex-direction: column; height: max-content; width: 100%; }
.logoloop__list { display: flex; align-items: center; }
.logoloop--vertical .logoloop__list { flex-direction: column; }
.logoloop__item {
  flex: 0 0 auto;
  margin-right: var(--logoloop-gap);
  font-size: var(--logoloop-logoHeight);
  line-height: 1;
}
.logoloop--vertical .logoloop__item { margin-right: 0; margin-bottom: var(--logoloop-gap); }
.logoloop__item:last-child { margin-right: var(--logoloop-gap); }
.logoloop--vertical .logoloop__item:last-child { margin-right: 0; margin-bottom: var(--logoloop-gap); }
.logoloop__node { display: inline-flex; align-items: center; }
.logoloop__item img {
  height: var(--logoloop-logoHeight);
  width: auto;
  display: block;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
  -webkit-user-drag: none;
  pointer-events: none;
  transition: transform .3s cubic-bezier(.4,0,.2,1);
}
.logoloop--scale-hover .logoloop__item { overflow: visible; }
.logoloop--scale-hover .logoloop__item:hover img,
.logoloop--scale-hover .logoloop__item:hover .logoloop__node {
  transform: scale(1.2);
  transform-origin: center center;
}
.logoloop--scale-hover .logoloop__node { transition: transform .3s cubic-bezier(.4,0,.2,1); }
.logoloop__link { display: inline-flex; align-items: center; text-decoration: none; border-radius: 4px; transition: opacity .2s ease; }
.logoloop__link:hover { opacity: .8; }
.logoloop__link:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }
.logoloop--fade::before,
.logoloop--fade::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: clamp(24px, 8%, 120px);
  pointer-events: none;
  z-index: 10;
}
.logoloop--fade::before {
  left: 0;
  background: linear-gradient(to right, var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, transparent 100%);
}
.logoloop--fade::after {
  right: 0;
  background: linear-gradient(to left,  var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, transparent 100%);
}
.logoloop--vertical.logoloop--fade::before,
.logoloop--vertical.logoloop--fade::after { left: 0; right: 0; width: 100%; height: clamp(24px, 8%, 120px); }
.logoloop--vertical.logoloop--fade::before { top: 0; bottom: auto; background: linear-gradient(to bottom, var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, transparent 100%); }
.logoloop--vertical.logoloop--fade::after  { bottom: 0; top: auto; background: linear-gradient(to top,    var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%, transparent 100%); }
@media (prefers-reduced-motion: reduce) {
  .logoloop__track { transform: translate3d(0,0,0) !important; }
  .logoloop__item img, .logoloop__node { transition: none !important; }
}
`;

/* Inject styles once */
if (typeof document !== 'undefined' && !document.getElementById('logoloop-styles')) {
  const tag = document.createElement('style');
  tag.id = 'logoloop-styles';
  tag.textContent = STYLE;
  document.head.appendChild(tag);
}

/* ─────────────────────────────────────────────
   useStableCallback — keeps a ref in sync so
   handlers never go stale without causing deps.
───────────────────────────────────────────── */
function useStableCallback(fn) {
  const ref = useRef(fn);
  useLayoutEffect(() => { ref.current = fn; });
  return useCallback((...args) => ref.current(...args), []);
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export const LogoLoop = memo(({
  logos,
  speed        = 120,
  direction    = 'left',
  width        = '100%',
  logoHeight   = 28,
  gap          = 32,
  pauseOnHover,
  hoverSpeed,
  fadeOut      = false,
  fadeOutColor,
  scaleOnHover = false,
  renderItem,
  ariaLabel    = 'Partner logos',
  className,
  style,
}) => {
  const containerRef = useRef(null);
  const trackRef     = useRef(null);
  const seqRef       = useRef(null);

  /* ── Dimension state (drives copy count only, not the RAF) ── */
  const [copyCount, setCopyCount] = useState(MIN_COPIES);

  /* ── All animation state lives in refs — RAF never restarts ── */
  const seqSizeRef      = useRef(0);
  const targetVelRef    = useRef(0);
  const hoverVelRef     = useRef(undefined);   // undefined = no hover override
  const isHoveredRef    = useRef(false);
  const isVerticalRef   = useRef(false);
  const offsetRef       = useRef(0);
  const velocityRef     = useRef(0);
  const lastTsRef       = useRef(null);
  const rafRef          = useRef(null);
  const hasHoverRef     = useRef(false);        // whether hover is wired at all

  /* ── Derived scalars (pure, no hooks needed) ── */
  const isVertical = direction === 'up' || direction === 'down';

  const computedTargetVel = useMemo(() => {
    const mag  = Math.abs(speed);
    const sign = isVertical
      ? (direction === 'up'   ?  1 : -1)
      : (direction === 'left' ?  1 : -1);
    return mag * sign * (speed < 0 ? -1 : 1);
  }, [speed, direction, isVertical]);

  const computedHoverVel = useMemo(() => {
    if (hoverSpeed !== undefined) return hoverSpeed;
    if (pauseOnHover === true)   return 0;
    return undefined;
  }, [hoverSpeed, pauseOnHover]);

  /* ── Sync refs whenever props change (no RAF restart) ── */
  useLayoutEffect(() => { targetVelRef.current  = computedTargetVel;  }, [computedTargetVel]);
  useLayoutEffect(() => { hoverVelRef.current   = computedHoverVel;   }, [computedHoverVel]);
  useLayoutEffect(() => { isVerticalRef.current = isVertical;         }, [isVertical]);
  useLayoutEffect(() => { hasHoverRef.current   = computedHoverVel !== undefined; }, [computedHoverVel]);

  /* ── Single, stable RAF loop — starts once, never torn down ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Promote to own compositor layer once
    track.style.willChange = 'transform';

    const animate = (ts) => {
      rafRef.current = requestAnimationFrame(animate);

      if (lastTsRef.current === null) { lastTsRef.current = ts; return; }

      const dt = Math.min((ts - lastTsRef.current) / 1000, 0.1); // cap at 100 ms
      lastTsRef.current = ts;

      const target = (isHoveredRef.current && hoverVelRef.current !== undefined)
        ? hoverVelRef.current
        : targetVelRef.current;

      /* Exponential ease toward target velocity */
      const ease = 1 - Math.exp(-dt / SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * ease;

      const seqSize = seqSizeRef.current;
      if (seqSize > 0) {
        let next = offsetRef.current + velocityRef.current * dt;
        next = ((next % seqSize) + seqSize) % seqSize;
        offsetRef.current = next;

        track.style.transform = isVerticalRef.current
          ? `translate3d(0,${-next}px,0)`
          : `translate3d(${-next}px,0,0)`;
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
      track.style.willChange = 'auto';  // release GPU layer on unmount
    };
  }, []); // ← empty deps: runs once, never restarts

  /* ── Resize / dimension measurement ── */
  const measureDimensions = useStableCallback(() => {
    const container = containerRef.current;
    const seq       = seqRef.current;
    if (!container || !seq) return;

    if (isVerticalRef.current) {
      const parentH = container.parentElement?.clientHeight ?? 0;
      if (parentH > 0) {
        const h = Math.ceil(parentH);
        if (container.style.height !== `${h}px`) container.style.height = `${h}px`;
      }
      const seqH = Math.ceil(seq.getBoundingClientRect().height);
      if (seqH > 0) {
        seqSizeRef.current = seqH;
        const viewport     = container.clientHeight || parentH || seqH;
        const needed       = Math.ceil(viewport / seqH) + COPY_HEADROOM;
        setCopyCount(c => {
          const next = Math.max(MIN_COPIES, needed);
          return c === next ? c : next;  // skip setState if unchanged
        });
      }
    } else {
      const seqW = Math.ceil(seq.getBoundingClientRect().width);
      if (seqW > 0) {
        seqSizeRef.current = seqW;
        const needed       = Math.ceil(container.clientWidth / seqW) + COPY_HEADROOM;
        setCopyCount(c => {
          const next = Math.max(MIN_COPIES, needed);
          return c === next ? c : next;
        });
      }
    }
  });

  /* ── ResizeObserver (stable — no dependency array churn) ── */
  useEffect(() => {
    const container = containerRef.current;
    const seq       = seqRef.current;
    if (!container) return;

    measureDimensions();

    if (!window.ResizeObserver) {
      window.addEventListener('resize', measureDimensions);
      return () => window.removeEventListener('resize', measureDimensions);
    }

    const ro = new ResizeObserver(measureDimensions);
    ro.observe(container);
    if (seq) ro.observe(seq);
    return () => ro.disconnect();
  // Re-run only when the thing we're measuring could have new DOM content
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logos, gap, logoHeight, isVertical]);

  /* ── Image load detection ── */
  useEffect(() => {
    const seq = seqRef.current;
    if (!seq) return;
    const imgs = Array.from(seq.querySelectorAll('img'));
    if (imgs.length === 0) { measureDimensions(); return; }

    let remaining = imgs.length;
    const onLoad = () => { if (--remaining === 0) measureDimensions(); };

    imgs.forEach(img => {
      if (img.complete) { onLoad(); }
      else {
        img.addEventListener('load',  onLoad, { once: true });
        img.addEventListener('error', onLoad, { once: true });
      }
    });

    return () => imgs.forEach(img => {
      img.removeEventListener('load',  onLoad);
      img.removeEventListener('error', onLoad);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logos, gap, logoHeight, isVertical]);

  /* ── Hover handlers ── */
  const handleMouseEnter = useCallback(() => {
    if (hasHoverRef.current) isHoveredRef.current = true;
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (hasHoverRef.current) isHoveredRef.current = false;
  }, []);

  /* ── Render helpers ── */
  const renderLogoItem = useCallback((item, key) => {
    if (renderItem) {
      return <li className="logoloop__item" key={key} role="listitem">{renderItem(item, key)}</li>;
    }
    const isNode = 'node' in item;
    const content = isNode
      ? <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>{item.node}</span>
      : (
        <img
          src={item.src}
          srcSet={item.srcSet}
          sizes={item.sizes}
          width={item.width}
          height={item.height}
          alt={item.alt ?? ''}
          title={item.title}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      );
    const label = isNode ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);
    const inner = item.href
      ? <a className="logoloop__link" href={item.href} aria-label={label || 'logo link'} target="_blank" rel="noreferrer noopener">{content}</a>
      : content;
    return <li className="logoloop__item" key={key} role="listitem">{inner}</li>;
  }, [renderItem]);

  /* Memoize the logo lists — only rebuild when count or logos change */
  const logoLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, ci) => (
      <ul
        className="logoloop__list"
        key={`copy-${ci}`}
        role="list"
        aria-hidden={ci > 0}
        ref={ci === 0 ? seqRef : undefined}
      >
        {logos.map((item, ii) => renderLogoItem(item, `${ci}-${ii}`))}
      </ul>
    )),
  [copyCount, logos, renderLogoItem]);

  /* ── CSS variables ── */
  const cssVars = useMemo(() => ({
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor ? { '--logoloop-fadeColor': fadeOutColor } : {}),
  }), [gap, logoHeight, fadeOutColor]);

  const rootClass = [
    'logoloop',
    isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
    fadeOut     && 'logoloop--fade',
    scaleOnHover && 'logoloop--scale-hover',
    className,
  ].filter(Boolean).join(' ');

  const containerStyle = useMemo(() => ({
    width: isVertical
      ? (toCssLength(width) === '100%' ? undefined : toCssLength(width))
      : (toCssLength(width) ?? '100%'),
    ...cssVars,
    ...style,
  }), [width, cssVars, style, isVertical]);

  return (
    <div ref={containerRef} className={rootClass} style={containerStyle} role="region" aria-label={ariaLabel}>
      <div
        className="logoloop__track"
        ref={trackRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;