import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpDown } from 'lucide-react';
import { zakuskyData, filterCategories } from '../data/zakusky';

export const SuchePecivo = () => {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('Všetky');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const type = searchParams.get('typ');
    if (type === 'suche') setActiveFilter('Suché');
    else if (type === 'cajove') setActiveFilter('Čajové');
  }, [searchParams]);

  const nasaPonuka = useMemo(() => {
    return zakuskyData.find(item => item.type === 'pecivo' && item.name === 'Naša ponuka');
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans text-brand-dark">Suché a čajové pečivo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tradičné domáce pečivo, ktoré rozvonia váš domov. Pečieme pre vás s láskou, z poctivého masla a orechov.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-brand-accent/5">
          <div className="flex flex-col">
            {/* Large Image */}
            <div className="w-full h-[400px] md:h-[600px]">
              {nasaPonuka?.image && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src={nasaPonuka.image}
                  alt="Naša ponuka pečiva"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Text Content */}
            <div className="p-12 md:p-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-sans text-brand-dark">
                  Poctivé domáce pečivo
                </h2>
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  <p>
                    Či už hľadáte drobné pečivo k nedeľnej káve, alebo chcete potešiť svojich blízkych 
                    darčekovým balením našich dobrôt, u nás si určite vyberiete. Každý kúsok je 
                    vyrábaný ručne a s láskou, čo sa odzrkadľuje na jeho jedinečnej chuti.
                  </p>
                  <div className="pt-8">
                    <p className="font-bold text-brand-accent">
                      Aktuálnu ponuku suchého pečiva nájdete priamo v našej predajni.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
