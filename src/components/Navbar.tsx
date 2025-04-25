
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-playfair font-bold text-evydencia-gold">
            Evydência
          </a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-foreground mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>

          <nav className={cn(
            'fixed md:relative top-[56px] md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'
          )}>
            <ul className="flex flex-col md:flex-row items-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={cn(
                      'block py-3 px-4 md:px-5 text-foreground hover:text-evydencia-gold transition-colors',
                      isScrolled ? 'text-foreground' : 'md:text-white'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
