import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SmartImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#DDE5FA] to-[#C6D4F6] text-[#1434A4] p-6 text-center ${className}`}
      >
        <ImageOff className="w-6 h-6 opacity-70" aria-hidden="true" />
        {fallbackTitle && (
          <span className="text-xs font-medium tracking-tight opacity-80">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
