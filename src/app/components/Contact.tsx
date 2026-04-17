import { motion } from 'motion/react';
import { Mail, MapPin, Send, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { PixelInput, PixelTextarea } from './PixelInput';
import { PixelButton } from './PixelButton';
import { useLayoutMode } from './ui/layout-mode';
import { useLanguage } from './ui/language';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/evacmn@outlook.fr';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: '',
  });
  const { isMobileLayout, detectedMobile } = useLayoutMode();
  const { language } = useLanguage();
  const compactLayout = detectedMobile || isMobileLayout;

  const copy =
    language === 'fr'
      ? {
          sectionBadge: 'CONTACT',
          title: 'Travaillons ensemble',
          intro: "Un projet, une question ou simplement envie d'échanger ? Je serais ravie de vous répondre !",
          contactTitle: 'Informations de contact',
          socialTitle: 'Réseaux sociaux',
          availabilityTitle: 'Disponible pour des opportunités',
          availabilityText:
            'Je suis actuellement ouverte aux collaborations, missions freelance et opportunités professionnelles en communication digitale et veille stratégique.',
          formTitle: 'Envoyez-moi un message',
          labels: {
            email: 'Email',
            location: 'Localisation',
            name: 'Nom',
            message: 'Message',
          },
          placeholders: {
            name: 'Votre nom',
            email: 'votre.email@exemple.com',
            message: 'Décrivez votre projet ou votre demande...',
          },
          submitIdle: 'Envoyer le message',
          submitLoading: 'Envoi en cours...',
          mailSubjectPrefix: 'Contact depuis le portfolio',
          apiSubjectPrefix: 'Nouveau message depuis le portfolio',
          mailBody: (name: string, email: string, message: string) =>
            `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          success: 'Votre message a bien été envoyé. Je vous répondrai rapidement.',
          genericError: "L'envoi automatique a échoué.",
          activationError:
            "Le formulaire attend encore une activation unique côté réception. Je vous ouvre votre application mail avec le message prérempli.",
          fallbackError:
            "L'envoi automatique a échoué. Je vous ouvre votre application mail avec le message prérempli.",
          hiddenCompanyLabel: 'Entreprise',
          contactInfo: [
            {
              icon: Mail,
              label: 'Email',
              value: 'evacmn@outlook.fr',
              href: 'mailto:evacmn@outlook.fr',
            },
            {
              icon: MapPin,
              label: 'Localisation',
              value: 'Nancy & Paris, France',
              href: null,
            },
          ],
        }
      : {
          sectionBadge: 'CONTACT',
          title: "Let's work together",
          intro: 'A project, a question, or simply a conversation? I would be happy to hear from you.',
          contactTitle: 'Contact details',
          socialTitle: 'Social links',
          availabilityTitle: 'Open to opportunities',
          availabilityText:
            'I am currently open to collaborations, freelance work, and professional opportunities in digital communication and strategic intelligence.',
          formTitle: 'Send me a message',
          labels: {
            email: 'Email',
            location: 'Location',
            name: 'Name',
            message: 'Message',
          },
          placeholders: {
            name: 'Your name',
            email: 'your.email@example.com',
            message: 'Tell me about your project or request...',
          },
          submitIdle: 'Send message',
          submitLoading: 'Sending...',
          mailSubjectPrefix: 'Portfolio contact',
          apiSubjectPrefix: 'New portfolio message',
          mailBody: (name: string, email: string, message: string) =>
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          success: 'Your message has been sent successfully. I will get back to you shortly.',
          genericError: 'Automatic sending failed.',
          activationError:
            'The form still needs a one-time inbox-side activation. I am opening your email app with a pre-filled message.',
          fallbackError:
            'Automatic sending failed. I am opening your email app with a pre-filled message.',
          hiddenCompanyLabel: 'Company',
          contactInfo: [
            {
              icon: Mail,
              label: 'Email',
              value: 'evacmn@outlook.fr',
              href: 'mailto:evacmn@outlook.fr',
            },
            {
              icon: MapPin,
              label: 'Location',
              value: 'Nancy & Paris, France',
              href: null,
            },
          ],
        };

  const createMailtoLink = () =>
    `mailto:evacmn@outlook.fr?subject=${encodeURIComponent(
      `${copy.mailSubjectPrefix} - ${formData.name}`
    )}&body=${encodeURIComponent(copy.mailBody(formData.name, formData.email, formData.message))}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitState({ type: 'idle', message: '' });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `${copy.apiSubjectPrefix} - ${formData.name}`,
          _replyto: formData.email,
          _template: 'table',
          _honey: honeypot,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false || result?.success === 'false') {
        throw new Error(result?.message || copy.genericError);
      }

      setSubmitState({
        type: 'success',
        message: copy.success,
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setHoneypot('');
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : copy.genericError;
      const activationNeeded = /activation/i.test(message);

      setSubmitState({
        type: 'error',
        message: activationNeeded ? copy.activationError : copy.fallbackError,
      });
      window.location.href = createMailtoLink();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background py-20 sm:py-32"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91, 229, 132, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 229, 132, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          imageRendering: 'pixelated',
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: '6px',
              height: '6px',
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 60}%`,
              backgroundColor: i % 3 === 0 ? '#5BE584' : i % 2 === 0 ? '#6FD3FF' : '#A78BFA',
              opacity: 0.1,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05],
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
                }}
              />
              <span className="relative z-10 font-mono text-sm tracking-widest text-primary">{copy.sectionBadge}</span>
              <div className="absolute top-0 left-0 h-2 w-2 bg-primary" />
              <div className="absolute bottom-0 right-0 h-2 w-2 bg-primary" />
            </div>
          </div>
          <h2 className="mb-6 font-display text-3xl sm:text-4xl lg:text-5xl">{copy.title}</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 space-y-6 lg:order-1"
          >
            <div>
              <h3 className="mb-6 text-xl">{copy.contactTitle}</h3>
              <div className="space-y-4">
                {copy.contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-start gap-4 border border-primary/20 bg-card/50 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-primary/30 bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="mb-1 text-sm text-muted-foreground">{item.label}</div>
                          <div className="transition-colors group-hover:text-primary">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 border border-primary/20 bg-card/50 p-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-primary/30 bg-primary/10">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="mb-1 text-sm text-muted-foreground">{item.label}</div>
                          <div>{item.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-primary/20 bg-card/30 p-6"
            >
              <h4 className="mb-4">{copy.socialTitle}</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/eva-commenne-7673b538a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/10 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-primary/30 bg-primary/10 p-6"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1.5 h-3 w-3 animate-pulse rounded-full bg-primary" />
                <div>
                  <h4 className="mb-2 text-primary">{copy.availabilityTitle}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{copy.availabilityText}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className={`relative border border-primary/20 bg-card/50 ${compactLayout ? 'p-6' : 'p-8'}`}>
              <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary" />

              <h3 className="mb-6 text-xl">{copy.formTitle}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">{copy.hiddenCompanyLabel}</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-mono">
                    {copy.labels.name}
                  </label>
                  <PixelInput
                    type="text"
                    name="name"
                    placeholder={copy.placeholders.name}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-mono">
                    {copy.labels.email}
                  </label>
                  <PixelInput
                    type="email"
                    name="email"
                    placeholder={copy.placeholders.email}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-mono">
                    {copy.labels.message}
                  </label>
                  <PixelTextarea
                    name="message"
                    placeholder={copy.placeholders.message}
                    value={formData.message}
                    onChange={handleTextareaChange}
                    required
                    rows={6}
                  />
                </div>

                <PixelButton
                  type="submit"
                  variant="primary"
                  className="w-full justify-center"
                  disabled={isSubmitting}
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? copy.submitLoading : copy.submitIdle}</span>
                </PixelButton>

                {submitState.type !== 'idle' && (
                  <div
                    className={`border px-4 py-3 text-sm leading-relaxed ${
                      submitState.type === 'success'
                        ? 'border-primary/30 bg-primary/10 text-primary'
                        : 'border-secondary/30 bg-card/60 text-muted-foreground'
                    }`}
                    aria-live="polite"
                  >
                    {submitState.message}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
