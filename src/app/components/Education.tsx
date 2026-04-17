import { motion } from 'motion/react';
import { GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from './ui/language';

export function Education() {
  const { language } = useLanguage();

  const copy =
    language === 'fr'
      ? {
          badge: 'FORMATION & LANGUES',
          title: 'Parcours académique',
          intro: 'Formation spécialisée et compétences linguistiques',
          educationTitle: 'Formation',
          languagesTitle: 'Langues',
          internationalNote:
            "Capacité à intervenir dans des environnements internationaux et multiculturels, avec une maîtrise bilingue permettant d'évoluer avec fluidité auprès d'interlocuteurs variés.",
          education: [
            {
              degree: 'Master Veille Stratégique et Organisation des Connaissances',
              school: 'Université de Lorraine',
              period: '2025 – 2027',
              description:
                'Spécialisation en veille stratégique, analyse informationnelle, organisation des connaissances et intelligence économique.',
              status: 'En cours',
            },
            {
              degree: 'Licence Information-Communication',
              school: 'Université de Lorraine',
              period: '2022 – 2025',
              description:
                'Formation complète en communication digitale, stratégies éditoriales et médias numériques.',
              status: 'Diplômée',
            },
          ],
          languages: [
            { name: 'Français', level: 'Langue maternelle', proficiency: 100 },
            { name: 'Anglais', level: 'Bilingue', proficiency: 100 },
            { name: 'Allemand', level: 'Notions', proficiency: 30 },
            { name: 'Espagnol', level: 'Notions', proficiency: 20 },
          ],
        }
      : {
          badge: 'EDUCATION & LANGUAGES',
          title: 'Academic background',
          intro: 'Specialized education and language skills',
          educationTitle: 'Education',
          languagesTitle: 'Languages',
          internationalNote:
            'Able to operate in international and multicultural environments, with bilingual fluency that allows me to engage naturally with a wide range of stakeholders.',
          education: [
            {
              degree: "Master's Degree in Strategic Intelligence and Knowledge Organization",
              school: 'University of Lorraine',
              period: '2025 – 2027',
              description:
                'Specialization in strategic monitoring, information analysis, knowledge organization, and competitive intelligence.',
              status: 'Ongoing',
            },
            {
              degree: "Bachelor's Degree in Information and Communication",
              school: 'University of Lorraine',
              period: '2022 – 2025',
              description:
                'Comprehensive training in digital communication, editorial strategy, and digital media.',
              status: 'Graduated',
            },
          ],
          languages: [
            { name: 'French', level: 'Native language', proficiency: 100 },
            { name: 'English', level: 'Bilingual', proficiency: 100 },
            { name: 'German', level: 'Basic knowledge', proficiency: 30 },
            { name: 'Spanish', level: 'Basic knowledge', proficiency: 20 },
          ],
        };

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-b from-card/20 via-background to-card/20 py-20 sm:py-32"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(111, 211, 255, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(111, 211, 255, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          imageRendering: 'pixelated',
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: i % 2 === 0 ? '4px' : '6px',
              height: i % 2 === 0 ? '4px' : '6px',
              left: `${5 + i * 10}%`,
              top: `${15 + (i % 4) * 20}%`,
              backgroundColor: i % 3 === 0 ? '#5BE584' : i % 2 === 0 ? '#6FD3FF' : '#A78BFA',
              opacity: 0.15,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
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
            <div className="group relative flex items-center gap-3 overflow-hidden border-2 border-secondary/40 bg-card/80 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-secondary/60">
              <div className="absolute inset-0 bg-secondary/5 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
              <motion.div
                className="relative z-10 h-3 w-3 bg-secondary"
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
              <span className="relative z-10 font-mono text-sm tracking-widest text-secondary">{copy.badge}</span>
              <div className="absolute top-0 left-0 h-2 w-2 bg-secondary" />
              <div className="absolute bottom-0 right-0 h-2 w-2 bg-secondary" />
            </div>
          </div>
          <h2 className="mb-6 font-display text-3xl sm:text-4xl lg:text-5xl">{copy.title}</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="relative mb-6 flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center border-2 border-primary/40 bg-primary/15">
                <GraduationCap className="h-5 w-5 text-primary" />
                <div className="absolute top-0 right-0 h-2 w-2 bg-primary" />
              </div>
              <h3 className="font-display text-xl">{copy.educationTitle}</h3>
            </div>

            <div className="flex flex-col gap-4">
              {copy.education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative overflow-hidden border-2 border-primary/20 bg-card/70 p-4 backdrop-blur-sm transition-all duration-500 hover:border-primary/40">
                    <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 transition-transform duration-500 group-hover:translate-y-0" />

                    <div className="absolute -top-1 -left-1 h-4 w-4 border-l-2 border-t-2 border-primary" />
                    <div className="absolute -top-1 -right-1 h-4 w-4 border-r-2 border-t-2 border-secondary" />
                    <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-accent" />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-primary" />

                    <div className="relative mb-2.5 flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="mb-1.5 text-base">{edu.degree}</h4>
                        <div className="mb-1 text-sm text-primary">{edu.school}</div>
                        <div className="text-sm text-muted-foreground">{edu.period}</div>
                      </div>
                      <div
                        className={`relative border-2 px-3 py-1 text-xs ${
                          edu.status === 'En cours' || edu.status === 'Ongoing'
                            ? 'border-primary/40 bg-primary/15 text-primary'
                            : 'border-primary/20 bg-background/70 text-muted-foreground'
                        }`}
                      >
                        <span className="relative z-10">{edu.status}</span>
                        {(edu.status === 'En cours' || edu.status === 'Ongoing') && (
                          <motion.div
                            className="absolute right-1 top-1 h-1.5 w-1.5 bg-primary"
                            animate={{
                              opacity: [1, 0.3, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <p className="relative text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="relative mb-6 flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center border-2 border-secondary/40 bg-secondary/15">
                <Globe className="h-5 w-5 text-secondary" />
                <div className="absolute top-0 right-0 h-2 w-2 bg-secondary" />
              </div>
              <h3 className="font-display text-xl">{copy.languagesTitle}</h3>
            </div>

            <div className="flex flex-col gap-4">
              {copy.languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative border-2 border-secondary/20 bg-card/60 p-4 backdrop-blur-sm transition-all duration-500 hover:border-secondary/40">
                    <div className="absolute left-0 top-0 h-2 w-2 bg-secondary opacity-50 transition-opacity group-hover:opacity-100" />
                    <div className="absolute right-0 top-0 h-2 w-2 bg-accent opacity-50 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 h-2 w-2 bg-accent opacity-50 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 right-0 h-2 w-2 bg-secondary opacity-50 transition-opacity group-hover:opacity-100" />

                    <div className="relative mb-2.5 flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-medium">{lang.name}</h4>
                        <span className="text-xs text-muted-foreground">{lang.level}</span>
                      </div>
                      <motion.span
                        className="font-mono text-sm text-secondary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {lang.proficiency}%
                      </motion.span>
                    </div>

                    <div className="relative h-3 overflow-hidden border-2 border-secondary/30 bg-background/70">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                        className="relative h-full bg-gradient-to-r from-secondary via-accent to-secondary"
                        style={{
                          boxShadow: '0 0 12px rgba(111, 211, 255, 0.6)',
                          backgroundSize: '200% 100%',
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>

                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(15, 17, 21, 0.4) 3px, rgba(15, 17, 21, 0.4) 4px)',
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative mx-auto max-w-3xl"
        >
          <div className="relative overflow-hidden border-2 border-accent/40 bg-gradient-to-br from-accent/10 via-card/60 to-accent/5 p-4 backdrop-blur-sm transition-all duration-500 hover:border-accent/50">
            <div className="absolute -top-1 -left-1 h-4 w-4 border-l-2 border-t-2 border-accent" />
            <div className="absolute -top-1 -right-1 h-4 w-4 border-r-2 border-t-2 border-accent" />
            <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-accent" />
            <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-accent" />

            <div className="relative flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-foreground">{copy.internationalNote}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
