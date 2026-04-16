import { DECORATIONS, BUSINESS_INFO } from '../constants';
import { Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function DecorationServices() {
  const waLink = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Halo Ryya Project, saya tertarik dengan jasa dekorasi...')}`;

  return (
    <section id="decoration" className="py-24 bg-cream relative overflow-hidden">
      {/* Texture bg */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#5A5A40 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 leading-tight">
              Layanan Dekorasi Event <br />
              <span className="text-accent italic">Eksklusif & Aesthetic</span>
            </h2>
            <p className="text-neutral-600 text-lg">
              Wujudkan momen spesialmu jadi lebih berkesan dengan set dekorasi yang rapi, premium, dan pastinya sangat aesthetic untuk difoto.
            </p>
          </div>
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary hover:text-neutral-900 hover:border-neutral-900 transition-all pb-1"
          >
            Konsultasi Dekorasi <Sparkles size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DECORATIONS.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col h-full"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-auto">
                    <a 
                      href={waLink}
                      className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                    >
                      Bahas Rencana <MessageCircle size={18} />
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
