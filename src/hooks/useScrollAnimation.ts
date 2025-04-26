
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useScrollAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);
};
