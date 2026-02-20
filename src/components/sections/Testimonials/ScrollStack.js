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
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const scrollTop = useWindowScroll ? window.scrollY : scrollerRef.current.scrollTop;
    const containerHeight = useWindowScroll ? window.innerHeight : scrollerRef.current.clientHeight;
    
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = document.querySelector('.scroll-stack-end');
    const endElementTop = endElement ? endElement.getBoundingClientRect().top + window.scrollY : 0;

    cardsRef.current.forEach((card, i) => {
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const cardTop = rect.top + window.scrollY;
  
  const pinStart = cardTop - stackPositionPx - (itemStackDistance * i);
  const pinEnd = endElementTop - (containerHeight / 2);

  // 1. Force scale to exactly 1 to prevent shrinking
  const scale = 1;

  let translateY = 0;
  if (scrollTop >= pinStart && scrollTop <= pinEnd) {
    // 2. Use Math.round to prevent sub-pixel "shivering"
    translateY = Math.round(scrollTop - cardTop + stackPositionPx + (itemStackDistance * i));
  } else if (scrollTop > pinEnd) {
    translateY = Math.round(pinEnd - cardTop + stackPositionPx + (itemStackDistance * i));
  }

  // 3. Apply the transform with hardware acceleration
  card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
});
    isUpdatingRef.current = false;
  }, [useWindowScroll, parsePercentage, stackPosition, scaleEndPosition, itemStackDistance, calculateProgress, baseScale, itemScale]);

  useLayoutEffect(() => {
  cardsRef.current = Array.from(
    scrollerRef.current.querySelectorAll('.scroll-stack-card')
  );

  cardsRef.current.forEach((card) => {
    card.dataset.initialTop = card.offsetTop;
  });

  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

  function raf(time) {
    lenis.raf(time);
    updateCardTransforms();
    animationFrameRef.current = requestAnimationFrame(raf);
  }

  animationFrameRef.current = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(animationFrameRef.current);
    lenis.destroy();
  };
}, []);


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