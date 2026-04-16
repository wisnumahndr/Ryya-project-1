import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Apa Kata Mereka?</h2>
          <p className="text-neutral-500 font-medium">Testimoni nyata dari pelanggan Ryya Project</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm relative group hover:shadow-xl transition-all duration-300">
              <Quote size={40} className="absolute top-10 right-10 text-primary/5 group-hover:text-primary/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>

              <p className="text-neutral-700 leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-romantic rounded-full flex items-center justify-center font-bold text-white uppercase">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">{t.name}</h4>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
