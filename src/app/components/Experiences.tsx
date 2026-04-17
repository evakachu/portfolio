import { motion } from 'motion/react';
import { Briefcase, Award, Video } from 'lucide-react';
import { useState } from 'react';
import { ImageModal } from './ImageModal';
import dataObserverLogo from '../../imports/data-observer-logo.svg';
import { useLayoutMode } from './ui/layout-mode';
import { useLanguage } from './ui/language';

type ExperienceKind = 'work' | 'award' | 'content';

const saintMihielImages = [
  'https://i.imgur.com/834ZgVj.jpeg',
  'https://i.imgur.com/tklwfXs.jpeg',
  'https://i.imgur.com/P08bZMh.jpeg',
  'https://i.imgur.com/iCXBTC7.jpeg',
  'https://i.imgur.com/Qz38Hrq.jpeg',
  'https://i.imgur.com/dLmOdFI.jpeg',
];

const getIconForKind = (kind: ExperienceKind) => {
  if (kind === 'award') return Award;
  if (kind === 'content') return Video;
  return Briefcase;
};

export function Experiences() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const { isMobileLayout, detectedMobile } = useLayoutMode();
  const { language } = useLanguage();
  const compactLayout = detectedMobile || isMobileLayout;

  const copy =
    language === 'fr'
      ? {
          badge: 'EXPÉRIENCES',
          title: 'Parcours professionnel',
          intro: 'Un parcours riche et diversifié au service de la communication digitale',
          trophyAlt: 'Trophée Cyber Humanum Est',
          trophyLabel: '🏆 MEILLEURE ÉQUIPE L2I',
          moreVisuals: (count: number) => `+${count} visuels supplémentaires`,
          experiences: [
            {
              year: '2026',
              role: 'Chargée de projet IA',
              company: 'DATA OBSERVER',
              type: 'Stage',
              kind: 'work' as const,
              description:
                'Veille technologique sur les outils IA pour TPE/PME, analyse des besoins métier, tests et évaluation de solutions. Développement de logiciels sur mesure pour automatiser et faciliter les tâches quotidiennes des gérants de TPE/PME : gestion administrative, communication, suivi client et optimisation des processus.',
              tags: ['IA', 'Développement logiciel', 'Automatisation', 'TPE/PME', 'Veille technologique'],
              images: [],
              logo: dataObserverLogo,
              logoVariant: 'wide' as const,
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
              kind: 'award' as const,
              description:
                "Exercice intensif sur site opérationnel de lutte informationnelle et cyberdéfense organisé dans le cadre de ma formation en Master Veille Stratégique. Mission : identifier et contrer des campagnes de désinformation, analyser des réseaux d'influence et protéger l'e-réputation d'une organisation face à des attaques informationnelles coordonnées. Travail en équipe sur des scénarios réels de manipulation de l'information et de propagande.",
              tags: ['Cyberdéfense', 'L2I', 'Veille informationnelle', "Analyse d'influence", 'Désinformation', 'E-réputation', 'OSINT'],
              images: [],
              logo: 'https://cyberhumanumest.com/wp-content/uploads/2025/06/logo-CHE.png',
              stats: [{ label: 'Équipe gagnante', value: '🏆', icon: '⭐' }],
            },
            {
              year: '2026',
              role: 'Chargée de communication',
              company: 'Saint-Mihiel, Fierté Partagée',
              type: 'Élections municipales de 2026',
              kind: 'work' as const,
              description:
                'Stratégie de communication digitale pour la campagne municipale de Saint-Mihiel 2026. Gestion complète des réseaux sociaux, création de contenus visuels et éditoriaux, planification éditoriale, animation de communauté, modération, veille locale et analyse du contexte politique territorial. Élaboration de concepts créatifs (Une idée en 30s pour la ville), photographie, tournages vidéos, montages vidéos et production de contenus multimédias.',
              tags: ['Communication publique', 'Campagne électorale', 'Réseaux sociaux', 'Création de contenus', 'Veille locale'],
              images: saintMihielImages,
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
              kind: 'work' as const,
              description:
                'Veille stratégique, analyse web, gestion de projet digital, community management, animation de communautés, stratégie de contenu, croissance organique, publication, modération, analyse social media, storytelling visuel.',
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
              kind: 'content' as const,
              description:
                "Création et publication régulière de contenus multi-plateformes : vidéos, streams, tweets, posts visuels. Formats adaptés à chaque plateforme, montage créatif et approche orientée engagement et performance. Construction d'une communauté fidèle et développement d'une présence digitale forte.",
              tags: ['Vidéo', 'Streaming', 'Multi-plateformes', 'Créativité', 'Community Building'],
              images: [],
              stats: [
                { label: 'Abonnés totaux', value: '200K+', icon: '⭐' },
                { label: 'Vues cumulées', value: '100M+', icon: '🎯' },
              ],
            },
          ],
        }
      : {
          badge: 'EXPERIENCE',
          title: 'Professional journey',
          intro: 'A diverse and hands-on background dedicated to digital communication',
          trophyAlt: 'Cyber Humanum Est trophy',
          trophyLabel: '🏆 BEST L2I TEAM',
          moreVisuals: (count: number) => `+${count} additional visuals`,
          experiences: [
            {
              year: '2026',
              role: 'AI Project Officer',
              company: 'DATA OBSERVER',
              type: 'Internship',
              kind: 'work' as const,
              description:
                'Technology monitoring on AI tools for small and medium-sized businesses, business-needs analysis, testing, and solution assessment. Development of tailor-made software to automate and simplify everyday tasks for SME managers: administration, communication, client follow-up, and process optimization.',
              tags: ['AI', 'Software development', 'Automation', 'SMEs', 'Technology monitoring'],
              images: [],
              logo: dataObserverLogo,
              logoVariant: 'wide' as const,
              stats: [
                { label: 'Time saved per week', value: '2h+', icon: '⚡' },
                { label: 'Client productivity', value: '+20%', icon: '💎' },
              ],
            },
            {
              year: '2026',
              role: 'Cyber Humanum Est laureate',
              company: 'Cyber defense exercise',
              type: 'Exercise',
              kind: 'award' as const,
              description:
                "An intensive on-site information warfare and cyber defense exercise completed as part of my Master's degree in Strategic Intelligence. Mission: identify and counter disinformation campaigns, analyze influence networks, and protect an organization's online reputation against coordinated information attacks. Teamwork on realistic scenarios involving manipulation and propaganda.",
              tags: ['Cyber defense', 'L2I', 'Information monitoring', 'Influence analysis', 'Disinformation', 'Online reputation', 'OSINT'],
              images: [],
              logo: 'https://cyberhumanumest.com/wp-content/uploads/2025/06/logo-CHE.png',
              stats: [{ label: 'Winning team', value: '🏆', icon: '⭐' }],
            },
            {
              year: '2026',
              role: 'Communications Officer',
              company: 'Saint-Mihiel, Shared Pride',
              type: '2026 municipal election campaign',
              kind: 'work' as const,
              description:
                'Digital communication strategy for the 2026 municipal campaign in Saint-Mihiel. End-to-end management of social media, visual and editorial content creation, editorial planning, community management, moderation, local monitoring, and analysis of the territorial political context. Development of creative concepts ("An idea in 30 seconds for the city"), photography, video shoots, editing, and multimedia production.',
              tags: ['Public communication', 'Political campaign', 'Social media', 'Content creation', 'Local monitoring'],
              images: saintMihielImages,
              imagesCaption: 'A selection of visuals and thumbnails created during the campaign',
              logo: 'https://static.wixstatic.com/media/a20e89_eb4ce7e4f1a34340ade4e96ccffb0f5d~mv2.png/v1/fill/w_251,h_251,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a20e89_eb4ce7e4f1a34340ade4e96ccffb0f5d~mv2.png',
              stats: [
                { label: 'Total views', value: '300K+', icon: '👁️' },
                { label: 'New followers', value: '1 500+', icon: '👥' },
              ],
            },
            {
              year: '2025',
              role: 'Communications Officer',
              company: 'init. Creative Agency',
              type: 'Internship',
              kind: 'work' as const,
              description:
                'Strategic monitoring, web analysis, digital project management, community management, audience engagement, content strategy, organic growth, publishing, moderation, social media analysis, and visual storytelling.',
              tags: ['Community Management', 'Content strategy', 'Monitoring', 'Social Media', 'Storytelling'],
              images: [],
              logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFYxtTV9oc2Jg/company-logo_200_200/company-logo_200_200/0/1709756433429/initconseil_logo?e=2147483647&v=beta&t=mju-wZ5mzhxTGj8IQCmOxpy3gS31vQZusN6TX7kvj84',
              stats: [
                { label: 'Client views', value: '+1M', icon: '📈' },
                { label: 'Interactions on selected content', value: '+25%', icon: '🚀' },
              ],
            },
            {
              year: '2020-2026',
              role: 'Content Creation',
              company: 'TikTok, Twitter, Twitch, Instagram, YouTube',
              type: 'Professional Experience',
              kind: 'content' as const,
              description:
                'Regular creation and publication of multi-platform content: videos, streams, tweets, and visual posts. Formats adapted to each platform, creative editing, and an approach focused on engagement and performance. Built a loyal community and strengthened a strong digital presence.',
              tags: ['Video', 'Streaming', 'Multi-platform', 'Creativity', 'Community building'],
              images: [],
              stats: [
                { label: 'Total followers', value: '200K+', icon: '⭐' },
                { label: 'Total views', value: '100M+', icon: '🎯' },
              ],
            },
          ],
        };

  const experiences = copy.experiences;

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
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0, 255, 136, 0.3) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-4 inline-block">
            <div className="flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-2">
              <div className="h-2 w-2 animate-pulse bg-primary" />
              <span className="text-sm tracking-wider text-primary">{copy.badge}</span>
            </div>
          </div>
          <h2 className="mb-6 text-3xl sm:text-4xl">{copy.title}</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{copy.intro}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-8 top-0 hidden w-0.5 bg-primary/20 sm:block sm:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = getIconForKind(exp.kind);
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
                  <div className="absolute left-8 z-10 hidden h-4 w-4 -translate-x-1/2 border-4 border-background bg-primary sm:left-1/2 sm:block" />

                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="group relative">
                      <div className="border border-primary/20 bg-card/50 p-5 transition-all duration-300 hover:border-primary/40 sm:p-6">
                        <div className="absolute left-0 top-0 h-2 w-2 bg-primary" />
                        <div className="absolute right-0 top-0 h-2 w-2 bg-primary" />
                        <div className="absolute bottom-0 left-0 h-2 w-2 bg-primary" />
                        <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary" />

                        <div className="mb-4 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1">
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-sm text-primary">{exp.year}</span>
                        </div>

                        {exp.logo && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-4 flex justify-center sm:justify-start"
                          >
                            <div
                              className={`relative border-2 border-primary/30 transition-all duration-300 group-hover:border-primary/50 ${
                                isWideLogo ? 'inline-flex items-center justify-center bg-card/80 px-2.5 py-1.5' : 'h-16 w-16 bg-card p-2'
                              }`}
                            >
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className={isWideLogo ? 'h-7 w-auto max-w-[7.5rem] object-contain' : 'h-full w-full object-contain'}
                              />
                              <div className="absolute left-0 top-0 h-2 w-2 bg-primary" />
                              <div className="absolute bottom-0 right-0 h-2 w-2 bg-secondary" />
                            </div>
                          </motion.div>
                        )}

                        <h3 className="mb-2 text-lg sm:text-xl">{exp.role}</h3>
                        <div className="mb-1 text-primary">{exp.company}</div>
                        <div className="mb-4 text-sm text-muted-foreground">{exp.type}</div>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>

                        <div className={`flex flex-wrap gap-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                          {exp.tags.map((tag) => (
                            <span key={tag} className="border border-primary/20 bg-background/50 px-2 py-1 text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {exp.stats && exp.stats.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 border-t-2 border-primary/20 pt-6"
                          >
                            <div
                              className={`grid gap-4 ${
                                exp.stats.length === 1
                                  ? 'mx-auto max-w-sm grid-cols-1'
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
                                  className="group relative h-full"
                                >
                                  <div className="relative flex h-full overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 p-5 transition-all duration-300 group-hover:border-primary/60 sm:p-6">
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
                                        ease: 'easeInOut',
                                      }}
                                    />

                                    <div className="absolute left-0 top-0 h-2 w-2 bg-primary" />
                                    <div className="absolute right-0 top-0 h-2 w-2 bg-secondary" />
                                    <div className="absolute bottom-0 left-0 h-2 w-2 bg-accent" />
                                    <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary" />

                                    <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
                                      <motion.div
                                        className="mb-3 text-4xl"
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
                                        className="mb-2 font-display text-3xl text-primary"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + statIndex * 0.1 }}
                                      >
                                        {stat.value}
                                      </motion.div>
                                      <div className="flex min-h-[2.5rem] items-center font-mono text-sm text-muted-foreground">
                                        {stat.label}
                                      </div>
                                    </div>

                                    {[...Array(3)].map((_, i) => (
                                      <motion.div
                                        key={i}
                                        className="absolute h-1 w-1 bg-primary"
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

                        {exp.images && exp.images.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 border-t-2 border-primary/20 pt-6"
                          >
                            {exp.images.length === 1 ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="group relative"
                              >
                                <div className="relative mx-auto aspect-[4/3] max-w-sm overflow-hidden border-2 border-secondary/40 bg-gradient-to-br from-card via-background to-card transition-all duration-500 hover:border-secondary/70">
                                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                                  <img
                                    src={exp.images[0]}
                                    alt={copy.trophyAlt}
                                    className="relative h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                  />

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

                                  <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-secondary" />
                                  <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-accent" />
                                  <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-accent" />
                                  <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-secondary" />

                                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 border-2 border-secondary bg-secondary/90 px-4 py-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="text-xs font-mono text-secondary-foreground">{copy.trophyLabel}</span>
                                  </div>
                                </div>
                              </motion.div>
                            ) : (
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
                                    className="group relative aspect-square cursor-pointer overflow-hidden border-2 border-primary/20 bg-card transition-all duration-300 hover:border-primary/50"
                                  >
                                    <div
                                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                      style={{
                                        backgroundImage: `url(${image})`,
                                      }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="absolute left-0 top-0 h-2 w-2 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                                    <div className="absolute right-0 top-0 h-2 w-2 bg-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                                    <div className="absolute bottom-0 left-0 h-2 w-2 bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                                    <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                                  </motion.div>
                                ))}
                              </div>
                            )}
                            {exp.imagesCaption && (
                              <p className="mt-4 text-center font-mono text-xs italic text-muted-foreground">
                                {exp.imagesCaption}
                              </p>
                            )}
                            {exp.images.length > 6 && (
                              <p className="mt-3 text-center text-xs text-muted-foreground">
                                {copy.moreVisuals(exp.images.length - 6)}
                              </p>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="hidden w-[calc(50%-2rem)] sm:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

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
