
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, delay = 0, prefix = '', suffix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const countRef = useRef(count);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView && countRef.current !== end) {
      setTimeout(() => {
        startTimeRef.current = Date.now();
        const animate = () => {
          if (!startTimeRef.current) return;
          
          const now = Date.now();
          const progress = Math.min((now - startTimeRef.current) / duration, 1);
          
          if (progress < 1) {
            setCount(Math.floor(end * progress));
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(animate);
      }, delay);
    }
  }, [inView, end, duration, delay]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
