import { motion } from 'motion/react';
import { Briefcase, Award, Video } from 'lucide-react';
import { useState } from 'react';
import { ImageModal } from './ImageModal';
import dataObserverLogo from '../../imports/data-observer-logo.svg';
import { useLayoutMode } from './ui/layout-mode';

const experiences = [
  {
    year: '2026',
    role: 'Chargée de projet IA',
    company: 'DATA OBSERVER',
    type: 'Stage',
    description: 'Veille technologique sur les outils IA pour TPE/PME, analyse des besoins métier, tests et évaluation de solutions. Développement de logiciels sur mesure pour automatiser et faciliter les tâches quotidiennes des gérants de TPE/PME : gestion administrative, communication, suivi client et optimisation des processus.',
    tags: ['IA', 'Développement logiciel', 'Automatisation', 'TPE/PME', 'Veille technologique'],
    images: [],
    logo: dataObserverLogo,
    logoVariant: 'wide',
    stats: [
      { label: 'Temps gagné / semaine', value: '2h+', icon: '⚡' },
      { label: 'Productivité clients', value: '+20%', icon: '💎' },
    ],
  },
  {
    year: '2026',
    role: 'Lauréate Cyber Humanum Est',
    company: 'Exercice de cyberdéfense',
    type: 'Exercice',
    description: 'Exercice intensif sur site opérationnel de lutte informationnelle et cyberdéfense organisé dans le cadre de ma formation en Master Veille Stratégique. Mission : identifier et contrer des campagnes de désinformation, analyser des réseaux d\'influence et protéger l\'e-réputation d\'une organisation face à des attaques informationnelles coordonnées. Travail en équipe sur des scénarios réels de manipulation de l\'information et de propagande.',
    tags: ['Cyberdéfense', 'L2I', 'Veille informationnelle', 'Analyse d\'influence', 'Désinformation', 'E-réputation', 'OSINT'],
    images: [],
    logo: 'https://cyberhumanumest.com/wp-content/uploads/2025/06/logo-CHE.png',
    stats: [
      { label: 'Équipe gagnante', value: '🏆', icon: '⭐' },
    ],
  },
  {
    year: '2026',
    role: 'Chargée de communication',
    company: 'Saint-Mihiel, Fierté Partagée',
    type: 'Élections municipales de 2026',
    description: 'Stratégie de communication digitale pour la campagne municipale de Saint-Mihiel 2026. Gestion complète des réseaux sociaux, création de contenus visuels et éditoriaux, planification éditoriale, animation de communauté, modération, veille locale et analyse du contexte politique territorial. Élaboration de concepts créatifs (Une idée en 30s pour la ville), photographie, tournages vidéos, montages vidéos et production de contenus multimédias.',
    tags: ['Communication publique', 'Campagne électorale', 'Réseaux sociaux', 'Création de contenus', 'Veille locale'],
    images: [
      'https://i.imgur.com/834ZgVj.jpeg',
      'https://i.imgur.com/tklwfXs.jpeg',
      'https://i.imgur.com/P08bZMh.jpeg',
      'https://i.imgur.com/iCXBTC7.jpeg',
      'https://i.imgur.com/Qz38Hrq.jpeg',
      'https://i.imgur.com/dLmOdFI.jpeg',
    ],
    imagesCaption: 'Quelques visuels et miniatures réalisés durant la campagne',
    logo: 'https://static.wixstatic.com/media/a20e89_eb4ce7e4f1a34340ade4e96ccffb0f5d~mv2.png/v1/fill/w_251,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a20e89_eb4ce7e4f1a34340ade4e96ccffb0f5d~mv2.png',
    stats: [
      { label: 'Vues cumulées', value: '300K+', icon: '👁️' },
      { label: 'Abonnés acquis', value: '1 500+', icon: '👥' },
    ],
  },
  {
    year: '2025',
    role: 'Chargée de communication',
    company: 'init. Creative Agency',
    type: 'Stage',
    description: 'Veille stratégique, analyse web, gestion de projet digital, community management, animation de communautés, stratégie de contenu, croissance organique, publication, modération, analyse social media, storytelling visuel.',
    tags: ['Community Management', 'Stratégie de contenu', 'Veille', 'Social Media', 'Storytelling'],
    images: [],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFYxtTV9oc2Jg/company-logo_200_200/company-logo_200_200/0/1709756433429/initconseil_logo?e=2147483647&v=beta&t=mju-wZ5mzhxTGj8IQCmOxpy3gS31vQZusN6TX7kvj84',
    stats: [
      { label: 'Vues clients', value: '+1M', icon: '📈' },
      { label: 'Interactions sur certains contenus', value: '+25%', icon: '🚀' },
    ],
  },
  {
    year: '2020-2026',
    role: 'Création de contenu',
    company: 'TikTok, Twitter, Twitch, Instagram, YouTube',
    type: 'Expérience Professionnelle',
    description: 'Création et publication régulière de contenus multi-plateformes : vidéos, streams, tweets, posts visuels. Formats adaptés à chaque plateforme, montage créatif et approche orientée engagement et performance. Construction d\'une communauté fidèle et développement d\'une présence digitale forte.',
    tags: ['Vidéo', 'Streaming', 'Multi-plateformes', 'Créativité', 'Community Building'],
    images: [],
    stats: [
      { label: 'Abonnés totaux', value: '200K+', icon: '⭐' },
      { label: 'Vues cumulées', value: '100M+', icon: '🎯' },
    ],
  },
];

const getIconForType = (type: string) => {
  if (type === 'Exercice') return Award;
  if (type === 'Création de contenu' || type === 'Expérience Professionnelle') return Video;
  return Briefcase;
};

export function Experiences() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const { isMobileLayout, detectedMobile } = useLayoutMode();
  const compactLayout = detectedMobile || isMobileLayout;

  const openModal = (images: string[], index: number) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImages([]);
    setCurrentImageIndex(0);
  };

  const goToPrev = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentImages.length - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentImageIndex < currentImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  return (
    <section id="experiences" className="relative overflow-hidden py-20 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 255, 136, 0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-sm text-primary tracking-wider">EXPÉRIENCES</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-6">
            Parcours professionnel
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un parcours riche et diversifié au service de la communication digitale
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = getIconForType(exp.type);
              const isEven = index % 2 === 0;
              const isWideLogo = 'logoVariant' in exp && exp.logoVariant === 'wide';

              return (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-col sm:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary border-4 border-background z-10 hidden sm:block" />

                  {/* Content */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="group relative">
                      <div className="border border-primary/20 bg-card/50 p-5 transition-all duration-300 hover:border-primary/40 sm:p-6">
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-primary" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary" />

                        {/* Year Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 mb-4`}>
                          <Icon className="w-4 h-4 text-primary" />
                          <span className="text-sm text-primary">{exp.year}</span>
                        </div>

                        {/* Logo de l'entreprise */}
                        {exp.logo && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-4 flex justify-center sm:justify-start"
                          >
                            <div
                              className={`relative border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-300 ${
                                isWideLogo ? 'inline-flex items-center justify-center bg-card/80 px-2.5 py-1.5' : 'w-16 h-16 bg-card p-2'
                              }`}
                            >
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className={isWideLogo ? 'h-7 w-auto max-w-[7.5rem] object-contain' : 'w-full h-full object-contain'}
                              />
                              {/* Pixel corners */}
                              <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
                              <div className="absolute bottom-0 right-0 w-2 h-2 bg-secondary" />
                            </div>
                          </motion.div>
                        )}

                        <h3 className="mb-2 text-lg sm:text-xl">{exp.role}</h3>
                        <div className="text-primary mb-1">{exp.company}</div>
                        <div className="text-sm text-muted-foreground mb-4">{exp.type}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Tags */}
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-background/50 border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats XP Style */}
                        {exp.stats && exp.stats.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 pt-6 border-t-2 border-primary/20"
                          >
                            <div
                              className={`grid gap-4 ${
                                exp.stats.length === 1
                                  ? 'grid-cols-1 max-w-sm mx-auto'
                                  : compactLayout
                                    ? 'grid-cols-1 sm:grid-cols-2'
                                    : 'grid-cols-2'
                              }`}
                            >
                              {exp.stats.map((stat, statIndex) => (
                                <motion.div
                                  key={statIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: 0.4 + statIndex * 0.1 }}
                                  className="relative group h-full"
                                >
                                  <div className="relative flex h-full overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 p-5 transition-all duration-300 group-hover:border-primary/60 sm:p-6">
                                    {/* XP Gain Animation */}
                                    <motion.div
                                      className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                                      animate={{
                                        opacity: [0, 0.3, 0],
                                        y: ['100%', '0%', '-100%'],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: statIndex * 0.5,
                                        ease: "easeInOut",
                                      }}
                                    />

                                    {/* Pixel corners */}
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
                                    <div className="absolute top-0 right-0 w-2 h-2 bg-secondary" />
                                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent" />
                                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary" />

                                    <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
                                      <motion.div
                                        className="text-4xl mb-3"
                                        animate={{
                                          scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                          duration: 2,
                                          repeat: Infinity,
                                          delay: statIndex * 0.5,
                                        }}
                                      >
                                        {stat.icon}
                                      </motion.div>
                                      <motion.div
                                        className="text-3xl font-display text-primary mb-2"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + statIndex * 0.1 }}
                                      >
                                        {stat.value}
                                      </motion.div>
                                      <div className="flex min-h-[2.5rem] items-center text-sm text-muted-foreground font-mono">
                                        {stat.label}
                                      </div>
                                    </div>

                                    {/* Level up particles */}
                                    {[...Array(3)].map((_, i) => (
                                      <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-primary"
                                        style={{
                                          left: `${30 + i * 20}%`,
                                          bottom: '20%',
                                        }}
                                        animate={{
                                          y: [0, -20, -40],
                                          opacity: [0, 1, 0],
                                          scale: [0, 1, 0],
                                        }}
                                        transition={{
                                          duration: 1.5,
                                          repeat: Infinity,
                                          delay: statIndex * 0.5 + i * 0.2,
                                        }}
                                      />
                                    ))}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* Gallery - photos de réalisations */}
                        {exp.images && exp.images.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 pt-6 border-t-2 border-primary/20"
                          >
                            {/* Image unique pour Cyber Humanum Est (trophée) */}
                            {exp.images.length === 1 ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative group"
                              >
                                <div className="relative aspect-[4/3] max-w-sm mx-auto overflow-hidden bg-gradient-to-br from-card via-background to-card border-2 border-secondary/40 hover:border-secondary/70 transition-all duration-500">
                                  {/* Glow effect */}
                                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                                  <img
                                    src={exp.images[0]}
                                    alt="Trophée Cyber Humanum Est"
                                    className="relative w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                  />

                                  {/* Trophy shine effect */}
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent pointer-events-none"
                                    animate={{
                                      x: ['-100%', '200%'],
                                    }}
                                    transition={{
                                      duration: 3,
                                      repeat: Infinity,
                                      repeatDelay: 2,
                                    }}
                                  />

                                  {/* Pixel corners */}
                                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary" />
                                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
                                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
                                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary" />

                                  {/* Trophy label */}
                                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-secondary/90 backdrop-blur-sm border-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-xs font-mono text-secondary-foreground">🏆 MEILLEURE ÉQUIPE L2I</span>
                                  </div>
                                </div>
                              </motion.div>
                            ) : (
                              /* Grid pour plusieurs images (Saint-Mihiel) */
                              <div className={`grid gap-3 ${compactLayout ? 'grid-cols-2' : 'grid-cols-3'}`}>
                                {exp.images.slice(0, 6).map((image, imgIndex) => (
                                  <motion.div
                                    key={imgIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 + imgIndex * 0.05 }}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    onClick={() => openModal(exp.images, imgIndex)}
                                    className="group relative aspect-square overflow-hidden bg-card border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                                  >
                                    <div
                                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                      style={{
                                        backgroundImage: `url(${image})`,
                                      }}
                                    />
                                    {/* Pixel overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {/* Pixel corners */}
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-0 right-0 w-2 h-2 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </motion.div>
                                ))}
                              </div>
                            )}
                            {exp.imagesCaption && (
                              <p className="text-xs text-muted-foreground italic text-center mt-4 font-mono">
                                {exp.imagesCaption}
                              </p>
                            )}
                            {exp.images.length > 6 && (
                              <p className="text-xs text-muted-foreground text-center mt-3">
                                +{exp.images.length - 6} visuels supplémentaires
                              </p>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={selectedImage !== null}
        imageSrc={selectedImage || ''}
        onClose={closeModal}
        onPrev={currentImages.length > 1 ? goToPrev : undefined}
        onNext={currentImages.length > 1 ? goToNext : undefined}
        hasMultiple={currentImages.length > 1}
      />
    </section>
  );
}
