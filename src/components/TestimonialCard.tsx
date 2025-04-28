
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  author: string;
  active: boolean;
  avatarSrc?: string;
}

const TestimonialCard = ({ quote, author, active, avatarSrc }: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0 transition-opacity duration-500',
        active ? 'opacity-100 z-10' : 'opacity-0 z-0'
      )}
    >
      <div className="bg-white p-8 rounded-lg shadow-md border border-evydencia-beige">
        <div className="flex items-center mb-6">
          <Avatar className="h-16 w-16 border-2 border-evydencia-gold">
            {avatarSrc ? (
              <AvatarImage src={avatarSrc} alt={author} />
            ) : (
              <AvatarFallback className="bg-evydencia-beige text-evydencia-gold text-lg">
                {author.split(' ').map(name => name[0]).join('')}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="ml-4">
            <p className="font-medium text-evydencia-gold">{author}</p>
            <p className="text-sm text-muted-foreground">Cliente Evydência</p>
          </div>
        </div>
        <div className="text-4xl text-evydencia-gold opacity-40 mb-4 font-serif">"</div>
        <p className="text-lg italic mb-4">{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
