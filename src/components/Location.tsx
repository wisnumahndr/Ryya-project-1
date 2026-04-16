import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Instagram, Send } from 'lucide-react';

export default function Location() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
           <div>
              <h2 className="text-4xl font-bold mb-8">Lokasi & Kontak</h2>
              <p className="text-neutral-600 mb-12 text-lg">
                Kunjungi workshop kami atau konsultasikan pesanan Anda kapan saja. Kami melayani area pengiriman luas.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="p-4 bg-primary/5 rounded-2xl text-primary shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Alamat</h4>
                    <p className="text-neutral-700">{BUSINESS_INFO.address}</p>
                    <a 
                      href={BUSINESS_INFO.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-sm mt-2 inline-block hover:underline"
                    >
                      Lihat di Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="p-4 bg-primary/5 rounded-2xl text-primary shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">WhatsApp</h4>
                    <p className="text-neutral-700">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="p-4 bg-primary/5 rounded-2xl text-primary shrink-0">
                    <Instagram size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Instagram</h4>
                    <p className="text-neutral-700">{BUSINESS_INFO.instagram}</p>
                  </div>
                </div>
              </div>
           </div>

           <div className="h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-cream">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.79024492948525!2d107.02439753491821!3d-6.221208199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f2c08f60705%3A0x88a90da3b2871f05!2sBuket%20dan%20dekorasi%20ryya%20project!5e0!3m2!1sen!2sid!4v1776353006257!5m2!1sen!2sid"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>
        </div>
      </div>
    </section>
  );
}
