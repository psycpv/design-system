import { useEffect, useState } from 'react';

export enum ScrollDirection {
  UP = 'up',
  DOWN = 'down',
}

function useScrollDirection(): ScrollDirection[] {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(
    ScrollDirection.DOWN
  );

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(
        scrollY > lastScrollY ? ScrollDirection.DOWN : ScrollDirection.UP
      );
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return [scrollDir];
}

export default useScrollDirection;
