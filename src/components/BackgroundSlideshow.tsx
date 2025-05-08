import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const slides = [
  "https://evydencia.com.br/imgs/banner.jpg",
  "https://evydencia.com.br/imgs/15_ANOS.png",
  "https://evydencia.com.br/imgs/GESTANTES.png",
  "https://evydencia.com.br/imgs/CORPORATIVO.png"
];

const BackgroundSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${slide}')`,
            backgroundAttachment: "fixed"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
