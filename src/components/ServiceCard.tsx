
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import RevealOnScroll from './RevealOnScroll';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <RevealOnScroll delay={delay} className="w-full md:w-1/3 px-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full border border-evydencia-beige hover:border-evydencia-gold group">
        <div className="flex justify-center mb-4">
          <div className="text-evydencia-gold p-3 rounded-full bg-evydencia-beige group-hover:bg-evydencia-gold group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-medium mb-3 text-center font-playfair">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </div>
    </RevealOnScroll>
  );
};

export default ServiceCard;
