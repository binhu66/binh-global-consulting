import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Team } from './components/Team';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <Team />
          <Partners />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </LanguageProvider>
  );
}

export default App;