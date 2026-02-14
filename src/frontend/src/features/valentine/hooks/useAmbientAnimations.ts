import { useEffect, RefObject } from 'react';

export function useAmbientAnimations(containerRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const intervals: NodeJS.Timeout[] = [];
    const timeouts: NodeJS.Timeout[] = [];

    // Falling hearts
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart-fall';
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
      heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
      container.appendChild(heart);
      
      const timeout = setTimeout(() => {
        heart.remove();
      }, 5000);
      timeouts.push(timeout);
    };

    // Glitter sparkles
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle-anim';
      sparkle.innerHTML = '✦';
      sparkle.style.left = Math.random() * 100 + 'vw';
      sparkle.style.top = Math.random() * 100 + 'vh';
      sparkle.style.color = '#ff99c8';
      sparkle.style.fontSize = '14px';
      container.appendChild(sparkle);
      
      const timeout = setTimeout(() => {
        sparkle.remove();
      }, 1500);
      timeouts.push(timeout);
    };

    // Floating roses
    const createRose = () => {
      const rose = document.createElement('div');
      rose.className = 'rose-rise';
      rose.innerHTML = '🌹';
      rose.style.left = Math.random() * 100 + 'vw';
      rose.style.fontSize = (Math.random() * 10 + 24) + 'px';
      rose.style.animationDuration = (Math.random() * 3 + 3) + 's';
      container.appendChild(rose);
      
      const timeout = setTimeout(() => {
        rose.remove();
      }, 7000);
      timeouts.push(timeout);
    };

    // Kiss bubbles
    const createKiss = () => {
      const kiss = document.createElement('div');
      kiss.className = 'kiss-float';
      kiss.innerHTML = '😘';
      kiss.style.left = Math.random() * 100 + 'vw';
      kiss.style.fontSize = '22px';
      container.appendChild(kiss);
      
      const timeout = setTimeout(() => {
        kiss.remove();
      }, 5000);
      timeouts.push(timeout);
    };

    // Cursor hearts (on mouse move)
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.9) { // Only spawn occasionally
        const cursorHeart = document.createElement('div');
        cursorHeart.className = 'cursor-heart';
        cursorHeart.innerHTML = '💖';
        cursorHeart.style.left = e.clientX + 'px';
        cursorHeart.style.top = e.clientY + 'px';
        container.appendChild(cursorHeart);
        
        const timeout = setTimeout(() => {
          cursorHeart.remove();
        }, 2000);
        timeouts.push(timeout);
      }
    };

    // Start intervals
    intervals.push(setInterval(createHeart, 500));
    intervals.push(setInterval(createSparkle, 400));
    intervals.push(setInterval(createRose, 900));
    intervals.push(setInterval(createKiss, 1200));

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      intervals.forEach(clearInterval);
      timeouts.forEach(clearTimeout);
      document.removeEventListener('mousemove', handleMouseMove);
      // Remove all spawned elements
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [containerRef]);
}
