import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ArrowUpDown } from 'lucide-react';
import { zakuskyData, filterCategories } from '../data/zakusky';
import { ImageModal } from '../components/ImageModal';

export const Zakusky = () => {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('Všetky');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const type = searchParams.get('typ');
    if (type === 'klasicke') setActiveFilter('Klasické');
    else if (type === 'specialne') setActiveFilter('Špeciálne');
  }, [searchParams]);

  const filteredAndSortedData = useMemo(() => {
    let result = zakuskyData.filter(item => item.type === 'zakusok');
    if (activeFilter !== 'Všetky') {
      result = result.filter(item => item.categories.includes(activeFilter));
    }
    result = [...result].sort((a, b) => {
      if (a.name === 'Naša ponuka') return -1;
      if (b.name === 'Naša ponuka') return 1;
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    return result;
  }, [activeFilter, sortOrder]);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans text-brand-dark">Tradícia, ktorú cítite v každom súste.</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Od poctivého krémeša až po moderné cheesecaky. Pečieme pre vás s láskou, z čerstvých surovín a podľa receptov, ktoré si pamätáte z detstva.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="flex flex-wrap gap-2">
            {filterCategories.zakusok.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat 
                    ? 'bg-brand-accent text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-brand-pink border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors shrink-0"
          >
            <ArrowUpDown size={16} />
            Zoradiť {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </button>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredAndSortedData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.name}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-brand-accent/5 flex flex-col h-full"
              >
                <div 
                  className="h-56 bg-brand-pink/30 rounded-2xl mb-6 flex items-center justify-center overflow-hidden p-2 cursor-zoom-in group"
                  onClick={() => item.image && setSelectedImage({ src: item.image, alt: item.name })}
                >
                  {item.image && (
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 font-sans">{item.name}</h3>
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.categories.map(cat => (
                    <span key={cat} className="text-[10px] uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                      {cat}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredAndSortedData.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500">
              V tejto kategórii momentálne nemáme žiadne zákusky.
            </div>
          )}
        </motion.div>
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
