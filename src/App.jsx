import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="glow-orb w-96 h-96 bg-primary-500 top-0 -left-48 fixed" />
      <div className="glow-orb w-96 h-96 bg-cyan-500 top-1/3 -right-48 fixed" />
      <div className="glow-orb w-64 h-64 bg-primary-700 bottom-1/4 left-1/4 fixed" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
