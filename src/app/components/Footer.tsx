import { motion } from 'motion/react';
import { Heart, Code2 } from 'lucide-react';
import { useLayoutMode } from './ui/layout-mode';
import { useLanguage } from './ui/language';

export function Footer() {
  const { isMobileLayout, detectedMobile } = useLayoutMode();
  const { language } = useLanguage();
  const compactLayout = detectedMobile || isMobileLayout;

  const copy =
    language === 'fr'
      ? {
          role: 'Chargée de communication digitale & veille stratégique',
          navigationTitle: 'Navigation',
          contactTitle: 'Contact',
          links: [
            { label: 'À propos', href: '#about' },
            { label: 'Compétences', href: '#skills' },
            { label: 'Expériences', href: '#experiences' },
            { label: 'Formation', href: '#education' },
          ],
          rights: 'Tous droits réservés.',
          madeWith: 'Créé avec',
        }
      : {
          role: 'Digital communication & strategic intelligence',
          navigationTitle: 'Navigation',
          contactTitle: 'Contact',
          links: [
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Experience', href: '#experiences' },
            { label: 'Education', href: '#education' },
          ],
          rights: 'All rights reserved.',
          madeWith: 'Made with',
        };

  return (
    <footer className="relative overflow-hidden border-t-2 border-primary/20 bg-gradient-to-b from-card/40 to-background py-14 sm:py-16">
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91, 229, 132, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 229, 132, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          imageRendering: 'pixelated',
        }}
      />

      {!compactLayout && (
        <>
          <div className="absolute left-10 top-8 h-6 w-6 border-2 border-primary/20" />
          <div className="absolute bottom-8 right-10 h-4 w-4 bg-secondary/10" />
          <div className="absolute right-20 top-1/2 h-3 w-3 bg-accent/10" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-3 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="h-5 w-5 bg-primary" style={{ boxShadow: '0 0 20px rgba(91, 229, 132, 0.6)' }} />
                <div className="absolute left-0 top-0 h-1.5 w-1.5 bg-primary" />
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 bg-secondary" />
              </div>
              <span className="font-display text-lg tracking-widest text-primary">Eva Commenne</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{copy.role}</p>
            <div className="mt-4 flex gap-2">
              <div className="h-2 w-2 bg-primary" />
              <div className="h-2 w-2 bg-secondary" />
              <div className="h-2 w-2 bg-accent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6 text-sm font-display tracking-wider">{copy.navigationTitle}</h4>
            <div className="space-y-3">
              {copy.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:text-primary"
                >
                  <div className="h-2 w-2 bg-primary/30 transition-colors group-hover:bg-primary" />
                  <span className="transition-transform duration-200 group-hover:translate-x-1">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 text-sm font-display tracking-wider">{copy.contactTitle}</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:evacmn@outlook.fr"
                className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-secondary"
              >
                <div className="h-1.5 w-1.5 bg-secondary/30 transition-colors group-hover:bg-secondary" />
                <span className="font-mono">evacmn@outlook.fr</span>
              </a>
              <p className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-accent/30" />
                <span className="text-muted-foreground">Nancy &amp; Paris, France</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative border-t-2 border-primary/20 pt-8"
        >
          <div className="absolute left-0 top-0 h-0.5 w-12 bg-primary" />
          <div className="absolute right-0 top-0 h-0.5 w-12 bg-secondary" />

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
            <div className="flex items-center gap-2">
              <span className="font-mono">© 2026 Eva Commenne.</span>
              <span className="hidden sm:inline">{copy.rights}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{copy.madeWith}</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="h-4 w-4 fill-primary text-primary" />
              </motion.div>
              <span>&amp;</span>
              <Code2 className="h-4 w-4 text-secondary" />
            </div>
          </div>
        </motion.div>

        {!compactLayout && (
          <>
            <motion.div
              className="absolute bottom-6 left-6 h-3 w-3 bg-primary/40"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-6 right-6 h-3 w-3 bg-secondary/40"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            <div className="absolute left-10 top-6 h-2 w-2 bg-accent/20" />
            <div className="absolute right-10 top-6 h-2 w-2 bg-primary/20" />
          </>
        )}
      </div>
    </footer>
  );
}
