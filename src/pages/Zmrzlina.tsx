import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ImageModal } from '../components/ImageModal';

export const Zmrzlina = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-brand-accent/5 mb-16">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-12 md:p-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-8 font-sans text-brand-dark">
                  Osvieženie v každom kopčeku
                </h1>
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                  <p>
                    Naša zmrzlina je vyrábaná podľa tradičných receptúr z poctivých surovín. 
                    Každý deň pre vás pripravujeme čerstvé ovocné sorbety aj krémové mliečne príchute, 
                    ktoré si zamilujete.
                  </p>
                  <p>
                    Či už hľadáte klasiku ako vanilka a čokoláda, alebo chcete vyskúšať niečo nové, 
                    u nás si určite vyberiete. Používame len tie najlepšie ingrediencie – pravú smotanu, 
                    čerstvé ovocie a kvalitnú čokoládu.
                  </p>
                  <div className="pt-8">
                    <Link 
                      to="/kontakt"
                      className="inline-block bg-brand-accent text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-accent/90 transition-colors"
                    >
                      Príďte ochutnať
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <div 
              className="w-full lg:w-1/2 h-[400px] lg:h-[700px] cursor-zoom-in group overflow-hidden"
              onClick={() => setSelectedImage({ src: "https://i.ibb.co/xqd4T7YM/zmrzlina.jpg", alt: "Naša zmrzlina" })}
            >
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src="https://i.ibb.co/xqd4T7YM/zmrzlina.jpg"
                alt="Naša zmrzlina"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://i.ibb.co/7thhGWFF/Snap-Insta-to-491446455-17939339024997789-3989203154067966186-n.jpg',
            'https://i.ibb.co/xqkSrxCc/Snap-Insta-to-487922872-17936941850997789-1087735480623798163-n.jpg',
            'https://i.ibb.co/QF7LQ1vN/Snap-Insta-to-504101901-17945643929997789-5382040967392018873-n.jpg',
            'https://i.ibb.co/s9gsFV16/Snap-Insta-to-505458149-17945643911997789-94489390109672965-n.jpg',
            'https://i.ibb.co/hRW1ZRCB/Snap-Insta-to-504003728-17945643902997789-5521869464936636122-n.jpg',
            'https://i.ibb.co/Txv1WfLg/Snap-Insta-to-503819455-17945643893997789-7948577035694880789-n.jpg',
            'https://i.ibb.co/k6xPDSfr/Snap-Insta-to-504133451-17945643920997789-5385343807193516367-n.jpg',
            'https://i.ibb.co/DHGsGrmt/Snap-Insta-to-505163761-17945643884997789-9199650321198437886-n.jpg'
          ].map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square rounded-3xl overflow-hidden shadow-md cursor-zoom-in group"
              onClick={() => setSelectedImage({ src: url, alt: `Zmrzlina ukážka ${index + 1}` })}
            >
              <img 
                src={url} 
                alt={`Zmrzlina ukážka ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
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
