import { useEffect, useRef } from 'react';
import { useAmbientAnimations } from '../hooks/useAmbientAnimations';

export function AmbientLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  useAmbientAnimations(containerRef);

  return (
    <>
      {/* Ambient animations container */}
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      />
      
      {/* Bouncing teddy */}
      <div className="fixed right-4 bottom-20 text-5xl md:text-6xl pointer-events-none z-10 animate-teddy-bounce">
        🧸
      </div>
    </>
  );
}
