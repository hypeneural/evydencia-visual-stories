import { useEffect, useState } from 'react';
import { Image, Camera, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Navbar from '@/components/Navbar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import RevealOnScroll from '@/components/RevealOnScroll';
import GalleryImage from '@/components/GalleryImage';

const Index = () => {
  const [showMore, setShowMore] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const galleryImages = [
    {
      src: "https://evydencia.com.br/bio/img/15_ANOS.png",
      alt: "Ensaio 15 Anos",
      title: "15 Anos"
    },
    {
      src: "https://evydencia.com.br/bio/img/ACOMPANHAMENO_MENSAL.png",
      alt: "Acompanhamento Mensal",
      title: "Color"
    },
    {
      src: "https://evydencia.com.br/bio/img/ANIVERSARIO.png",
      alt: "Aniversário",
      title: "Aniversário"
    },
    {
      src: "https://evydencia.com.br/bio/img/BATIZADOS.png",
      alt: "Batizados",
      title: "Batizado"
    },
    {
      src: "https://evydencia.com.br/bio/img/CORPORATIVO.png",
      alt: "Ensaio Corporativo",
      title: "Coorporativo"
    },
    {
      src: "https://evydencia.com.br/bio/img/GESTANTES.png",
      alt: "Ensaio Gestante",
      title: "Gestante"
    },
    {
      src: "https://evydencia.com.br/bio/img/REVELACAO.png",
      alt: "Revelação",
      title: "Revelação"
    },
    {
      src: "https://evydencia.com.br/bio/img/SMASH_THE_CAKE.png",
      alt: "Smash the Cake",
      title: "Smash the Cake"
    }
  ];

  const services = [
    {
      title: "Em Estúdio",
      description: `
        • Ensaios Temáticos (Natal, Dia das Mães, Páscoa e mais)
        • Acompanhamento Mensal
        • Ensaio de Gestante
        • Ensaio de Família
        • Ensaio de Casal
        • Ensaio Corporativo
        • Ensaio com Fundo Branco
        • Smash The Cake
        • Chá Revelação
      `,
      icon: <Camera size={24} />
    },
    {
      title: "Ensaios Externos",
      description: `
        • Ensaio de Família
        • Ensaio de Casal
        • Ensaio de Gestante
        • Ensaio Corporativo
        • Chá Revelação
        • Sessão de Aniversário Infantil
      `,
      icon: <Image size={24} />
    },
    {
      title: "Cobertura de Eventos",
      description: `
        • Batizados
        • Aniversários Infantis
      `,
      icon: <Calendar size={24} />
    }
  ];

  const benefits = [
    {
      title: "Agendamento flexível",
      description: "Horários disponíveis inclusive aos finais de semana."
    },
    {
      title: "Estúdio climatizado",
      description: "Ambiente confortável para você e sua família."
    },
    {
      title: "Higiene e segurança",
      description: "Espaço higienizado diariamente para sua tranquilidade."
    },
    {
      title: "Experiência personalizada",
      description: "Cada sessão é única e pensada especialmente para você."
    },
    {
      title: "Mais de 12 anos de história",
      description: "Experiência e profissionalismo para registrar seus momentos."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative pt-20"
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://evydencia.com.br/bio/img/banner.jpg') center/cover no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Cada foto, uma história eterna.</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "300ms" }}>
            Momentos especiais, registrados com amor e sensibilidade.
          </p>
          <Button 
            size="lg" 
            className="bg-evydencia-gold hover:bg-opacity-90 text-black font-bold text-lg animate-fade-in opacity-0" 
            style={{ animationDelay: "600ms" }}
            onClick={() => window.location.href="#contato"}
          >
            Agende seu Ensaio!
          </Button>
        </div>
      </section>

      <section id="sobre" className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <RevealOnScroll>
                <div className="flex gap-4">
                  <div className="w-1/2 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://evydencia.com.br/bio/img/anderson.jpg" 
                      alt="Anderson, fotógrafo do Estúdio Evydência" 
                      className="w-full h-auto aspect-[3/4] object-cover"
                    />
                  </div>
                  <div className="w-1/2 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://evydencia.com.br/bio/img/elaine.jpg" 
                      alt="Elaine, fotógrafa do Estúdio Evydência" 
                      className="w-full h-auto aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="md:w-1/2 md:pl-12">
              <RevealOnScroll delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o Estúdio Evydência</h2>
              </RevealOnScroll>
              <RevealOnScroll delay={400}>
                <p className="text-lg mb-4 text-muted-foreground">
                  Fundado por Anderson e Elaine, o Estúdio Evydência nasceu do amor pela fotografia e pela capacidade de eternizar momentos especiais.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={600}>
                <p className="text-lg mb-6 text-muted-foreground">
                  Há mais de 12 anos, temos o privilégio de registrar histórias únicas e emocionantes. Cada ensaio é tratado com dedicação e sensibilidade, buscando capturar não apenas imagens, mas sentimentos genuínos.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={800}>
                <p className="text-lg font-medium text-evydencia-gold">
                  Nossa missão é transformar momentos em memórias eternas.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      <section id="servicos" className="bg-evydencia-beige section-padding">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Em Estúdio"
              description={`
                • Ensaios Temáticos (Natal, Dia das Mães, Páscoa e mais)
                • Acompanhamento Mensal
                • Ensaio de Gestante
                • Ensaio de Família
                • Ensaio de Casal
                • Ensaio Corporativo
                • Ensaio com Fundo Branco
                • Smash The Cake
                • Chá Revelação
              `}
              icon={<Camera size={24} />}
              delay={0}
            />
            <ServiceCard
              title="Ensaios Externos"
              description={`
                • Ensaio de Família
                • Ensaio de Casal
                • Ensaio de Gestante
                • Ensaio Corporativo
                • Chá Revelação
                • Sessão de Aniversário Infantil
              `}
              icon={<Image size={24} />}
              delay={200}
            />
            <ServiceCard
              title="Cobertura de Eventos"
              description={`
                • Batizados
                • Aniversários Infantis
              `}
              icon={<Calendar size={24} />}
              delay={400}
            />
          </div>
        </div>
      </section>
      
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Diferenciais</h2>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <RevealOnScroll key={index} delay={index * 150}>
                <div className="bg-evydencia-beige p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-2 text-evydencia-gold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      <section id="galeria" className="bg-evydencia-beige section-padding">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossa Galeria</h2>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <RevealOnScroll key={index} delay={index * 100} className="animate-fade-in opacity-0">
                <GalleryImage
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  delay={index * 100}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section id="contato" className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Entre em Contato</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-center text-lg text-muted-foreground mb-12">
                Estamos prontos para eternizar seus momentos mais especiais!
              </p>
            </RevealOnScroll>
            
            <div className="bg-evydencia-beige p-8 rounded-lg shadow-md border border-evydencia-gold border-opacity-20">
              <RevealOnScroll delay={300}>
                <div className="text-center mb-8">
                  <p className="text-xl mb-6">
                    Agende seu horário e eternize seus momentos mais especiais.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-evydencia-gold hover:bg-opacity-90 text-black animate-pulse-slow flex items-center gap-2"
                    onClick={() => window.open("https://wa.me/5548996425287", "_blank")}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 1 1 0c0 .97 1.12 1.67 2 1.67a.5.5 0 0 1 0 1"/></svg>
                    Quero Registrar Meu Momento!
                  </Button>
                </div>
              </RevealOnScroll>
              
              <div className="flex flex-col md:flex-row gap-8">
                <RevealOnScroll delay={400} className="md:w-1/2">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Localização</h3>
                    <p className="mb-1">Rua Principal, 123</p>
                    <p className="mb-1">Centro - Tijucas/SC</p>
                    <p>CEP: 88200-000</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Horário de Atendimento</h3>
                    <p className="mb-1">Segunda a Sexta: 13h às 18h</p>
                    <p className="mb-4">Sábados: 08:30 às 11:00</p>
                    <p className="text-sm text-muted-foreground italic">
                      Para ensaios fotográficos atendemos com horários agendados, então temos flexibilidade conforme necessidade.
                    </p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={500} className="md:w-1/2">
                  <div className="h-64 rounded-lg overflow-hidden shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14139.991540096336!2d-48.63387!3d-27.235694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cb7c4a7c877f%3A0xfb04adc00678de60!2sTijucas%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1713239997841!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa do Estúdio Evydência"
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-foreground text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-playfair font-bold">Estúdio Evydência</h2>
              <p className="text-sm mt-1 text-gray-300">Eternizando momentos desde 2011</p>
            </div>
            
            <div className="flex space-x-4 mb-6 md:mb-0">
              <a href="#" className="hover:text-evydencia-gold transition-colors p-2" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-evydencia-gold transition-colors p-2" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-evydencia-gold transition-colors p-2" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 1 1 0c0 .97 1.12 1.67 2 1.67a.5.5 0 0 1 0 1"/></svg>
              </a>
            </div>
            
            <div className="text-sm text-center md:text-right">
              <p>&copy; 2025 Estúdio Evydência - Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
};

export default Index;
