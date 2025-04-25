
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const RevealOnScroll = ({ children, className, delay = 0 }: RevealOnScrollProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (sectionRef.current) {
              sectionRef.current.classList.add('active');
            }
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div ref={sectionRef} className={cn('reveal', className)}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
