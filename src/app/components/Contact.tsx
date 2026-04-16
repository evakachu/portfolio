import { motion } from 'motion/react';
import { Mail, MapPin, Send, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { PixelInput, PixelTextarea } from './PixelInput';
import { PixelButton } from './PixelButton';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/evacmn@outlook.fr';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'evacmn@outlook.fr',
    href: 'mailto:evacmn@outlook.fr',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Nancy, France',
    href: null,
  },
];

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
          _subject: `Nouveau message depuis le portfolio - ${formData.name}`,
          _replyto: formData.email,
          _template: 'table',
          _honey: honeypot,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false || result?.success === 'false') {
        throw new Error(result?.message || 'L’envoi du message a échoué.');
      }

      setSubmitState({
        type: 'success',
        message: 'Votre message a bien été envoyé. Je vous répondrai rapidement.',
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setHoneypot('');
    } catch (error) {
      console.error(error);
      setSubmitState({
        type: 'error',
        message: "L'envoi automatique a échoué. Vous pouvez réessayer ou utiliser mon adresse email affichée à gauche.",
      });
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
    <section id="contact" className="py-20 sm:py-32 relative bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(91, 229, 132, 0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(91, 229, 132, 0.6) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        imageRendering: 'pixelated',
      }} />

      {/* Floating voxels */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="relative flex items-center gap-3 px-6 py-3 bg-card/80 border-2 border-primary/40 backdrop-blur-sm overflow-hidden group hover:border-primary/60 transition-all duration-300">
              <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <motion.div
                className="w-3 h-3 bg-primary relative z-10"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="text-sm text-primary tracking-widest font-mono relative z-10">CONTACT</span>
              <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-display">
            Travaillons ensemble
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un projet, une question ou simplement envie d&apos;échanger ? Je serais ravie de vous répondre !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl mb-6">Informations de contact</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
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
                        className="group flex items-start gap-4 p-4 bg-card/50 border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                          <div className="group-hover:text-primary transition-colors">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 bg-card/50 border border-primary/20">
                        <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                          <div>{item.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-card/30 border border-primary/20"
            >
              <h4 className="mb-4">Réseaux sociaux</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/eva-commenne-7673b538a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-primary/10 border border-primary/30"
            >
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse mt-1.5" />
                <div>
                  <h4 className="mb-2 text-primary">Disponible pour des opportunités</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Je suis actuellement ouverte aux collaborations, missions freelance et opportunités professionnelles
                    en communication digitale et veille stratégique.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 bg-card/50 border border-primary/20">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

              <h3 className="text-xl mb-6">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
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
                  <label htmlFor="name" className="block text-sm mb-2 font-mono">
                    Nom
                  </label>
                  <PixelInput
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 font-mono">
                    Email
                  </label>
                  <PixelInput
                    type="email"
                    name="email"
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 font-mono">
                    Message
                  </label>
                  <PixelTextarea
                    name="message"
                    placeholder="Décrivez votre projet ou votre demande..."
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
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                </PixelButton>

                {submitState.type !== 'idle' && (
                  <div
                    className={`border px-4 py-3 text-sm leading-relaxed ${
                      submitState.type === 'success'
                        ? 'bg-primary/10 border-primary/30 text-primary'
                        : 'bg-card/60 border-secondary/30 text-muted-foreground'
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
