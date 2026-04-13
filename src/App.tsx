/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ChevronRight, Cake, IceCream, Cookie, Coffee, CakeSlice, Sparkles, Heart, Candy, ChevronDown } from 'lucide-react';
import { Zakusky } from './pages/Zakusky';
import { Kontakt } from './pages/Kontakt';
import { TortoveRezy } from './pages/TortoveRezy';
import { SuchePecivo } from './pages/SuchePecivo';
import { TortyNaObjednavku } from './pages/TortyNaObjednavku';
import { Zmrzlina } from './pages/Zmrzlina';

const Navbar = () => {
  const location = useLocation();
  const [isZakuskyOpen, setIsZakuskyOpen] = React.useState(false);
  const [isPecivoOpen, setIsPecivoOpen] = React.useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="https://i.ibb.co/s9yY9jpv/image.png" 
                alt="Cukráreň Študentská Logo" 
                className="h-20 w-auto"
                style={{ clipPath: 'inset(0 1px)' }}
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className={`relative transition-colors font-semibold text-base ${isActive('/') ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`}>
              Domov
              {isActive('/') && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent rounded-full"></span>}
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsZakuskyOpen(true)}
              onMouseLeave={() => setIsZakuskyOpen(false)}
            >
              <button className={`flex items-center gap-1 transition-colors font-semibold text-base ${isActive('/zakusky') ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`}>
                Zákusky <ChevronDown size={14} />
              </button>
              <div className={`absolute top-full left-0 w-48 bg-white shadow-xl rounded-2xl py-4 border border-brand-accent/10 transition-all duration-200 ${isZakuskyOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link to="/zakusky?typ=klasicke" onClick={() => window.scrollTo(0, 0)} className="block px-6 py-2 hover:bg-brand-pink hover:text-brand-accent transition-colors">Klasické</Link>
                <Link to="/zakusky?typ=specialne" onClick={() => window.scrollTo(0, 0)} className="block px-6 py-2 hover:bg-brand-pink hover:text-brand-accent transition-colors">Špeciálne</Link>
              </div>
            </div>

            <Link to="/tortove-rezy" onClick={() => window.scrollTo(0, 0)} className={`relative transition-colors font-semibold text-base ${isActive('/tortove-rezy') ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`}>
              Tortové rezy
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsPecivoOpen(true)}
              onMouseLeave={() => setIsPecivoOpen(false)}
            >
              <button className={`flex items-center gap-1 transition-colors font-semibold text-base ${isActive('/suche-pecivo') ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`}>
                Pečivo <ChevronDown size={14} />
              </button>
              <div className={`absolute top-full left-0 w-48 bg-white shadow-xl rounded-2xl py-4 border border-brand-accent/10 transition-all duration-200 ${isPecivoOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link to="/suche-pecivo?typ=suche" onClick={() => window.scrollTo(0, 0)} className="block px-6 py-2 hover:bg-brand-pink hover:text-brand-accent transition-colors">Suché</Link>
                <Link to="/suche-pecivo?typ=cajove" onClick={() => window.scrollTo(0, 0)} className="block px-6 py-2 hover:bg-brand-pink hover:text-brand-accent transition-colors">Čajové</Link>
              </div>
            </div>

            <Link to="/torty-na-objednavku" onClick={() => window.scrollTo(0, 0)} className={`relative transition-colors font-semibold text-base ${isActive('/torty-na-objednavku') ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`}>
              Torty na objednávku
            </Link>
            <Link to="/zmrzlina" onClick={() => window.scrollTo(0, 0)} className={`relative transition-colors font-semibold text-base ${isActive('/zmrzlina') ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`}>
              Zmrzlina
            </Link>
            <Link to="/kontakt" onClick={() => window.scrollTo(0, 0)} className={`relative transition-colors font-semibold text-base ${isActive('/kontakt') ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`}>
              Kontakt
            </Link>
          </div>

          <div className="flex items-center gap-3 text-brand-dark">
            <div className="bg-brand-accent/10 p-2 rounded-full text-brand-accent hidden lg:block">
              <Phone size={20} />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <a href="tel:0915493127" className="text-sm font-bold hover:text-brand-accent transition-colors">0915 493 127</a>
              <a href="tel:0944450336" className="text-sm font-bold hover:text-brand-accent transition-colors">0944 450 336</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-brand-pink/50 rounded-l-[120px] transform translate-x-1/4" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-10 -z-10 w-64 h-64 bg-yellow-100/40 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          y: [0, -20, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-10 -z-10 w-48 h-48 bg-brand-accent/5 rounded-full blur-2xl" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 lg:col-span-5"
          >
            <h1 className="text-6xl lg:text-8xl font-bold leading-[1.1] mb-8">
              Sladké momenty, <br />
              <span className="text-brand-accent italic relative">
                zahrejú pri srdci.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                  <path d="M5 15Q150 5 295 15" stroke="#eb3b7b" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Spríjemnite si čas na chutnom zákusku a vynikajúcej kávičke. Urobte radosť svojim známym tortou, alebo dezertom. Ponúkame široký výber tradičných zákuskov, špeciálnych na každú príležitosť. Sme tu pre Vás, už viac ako 20 rokov na Študentskej ulici.
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => document.getElementById('ponuka')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold hover:bg-black transition-all shadow-xl hover:shadow-brand-dark/20 flex items-center gap-2 group"
              >
                Naša ponuka <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                to="/kontakt" 
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white border-2 border-brand-dark text-brand-dark px-10 py-5 rounded-2xl font-bold hover:bg-brand-dark hover:text-white transition-all flex items-center gap-2"
              >
                <MapPin size={20} /> Kde nás nájdete
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:col-span-7"
          >
            {/* Playful Image Layout */}
            <div className="relative z-10 grid grid-cols-12 gap-4 items-end">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="col-span-7 rounded-[40px] overflow-hidden shadow-2xl transform -rotate-6 border-8 border-white"
              >
                <img 
                  src="https://i.ibb.co/n8My7mvd/Snap-Insta-to-650769767-17975194352997789-9089106100036431215-n-1.jpg" 
                  alt="Delicious cake" 
                  className="w-full h-[550px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="col-span-5 rounded-[40px] overflow-hidden shadow-2xl transform rotate-6 border-8 border-white mb-16"
              >
                <img 
                  src="https://i.ibb.co/DPtcQGM1/Snap-Insta-to-640840731-17973475229997789-6664834897422142912-n.jpg" 
                  alt="Fresh coffee" 
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] border-2 border-dashed border-brand-accent/20 rounded-full animate-[spin_20s_linear_infinite]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { 
      icon: <CakeSlice />, 
      title: 'Klasické zákusky', 
      desc: 'Tradičné receptúry, ktoré milujete', 
      link: '/zakusky?typ=klasicke',
      image: 'https://i.ibb.co/Rpb7SqKd/Snap-Insta-to-661046807-18105756685920771-2141053651814169104-n.jpg',
      buttonText: 'Prejsť do galérie'
    },
    { 
      icon: <Sparkles />, 
      title: 'Špeciálne zákusky', 
      desc: 'Len z kvalitných surovín, bez umelých prísad', 
      link: '/zakusky?typ=specialne',
      image: 'https://i.ibb.co/GvV9NW2T/Snap-Insta-to-632173404-17971490474997789-1055224887196277838-n.jpg',
      buttonText: 'Galéria špeciálnych'
    },
    { 
      icon: <Cake />, 
      title: 'Tortové rezy', 
      desc: 'Lahodné rezy pre každú príležitosť', 
      link: '/tortove-rezy',
      image: 'https://i.ibb.co/nsfZPyN2/Snap-Insta-to-520310105-17949244613997789-9154730352418679418-n.jpg'
    },
    { 
      icon: <Cookie />, 
      title: 'Suché a čajové pečivo', 
      desc: 'Chrumkavé drobnosti ku káve', 
      link: '/suche-pecivo',
      image: 'https://i.ibb.co/BH7WNVvx/original-3.jpg'
    },
    { 
      icon: <Heart />, 
      title: 'Torty na objednávku', 
      desc: 'Umelecké diela podľa vašich prianí', 
      link: '/torty-na-objednavku',
      image: 'https://i.ibb.co/nMK9dJT5/Snap-Insta-to-537384850-17952769742997789-199120498964381013-n.jpg',
      buttonText: 'Objednať tortu'
    },
  ];

  return (
    <section className="py-20 bg-white" id="ponuka">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-sans text-brand-dark">Naša ponuka</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="rounded-[32px] bg-brand-pink border border-brand-accent/10 text-center group transition-all block overflow-hidden shadow-sm hover:shadow-xl"
            >
              <Link to={cat.link} onClick={() => window.scrollTo(0, 0)} className="block h-full w-full">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="p-8 relative">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-brand-accent shadow-sm group-hover:shadow-md transition-all -mt-14 relative z-10">
                    {React.cloneElement(cat.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-sans text-brand-dark">{cat.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{cat.desc}</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center justify-center bg-brand-accent text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-all">
                      {cat.buttonText || 'Zobraziť viac'} <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img 
              src="https://i.ibb.co/s9yY9jpv/image.png" 
              alt="Cukráreň Študentská Logo" 
              className="h-32 w-auto rounded-2xl shadow-lg"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 leading-relaxed">
              Vaše obľúbené miesto pre sladké potešenie. Už viac ako 20 rokov vám prinášame radosť.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cukrarenstudentska/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/cukrarenstudentska1" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-brand-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-sans">Rýchle odkazy</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-accent transition-colors flex items-center gap-2"><ChevronRight size={14} /> Domov</Link></li>
              <li><Link to="/zakusky" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-accent transition-colors flex items-center gap-2"><ChevronRight size={14} /> Zákusky</Link></li>
              <li><Link to="/tortove-rezy" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-accent transition-colors flex items-center gap-2"><ChevronRight size={14} /> Tortové rezy</Link></li>
              <li><Link to="/suche-pecivo" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-accent transition-colors flex items-center gap-2"><ChevronRight size={14} /> Pečivo</Link></li>
              <li><Link to="/torty-na-objednavku" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-accent transition-colors flex items-center gap-2"><ChevronRight size={14} /> Objednať tortu</Link></li>
              <li><Link to="/zmrzlina" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-accent transition-colors flex items-center gap-2"><ChevronRight size={14} /> Zmrzlina</Link></li>
              <li><Link to="/kontakt" onClick={() => window.scrollTo(0, 0)} className="hover:text-brand-accent transition-colors flex items-center gap-2"><ChevronRight size={14} /> Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-sans">Otváracie hodiny</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between"><span>Pondelok:</span> <span>8:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Utorok:</span> <span>8:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Streda:</span> <span>8:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Štvrtok:</span> <span>8:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Piatok:</span> <span>8:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Sobota:</span> <span>8:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Nedeľa:</span> <span>8:00 - 19:00</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-sans">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-accent shrink-0" size={20} />
                <span>Študentská 2, 917 01 Trnava</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-accent shrink-0" size={20} />
                <div className="flex flex-col">
                  <a href="tel:0915493127" className="hover:text-brand-accent transition-colors">0915 493 127</a>
                  <a href="tel:0944450336" className="hover:text-brand-accent transition-colors">0944 450 336</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-accent shrink-0" size={20} />
                <div className="flex flex-col">
                  <a href="mailto:vierahaladova@gmail.com" className="hover:text-brand-accent transition-colors">vierahaladova@gmail.com</a>
                  <a href="mailto:haladapeter81@gmail.com" className="hover:text-brand-accent transition-colors">haladapeter81@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Cukráreň Študentská. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      
      {/* Featured Section */}
      <section className="py-20 bg-brand-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img 
                src="https://i.ibb.co/XkdKKtRz/Snap-Insta-to-531262191-17952498230997789-7583273303814034587-n.jpg" 
                alt="Special cake" 
                className="w-full h-full object-cover min-h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4">O nás</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-sans">Sme vašou sladkou zastávkou v srdci Trnavy.</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Na Študentskej ulici už viac ako 20 rokov spájame úctu k cukrárskemu remeslu s poctivými surovinami – v našich receptúrach preto nehľadajte náhrady, ale pravé maslo, čerstvú smotanu a ovocie.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Či už hľadáte overenú klasiku ako veterník a punčový rez, alebo máte chuť na moderný cheesecake a bezlepkové dobroty, v našej vitríne si vždy vyberiete.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zakusky" element={<Zakusky />} />
          <Route path="/tortove-rezy" element={<TortoveRezy />} />
          <Route path="/suche-pecivo" element={<SuchePecivo />} />
          <Route path="/torty-na-objednavku" element={<TortyNaObjednavku />} />
          <Route path="/zmrzlina" element={<Zmrzlina />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
