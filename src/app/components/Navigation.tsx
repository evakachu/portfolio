import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLayoutMode, type LayoutMode } from './ui/layout-mode';
import { useLanguage, type Language } from './ui/language';

const languageOptions: Array<{ label: string; value: Language }> = [
  { label: 'FR', value: 'fr' },
  { label: 'ENG', value: 'en' },
];

function LayoutModeSelector({
  layoutMode,
  setLayoutMode,
  labels,
  compact = false,
}: {
  layoutMode: LayoutMode;
  setLayoutMode: (nextMode: LayoutMode) => void;
  labels: { auto: string; mobile: string; desktop: string };
  compact?: boolean;
}) {
  const layoutOptions: Array<{ label: string; value: LayoutMode }> = [
    { label: labels.auto, value: 'auto' },
    { label: labels.mobile, value: 'mobile' },
    { label: labels.desktop, value: 'desktop' },
  ];

  return (
    <div
      className={`inline-flex items-center gap-1 border-2 border-primary/20 bg-card/85 p-1 backdrop-blur-md ${
        compact ? 'w-full' : ''
      }`}
    >
      {layoutOptions.map((option) => {
        const isActive = layoutMode === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLayoutMode(option.value)}
            aria-pressed={isActive}
            className={`relative flex items-center justify-center px-3 py-2 text-[11px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
              compact ? 'flex-1' : ''
            } ${
              isActive
                ? 'bg-primary text-primary-foreground shadow-[0_0_18px_rgba(91,229,132,0.22)]'
                : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground'
            }`}
          >
            <span className="relative z-10">{option.label}</span>
            {isActive && <span className="absolute right-1 top-1 h-1.5 w-1.5 bg-primary-foreground/70" />}
          </button>
        );
      })}
    </div>
  );
}

function LanguageSelector({
  language,
  setLanguage,
  compact = false,
}: {
  language: Language;
  setLanguage: (nextLanguage: Language) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1 border-2 border-secondary/20 bg-card/85 p-1 backdrop-blur-md ${
        compact ? 'w-full' : ''
      }`}
    >
      {languageOptions.map((option) => {
        const isActive = language === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            aria-pressed={isActive}
            className={`relative flex items-center justify-center px-3 py-2 text-[11px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
              compact ? 'flex-1' : ''
            } ${
              isActive
                ? 'bg-secondary text-secondary-foreground shadow-[0_0_18px_rgba(111,211,255,0.22)]'
                : 'text-muted-foreground hover:bg-secondary/10 hover:text-foreground'
            }`}
          >
            <span className="relative z-10">{option.label}</span>
            {isActive && <span className="absolute right-1 top-1 h-1.5 w-1.5 bg-secondary-foreground/70" />}
          </button>
        );
      })}
    </div>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { layoutMode, setLayoutMode, isMobileLayout, detectedMobile, resolvedLayoutMode } =
    useLayoutMode();
  const { language, setLanguage } = useLanguage();

  const copy =
    language === 'fr'
      ? {
          navItems: [
            { label: 'Accueil', href: '#hero' },
            { label: 'À propos', href: '#about' },
            { label: 'Compétences', href: '#skills' },
            { label: 'Expériences', href: '#experiences' },
            { label: 'Formation', href: '#education' },
            { label: 'Contact', href: '#contact' },
          ],
          layout: {
            auto: 'Auto',
            mobile: 'Mobile',
            desktop: 'Ordi',
            title: "Choisir l'affichage",
            description:
              "Auto suit l'écran, Mobile compacte davantage, Ordi garde une mise en page plus large quand l'espace le permet.",
            current: layoutMode === 'auto' ? 'Auto' : resolvedLayoutMode === 'mobile' ? 'Mobile' : 'Ordi',
            currentView: resolvedLayoutMode === 'mobile' ? 'Vue mobile' : 'Vue ordi',
          },
          language: {
            title: 'Langue',
          },
          menu: {
            open: 'Ouvrir le menu',
            close: 'Fermer le menu',
          },
        }
      : {
          navItems: [
            { label: 'Home', href: '#hero' },
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Experience', href: '#experiences' },
            { label: 'Education', href: '#education' },
            { label: 'Contact', href: '#contact' },
          ],
          layout: {
            auto: 'Auto',
            mobile: 'Mobile',
            desktop: 'Desktop',
            title: 'Choose layout',
            description:
              'Auto follows the screen, Mobile compacts the interface more, Desktop keeps a wider layout whenever space allows.',
            current: layoutMode === 'auto' ? 'Auto' : resolvedLayoutMode === 'mobile' ? 'Mobile' : 'Desktop',
            currentView: resolvedLayoutMode === 'mobile' ? 'Mobile view' : 'Desktop view',
          },
          language: {
            title: 'Language',
          },
          menu: {
            open: 'Open menu',
            close: 'Close menu',
          },
        };

  const useCompactNavigation = detectedMobile || isMobileLayout;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!useCompactNavigation) {
      setMobileMenuOpen(false);
      return;
    }

    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, useCompactNavigation]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b-2 border-primary/20 bg-card/95 shadow-2xl backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-primary via-secondary to-accent"
          />
        )}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-3 py-2">
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-secondary/20 transition-all duration-300 group-hover:border-primary">
                  <div
                    className="h-5 w-5 bg-primary transition-transform duration-300 group-hover:scale-110"
                    style={{
                      boxShadow: '0 0 20px rgba(91, 229, 132, 0.6), inset 0 0 10px rgba(91, 229, 132, 0.3)',
                    }}
                  />
                  <div className="absolute left-0 top-0 h-1.5 w-1.5 bg-primary" />
                  <div className="absolute right-0 top-0 h-1.5 w-1.5 bg-secondary" />
                  <div className="absolute bottom-0 left-0 h-1.5 w-1.5 bg-accent" />
                  <div className="absolute bottom-0 right-0 h-1.5 w-1.5 bg-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg tracking-widest text-primary transition-colors duration-300 group-hover:text-secondary">
                    EC
                  </span>
                  <span className="hidden text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground sm:block">
                    {copy.layout.currentView}
                  </span>
                </div>
              </div>
            </motion.a>

            {!useCompactNavigation && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <LayoutModeSelector
                    layoutMode={layoutMode}
                    setLayoutMode={setLayoutMode}
                    labels={copy.layout}
                  />
                  <LanguageSelector language={language} setLanguage={setLanguage} />
                </div>

                <div className="flex items-center gap-1">
                  {copy.navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="group relative overflow-hidden px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:text-primary"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                      <span className="absolute inset-0 origin-left scale-x-0 bg-primary/5 transition-transform duration-300 group-hover:scale-x-100" />
                      <motion.span
                        className="absolute right-1 top-1 h-1 w-1 bg-primary opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {useCompactNavigation && (
              <div className="flex items-center gap-2">
                <div className="hidden rounded-none border border-primary/20 bg-card/70 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground sm:block">
                  {copy.layout.current}
                </div>
                <LanguageSelector language={language} setLanguage={setLanguage} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((current) => !current)}
                  className="group relative border-2 border-primary/30 bg-card/50 p-2 text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                  aria-expanded={mobileMenuOpen}
                  aria-label={mobileMenuOpen ? copy.menu.close : copy.menu.open}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  <div className="absolute right-0 top-0 h-1.5 w-1.5 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.nav>

      {useCompactNavigation && mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 overflow-y-auto bg-background/98 pt-20 backdrop-blur-2xl"
        >
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(91, 229, 132, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(91, 229, 132, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
              imageRendering: 'pixelated',
            }}
          />

          <div className="relative flex min-h-full flex-col justify-between gap-10 px-6 pb-10">
            <div className="mx-auto w-full max-w-sm space-y-6">
              <div className="space-y-4 pt-2">
                <div className="space-y-3">
                  <p className="text-center text-xs font-mono uppercase tracking-[0.28em] text-secondary/80">
                    {copy.language.title}
                  </p>
                  <LanguageSelector language={language} setLanguage={setLanguage} compact />
                </div>

                <div className="space-y-3">
                  <p className="text-center text-xs font-mono uppercase tracking-[0.28em] text-primary/80">
                    {copy.layout.title}
                  </p>
                  <LayoutModeSelector
                    layoutMode={layoutMode}
                    setLayoutMode={setLayoutMode}
                    labels={copy.layout}
                    compact
                  />
                  <p className="text-center text-xs leading-relaxed text-muted-foreground">
                    {copy.layout.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-7 pt-4">
                {copy.navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, type: 'spring' }}
                    className="group relative font-display text-3xl text-foreground transition-all duration-300 hover:text-primary"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute -left-8 top-1/2 h-4 w-4 -translate-y-1/2 border-2 border-primary opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    />
                    <motion.div
                      className="absolute -right-8 top-1/2 h-3 w-3 -translate-y-1/2 bg-secondary opacity-0 group-hover:opacity-100"
                      initial={{ x: 10 }}
                      whileHover={{ x: 0 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute left-10 top-24">
              <motion.div
                className="h-6 w-6 border-2 border-primary/30"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
            <div className="pointer-events-none absolute bottom-20 right-10">
              <motion.div
                className="h-4 w-4 bg-accent/30"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
