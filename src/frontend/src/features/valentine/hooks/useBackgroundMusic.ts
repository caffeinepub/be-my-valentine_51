import { useEffect, useRef, useState } from 'react';

export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [needsUserGesture, setNeedsUserGesture] = useState(false);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/assets/audio/papa_eppadi_vandhaayo.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Try autoplay
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setNeedsUserGesture(false);
        })
        .catch(() => {
          // Autoplay blocked, need user gesture
          setNeedsUserGesture(true);
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setNeedsUserGesture(false);
        })
        .catch((err) => {
          console.error('Failed to play audio:', err);
        });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return {
    isPlaying,
    isMuted,
    needsUserGesture,
    play,
    pause,
    toggleMute,
  };
}
