"use client";
import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  useWindowScroll = false,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const animationFrameRef = useRef(null);
  const lenisScrollY = useRef(0);  
  const cachedPositions = useRef([]); 

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const cachePositions = useCallback(() => {
    const containerHeight = useWindowScroll
      ? window.innerHeight
      : scrollerRef.current?.clientHeight ?? 0;

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const endElement = scrollerRef.current?.querySelector('.scroll-stack-end');
    const endElementTop = endElement
      ? endElement.getBoundingClientRect().top + window.scrollY
      : 0;
    const pinEnd = endElementTop - containerHeight / 2;

    cachedPositions.current = cardsRef.current.map((card, i) => {
      if (!card) return null;
      const cardTop = card.getBoundingClientRect().top + window.scrollY;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      return { cardTop, pinStart, pinEnd, stackPositionPx, i };
    });
  }, [useWindowScroll, parsePercentage, stackPosition, itemStackDistance]);

  const updateCardTransforms = useCallback(() => {
    const scrollTop = lenisScrollY.current;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const pos = cachedPositions.current[i];
      if (!pos) return;

      const { cardTop, pinStart, pinEnd, stackPositionPx } = pos;
      let translateY = 0;

      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      card.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });
  }, [itemStackDistance]);

  useLayoutEffect(() => {
    cardsRef.current = Array.from(
      scrollerRef.current.querySelectorAll('.scroll-stack-card')
    );

    requestAnimationFrame(() => {
      cachePositions();
    });

    const resizeObserver = new ResizeObserver(() => {
      cachePositions();
    });
    resizeObserver.observe(document.body);

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

    lenis.on('scroll', ({ scroll }) => {
      lenisScrollY.current = scroll;
    });

    function raf(time) {
      lenis.raf(time);
      updateCardTransforms();
      animationFrameRef.current = requestAnimationFrame(raf);
    }

    animationFrameRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
      resizeObserver.disconnect();
    };
  }, [cachePositions, updateCardTransforms]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" style={{ height: '1px', width: '100%' }} />
      </div>
    </div>
  );
};

export default ScrollStack;