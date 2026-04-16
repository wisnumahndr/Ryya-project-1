import { CheckCircle2, FastForward, Heart, Sliders } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Sliders className="text-primary" size={32} />,
      title: 'Custom Design',
      description: 'Request desain, jenis bunga, dan warna sesuka hatimu. Personal banget!',
    },
    {
      icon: <CheckCircle2 className="text-primary" size={32} />,
      title: 'Hasil Rapi & Aesthetic',
      description: 'Dikerjakan dengan penuh ketelitian untuk menjamin kepuasan visual kamu.',
    },
    {
      icon: <Heart className="text-primary" size={32} />,
      title: 'Bisa Request Budget',
      description: 'Punya budget terbatas? Tenang, kami bisa sesuaikan desain dengan kantongmu.',
    },
    {
      icon: <FastForward className="text-primary" size={32} />,
      title: 'Fast Response',
      description: 'Admin kami standby untuk respon cepat setiap pesanan atau pertanyaan kamu.',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border border-neutral-100 rounded-[3rem] p-12 md:p-20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-romantic/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-bold mb-8 leading-tight">
                  Mengapa Harus Memilih <br />
                  <span className="text-primary">Ryya Project?</span>
                </h2>
                <div className="space-y-8">
                  {benefits.map((b) => (
                    <div key={b.title} className="flex gap-6">
                      <div className="mt-1 p-3 bg-primary/5 rounded-2xl shrink-0">
                        {b.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                        <p className="text-neutral-600 leading-relaxed">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl scale-95 hover:scale-100">
                    <img 
                      src="https://i.imgur.com/zVxAHF5.jpeg" 
                      alt="Floral Artist at Work" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-6 -right-6 bg-accent text-white py-6 px-10 rounded-3xl shadow-xl font-serif text-center">
                   <div className="text-3xl font-bold italic">99%</div>
                   <div className="text-xs font-sans font-bold uppercase tracking-widest">Customer Satisfaction</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
