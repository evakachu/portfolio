import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Sparkles, Code2, Users, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImageOne from '../../imports/IMG_2633.jpeg';
import heroImageTwo from '../../imports/IMG_3755.jpeg';
import heroImageThree from '../../imports/IMG_3756.jpeg';
import { useLayoutMode } from './ui/layout-mode';

const images = [heroImageOne, heroImageTwo, heroImageThree];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isMobileLayout, detectedMobile } = useLayoutMode();
  const compactLayout = detectedMobile || isMobileLayout;
  const floatingParticles = compactLayout ? 8 : 20;
  const cvDownloadUrl = `${import.meta.env.BASE_URL}eva-commenne-cv.pdf`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24 sm:pt-28"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(91, 229, 132, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91, 229, 132, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: compactLayout ? '24px 24px' : '32px 32px',
            imageRendering: 'pixelated',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(floatingParticles)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: compactLayout ? (i % 2 === 0 ? '4px' : '6px') : i % 3 === 0 ? '4px' : i % 2 === 0 ? '6px' : '8px',
              height: compactLayout ? (i % 2 === 0 ? '4px' : '6px') : i % 3 === 0 ? '4px' : i % 2 === 0 ? '6px' : '8px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#5BE584' : i % 2 === 0 ? '#6FD3FF' : '#A78BFA',
              opacity: compactLayout ? 0.1 : 0.15,
              boxShadow: compactLayout ? 'none' : i % 2 === 0 ? '0 0 20px currentColor' : 'none',
            }}
            animate={{
              y: [0, compactLayout ? -22 : -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.08, compactLayout ? 0.18 : 0.3, 0.08],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <motion.div
          className="absolute inset-0 h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className={`grid items-center ${compactLayout ? 'gap-10' : 'gap-12 lg:grid-cols-2'}`}>
          <motion.div
            initial={{ opacity: 0, x: compactLayout ? 0 : -50, y: compactLayout ? 24 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            className={compactLayout ? 'text-center' : ''}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`relative mb-6 inline-flex items-center gap-2 overflow-hidden border-2 border-primary/30 bg-primary/10 px-4 py-2 ${
                compactLayout ? 'mx-auto' : ''
              }`}
            >
              <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="relative z-10 h-4 w-4 text-primary" />
              </motion.div>
              <span className="relative z-10 font-mono text-sm tracking-wider text-primary">Portfolio 2026</span>
              <motion.div
                className="absolute left-0 top-0 h-2 w-2 bg-primary"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute right-0 top-0 h-2 w-2 bg-primary" />
              <div className="absolute bottom-0 left-0 h-2 w-2 bg-primary" />
              <motion.div
                className="absolute bottom-0 right-0 h-2 w-2 bg-primary"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <motion.span
                className="relative mb-3 block text-2xl font-display sm:text-3xl lg:text-4xl"
                initial={{ opacity: 0, x: compactLayout ? 0 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="relative inline-block">
                  <motion.span
                    className="relative inline-block"
                    style={{
                      background: 'linear-gradient(90deg, #ffffff 40%, #5BE584 50%, #6FD3FF 60%, #ffffff 70%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    animate={{
                      backgroundPosition: ['0% center', '200% center'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    Eva Commenne
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 blur-xl"
                    style={{
                      background: 'linear-gradient(90deg, #5BE584, #6FD3FF, #A78BFA)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                    animate={{
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </span>
              </motion.span>
              <motion.span
                className="block text-base sm:text-lg lg:text-xl"
                initial={{ opacity: 0, x: compactLayout ? 0 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-primary">Chargée de communication digitale &amp; </span>
                <span className="text-accent">veille stratégique</span>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-3 text-base leading-relaxed text-muted-foreground"
            >
              J&apos;accompagne votre projet dans le développement d&apos;une présence digitale cohérente, créative et stratégique.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8 text-sm leading-relaxed text-muted-foreground"
            >
              Spécialisée en communication digitale, création de contenu et stratégie éditoriale, je mets plus de 10 ans d&apos;expérience autodidacte au service d&apos;identités fortes, de contenus engageants et de stratégies pensées pour générer de la visibilité et de l&apos;impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`flex ${compactLayout ? 'flex-col' : 'flex-wrap'} gap-3 sm:flex-row sm:gap-4 ${
                compactLayout ? 'items-stretch' : ''
              }`}
            >
              <motion.a
                href="#experiences"
                onClick={(e) => handleNavClick(e, '#experiences')}
                className={`group relative flex items-center justify-center gap-2 overflow-hidden border-2 border-primary bg-primary px-6 py-3 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:border-primary/50 hover:bg-primary/90 hover:shadow-primary/40 ${
                  compactLayout ? 'w-full sm:w-auto' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
                />
                <Code2 className="relative z-10 h-5 w-5" />
                <span className="relative z-10">Voir mes expériences</span>
                <div className="absolute right-0 top-0 h-2 w-2 bg-primary-foreground opacity-50" />
              </motion.a>
              <motion.a
                href="#education"
                onClick={(e) => handleNavClick(e, '#education')}
                className={`group relative flex items-center justify-center gap-2 overflow-hidden border-2 border-secondary/40 bg-card px-6 py-3 text-foreground transition-all duration-300 hover:border-secondary hover:bg-secondary/10 ${
                  compactLayout ? 'w-full sm:w-auto' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 translate-y-[100%] bg-secondary/5 transition-transform duration-300 group-hover:translate-y-0" />
                <Users className="relative z-10 h-5 w-5 text-secondary" />
                <span className="relative z-10">Ma formation</span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`group relative overflow-hidden border-2 border-accent/40 px-6 py-3 text-center text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 ${
                  compactLayout ? 'w-full sm:w-auto' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 origin-left scale-x-0 bg-accent/5 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative z-10">Me contacter</span>
              </motion.a>
              <motion.a
                href={cvDownloadUrl}
                download="Eva-Commenne-CV.pdf"
                className={`group relative flex items-center justify-center gap-2 overflow-hidden border-2 border-primary/30 bg-card px-6 py-3 text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 ${
                  compactLayout ? 'w-full sm:w-auto' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 translate-y-[100%] bg-primary/5 transition-transform duration-300 group-hover:translate-y-0" />
                <Download className="relative z-10 h-5 w-5 text-primary" />
                <span className="relative z-10">Télécharger mon CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: compactLayout ? 0 : 50, y: compactLayout ? 24 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="group relative mx-auto w-full max-w-[18rem] sm:max-w-md">
              <motion.div
                className={`absolute bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl ${
                  compactLayout ? '-inset-4' : '-inset-6'
                }`}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div
                className={`absolute border-2 border-primary/20 ${
                  compactLayout ? '-inset-2' : '-inset-4'
                }`}
                style={{
                  clipPath: compactLayout
                    ? 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
                    : 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)',
                }}
              />
              <div className={`absolute border-2 border-secondary/20 ${compactLayout ? '-inset-1' : '-inset-2'}`} />
              <div className="absolute -inset-1 border border-accent/30" />

              <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden border-2 border-primary/40 bg-card">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0.3, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      className="absolute inset-0"
                      initial={{ x: 0, opacity: 0 }}
                      animate={{ x: 0, opacity: 0 }}
                      exit={{
                        x: [-10, 10, -5, 5, 0],
                        opacity: [1, 1, 1, 1, 0],
                      }}
                      transition={{ duration: 0.3, times: [0, 0.25, 0.5, 0.75, 1] }}
                    >
                      <img
                        src={images[currentImageIndex]}
                        alt="Eva Commenne"
                        className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                        style={{
                          filter: 'grayscale(100%) contrast(1.1) brightness(1.05) hue-rotate(90deg)',
                          mixBlendMode: 'screen',
                          opacity: 0.3,
                        }}
                      />
                    </motion.div>

                    <img
                      src={images[currentImageIndex]}
                      alt="Eva Commenne"
                      className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                      style={{
                        filter: 'grayscale(100%) contrast(1.1) brightness(1.05)',
                      }}
                    />

                    <div
                      className="absolute inset-0 mix-blend-soft-light opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(91, 229, 132, 0.4) 0%, rgba(111, 211, 255, 0.3) 50%, rgba(167, 139, 250, 0.4) 100%)',
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.02]"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(91, 229, 132, 0.8) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(91, 229, 132, 0.8) 1px, transparent 1px)
                        `,
                        backgroundSize: compactLayout ? '5px 5px' : '6px 6px',
                        imageRendering: 'pixelated',
                      }}
                    />

                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'repeating-linear-gradient(0deg, transparent 0px, rgba(91, 229, 132, 0.03) 2px, transparent 4px)',
                      }}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 transition-all duration-300 ${
                        index === currentImageIndex ? 'w-6 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/60'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Afficher la photo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                className={`absolute border-l-4 border-t-4 border-primary ${
                  compactLayout ? '-left-2 -top-2 h-8 w-8' : '-left-2 -top-2 h-12 w-12'
                }`}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 4px, 4px 4px, 4px 100%, 0 100%)',
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className={`absolute border-r-4 border-t-4 border-secondary ${
                  compactLayout ? '-right-2 -top-2 h-8 w-8' : '-right-2 -top-2 h-12 w-12'
                }`}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, calc(100% - 4px) 100%, calc(100% - 4px) 4px, 0 4px)',
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
              <motion.div
                className={`absolute border-b-4 border-l-4 border-accent ${
                  compactLayout ? '-bottom-2 -left-2 h-8 w-8' : '-bottom-2 -left-2 h-12 w-12'
                }`}
                style={{
                  clipPath: 'polygon(0 0, 4px 0, 4px calc(100% - 4px), 100% calc(100% - 4px), 100% 100%, 0 100%)',
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              <motion.div
                className={`absolute border-b-4 border-r-4 border-primary ${
                  compactLayout ? '-bottom-2 -right-2 h-8 w-8' : '-bottom-2 -right-2 h-12 w-12'
                }`}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 mx-auto grid w-full max-w-[18rem] grid-cols-2 gap-3 sm:max-w-md"
            >
              {[
                { label: '📍 Nancy & Paris, France', border: 'border-primary/30', bg: 'bg-primary/5', accent: 'bg-primary', edge: 'left' },
                { label: 'Bac+5 (en cours)', border: 'border-secondary/30', bg: 'bg-secondary/5', accent: 'bg-secondary', edge: 'right' },
                { label: '24 ans', border: 'border-accent/30', bg: 'bg-accent/5', accent: 'bg-accent', edge: 'bottom' },
                { label: 'Permis B', border: 'border-primary/30', bg: 'bg-primary/5', accent: 'bg-primary', edge: 'right' },
              ].map((pill, index) => (
                <motion.div
                  key={pill.label}
                  className={`group relative flex min-h-[4.5rem] items-center justify-center overflow-hidden border-2 bg-card/90 px-4 py-2 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${pill.border}`}
                  initial={{ opacity: 0, x: compactLayout ? 0 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className={`absolute inset-0 ${pill.bg} translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0`} />
                  <span className="relative z-10 block text-center font-mono text-sm text-muted-foreground">
                    {pill.label}
                  </span>
                  <div
                    className={`absolute h-1.5 w-1.5 ${pill.accent} ${
                      pill.edge === 'left'
                        ? 'left-0 top-0'
                        : pill.edge === 'right'
                          ? 'right-0 top-0'
                          : 'bottom-0 right-0'
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {!compactLayout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowDown className="h-10 w-10 text-primary" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
