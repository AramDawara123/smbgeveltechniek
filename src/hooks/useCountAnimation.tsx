
import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  start?: number;
  suffix?: string;
}

export const useCountAnimation = ({ 
  end, 
  duration = 2000, 
  start = 0, 
  suffix = "" 
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const makeVisible = () => {
      if (!isVisible) setIsVisible(true);
    };

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            makeVisible();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);

      // Fallback immediate check (in case already in view at mount)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        makeVisible();
      }
    } else {
      // No IntersectionObserver support — start immediately
      makeVisible();
    }

    return () => {
      observer?.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(startValue + (endValue - startValue) * easedProgress);
      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateCount);
      }
    };

    animationRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, start, end, duration]);

  return { 
    count: `${count}${suffix}`, 
    ref: countRef 
  };
};
