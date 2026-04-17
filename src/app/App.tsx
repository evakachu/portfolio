import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experiences } from './components/Experiences';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LayoutModeProvider } from './components/ui/layout-mode';
import { LanguageProvider } from './components/ui/language';

export default function App() {
  return (
    <LanguageProvider>
      <LayoutModeProvider>
        <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experiences />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </LayoutModeProvider>
    </LanguageProvider>
  );
}
