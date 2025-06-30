import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

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
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Hook to get current route information
  const [pendingScrollKey, setPendingScrollKey] = useState<SectionKey | null>(null); // State to store section to scroll to after navigation

  const refs: ScrollRefs = {
    home: useRef(null),
    support: useRef(null),
    Testimonials: useRef(null),
    BenefitsSection: useRef(null),
    AboutUs: useRef(null),
  };

  const scrollTo = (key: SectionKey) => {
    // Check if the current path is NOT the home page
    if (location.pathname !== '/') {
      // If not on the home page, store the target key and navigate to home
      setPendingScrollKey(key);
      navigate('/');
    } else {
      // If already on the home page, directly scroll to the section
      refs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
      setPendingScrollKey(null); // Clear any pending scroll
    }
  };

  // useEffect to handle scrolling AFTER navigation to the home page
  useEffect(() => {
    // Only attempt to scroll if there's a pending key and we are now on the home page
    if (pendingScrollKey && location.pathname === '/') {
      // Add a small delay to ensure the components (and their refs) are mounted
      // after the route change has fully rendered.
      const timer = setTimeout(() => {
        refs[pendingScrollKey]?.current?.scrollIntoView({ behavior: 'smooth' });
        setPendingScrollKey(null); // Clear the pending key once scrolled
      }, 100); // 100ms delay, adjust if needed

      // Cleanup the timeout if the component unmounts or dependencies change
      return () => clearTimeout(timer);
    }
  }, [pendingScrollKey, location.pathname, refs]); // Re-run when these dependencies change

  return (
    <ScrollContext.Provider value={{ refs, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
