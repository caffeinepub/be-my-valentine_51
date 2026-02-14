import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Heart } from 'lucide-react';

interface YesCelebrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function YesCelebrationDialog({ open, onOpenChange }: YesCelebrationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-valentine-card border-valentine-primary/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl text-valentine-primary text-center flex items-center justify-center gap-2">
            <Heart className="w-8 h-8 fill-valentine-primary" />
            Yay! You Said YES!
            <Heart className="w-8 h-8 fill-valentine-primary" />
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-valentine-text pt-4">
            You've made me the happiest person in the world! ❤️
            <br />
            <br />
            I promise to cherish every moment with you. 💕
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <div className="text-6xl animate-bounce">
            🎉 💖 🎊
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
