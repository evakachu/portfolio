import { motion } from 'motion/react';
import { useLayoutMode } from './ui/layout-mode';

const stats = [
  {
    value: '7+',
    label: "Ans d'expérience digitale",
    valueClassName: 'text-primary',
    accentClassName: 'bg-primary',
  },
  {
    value: '15+',
    label: 'Outils maîtrisés',
    valueClassName: 'text-secondary',
    accentClassName: 'bg-secondary',
  },
  {
    value: '3',
    label: 'Langues',
    valueClassName: 'text-accent',
    accentClassName: 'bg-accent',
  },
  {
    value: '100%',
    label: 'Passion & engagement',
    valueClassName: 'text-primary',
    accentClassName: 'bg-primary',
  },
];

export function About() {
  const { isMobileLayout, detectedMobile } = useLayoutMode();
  const compactLayout = detectedMobile || isMobileLayout;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background py-20 sm:py-32"
    >
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(91, 229, 132, 0.5) 0px, transparent 1px, transparent 7px, rgba(91, 229, 132, 0.5) 8px),
              repeating-linear-gradient(90deg, rgba(111, 211, 255, 0.5) 0px, transparent 1px, transparent 7px, rgba(111, 211, 255, 0.5) 8px)
            `,
            backgroundSize: compactLayout ? '6px 6px' : '8px 8px',
            imageRendering: 'pixelated',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(compactLayout ? 4 : 6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-4 w-4"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 2) * 40}%`,
              backgroundColor: i % 2 === 0 ? '#5BE584' : '#A78BFA',
              opacity: 0.08,
            }}
            animate={{
              y: [0, compactLayout ? -20 : -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-block">
            <div className="group relative flex items-center gap-3 overflow-hidden border-2 border-primary/40 bg-card/80 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary/60">
              <div className="absolute inset-0 translate-x-[-100%] bg-primary/5 transition-transform duration-700 group-hover:translate-x-[100%]" />
              <motion.div
                className="relative z-10 h-3 w-3 bg-primary"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10 font-mono text-sm tracking-widest text-primary">À PROPOS</span>
              <div className="absolute left-0 top-0 h-2 w-2 bg-primary" />
              <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary" />
            </div>
          </div>
          <h2 className="mb-6 font-display text-3xl sm:text-4xl lg:text-5xl">
            Communication digitale &amp; veille stratégique
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Mon approche combine éditorial, analytique et opérationnel pour une communication digitale innovante et stratégique.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group"
        >
          <div
            className={`relative overflow-hidden border-2 border-primary/25 bg-card/60 backdrop-blur-md ${
              compactLayout ? 'p-6 sm:p-8' : 'p-8 sm:p-12'
            }`}
          >
            <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-primary" />
            <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-secondary" />
            <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />

            <div className="relative mx-auto max-w-4xl space-y-6">
              <div className={`${compactLayout ? 'flex flex-col gap-4' : 'flex items-start gap-6'}`}>
                <div className={`relative flex-shrink-0 ${compactLayout ? 'h-1.5 w-20' : 'h-auto'}`}>
                  <div
                    className={`bg-gradient-to-b from-primary via-secondary to-accent ${
                      compactLayout ? 'h-full w-full bg-gradient-to-r' : 'h-full w-1.5'
                    }`}
                  />
                  <div className={`absolute bg-primary ${compactLayout ? '-top-0.5 left-0 h-3 w-3' : 'left-0 top-0 h-3 w-3'}`} />
                  <div
                    className={`absolute bg-accent ${
                      compactLayout ? '-bottom-0.5 right-0 h-3 w-3' : 'bottom-0 left-0 h-3 w-3'
                    }`}
                  />
                </div>

                <div className="space-y-5">
                  <p className="text-base leading-relaxed">
                    Mon parcours en <span className="font-medium text-primary">Information-Communication</span> puis en{' '}
                    <span className="font-medium text-primary">
                      Master Veille Stratégique et Organisation des Connaissances
                    </span>{' '}
                    m&apos;a permis de développer une expertise unique à l&apos;intersection de la communication digitale et de l&apos;analyse stratégique.
                  </p>

                  <p className="text-base leading-relaxed">
                    Je construis des <span className="font-medium text-secondary">lignes éditoriales cohérentes</span>, crée du{' '}
                    <span className="font-medium text-secondary">contenu adapté aux plateformes</span>, et analyse les{' '}
                    <span className="font-medium text-secondary">environnements numériques</span> pour identifier les opportunités et les tendances.
                  </p>

                  <p className="text-base leading-relaxed">
                    Ma capacité à faire de la <span className="font-medium text-accent">veille informationnelle</span>, à synthétiser l&apos;information et à contribuer à une{' '}
                    <span className="font-medium text-accent">stratégie de communication innovante</span> me permet d&apos;apporter une vision globale et analytique aux projets digitaux.
                  </p>

                  <p className="text-base leading-relaxed">
                    Avec plus de <span className="font-medium text-primary">7 ans d&apos;exploration autodidacte</span> des projets numériques, je maîtrise l&apos;écosystème digital, des outils créatifs aux plateformes d&apos;analyse, en passant par les nouvelles technologies comme l&apos;IA.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t-2 border-primary/20 pt-10 sm:grid-cols-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    className="group/stat relative text-center"
                  >
                    <div className={`mb-2 font-display text-3xl transition-transform duration-300 group-hover/stat:scale-110 sm:text-4xl ${stat.valueClassName}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs leading-snug text-muted-foreground sm:text-sm">{stat.label}</div>
                    <motion.div
                      className={`absolute left-1/2 top-[-8px] h-2 w-2 -translate-x-1/2 opacity-0 group-hover/stat:opacity-100 ${stat.accentClassName}`}
                      initial={{ y: -5 }}
                      whileHover={{ y: 0 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
