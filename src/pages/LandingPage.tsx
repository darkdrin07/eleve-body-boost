
import React from 'react';
import { formatDate } from '../utils/dateUtils';
import HeroSection from '../components/landing/HeroSection';
import IntroductionSection from '../components/landing/IntroductionSection';
import PricingSection from '../components/landing/PricingSection';
import GuaranteeSection from '../components/landing/GuaranteeSection';
import FooterSection from '../components/landing/FooterSection';
import AboutMethodSection from '../components/landing/AboutMethodSection';
import ValueAnchoringSection from '../components/landing/ValueAnchoringSection';
import ResultsSection from '../components/landing/ResultsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import FAQSection from '../components/landing/FAQSection';

const LandingPage: React.FC = () => {
  const handlePlanClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  const dataOferta = formatDate(new Date());

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onScrollToSection={(sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 80;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }} />
      <IntroductionSection />
      <AboutMethodSection />
      <ValueAnchoringSection />
      <ResultsSection />
      <TestimonialsSection />
      <PricingSection dataOferta={dataOferta} onPlanClick={handlePlanClick} />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
