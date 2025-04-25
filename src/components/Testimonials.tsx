
import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import RevealOnScroll from './RevealOnScroll';

const testimonials = [
  {
    id: 1,
    quote: "Foram momentos incríveis! As fotografias capturam perfeitamente a essência da nossa família.",
    author: "Ana Silva"
  },
  {
    id: 2,
    quote: "O carinho e o profissionalismo do Anderson e da Elaine fizeram toda diferença no nosso ensaio de gestante.",
    author: "Mariana Costa"
  },
  {
    id: 3,
    quote: "Eternizaram o batizado do nosso filho de uma forma tão mágica que nos emociona até hoje ao ver as fotos.",
    author: "Carlos e Patricia"
  },
  {
    id: 4,
    quote: "Já realizamos três ensaios com o Estúdio Evydência e sempre saímos maravilhados com o resultado!",
    author: "Família Pereira"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="bg-evydencia-beige section-padding">
      <div className="container mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4 relative">
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                active={index === activeIndex}
              />
            ))}
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
