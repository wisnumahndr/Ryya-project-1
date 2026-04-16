/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import DecorationServices from './components/DecorationServices';
import Benefits from './components/Benefits';
import Promo from './components/Promo';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Catalog />
      <DecorationServices />
      <Promo />
      <Benefits />
      <Testimonials />
      <LeadForm />
      <Location />
      <FAQ />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
