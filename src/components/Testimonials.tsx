
import { useState, useEffect, useRef, TouchEvent } from 'react';
import TestimonialCard from './TestimonialCard';
import RevealOnScroll from './RevealOnScroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Foram momentos incríveis! As fotografias capturam perfeitamente a essência da nossa família.",
    author: "Ana Silva",
    avatarSrc: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    quote: "O carinho e o profissionalismo do Anderson e da Elaine fizeram toda diferença no nosso ensaio de gestante.",
    author: "Mariana Costa",
    avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "Eternizaram o batizado do nosso filho de uma forma tão mágica que nos emociona até hoje ao ver as fotos.",
    author: "Carlos e Patricia",
    avatarSrc: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 4,
    quote: "Já realizamos três ensaios com o Estúdio Evydência e sempre saímos maravilhados com o resultado!",
    author: "Família Pereira",
    avatarSrc: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    
    if (diffX > 50) { // Swipe left
      goToNext();
    } else if (diffX < -50) { // Swipe right
      goToPrev();
    }
  };

  return (
    <section id="depoimentos" className="bg-evydencia-beige section-padding">
      <div className="container mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">O Que Nossos Clientes Dizem</h2>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4 relative">
          <div 
            ref={containerRef}
            className="relative h-80"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                avatarSrc={testimonial.avatarSrc}
                active={index === activeIndex}
              />
            ))}
            
            <button 
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-evydencia-beige transition-colors z-20"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6 text-evydencia-gold" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-evydencia-beige transition-colors z-20"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6 text-evydencia-gold" />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-evydencia-gold scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
