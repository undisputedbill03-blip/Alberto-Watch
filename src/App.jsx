import { useState, useEffect, useRef, useCallback } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Technology from './components/Technology';
import PriceList from './components/PriceList';
import Gallery from './components/Gallery';
import StoreLocator from './components/StoreLocator';
import Support from './components/Support';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import WishlistDrawer from './components/WishlistDrawer';
import AppointmentModal from './components/AppointmentModal';

// Visitor counter via localStorage / sessionStorage per original specification
function getVisitorCount() {
  const key = 'alberto_visitor_count';
  try {
    const visited = sessionStorage.getItem('alberto_session_counted');
    let count = parseInt(localStorage.getItem(key) || '12480', 10);

    if (!visited) {
      count += 1;
      localStorage.setItem(key, count.toString());
      sessionStorage.setItem('alberto_session_counted', '1');
    }
    return count;
  } catch {
    return 12480;
  }
}

const SECTION_IDS = [
  'home',
  'products',
  'technology',
  'pricelist',
  'gallery',
  'store',
  'support',
  'about',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [visitorCount] = useState(getVisitorCount);

  // Private Collection shortlist (persistent in localStorage)
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = localStorage.getItem('alberto_saved_references');
      return stored ? JSON.parse(stored) : [1, 9];
    } catch {
      return [1, 9];
    }
  });

  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [appointmentWatch, setAppointmentWatch] = useState(null);
  const [appointmentSalonId, setAppointmentSalonId] = useState(null);
  const [conciergeWatch, setConciergeWatch] = useState(null);

  const observerRef = useRef(null);

  // Synchronize saved references with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('alberto_saved_references', JSON.stringify(savedIds));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [savedIds]);

  const handleToggleSave = useCallback((id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const handleRemoveSaved = useCallback((id) => {
    setSavedIds((prev) => prev.filter((item) => item !== id));
  }, []);

  const handleClearSaved = useCallback(() => {
    setSavedIds([]);
  }, []);

  const handleOpenAppointment = useCallback((watch = null, salonId = null) => {
    setAppointmentWatch(watch);
    setAppointmentSalonId(salonId);
    setAppointmentOpen(true);
  }, []);

  const handleCloseAppointment = useCallback(() => {
    setAppointmentOpen(false);
    setAppointmentWatch(null);
    setAppointmentSalonId(null);
  }, []);

  // Smooth scroll to target section with navbar offset compensation
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleOpenConcierge = useCallback((watch) => {
    setConciergeWatch(watch);
    scrollToSection('contact');
  }, [scrollToSection]);

  // Section observer for active navbar highlighting
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // IntersectionObserver for elements entering viewport
  useEffect(() => {
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach((el) => animObserver.observe(el));

    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach((el) => {
        animObserver.observe(el);
      });
    }, 400);

    return () => {
      animObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="alberto-app-wrapper">
      {/* 1. Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavClick={scrollToSection}
        visitorCount={visitorCount}
        savedCount={savedIds.length}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Main Content Sections (matching initial specifications) */}
      <main id="main-content" role="main">
        {/* 2. Hero Section */}
        <Hero
          onNavClick={scrollToSection}
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 3. Products Section */}
        <Products
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onOpenAppointment={handleOpenAppointment}
          onOpenConcierge={handleOpenConcierge}
        />

        {/* 4. Technology Section */}
        <Technology
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 5. Complete Price List Section */}
        <PriceList
          onSelectWatch={(watch) => handleOpenAppointment(watch)}
        />

        {/* 6. Gallery Section */}
        <Gallery />

        {/* 7. Store Locator Section */}
        <StoreLocator
          onOpenAppointment={(watch, salonId) => handleOpenAppointment(watch, salonId)}
        />

        {/* 8. Customer Support & FAQ Section */}
        <Support
          onNavClick={scrollToSection}
        />

        {/* 9. About Us Section */}
        <About
          onOpenAppointment={() => handleOpenAppointment()}
          onNavClick={scrollToSection}
        />

        {/* 10. Contact Section */}
        <Contact
          prefilledWatch={conciergeWatch}
        />
      </main>

      {/* 11. Footer Section */}
      <Footer
        onNavClick={scrollToSection}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* 12. Classical Live Horological Ticker at Bottom */}
      <Ticker />

      {/* 13. Interactive Slide-out Shortlist / Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        savedIds={savedIds}
        onRemove={handleRemoveSaved}
        onClear={handleClearSaved}
        onOpenAppointment={(watch) => handleOpenAppointment(watch)}
      />

      {/* 14. Private Salon Viewing & Consultation Modal */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={handleCloseAppointment}
        preselectedWatch={appointmentWatch}
        preselectedSalonId={appointmentSalonId}
      />
    </div>
  );
}
