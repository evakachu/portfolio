import { motion } from 'motion/react';
import {
  MessageSquare,
  Search,
  PenTool,
  Users,
  BarChart3,
  Target,
  Lightbulb,
  Heart,
  Zap,
  Eye,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from './ui/language';

const tools = [
  'Python',
  'JavaScript',
  'HTML/CSS',
  'React',
  'Node.js',
  'Git',
  'Claude AI',
  'ChatGPT',
  'Midjourney',
  'Curebot',
  'Sindup',
  'Excel',
  'XMind',
  'Gantt',
  'Trello',
  'Notion',
  'Datawrapper',
  'Power Automate Desktop',
  'Adobe Workfront',
  'Canva',
  'Photoshop',
  'CapCut',
  'Adobe Premiere Pro',
  'After Effects',
  'Sony Vegas Pro',
  'WordPress',
];

export function Skills() {
  const { language } = useLanguage();

  const copy =
    language === 'fr'
      ? {
          badge: 'COMPÉTENCES',
          title: 'Expertise & Savoir-faire',
          intro: 'Une palette complète de compétences pour vos projets digitaux',
          categories: [
            {
              title: 'Développement & IA',
              icon: Zap,
              skills: [
                'Python, JavaScript, HTML/CSS',
                'React & Node.js',
                'Développement logiciel',
                'Prompt Engineering',
                'Claude AI & ChatGPT',
                'Automatisation & IA',
              ],
            },
            {
              title: 'Communication Digitale',
              icon: MessageSquare,
              skills: [
                'Création de contenu photo/vidéo',
                'Stratégie éditoriale',
                'Community management',
                'Storytelling visuel',
                'Multi-plateformes',
                'Planification éditoriale',
              ],
            },
            {
              title: 'Veille & Analyse',
              icon: Search,
              skills: [
                'Veille stratégique',
                'Analyse concurrentielle',
                'E-réputation',
                "Analyse d'influence",
                'Détection désinformation',
                'OSINT & narratifs',
              ],
            },
            {
              title: 'Gestion de Projet',
              icon: Target,
              skills: [
                'Gestion projet digital',
                'Analyse web',
                'Croissance organique',
                'Analyse performances',
                'Stratégie de contenu',
                'Déploiement solutions',
              ],
            },
          ],
          toolsTitle: 'Outils & Technologies',
          softSkillsTitle: 'Soft Skills',
          softSkills: [
            { name: 'Créativité', icon: Lightbulb },
            { name: 'Rigueur', icon: Target },
            { name: 'Autonomie', icon: Zap },
            { name: 'Adaptabilité', icon: TrendingUp },
            { name: 'Curiosité numérique', icon: Eye },
            { name: 'Polyvalence', icon: Heart },
            { name: "Esprit d'analyse", icon: BarChart3 },
            { name: "Esprit d'équipe", icon: Users },
          ],
        }
      : {
          badge: 'SKILLS',
          title: 'Expertise & Capabilities',
          intro: 'A complete range of skills to support your digital projects',
          categories: [
            {
              title: 'Development & AI',
              icon: Zap,
              skills: [
                'Python, JavaScript, HTML/CSS',
                'React & Node.js',
                'Software development',
                'Prompt engineering',
                'Claude AI & ChatGPT',
                'Automation & AI',
              ],
            },
            {
              title: 'Digital Communication',
              icon: MessageSquare,
              skills: [
                'Photo and video content creation',
                'Editorial strategy',
                'Community management',
                'Visual storytelling',
                'Multi-platform publishing',
                'Editorial planning',
              ],
            },
            {
              title: 'Monitoring & Analysis',
              icon: Search,
              skills: [
                'Strategic monitoring',
                'Competitive analysis',
                'Online reputation',
                'Influence analysis',
                'Disinformation detection',
                'OSINT & narratives',
              ],
            },
            {
              title: 'Project Management',
              icon: Target,
              skills: [
                'Digital project management',
                'Web analysis',
                'Organic growth',
                'Performance analysis',
                'Content strategy',
                'Solution deployment',
              ],
            },
          ],
          toolsTitle: 'Tools & Technologies',
          softSkillsTitle: 'Soft Skills',
          softSkills: [
            { name: 'Creativity', icon: Lightbulb },
            { name: 'Precision', icon: Target },
            { name: 'Autonomy', icon: Zap },
            { name: 'Adaptability', icon: TrendingUp },
            { name: 'Digital curiosity', icon: Eye },
            { name: 'Versatility', icon: Heart },
            { name: 'Analytical mindset', icon: BarChart3 },
            { name: 'Team spirit', icon: Users },
          ],
        };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background py-20 sm:py-32"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91, 229, 132, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 229, 132, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          imageRendering: 'pixelated',
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-3 w-3"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              backgroundColor: i % 3 === 0 ? '#5BE584' : i % 2 === 0 ? '#6FD3FF' : '#A78BFA',
              opacity: 0.1,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
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
              <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
              <motion.div
                className="relative z-10 h-3 w-3 bg-primary"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative z-10 font-mono text-sm tracking-widest text-primary">{copy.badge}</span>
              <div className="absolute top-0 left-0 h-2 w-2 bg-primary" />
              <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary" />
            </div>
          </div>
          <h2 className="mb-6 font-display text-3xl sm:text-4xl lg:text-5xl">{copy.title}</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>
        </motion.div>

        <div className="mb-12 grid gap-6 lg:grid-cols-4">
          {copy.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative h-full overflow-hidden border-2 border-primary/20 bg-card/70 p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/40 group-hover:bg-card/90">
                <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 transition-transform duration-500 group-hover:translate-y-0" />

                <div className="absolute -top-1 -left-1 h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute -top-1 -right-1 h-4 w-4 border-r-2 border-t-2 border-secondary" />
                <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-accent" />
                <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-primary" />

                <div className="absolute top-2 left-2 h-2 w-2 bg-primary/30" />
                <div className="absolute top-2 right-2 h-1.5 w-1.5 bg-secondary/30" />

                <div className="relative mb-6 flex items-center gap-3">
                  <div className="relative flex h-12 w-12 items-center justify-center border-2 border-primary/40 bg-gradient-to-br from-primary/15 to-secondary/15 transition-all duration-300 group-hover:border-primary/60">
                    <category.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute top-0 right-0 h-2 w-2 bg-primary" />
                  </div>
                  <h3 className="font-display text-base">{category.title}</h3>
                </div>

                <div className="relative space-y-2.5">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.03 }}
                      className="group/item flex items-center gap-2.5"
                    >
                      <div className="h-1.5 w-1.5 flex-shrink-0 bg-primary transition-colors duration-200 group-hover/item:bg-secondary" />
                      <span className="text-xs leading-relaxed text-muted-foreground transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:text-foreground">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group mb-12"
        >
          <div className="relative overflow-hidden border-2 border-secondary/30 bg-card/50 p-6 backdrop-blur-sm">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="absolute top-0 left-0 h-6 w-6 border-l-2 border-t-2 border-secondary" />
            <div className="absolute top-0 right-0 h-6 w-6 border-r-2 border-t-2 border-secondary" />
            <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-secondary" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-secondary" />

            <div className="relative mb-6 flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center border-2 border-secondary/40 bg-secondary/15">
                <PenTool className="h-6 w-6 text-secondary" />
                <div className="absolute top-0 left-0 h-2 w-2 bg-secondary" />
              </div>
              <h3 className="font-display text-base">{copy.toolsTitle}</h3>
            </div>

            <div className="relative flex flex-wrap gap-2.5">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.04 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group/tool relative cursor-default overflow-hidden border-2 border-secondary/25 bg-background/70 px-4 py-2 transition-all duration-300 hover:border-secondary/50 hover:bg-secondary/10"
                >
                  <div className="absolute inset-0 translate-x-[-100%] bg-secondary/5 transition-transform duration-300 group-hover/tool:translate-x-0" />
                  <span className="relative z-10 font-mono text-sm">{tool}</span>
                  <div className="absolute top-0 right-0 h-1.5 w-1.5 bg-secondary opacity-0 transition-opacity group-hover/tool:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group"
        >
          <div className="relative overflow-hidden border-2 border-accent/30 bg-card/50 p-6 backdrop-blur-sm">
            <div className="absolute top-0 left-0 h-6 w-6 border-l-2 border-t-2 border-accent" />
            <div className="absolute top-0 right-0 h-6 w-6 border-r-2 border-t-2 border-accent" />
            <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-accent" />

            <div className="relative mb-6 flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center border-2 border-accent/40 bg-accent/15">
                <Heart className="h-6 w-6 text-accent" />
                <div className="absolute bottom-0 right-0 h-2 w-2 bg-accent" />
              </div>
              <h3 className="font-display text-base">{copy.softSkillsTitle}</h3>
            </div>

            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
              {copy.softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.04 }}
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  className="group/skill relative"
                >
                  <div className="relative overflow-hidden border-2 border-accent/20 bg-background/60 p-4 text-center transition-all duration-300 hover:border-accent/50 hover:bg-accent/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/skill:opacity-100" />

                    <skill.icon className="relative z-10 mx-auto mb-2.5 h-6 w-6 text-accent transition-transform duration-300 group-hover/skill:scale-110" />
                    <span className="relative z-10 block text-xs">{skill.name}</span>

                    <div className="absolute top-0 left-0 h-1.5 w-1.5 bg-accent/50" />
                    <div className="absolute bottom-0 right-0 h-1.5 w-1.5 bg-accent/50" />

                    <motion.div
                      className="absolute top-1 right-1 h-2 w-2 border-r border-t border-accent opacity-0 group-hover/skill:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
