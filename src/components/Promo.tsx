import { BUSINESS_INFO } from '../constants';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Promo() {
  const waLink = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Halo Ryya Project, saya ingin klaim promo Paket Bundling...')}`;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-primary rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          
          <div className="relative z-10 text-white text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} className="text-accent" /> Special Bundle Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic font-serif">Promo Wisuda & Wedding</h2>
            <p className="text-white/80 text-lg max-w-xl mb-0 leading-relaxed">
              Dapatkan diskon potongan hingga <span className="text-accent font-bold">15%</span> untuk paket bundling Buket + Dekorasi. Berlaku bulan ini saja!
            </p>
          </div>

          <div className="relative z-10 shrink-0">
             <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:bg-cream hover:scale-105 transition-all flex items-center gap-3 group"
             >
               Ambil Promo Sekarang
               <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
             </a>
             <p className="text-white/60 text-center mt-4 text-sm font-medium">*Syarat & ketentuan berlaku</p>
          </div>
        </div>
      </div>
    </section>
  );
}
