import { BUSINESS_INFO } from '../constants';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-6 italic">Ryya Project</h3>
            <p className="text-neutral-400 max-w-sm mb-8 leading-relaxed">
              Spesialis buket bunga custom dan dekorasi event aesthetic. Kami mengubah setiap momen Anda menjadi kenangan yang tak terlupakan melalui keindahan visual.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Navigasi</h4>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#catalog" className="hover:text-white transition-colors">Katalog Buket</a></li>
              <li><a href="#decoration" className="hover:text-white transition-colors">Dekorasi Event</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Layanan</h4>
            <ul className="space-y-4 text-neutral-400">
              <li>Buket Bunga Segar</li>
              <li>Buket Uang & Snack</li>
              <li>Dekorasi Wedding</li>
              <li>Dekorasi Engagement</li>
              <li>Custom Giftset</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-sm">
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-8 text-neutral-500 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
