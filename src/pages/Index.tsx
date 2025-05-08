import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTypedText } from '@/hooks/useTypedText';
import { Image, Camera, Calendar, Users, Clock, Award, ShieldCheck, HeartHandshake, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import RevealOnScroll from '@/components/RevealOnScroll';
import GalleryImage from '@/components/GalleryImage';
import BackgroundSlideshow from '@/components/BackgroundSlideshow';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AnimatedCounter from '@/components/AnimatedCounter';
import IconFeature from '@/components/IconFeature';
import { cn } from '@/lib/utils';

const Index = () => {
  useScrollAnimation();
  const typedElement = useTypedText({
    strings: ['Cada foto, uma história eterna.', 'Momentos únicos, eternizados.', 'Memórias que duram para sempre.'],
    typeSpeed: 40,
    backSpeed: 30,
    loop: true
  });

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
      src: "https://evydencia.com.br/imgs/15_ANOS.png",
      alt: "Ensaio 15 Anos",
      title: "15 Anos",
      category: "eventos"
    },
    {
      src: "https://evydencia.com.br/imgs/ACOMPANHAMENO_MENSAL.png",
      alt: "Acompanhamento Mensal",
      title: "Acompanhamento",
      category: "estudio"
    },
    {
      src: "https://evydencia.com.br/imgs/ANIVERSARIO.png",
      alt: "Aniversário",
      title: "Aniversário",
      category: "eventos"
    },
    {
      src: "https://evydencia.com.br/imgs/BATIZADOS.png",
      alt: "Batizados",
      title: "Batizado",
      category: "eventos"
    },
    {
      src: "https://evydencia.com.br/imgs/CORPORATIVO.png",
      alt: "Ensaio Corporativo",
      title: "Corporativo",
      category: "estudio"
    },
    {
      src: "https://evydencia.com.br/imgs/GESTANTES.png",
      alt: "Ensaio Gestante",
      title: "Gestante",
      category: "estudio"
    },
    {
      src: "https://evydencia.com.br/imgs/REVELACAO.png",
      alt: "Revelação",
      title: "Revelação",
      category: "eventos"
    },
    {
      src: "https://evydencia.com.br/imgs/SMASH_THE_CAKE.png",
      alt: "Smash the Cake",
      title: "Smash the Cake",
      category: "estudio"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "estudio", label: "Em Estúdio" },
    { id: "eventos", label: "Eventos" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredImages = galleryImages.filter(
    img => selectedCategory === "todos" || img.category === selectedCategory
  );

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
      icon: Camera,
      images: [
        "https://evydencia.com.br/imgs/CORPORATIVO.png",
        "https://evydencia.com.br/imgs/GESTANTES.png",
        "https://evydencia.com.br/imgs/SMASH_THE_CAKE.png",
        "https://evydencia.com.br/imgs/ACOMPANHAMENO_MENSAL.png"
      ]
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
      icon: Image,
      images: [
        "https://evydencia.com.br/imgs/GESTANTES.png",
        "https://evydencia.com.br/imgs/15_ANOS.png",
        "https://evydencia.com.br/imgs/ANIVERSARIO.png"
      ]
    },
    {
      title: "Cobertura de Eventos",
      description: `
        • Batizados
        • Aniversários Infantis
      `,
      icon: Calendar,
      images: [
        "https://evydencia.com.br/imgs/ANIVERSARIO.png",
        "https://evydencia.com.br/imgs/BATIZADOS.png",
        "https://evydencia.com.br/imgs/REVELACAO.png"
      ]
    }
  ];

  const benefits = [
    {
      title: "Agendamento flexível",
      description: "Horários disponíveis inclusive aos finais de semana.",
      icon: Clock
    },
    {
      title: "Estúdio climatizado",
      description: "Ambiente confortável para você e sua família.",
      icon: ThumbsUp
    },
    {
      title: "Higiene e segurança",
      description: "Espaço higienizado diariamente para sua tranquilidade.",
      icon: ShieldCheck
    },
    {
      title: "Experiência personalizada",
      description: "Cada sessão é única e pensada especialmente para você.",
      icon: HeartHandshake
    },
    {
      title: "Mais de 12 anos de história",
      description: "Experiência e profissionalismo para registrar seus momentos.",
      icon: Award
    }
  ];

  // Stats for animated counters
  const stats = [
    { value: 12, label: "Anos de experiência", suffix: "+" },
    { value: 5000, label: "Clientes satisfeitos", suffix: "+" },
    { value: 15000, label: "Ensaios realizados", suffix: "+" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20" data-aos="fade-up">
        <BackgroundSlideshow />
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
            <span ref={typedElement}></span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "300ms" }}>
            Momentos especiais, registrados com amor e sensibilidade.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-evydencia-gold hover:bg-opacity-90 text-black font-bold text-lg animate-fade-in opacity-0 hover:scale-105 transform transition-all shadow-lg"
              style={{ animationDelay: "600ms" }}
              onClick={() => window.location.href="#contato"}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agende seu Ensaio!
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white animate-fade-in opacity-0 backdrop-blur-sm"
              style={{ animationDelay: "800ms" }}
              onClick={() => window.location.href="#servicos"}
            >
              <Camera className="w-5 h-5 mr-2" />
              Conheça Nosso Estúdio
            </Button>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-white section-padding" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <RevealOnScroll>
                <div className="flex gap-4">
                  <div className="w-1/2 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://evydencia.com.br/imgs/anderson.jpg" 
                      alt="Anderson, fotógrafo do Estúdio Evydência" 
                      className="w-full h-auto aspect-[3/4] object-cover"
                    />
                  </div>
                  <div className="w-1/2 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://evydencia.com.br/imgs/elaine.jpg" 
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
                  Há mais de <AnimatedCounter end={12} /> anos, temos o privilégio de registrar histórias únicas e emocionantes. Cada ensaio é tratado com dedicação e sensibilidade, buscando capturar não apenas imagens, mas sentimentos genuínos.
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
      
      <section id="stats" className="bg-evydencia-gold py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <RevealOnScroll key={index} delay={index * 200} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter 
                    end={stat.value}
                    suffix={stat.suffix}
                    delay={index * 300}
                  />
                </div>
                <p className="text-lg text-white/80">{stat.label}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      <section id="servicos" className="bg-evydencia-beige section-padding" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground">Conheça nossas especialidades em fotografia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                images={service.images}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section id="galeria" className="bg-white section-padding" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Galeria</h2>
            <p className="text-lg text-muted-foreground">Alguns dos nossos trabalhos mais recentes</p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all",
                  selectedCategory === category.id
                    ? "bg-evydencia-gold text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <GalleryImage
                key={index}
                images={[image.src]}
                title={image.title}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section id="diferenciais" className="bg-evydencia-beige section-padding" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-muted-foreground">O que nos torna únicos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <IconFeature
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section id="contato" className="bg-white section-padding" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground">Estamos prontos para registrar seus momentos especiais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <a
                  href="https://wa.me/5548996425287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-evydencia-gold hover:bg-opacity-90 text-black font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all mb-8 p-4 text-center animate-pulse"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Agende seu Ensaio
                  </span>
                </a>
                <h3 className="text-2xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-evydencia-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    (48) 9642-5287
                  </p>
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-evydencia-gold"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    contato@evydencia.com.br
                  </p>
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-evydencia-gold"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    R. Mauri Afonso da Silva, 892 - Universitário, Tijucas - SC
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a 
                      href="https://maps.app.goo.gl/8LWCyHni7TvovNAb9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg px-4 py-2 text-sm font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
                      </svg>
                      Google Maps
                    </a>
                    <a 
                      href="https://www.waze.com/ul?ll=-27.2417%2C-48.6467&navigate=yes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg px-4 py-2 text-sm font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 7.8c23.3 0 42.2 18.9 42.2 42.2S73.3 92.2 50 92.2 7.8 73.3 7.8 50 26.7 7.8 50 7.8zm0 8.4c-18.6 0-33.8 15.2-33.8 33.8S31.4 83.8 50 83.8 83.8 68.6 83.8 50 68.6 16.2 50 16.2zm0 11.6c12.2 0 22.2 10 22.2 22.2S62.2 72.2 50 72.2 27.8 62.2 27.8 50 37.8 27.8 50 27.8z"/>
                      </svg>
                      Waze
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.5123456789!2d-48.6467!3d-27.2417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8abe77ad9d3db%3A0x6c2f30b48e88088f!2sEvyd%C3%AAncia!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Estúdio Evydência"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-evydencia-gold text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center md:text-left">
              <img 
                src="https://evydencia.com.br/img/logo-branca.png" 
                alt="Estúdio Evydência" 
                className="h-16 mx-auto md:mx-0 mb-4"
              />
              <p className="text-sm opacity-90">
                Eternizando momentos especiais com amor e dedicação desde 2011.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
              <p className="text-sm opacity-90">Segunda a Sexta: 13h às 18h</p>
              <p className="text-sm opacity-90">Sábados: 08:30h às 11:00h</p>
              <p className="text-xs mt-2 opacity-75">
                *Horários especiais disponíveis com agendamento
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Endereço</h3>
              <p className="text-sm opacity-90 mb-4">
                R. Mauri Afonso da Silva, 892 - Universitário<br />
                Tijucas - SC
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a 
                  href="https://maps.app.goo.gl/8LWCyHni7TvovNAb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
                  </svg>
                  Google Maps
                </a>
                <a 
                  href="https://www.waze.com/ul?ll=-27.2417%2C-48.6467&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 7.8c23.3 0 42.2 18.9 42.2 42.2S73.3 92.2 50 92.2 7.8 73.3 7.8 50 26.7 7.8 50 7.8zm0 8.4c-18.6 0-33.8 15.2-33.8 33.8S31.4 83.8 50 83.8 83.8 68.6 83.8 50 68.6 16.2 50 16.2zm0 11.6c12.2 0 22.2 10 22.2 22.2S62.2 72.2 50 72.2 27.8 62.2 27.8 50 37.8 27.8 50 27.8z"/>
                  </svg>
                  Waze
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5548996425287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center md:justify-start hover:text-white/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  (48) 9642-5287
                </a>
                <a
                  href="mailto:contato@evydencia.com.br"
                  className="flex items-center gap-2 justify-center md:justify-start hover:text-white/80 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  contato@evydencia.com.br
                </a>
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                  <a
                    href="https://www.instagram.com/estudioevydencia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61573374213482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} Estúdio Evydência. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
