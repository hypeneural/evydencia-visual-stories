
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface GalleryImageProps {
  src: string;
  alt: string;
  delay: number;
}

const GalleryImage = ({ src, alt, delay }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="overflow-hidden rounded-lg shadow-md" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-64 md:h-80 overflow-hidden group">
        <img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-all duration-700 group-hover:scale-105',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        <div className={cn(
          "absolute inset-0 bg-gray-300 animate-pulse",
          isLoaded && "hidden"
        )} />
      </div>
    </div>
  );
};

export default GalleryImage;
