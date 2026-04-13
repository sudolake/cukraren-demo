import React from 'react';
import { motion } from 'motion/react';
import { Heart, Send, Calendar, User, Phone, Mail, Cake } from 'lucide-react';

export const TortyNaObjednavku = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans text-brand-dark">Torty na objednávku</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Umelecké diela podľa vašich prianí. Svadobné, narodeninové aj detské torty pečené s láskou a z poctivých surovín.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white sticky top-32">
              <img 
                src="https://i.ibb.co/nMK9dJT5/Snap-Insta-to-537384850-17952769742997789-199120498964381013-n.jpg" 
                alt="Ukážka našej torty" 
                className="w-full h-[700px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-12">
                <div className="text-white">
                  <p className="text-2xl font-bold font-sans mb-2">Každá torta je originál</p>
                  <p className="opacity-90">Vytvoríme pre vás sladké umelecké dielo presne podľa vašich predstáv.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-pink rounded-full -z-10 blur-2xl opacity-60" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-accent/20 rounded-full -z-10 blur-2xl opacity-60" />
          </motion.div>

          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-brand-accent/5 order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold mb-8 font-sans text-brand-dark flex items-center gap-3">
              <Heart className="text-brand-accent" /> Nezáväzný dopyt
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark flex items-center gap-2">
                    <User size={16} className="text-brand-accent" /> Meno a priezvisko
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Vaše meno"
                    className="w-full px-6 py-4 rounded-2xl bg-brand-pink/30 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark flex items-center gap-2">
                    <Phone size={16} className="text-brand-accent" /> Telefónne číslo
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="09xx xxx xxx"
                    className="w-full px-6 py-4 rounded-2xl bg-brand-pink/30 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark flex items-center gap-2">
                  <Mail size={16} className="text-brand-accent" /> E-mail
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="vas@email.sk"
                  className="w-full px-6 py-4 rounded-2xl bg-brand-pink/30 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark flex items-center gap-2">
                  <Calendar size={16} className="text-brand-accent" /> Dátum odberu
                </label>
                <input 
                  type="date" 
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-brand-pink/30 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark">Poznámka / Špeciálne požiadavky</label>
                <textarea 
                  rows={4}
                  placeholder="Napíšte nám vašu predstavu (príchuť, zdobenie, počet porcií...)"
                  className="w-full px-6 py-4 rounded-2xl bg-brand-pink/30 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-accent text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-3 group"
              >
                Odoslať dopyt <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-gray-500 text-sm">
                Odoslaním dopytu vás budeme kontaktovať pre upresnenie detailov a ceny.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
