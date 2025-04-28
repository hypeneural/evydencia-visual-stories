
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import RevealOnScroll from './RevealOnScroll';

interface IconFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const IconFeature = ({ icon, title, description, delay = 0, className }: IconFeatureProps) => {
  return (
    <RevealOnScroll delay={delay}>
      <div className={cn(
        "p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-evydencia-beige flex",
        className
      )}>
        <div className="mr-4 text-evydencia-gold bg-white p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-evydencia-gold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default IconFeature;
