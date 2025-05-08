import { useState, useEffect, useRef, TouchEvent } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente",
    image: "https://evydencia.com.br/imgs/anderson.jpg",
    text: "Foi uma experiência incrível! O estúdio é lindo e o atendimento foi perfeito. As fotos ficaram maravilhosas!"
  },
  {
    name: "João Santos",
    role: "Cliente",
    image: "https://evydencia.com.br/imgs/elaine.jpg",
    text: "Profissionalismo e qualidade em cada detalhe. Recomendo muito o trabalho do Estúdio Evydência!"
  },
  {
    name: "Ana Oliveira",
    role: "Cliente",
    image: "https://evydencia.com.br/imgs/anderson.jpg",
    text: "As fotos do meu ensaio de gestante ficaram perfeitas! O carinho e atenção que recebi foram especiais."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && !isDragging) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex * 100);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const newIndex = Math.round((scrollLeft - walk) / 100);
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const newIndex = Math.round((scrollLeft - walk) / 100);
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-muted-foreground">Depoimentos de quem já viveu momentos especiais conosco</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={sliderRef}
            className="relative cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
          >
            <div className="overflow-hidden">
              <div
                className={cn(
                  "flex transition-transform duration-700",
                  isDragging ? "transition-none" : "ease-out"
                )}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-8">
                      <div className="flex flex-col items-center mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground italic text-center">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-foreground rounded-full p-2 shadow-lg"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-foreground rounded-full p-2 shadow-lg"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === index
                    ? "bg-evydencia-gold w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
