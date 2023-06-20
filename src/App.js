import './App.css';
import { Navbar, About, Hero, WhatIdo, Projects, Skills, Contact } from './components/sections';

function App() {
  return (
    <div>
      <div className='hero-section'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <WhatIdo />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
