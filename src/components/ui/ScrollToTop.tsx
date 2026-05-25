'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora a rolagem da página
  useEffect(() => {
    const toggleVisibility = () => {
      // Se passou de 400px de rolagem, mostra o botão, senão esconde
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          /* Classes fixed bottom-6 right-6 garantem o posicionamento lateral */
          className="fixed bottom-6 right-6 z-50 p-3 rounded-xl border border-border/50 bg-surface/20 text-neutral-400 hover:text-white hover:bg-surface/40 hover:border-border backdrop-blur-md transition-colors shadow-xl cursor-pointer group"
          aria-label="Voltar ao topo"
        >
          {/* Micro-interação: a setinha sobe levemente no hover */}
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}