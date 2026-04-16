import { motion } from 'motion/react';
import { Heart, Code2 } from 'lucide-react';
import { useLayoutMode } from './ui/layout-mode';

export function Footer() {
  const { isMobileLayout, detectedMobile } = useLayoutMode();
  const compactLayout = detectedMobile || isMobileLayout;

  return (
    <footer className="relative overflow-hidden border-t-2 border-primary/20 bg-gradient-to-b from-card/40 to-background py-14 sm:py-16">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-[0.01]" style={{
        backgroundImage: `
          linear-gradient(rgba(91, 229, 132, 0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(91, 229, 132, 0.6) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
        imageRendering: 'pixelated',
      }} />

      {/* Decorative voxels */}
      {!compactLayout && (
        <>
          <div className="absolute left-10 top-8 h-6 w-6 border-2 border-primary/20" />
          <div className="absolute bottom-8 right-10 h-4 w-4 bg-secondary/10" />
          <div className="absolute right-20 top-1/2 h-3 w-3 bg-accent/10" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 md:grid-cols-3 md:gap-12 md:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 flex items-center justify-center">
                <div className="w-5 h-5 bg-primary" style={{ boxShadow: '0 0 20px rgba(91, 229, 132, 0.6)' }} />
                <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-primary" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-secondary" />
              </div>
              <span className="text-primary tracking-widest font-display text-lg">Eva Commenne</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chargée de communication digitale &amp; veille stratégique
            </p>
            <div className="mt-4 flex gap-2">
              <div className="w-2 h-2 bg-primary" />
              <div className="w-2 h-2 bg-secondary" />
              <div className="w-2 h-2 bg-accent" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6 text-sm font-display tracking-wider">Navigation</h4>
            <div className="space-y-3">
              {[
                { label: 'À propos', href: '#about' },
                { label: 'Compétences', href: '#skills' },
                { label: 'Expériences', href: '#experiences' },
                { label: 'Formation', href: '#education' },
              ].map((link) => (
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
                  className="group relative flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-primary/30 group-hover:bg-primary transition-colors" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 text-sm font-display tracking-wider">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:evacmn@outlook.fr"
                className="group flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-secondary/30 group-hover:bg-secondary transition-colors" />
                <span className="font-mono">evacmn@outlook.fr</span>
              </a>
              <p className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent/30" />
                <span className="text-muted-foreground">Nancy, France</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative pt-8 border-t-2 border-primary/20"
        >
          {/* Pixel accent on border */}
          <div className="absolute top-0 left-0 w-12 h-0.5 bg-primary" />
          <div className="absolute top-0 right-0 w-12 h-0.5 bg-secondary" />

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
            <div className="flex items-center gap-2">
              <span className="font-mono">© 2026 Eva Commenne.</span>
              <span className="hidden sm:inline">Tous droits réservés.</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Créé avec</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </motion.div>
              <span>&amp;</span>
              <Code2 className="w-4 h-4 text-secondary" />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Decorative Pixels */}
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
