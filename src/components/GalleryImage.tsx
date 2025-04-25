
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface GalleryImageProps {
  src: string;
  alt: string;
  title: string;
  delay: number;
}

const GalleryImage = ({ src, alt, title, delay }: GalleryImageProps) => {
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
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
