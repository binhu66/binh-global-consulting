import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Sectors } from './components/Sectors';
import { WhyUs } from './components/WhyUs';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { TestimonialList } from './components/TestimonialList';
import { AboutPage } from './components/AboutPage';
import { CareersPage } from './components/CareersPage';
import { ExhibitionsPage } from './components/ExhibitionsPage';
import { TestimonialDetails } from './components/TestimonialDetails';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { StockTicker } from './components/StockTicker';
import { LanguageProvider, useLanguage } from './LanguageContext';

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const AppContent = () => {
  const { isContactOpen, setContactOpen, language } = useLanguage();

  useEffect(() => {
    if (language === 'zh') {
      document.title = "宾海国际咨询 - 专业战略咨询与市场准入";
    } else {
      document.title = "Binh Global - Professional Strategic Consulting & Market Entry";
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <ScrollToHash />
      <Navbar />
      <StockTicker />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Services />
            <Sectors />
            <WhyUs />
            <Team />
            <Testimonials />
          </main>
        } />
        <Route path="/cases" element={<TestimonialList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/cases/:id" element={<TestimonialDetails />} />
        <Route path="/exhibitions" element={<ExhibitionsPage />} />
      </Routes>
      <Footer />
      <ChatWidget />
      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;