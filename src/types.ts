export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: 'fresh' | 'money' | 'graduation' | 'custom';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface DecorationService {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
