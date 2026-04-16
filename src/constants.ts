import { Product, Testimonial, DecorationService, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: 'Ryya Project',
  tagline: 'Buket & Dekorasi Custom yang Elegan, Unik, dan Berkesan',
  phone: '+62895322150700', // Updated from typical listing
  whatsappMsg: 'Halo Ryya Project, saya ingin memesan...',
  address: 'Jalan Raya taman wisma asri, 1. RT 02, Jl. Taman Wisma Asri, RT.002/RW.032, Tlk. Pucung, Kec. Bekasi Utara, Kota Bks.',
  mapsLink: 'https://www.google.com/maps/place/Buket+dan+dekorasi+ryya+project/@-6.2212082,107.0247194,20z/data=!4m8!3m7!1s0x2e698f2c08f60705:0x88a90da3b2871f05!8m2!3d-6.2212082!4d107.0247194!9m1!1b1!16s%2Fg%2F11t5gvy75b',
  instagram: '@ryyaproject_',
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Buket Bunga Kertas Premium',
    price: 'Rp 85.000+',
    image: 'https://i.imgur.com/BpiqYY1.jpeg',
    category: 'fresh',
  },
  {
    id: '2',
    name: 'Buket Uang (Money Bouquet)',
    price: 'Jasa mulai Rp 50.000',
    image: 'https://i.imgur.com/bNwa1Sg.jpeg',
    category: 'money',
  },
  {
    id: '3',
    name: 'Buket Snack & Wisuda',
    price: 'Rp 65.000+',
    image: 'https://i.imgur.com/yNXqyRT.jpeg',
    category: 'graduation',
  },
  {
    id: '4',
    name: 'Buket Balon & Boneka',
    price: 'Rp 120.000',
    image: 'https://i.imgur.com/RnQ77mL.jpeg',
    category: 'custom',
  },
];

export const DECORATIONS: DecorationService[] = [
  {
    id: 'd1',
    title: 'Dekorasi Backdrop Lamaran',
    description: 'Bikin momen lamaranmu makin romantis dengan dekorasi floral yang manis.',
    image: 'https://i.imgur.com/gjiwssL.jpeg',
  },
  {
    id: 'd2',
    title: 'Dekorasi Aqiqah & Khitan',
    description: 'Syukuran buah hati jadi lebih aesthetic dengan dekorasi warna-warni.',
    image: 'https://i.imgur.com/gg5bYBb.jpeg',
  },
  {
    id: 'd3',
    title: 'Dekorasi Table Setting',
    description: 'Makan malam romantis atau arisan jadi lebih berkelas dengan sentuhan kami.',
    image: 'https://i.imgur.com/kdwdyfe.jpeg',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Siti Aminah',
    text: 'Buketnya cantik banget, sesuai request dan pengerjaannya cepat. Puas banget!',
    rating: 5,
    date: '2 minggu yang lalu',
  },
  {
    id: 't2',
    name: 'Budi Santoso',
    text: 'Dekorasinya rapi dan estetik banget untuk acara lamaran saya. Terima kasih Ryya Project!',
    rating: 5,
    date: '1 bulan yang lalu',
  },
  {
    id: 't3',
    name: 'Lestari Putri',
    text: 'Pelayanan ramah, respon cepat, dan hasilnya melebihi ekspektasi. Recommended!',
    rating: 5,
    date: '3 hari yang lalu',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Berapa lama pengerjaan buket?',
    answer: 'Pengerjaan buket biasanya memakan waktu 1-2 hari tergantung kerumitan desain. Untuk pesanan mendadak (sameday), silakan hubungi kami terlebih dahulu.',
  },
  {
    question: 'Apakah bisa custom budget?',
    answer: 'Tentu saja! Kami sangat fleksibel dan bisa menyesuaikan desain buket atau dekorasi sesuai dengan budget yang Anda miliki.',
  },
  {
    question: 'Apakah ada jasa pengiriman?',
    answer: 'Ya, kami menyediakan jasa pengiriman untuk area sekitar. Biaya pengiriman akan disesuaikan dengan jarak lokasi.',
  },
];
