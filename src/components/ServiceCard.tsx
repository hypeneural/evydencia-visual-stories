import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import RevealOnScroll from './RevealOnScroll';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import VanillaTilt from 'vanilla-tilt';
import { Button } from '@/components/ui/button';
import { CalendarPlus, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  images: string[];
}

const ServiceCard = ({ title, description, icon: Icon, images }: ServiceCardProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.05,
      });
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      ref={tiltRef}
      data-aos="fade-up"
      className="w-full px-4 mb-8"
    >
      <Card className="hover:shadow-lg transition-all duration-300 h-full border border-evydencia-beige hover:border-evydencia-gold group overflow-hidden">
        <div className="relative w-full h-64 overflow-hidden">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`${title} - Imagem ${index + 1}`}
              className={cn(
                "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000",
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentImageIndex === index
                    ? "bg-evydencia-gold w-4"
                    : "bg-white/70 hover:bg-white"
                )}
                aria-label={`Ver imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="text-evydencia-gold p-3 rounded-full bg-evydencia-beige group-hover:bg-evydencia-gold group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              <Icon size={24} />
            </div>
          </div>
          <h3 className="text-xl font-medium text-center font-playfair group-hover:text-evydencia-gold transition-colors">{title}</h3>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground text-left whitespace-pre-line mb-6">
            {description}
          </div>
          <Button
            onClick={() => window.location.href="#contato"}
            className="w-full bg-evydencia-gold hover:bg-opacity-90 text-black font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all mt-4"
          >
            <CalendarPlus className="mr-2 h-4 w-4" />
            Agendar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;
