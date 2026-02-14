import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBackgroundMusic } from '../hooks/useBackgroundMusic';

export function MusicControls() {
  const { isPlaying, isMuted, needsUserGesture, play, pause, toggleMute } = useBackgroundMusic();

  if (needsUserGesture) {
    return (
      <div className="fixed top-4 right-4 z-30">
        <Button
          onClick={play}
          className="bg-valentine-primary hover:bg-valentine-primary-hover text-white shadow-lg"
          size="sm"
        >
          <Play className="w-4 h-4 mr-2" />
          Play Music
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-30 flex gap-2">
      <Button
        onClick={isPlaying ? pause : play}
        variant="outline"
        size="icon"
        className="bg-valentine-card hover:bg-valentine-muted border-valentine-primary/20"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>
      <Button
        onClick={toggleMute}
        variant="outline"
        size="icon"
        className="bg-valentine-card hover:bg-valentine-muted border-valentine-primary/20"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </Button>
    </div>
  );
}
