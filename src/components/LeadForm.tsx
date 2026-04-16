import { useState, FormEvent } from 'react';
import { Send, CheckCircle, Sparkles, User, MessageCircle, Calendar, ClipboardList } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    type: 'buket',
    date: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const msg = `Halo Ryya Project, saya ${formData.name}. Saya ingin memesan ${formData.type} untuk tanggal ${formData.date}.`;
    const waLink = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
    
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 1500);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-romantic/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-cream rounded-[4rem] overflow-hidden shadow-2xl border border-white flex flex-col lg:grid lg:grid-cols-12 min-h-[700px]">
          
          {/* Left Side: Visual/Branding */}
          <div className="lg:col-span-5 relative overflow-hidden bg-primary min-h-[300px] lg:min-h-full">
            <img 
              src="https://i.imgur.com/gdecvoJ.jpeg" 
              alt="Decorative flowers" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-transparent p-12 flex flex-col justify-end text-white">
              <div className="mb-6 bg-white/20 backdrop-blur-md w-fit p-3 rounded-2xl">
                <Sparkles className="text-accent" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 italic font-serif leading-tight">
                Mulai Rencana <br />Bahagiamu Hari Ini
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-sm">
                Isi data pesananmu, dan biarkan kami membantu mewujudkan momen tak terlupakan dengan sentuhan bunga yang sempurna.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center bg-white/50 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold text-neutral-900 mb-2">Formulir Pesanan</h3>
                    <div className="h-1.5 w-20 bg-primary rounded-full" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Name Input */}
                      <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-bold text-neutral-600 ml-1">
                          <User size={16} className="text-primary" /> Nama Lengkap
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="Contoh: Siti Aminah"
                          className="w-full px-6 py-4 bg-cream rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all placeholder:text-neutral-400"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>

                      {/* WA Input */}
                      <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-bold text-neutral-600 ml-1">
                          <MessageCircle size={16} className="text-primary" /> Nomor WhatsApp
                        </label>
                        <input 
                          required
                          type="tel" 
                          placeholder="0812 3456 789"
                          className="w-full px-6 py-4 bg-cream rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all placeholder:text-neutral-400"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Type Select */}
                      <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-bold text-neutral-600 ml-1">
                          <ClipboardList size={16} className="text-primary" /> Jenis Pesanan
                        </label>
                        <div className="relative">
                          <select 
                            className="w-full px-6 py-4 bg-cream rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                            value={formData.type}
                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                          >
                            <option value="buket">Buket Bunga (Semua Jenis)</option>
                            <option value="dekorasi">Dekorasi Event / Lamaran</option>
                            <option value="kado">Giftset / Hampers</option>
                            <option value="lainnya">Lainnya (Custom)</option>
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                            <Sparkles size={16} />
                          </div>
                        </div>
                      </div>

                      {/* Date Input */}
                      <div className="space-y-3">
                        <label className="flex items-center gap-2 text-sm font-bold text-neutral-600 ml-1">
                          <Calendar size={16} className="text-primary" /> Tanggal Kebutuhan
                        </label>
                        <input 
                          required
                          type="date" 
                          className="w-full px-6 py-4 bg-cream rounded-2xl border-2 border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-neutral-900 text-white py-5 rounded-[2rem] font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-primary transition-all flex items-center justify-center gap-4 group mt-4 overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center gap-4">
                        Kirim & Order via WhatsApp <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform" />
                    </button>
                    
                    <p className="text-center text-xs text-neutral-400 font-medium">
                      *Tim admin kami akan membalas segera setelah pesan diterima.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="absolute inset-0 bg-green-100 rounded-full"
                    />
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: 'spring' }}
                      className="absolute inset-0 flex items-center justify-center text-green-500"
                    >
                      <CheckCircle size={64} strokeWidth={2.5} />
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-neutral-900">Pesanan Diterima!</h3>
                  <p className="text-neutral-500 text-lg mb-8 max-w-sm mx-auto">
                    Sedang mengalihkan ke WhatsApp Anda secara otomatis...
                  </p>
                  <div className="flex justify-center gap-2">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1] }} 
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-2 h-2 bg-primary rounded-full" 
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1] }} 
                      transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                      className="w-2 h-2 bg-primary rounded-full" 
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1] }} 
                      transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                      className="w-2 h-2 bg-primary rounded-full" 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
