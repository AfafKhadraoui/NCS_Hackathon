import React from 'react';
import LandingPage from '../Components/Landing/LandingPage.tsx';
import Support from '../Components/support/support.tsx';
import { useScroll } from '../Context/ScrollContext.tsx';
import Testimonials from '../Components/Testimonials/Testimonials.tsx';
import BenefitsSection from '../Components/BenefitSection/BenefitSection.tsx';
import AboutUs from '../Components/About/AboutUs.tsx';
const Home: React.FC = () => {
  const { refs } = useScroll();

  return (
    <>
      <div ref={refs.home}><LandingPage /></div>
      <div ref={refs.AboutUs}><AboutUs /></div>
      <div ref={refs.BenefitsSection}><BenefitsSection /></div>
      <div ref={refs.support}><Support /></div>
      <div ref={refs.Testimonials}><Testimonials /></div>
      {/* Add other sections later */}
    </>
  );
};

export default Home;
