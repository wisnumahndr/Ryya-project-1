import { PRODUCTS, BUSINESS_INFO } from '../constants';
import { MessageCircle, Sparkles, Wand2, Paintbrush } from 'lucide-react';
import { motion } from 'motion/react';

export default function Catalog() {
  const waLink = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Halo Ryya Project, saya ingin konsultasi buket custom...')}`;

  return (
    <section id="catalog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
             Exclusive Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">Katalog Buket Unggulan</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto italic text-lg lg:text-xl leading-relaxed">
            "Pilih buket favoritmu atau custom desain sendiri sesuai keinginan"
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center bg-cream/30 p-4 rounded-[2.5rem] transition-all hover:bg-white hover:shadow-2xl border border-transparent hover:border-romantic/50"
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-1 px-2">{product.name}</h3>
              <p className="text-primary font-bold text-lg mb-6 leading-none">{product.price}</p>
              
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-neutral-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-md group-hover:shadow-lg active:scale-95"
              >
                <MessageCircle size={18} />
                Order via WA
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* REDESIGNED CUSTOM ORDER BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-[4rem] blur-3xl -z-10" />
          
          <div className="relative bg-neutral-900 rounded-[3rem] p-8 md:p-0 md:h-[220px] overflow-hidden flex flex-col md:flex-row items-center border border-white/10 shadow-3xl">
            {/* Background Image Accent */}
            <div className="absolute inset-0 opacity-20 hidden md:block">
              <img 
                src="https://i.imgur.com/zVxAHF5.jpeg" 
                alt="Background" 
                className="w-full h-full object-cover grayscale brightness-50"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Icon Graphic */}
            <div className="hidden lg:flex w-1/4 h-full items-center justify-center relative">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                <Sparkles className="text-accent" size={48} />
              </div>
              {/* Decorative sparkles */}
              <div className="absolute top-10 right-10 animate-pulse"><Sparkles className="text-primary" size={20} /></div>
              <div className="absolute bottom-10 left-10 animate-pulse delay-75"><Sparkles className="text-primary" size={16} /></div>
            </div>

            {/* Content Container */}
            <div className="flex-1 md:pr-8 md:pl-0 lg:pl-4 text-center md:text-left relative z-10">
               <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
                 Ingin Buket Custom? <Paintbrush className="text-accent hidden sm:block" size={28} />
               </h4>
               <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
                 Punya ide sendiri? Konsultasikan desain, pilihan bunga, dan budget Anda sekarang. Kami siap mewujudkan buket impian Anda.
               </p>
            </div>

            {/* Action Area */}
            <div className="w-full md:w-auto p-4 md:p-12 relative z-10 md:bg-white/5 md:backdrop-blur-xl h-full flex items-center justify-center">
               <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-white hover:text-neutral-900 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
               >
                  <MessageCircle size={24} />
                  Chat Custom Order
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
