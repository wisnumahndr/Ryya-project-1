import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function Hero() {
  const waLink = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMsg)}`;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-romantic/30 -skew-x-6 translate-x-12 z-0 hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl z-0" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            ✨ Buket & Dekorasi Aesthetic
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 leading-[1.1] mb-6">
            Buket Cantik & <br />
            <span className="text-primary italic">Dekorasi Aesthetic</span> <br />
            untuk Momen Spesial
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl leading-relaxed">
            Custom desain sesuai keinginan, hasil rapi & premium. Ryya Project hadir untuk mewujudkan keindahan di setiap perayaan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
            >
              <MessageCircle size={22} />
              Order via WhatsApp Sekarang
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#catalog"
              className="w-full sm:w-auto text-primary font-bold px-8 py-4 border-2 border-primary/20 hover:border-primary rounded-full text-lg transition-all text-center"
            >
              Lihat Katalog
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-2xl font-bold text-neutral-900">100+</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider font-semibold">Pelanggan Puas</div>
            </div>
            <div className="w-px h-10 bg-neutral-200" />
            <div>
              <div className="text-2xl font-bold text-neutral-900">500+</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider font-semibold">Produk Terjual</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative lg:h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-20">
            <img 
              src="https://i.imgur.com/q3iMnf6.jpeg" 
              alt="Beautiful Flower Bouquet Ryya Project"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 lg:right-12 w-32 h-32 bg-white p-2 rounded-2xl shadow-xl z-30 animate-bounce transition-all">
             <img 
                src="https://i.imgur.com/gdecvoJ.jpeg" 
                alt="Mini decoration" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
             />
          </div>
          <div className="absolute bottom-12 -left-6 bg-white py-3 px-6 rounded-2xl shadow-xl z-30 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              ⭐
            </div>
            <div>
              <div className="text-sm font-bold">Terpercaya</div>
              <div className="text-xs text-neutral-500">Banyak Review Positif</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
