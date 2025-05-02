import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface IconFeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const IconFeature = ({ title, description, icon: Icon }: IconFeatureProps) => {
  return (
    <div className="group relative rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 inline-flex rounded-full bg-evydencia-gold/10 p-3 text-evydencia-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default IconFeature;
