
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface GalleryImageProps {
  src: string;
  alt: string;
  title: string;
  delay: number;
}

const GalleryImage = ({ src, alt, title, delay }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer" 
          style={{ animationDelay: `${delay}ms` }}
        >
          <div className="relative h-64 md:h-80 overflow-hidden group">
            <img
              src={src}
              alt={alt}
              className={cn(
                'w-full h-full object-cover transition-all duration-700 group-hover:scale-110',
                isLoaded ? 'opacity-100' : 'opacity-0'
              )}
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
            />
            <div className={cn(
              "absolute inset-0 bg-gray-300 animate-pulse",
              isLoaded && "hidden"
            )} />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
              <h3 className="text-white text-2xl font-semibold text-center font-playfair drop-shadow-md transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
              <p className="text-white/80 mt-2 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">Clique para ampliar</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-auto">
        <img src={src} alt={alt} className="w-full h-auto" />
      </DialogContent>
    </Dialog>
  );
};

export default GalleryImage;
