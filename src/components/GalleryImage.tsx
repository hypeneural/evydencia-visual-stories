import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GalleryImageProps {
  images: string[];
  title: string;
}

const GalleryImage = ({ images, title }: GalleryImageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
      <div className="relative aspect-square w-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - Imagem ${index + 1}`}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
        <h3 className="w-full text-center text-xl font-semibold text-white">{title}</h3>
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                currentImageIndex === index
                  ? "w-4 bg-evydencia-gold"
                  : "w-2 bg-white/70 hover:bg-white"
              )}
              aria-label={`Ver imagem ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryImage;
