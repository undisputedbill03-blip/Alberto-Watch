import { useState, useEffect } from 'react';
import { Bookmark, Calendar, Phone, Menu, X, Radio } from 'lucide-react';

const NAV_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'technology', label: 'Technology' },
  { id: 'pricelist', label: 'Price List' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'store', label: 'Store Locator' },
  { id: 'support', label: 'Support' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({
  activeSection,
  onNavClick,
  visitorCount = 12480,
  savedCount = 0,
  onOpenWishlist,
  onOpenAppointment,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    onNavClick(id);
    setMobileOpen(false);
  };

  return (
    <header className="header-wrapper">
      {/* Top Editorial Announcement Bar */}
      <div className="top-announcement-bar" role="region" aria-label="Atelier notices">
        <div className="container announcement-inner">
          <div className="announcement-left">
            <span className="announcement-dot" aria-hidden="true" />
            <span>Authorized Dealer: Rolex · Michael Kors · Citizen · Bulova · Manhattan Atelier Est. 1987</span>
          </div>
          <div className="announcement-right">
            <a href="tel:+12125550194" className="announcement-link">
              <Phone size={12} aria-hidden="true" />
              <span>+1 (212) 555-0194</span>
            </a>
            <span className="announcement-separator" aria-hidden="true">|</span>
            <button
              type="button"
              className="announcement-btn"
              onClick={() => onOpenAppointment && onOpenAppointment()}
            >
              Book Private Salon Viewing
            </button>
          </div>
        </div>
      </div>

      {/* Main Luxury Navbar */}
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container navbar-inner">
          {/* Brand Mark */}
          <button
            type="button"
            className="navbar-brand"
            onClick={() => handleLinkClick('home')}
            aria-label="Alberto Watch Company, return to Home"
          >
            <img src="/watch_logo.png" alt="" className="brand-crest" aria-hidden="true" />
            <div className="brand-text">
              <span className="brand-name">Alberto</span>
              <span className="brand-tagline">WATCH COMPANY</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`} role="menubar">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id} role="none">
                <button
                  type="button"
                  id={`nav-${s.id}`}
                  className={`nav-link ${activeSection === s.id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(s.id)}
                  role="menuitem"
                  aria-current={activeSection === s.id ? 'page' : undefined}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="navbar-controls">
            {/* Live Visitor / Atelier Activity Indicator */}
            <div className="visitor-pill" aria-label={`${visitorCount.toLocaleString()} visitors recorded`}>
              <Radio size={12} className="visitor-dot-icon" aria-hidden="true" />
              <span>{visitorCount.toLocaleString()} Visitors</span>
            </div>

            {/* Saved References Button */}
            <button
              type="button"
              className="btn-saved-references"
              onClick={onOpenWishlist}
              aria-label={`Saved references, ${savedCount} watches shortlisted`}
              title="View your saved curation"
            >
              <Bookmark size={14} aria-hidden="true" />
              <span className="saved-text">Saved</span>
              <span className="saved-count-pill">{savedCount}</span>
            </button>

            {/* Book Viewing Button */}
            <button
              type="button"
              className="btn btn-gold btn-appointment-nav"
              onClick={() => onOpenAppointment && onOpenAppointment()}
            >
              <Calendar size={13} aria-hidden="true" />
              <span>Book Viewing</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className={`hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
