import { Button } from '@/components/ui/button';
import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ValentineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ValentineButton = forwardRef<HTMLButtonElement, ValentineButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'bg-valentine-primary hover:bg-valentine-primary-hover text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ValentineButton.displayName = 'ValentineButton';
