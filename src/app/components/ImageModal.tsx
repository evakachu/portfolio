import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from './ui/language';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasMultiple?: boolean;
}

export function ImageModal({ isOpen, imageSrc, onClose, onPrev, onNext, hasMultiple }: ImageModalProps) {
  const { language } = useLanguage();

  const copy =
    language === 'fr'
      ? {
          close: 'Fermer',
          previous: 'Image précédente',
          next: 'Image suivante',
          previewAlt: 'Aperçu agrandi',
        }
      : {
          close: 'Close',
          previous: 'Previous image',
          next: 'Next image',
          previewAlt: 'Expanded preview',
        };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(91, 229, 132, 0.8) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(91, 229, 132, 0.8) 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px',
                imageRendering: 'pixelated',
              }}
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            onClick={onClose}
            aria-label={copy.close}
            className="group absolute right-4 top-4 z-10 border-2 border-primary/40 bg-card/90 p-2.5 transition-all duration-300 hover:border-primary/70 sm:right-6 sm:top-6 sm:p-3"
          >
            <X className="h-6 w-6 text-primary" />
            <div className="absolute left-0 top-0 h-2 w-2 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.button>

          {hasMultiple && onPrev && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.15 }}
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label={copy.previous}
              className="group absolute left-3 top-1/2 z-10 -translate-y-1/2 border-2 border-secondary/40 bg-card/90 p-2.5 transition-all duration-300 hover:border-secondary/70 sm:left-6 sm:p-3"
            >
              <ChevronLeft className="h-6 w-6 text-secondary" />
              <div className="absolute left-0 top-0 h-2 w-2 bg-secondary opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          )}

          {hasMultiple && onNext && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.15 }}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label={copy.next}
              className="group absolute right-3 top-1/2 z-10 -translate-y-1/2 border-2 border-secondary/40 bg-card/90 p-2.5 transition-all duration-300 hover:border-secondary/70 sm:right-6 sm:p-3"
            >
              <ChevronRight className="h-6 w-6 text-secondary" />
              <div className="absolute right-0 top-0 h-2 w-2 bg-secondary opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          )}

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="group relative max-h-[82vh] w-full max-w-6xl sm:max-h-[85vh]"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-50 blur-2xl" />

            <div className="relative overflow-hidden border-2 border-primary/50 bg-card">
              <img
                src={imageSrc}
                alt={copy.previewAlt}
                className="h-full max-h-[82vh] w-full object-contain sm:max-h-[85vh]"
              />

              <div className="absolute left-0 top-0 h-6 w-6 border-l-4 border-t-4 border-primary" />
              <div className="absolute right-0 top-0 h-6 w-6 border-r-4 border-t-4 border-secondary" />
              <div className="absolute bottom-0 left-0 h-6 w-6 border-b-4 border-l-4 border-accent" />
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b-4 border-r-4 border-primary" />

              <motion.div
                className="pointer-events-none absolute inset-0 h-32 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
                animate={{
                  y: ['-100%', '200%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
