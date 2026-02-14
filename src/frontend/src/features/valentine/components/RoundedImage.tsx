import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface RoundedImageProps {
  src: string;
  alt: string;
}

export function RoundedImage({ src, alt }: RoundedImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-64 h-64 mx-auto bg-valentine-muted rounded-2xl flex items-center justify-center">
        <div className="text-center text-valentine-text/50">
          <ImageIcon className="w-16 h-16 mx-auto mb-2" />
          <p className="text-sm">Image placeholder</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-64 h-auto mx-auto rounded-2xl shadow-lg"
      onError={() => setHasError(true)}
    />
  );
}
