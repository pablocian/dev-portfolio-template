import './assets/App.css';
import Particles from './components/Particles.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Stats from './components/Stats.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="app-shell">
      <div className="app-nebula" aria-hidden="true" />
      <div className="app-background" aria-hidden="true">
        <Particles
          particleColors={['#ffffff', '#22d3ee', '#e879f9']}
          particleCount={180}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={90}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
          className="h-full w-full"
        />
      </div>
      <div className="app-content">
        <Nav />
        <section id="top">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/40">
          <p>Licensed under MIT.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
