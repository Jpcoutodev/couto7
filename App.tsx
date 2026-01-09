import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Background from './components/Background';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <main className="relative w-full min-h-screen">
        <ScrollProgressBar />
        <Background />
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;