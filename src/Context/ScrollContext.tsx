import React, { createContext, useContext, useRef } from 'react';

type SectionKey = 'home' | 'support' | 'Testimonials' | 'BenefitsSection' | 'AboutUs';

type ScrollRefs = {
  [key in SectionKey]: React.RefObject<HTMLDivElement>;
};

type ScrollContextType = {
  refs: ScrollRefs;
  scrollTo: (key: SectionKey) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useScroll must be used within ScrollProvider');
  return ctx;
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const refs: ScrollRefs = {
    home: useRef(null),
    support: useRef(null),
    Testimonials: useRef(null),
    BenefitsSection: useRef(null),
    AboutUs: useRef(null),
  };

  const scrollTo = (key: SectionKey) => {
    refs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ refs, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
