import { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../constants';
import { Plus, Minus, HelpCircle, MessageCircle, Sparkles, Flower2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const waLink = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Halo Ryya Project, saya punya pertanyaan lain...')}`;

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 hidden lg:block">
        <Flower2 size={400} className="text-primary rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Header & CTA */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <HelpCircle size={14} /> Knowledge Center
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 leading-tight">
              Punya Pertanyaan <br />
              <span className="text-primary italic font-serif">Seputar Layanan?</span>
            </h2>
            <p className="text-neutral-500 text-lg mb-10 leading-relaxed">
              Kami telah merangkum beberapa hal yang paling sering ditanyakan oleh pelanggan Ryya Project untuk membantu Anda.
            </p>
            
            <div className="bg-cream p-8 rounded-[2rem] border border-romantic/30 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                  <MessageCircle size={24} />
                </div>
                <h4 className="font-bold text-xl">Masih Bingung?</h4>
              </div>
              <p className="text-neutral-600 mb-6 text-sm">
                Jangan ragu untuk langsung bertanya pada admin kami via WhatsApp. Kami siap melayani konsultasi Anda.
              </p>
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-neutral-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-lg"
              >
                Chat Admin Sekarang <Sparkles size={16} />
              </a>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`overflow-hidden rounded-[2rem] transition-all duration-500 border-2 ${
                  openIndex === index 
                    ? 'border-primary bg-white shadow-2xl scale-[1.02]' 
                    : 'border-transparent bg-cream hover:bg-white hover:border-primary/20'
                }`}
              >
                <button 
                  className="w-full px-8 py-7 flex items-center justify-between font-bold text-left group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`text-lg md:text-xl transition-colors ${
                    openIndex === index ? 'text-primary' : 'text-neutral-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    openIndex === index ? 'bg-primary text-white rotate-0' : 'bg-white text-neutral-400 group-hover:text-primary'
                  }`}>
                    {openIndex === index ? <Plus size={20} className="rotate-45" /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0">
                        <div className="h-px w-full bg-neutral-100 mb-6" />
                        <p className="text-neutral-600 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
