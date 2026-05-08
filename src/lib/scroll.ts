import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): Lenis | null {
  if (typeof window === 'undefined') return null;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.4,
  });

  const raf = (time: number) => {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // Expose for in-page scripts (menu nav uses it for smooth scrollTo).
  (window as unknown as { lenis: Lenis }).lenis = lenisInstance;
  return lenisInstance;
}

export function getLenis(): Lenis | null {
  if (typeof window === 'undefined') return null;
  return (window as unknown as { lenis?: Lenis }).lenis ?? null;
}
