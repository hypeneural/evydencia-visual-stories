
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface UseTypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  startDelay?: number;
  backDelay?: number;
  loop?: boolean;
}

export const useTypedText = ({
  strings,
  typeSpeed = 50,
  backSpeed = 50,
  startDelay = 300,
  backDelay = 1500,
  loop = false,
}: UseTypedTextProps) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        startDelay,
        backDelay,
        loop,
        showCursor: true,
        cursorChar: '|',
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, startDelay, backDelay, loop]);

  return el;
};
