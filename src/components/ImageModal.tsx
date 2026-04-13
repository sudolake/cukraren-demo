import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-6 right-6 text-white hover:text-brand-pink transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={40} />
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 left-0 right-0 text-center text-white font-sans text-lg">
              {imageAlt}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
