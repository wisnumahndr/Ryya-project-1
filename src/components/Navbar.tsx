import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Katalog', href: '#catalog' },
    { name: 'Dekorasi', href: '#decoration' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];

  const waLink = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMsg)}`;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-serif text-xl font-bold transition-transform group-hover:rotate-12">
            R
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-primary">
            Ryya Project
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Order Sekarang
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-neutral-800 py-2 border-b border-neutral-50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
