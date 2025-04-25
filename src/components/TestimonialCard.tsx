
import { cn } from '@/lib/utils';
import RevealOnScroll from './RevealOnScroll';

interface TestimonialCardProps {
  quote: string;
  author: string;
  active: boolean;
}

const TestimonialCard = ({ quote, author, active }: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0 transition-opacity duration-500',
        active ? 'opacity-100 z-10' : 'opacity-0 z-0'
      )}
    >
      <div className="bg-white p-8 rounded-lg shadow-md border border-evydencia-beige">
        <div className="text-4xl text-evydencia-gold opacity-40 mb-4 font-serif">"</div>
        <p className="text-lg italic mb-4">{quote}</p>
        <p className="text-right font-medium text-evydencia-gold">— {author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
