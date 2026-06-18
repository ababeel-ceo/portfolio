import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import WhyHireMe from './components/WhyHireMe';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <CaseStudies />
        <Skills />
        <Achievements />
        <WhyHireMe />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
