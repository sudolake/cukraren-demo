import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Send, Calendar, User, Phone, Mail, Cake } from 'lucide-react';
import { ImageModal } from '../components/ImageModal';

export const TortyNaObjednavku = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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
            
            <form action="https://formspree.io/f/xaqvjwpe" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark flex items-center gap-2">
                    <User size={16} className="text-brand-accent" /> Meno a priezvisko
                  </label>
                  <input 
                    type="text" 
                    name="meno"
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
                    name="telefon"
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
                  name="email"
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
                  name="datum_odberu"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-brand-pink/30 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-dark">Poznámka / Špeciálne požiadavky</label>
                <textarea 
                  name="sprava"
                  rows={4}
                  placeholder="Napíšte nám vašu predstavu (príchuť, zdobenie, počet porcií...)"
                  className="w-full px-6 py-4 rounded-2xl bg-brand-pink/30 border-transparent focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none resize-none"
                  required
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

        {/* Gallery Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-sans text-brand-dark">Galéria našich prác</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'https://i.ibb.co/Zz5kxFqq/Snap-Insta-to-472207914-17928577142997789-4714263983570736864-n.jpg',
              'https://i.ibb.co/5hhmjtKR/Snap-Insta-to-559043795-17958171857997789-4394223981967919970-n.jpg',
              'https://i.ibb.co/0RN3NyNZ/Snap-Insta-to-548608281-17955725921997789-4767783135927049131-n.jpg',
              'https://i.ibb.co/tPvhZS8V/Snap-Insta-to-616203435-17968823816997789-2506802041349942170-n.jpg',
              'https://i.ibb.co/9HmT37wM/Snap-Insta-to-626281068-17971491062997789-5608837694817235425-n.jpg'
            ].map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-md cursor-zoom-in group"
                onClick={() => setSelectedImage({ src: url, alt: `Torta na objednávku ${index + 1}` })}
              >
                <img 
                  src={url} 
                  alt={`Torta na objednávku ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </div>
  );
};
