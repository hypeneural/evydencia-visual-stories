
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CalendarPlus } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 
        'bg-white/80 backdrop-blur-md shadow-md py-2' : 
        'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img 
              src="https://evydencia.com.br/img/logo.png" 
              alt="Estúdio Evydência" 
              className={cn(
                "h-12 transition-all duration-300",
                isScrolled ? "" : "filter drop-shadow-md"
              )}
            />
          </a>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              onClick={() => window.location.href="#contato"}
              className="bg-evydencia-gold hover:bg-opacity-90 text-black font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
              size="sm"
            >
              <CalendarPlus className="mr-1 h-4 w-4" />
              Agende seu Ensaio
            </Button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 z-50"
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 ${isScrolled ? 'bg-foreground' : 'bg-white'} mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 ${isScrolled ? 'bg-foreground' : 'bg-white'} mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 ${isScrolled ? 'bg-foreground' : 'bg-white'} transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>

          <nav className={cn(
            'fixed md:relative top-[56px] md:top-0 left-0 md:left-auto w-full md:w-auto bg-white/90 md:bg-transparent backdrop-blur-md shadow-md md:shadow-none transition-all duration-300',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'
          )}>
            <ul className="flex flex-col md:flex-row items-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={cn(
                      'block py-3 px-4 md:px-5 hover:text-evydencia-gold transition-colors',
                      isScrolled ? 
                        'text-foreground' : 
                        'md:text-white md:drop-shadow-sm'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="md:hidden px-4 py-3">
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href="#contato";
                  }}
                  className="bg-evydencia-gold hover:bg-opacity-90 text-black font-semibold rounded-full shadow-md w-full"
                >
                  <CalendarPlus className="mr-2 h-4 w-4" />
                  Agende seu Ensaio
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
