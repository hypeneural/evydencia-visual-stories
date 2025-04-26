
import { useState } from 'react';
import { cn } from '@/lib/utils';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/5548996425287"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 text-white transition-all hover:bg-green-600",
        isHovered ? "px-6 pr-8" : "p-4"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 1 1 0c0 .97 1.12 1.67 2 1.67a.5.5 0 0 1 0 1"/></svg>
      <span className={cn(
        "whitespace-nowrap text-sm font-medium transition-all",
        isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 absolute"
      )}>
        Fale Conosco
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
