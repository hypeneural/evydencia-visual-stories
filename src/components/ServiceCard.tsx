
import { ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import RevealOnScroll from './RevealOnScroll';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import VanillaTilt from 'vanilla-tilt';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div 
      ref={tiltRef}
      data-aos="fade-up"
      data-aos-delay={delay}
      className="w-full px-4 mb-8"
    >
      <Card className="hover:shadow-lg transition-all duration-300 h-full border border-evydencia-beige hover:border-evydencia-gold group">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="text-evydencia-gold p-3 rounded-full bg-evydencia-beige group-hover:bg-evydencia-gold group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-medium text-center font-playfair group-hover:text-evydencia-gold transition-colors">{title}</h3>
        </CardHeader>
        <CardContent>
          <div className="text-muted-foreground text-left whitespace-pre-line">
            {description}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;
