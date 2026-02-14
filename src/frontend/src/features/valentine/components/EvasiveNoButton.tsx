import { useRef, useState } from 'react';
import { ValentineButton } from './ValentineButton';

export function EvasiveNoButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ left: '50%', top: '50%' });

  const moveButton = () => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Button dimensions (approximate)
    const buttonWidth = 120;
    const buttonHeight = 60;
    
    // Calculate safe boundaries (keep button fully visible)
    const maxLeft = viewportWidth - buttonWidth - 20;
    const maxTop = viewportHeight - buttonHeight - 20;
    
    // Generate random position within safe boundaries
    const newLeft = Math.max(20, Math.random() * maxLeft);
    const newTop = Math.max(20, Math.random() * maxTop);
    
    setPosition({
      left: `${newLeft}px`,
      top: `${newTop}px`
    });
  };

  return (
    <ValentineButton
      ref={buttonRef}
      onClick={moveButton}
      className="absolute transition-all duration-300"
      style={{
        left: position.left,
        top: position.top,
        transform: position.left === '50%' ? 'translateX(-50%)' : 'none'
      }}
    >
      No 😢
    </ValentineButton>
  );
}
