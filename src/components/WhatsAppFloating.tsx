import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { motion } from 'motion/react';

export default function WhatsAppFloating() {
  const waLink = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMsg)}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute right-full mr-3 bg-white text-neutral-900 px-4 py-2 rounded-xl border border-neutral-100 shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap font-bold text-sm">
        Ada pertanyaan? Chat yuk! 👋
      </div>
      <MessageCircle size={32} />
    </motion.a>
  );
}
