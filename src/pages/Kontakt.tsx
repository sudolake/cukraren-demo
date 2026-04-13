import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const Kontakt = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-brand-dark">Kontaktujte nás</h1>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Máte otázku, chcete si objednať tortu alebo zákusky na oslavu? Sme tu pre vás!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-brand-accent/10">
              <h2 className="text-2xl font-bold mb-6 font-sans text-brand-dark">Kontaktné údaje</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">Telefón</p>
                    <div className="flex flex-col">
                      <a href="tel:0915493127" className="text-gray-600 hover:text-brand-accent transition-colors">0915 493 127</a>
                      <a href="tel:0944450336" className="text-gray-600 hover:text-brand-accent transition-colors">0944 450 336</a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">E-mail</p>
                    <div className="flex flex-col">
                      <a href="mailto:vierahaladova@gmail.com" className="text-gray-600 hover:text-brand-accent transition-colors">vierahaladova@gmail.com</a>
                      <a href="mailto:haladapeter81@gmail.com" className="text-gray-600 hover:text-brand-accent transition-colors">haladapeter81@gmail.com</a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">Adresa</p>
                    <p className="text-gray-600">Študentská 2, 917 01 Trnava</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center text-brand-accent shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">Otváracie hodiny</p>
                    <p className="text-gray-600">Pondelok - Nedeľa: 08:00 - 19:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-[32px] shadow-sm border border-brand-accent/10 h-[300px] overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.858296238615!2d17.57508007688243!3d48.37566207125744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476ca00b4b2161b1%3A0x6b77207e323420d4!2s%C5%A0tudentsk%C3%A1%202%2C%20917%2001%20Trnava!5e0!3m2!1sen!2ssk!4v1710587234567!5m2!1sen!2ssk" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '24px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Lokácia"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-brand-accent/10 h-full">
              <h2 className="text-2xl font-bold mb-6 font-sans text-brand-dark">Napíšte nám</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Meno a priezvisko</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Vaše meno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mailová adresa</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="vas@email.sk"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefónne číslo</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="+421 9XX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Správa</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Ako vám môžeme pomôcť?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-accent text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2"
                >
                  Odoslať správu <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
