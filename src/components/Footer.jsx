import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';

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

const SERVICES = [
  'Watch Repair & Restoration',
  'Appraisal & Valuation',
  'Battery Replacement',
  'Strap & Bracelet Fitting',
  'Crystal Replacement',
  'Water Resistance Testing',
  'Movement Overhaul',
  'Engraving Services',
];

const BRANDS = ['Rolex', 'Citizen', 'Bulova', 'Michael Kors', 'Alberto Originals'];

export default function Footer({ onNavClick, onOpenAppointment }) {
  const currentYear = 2026;

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col-brand">
            <div className="footer-brand-logo">
              <img src="/watch_logo.png" alt="Alberto Watch Company Logo" width="36" height="36" />
              <span className="footer-brand-name">Alberto Watch Company</span>
            </div>
            <p className="footer-brand-desc">
              Premier destination for luxury timepieces, expert watch repair, and certified appraisals since 1987.
              Authorized dealer for Rolex, Michael Kors, Citizen, and Bulova.
            </p>
            <div className="footer-social" aria-label="Social media links">
              {[
                { label: 'Instagram', Icon: InstagramIcon },
                { label: 'Facebook', Icon: FacebookIcon },
                { label: 'Twitter', Icon: TwitterIcon },
                { label: 'YouTube', Icon: YoutubeIcon },
              ].map((s) => {
                const SocIcon = s.Icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    id={`footer-social-${s.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    aria-label={`Alberto Watch on ${s.label}`}
                    title={s.label}
                  >
                    <SocIcon size={16} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Sitemap Column */}
          <div className="footer-col">
            <h4>Sitemap</h4>
            <ul className="footer-links" aria-label="Site navigation">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    id={`footer-nav-${s.id}`}
                    onClick={() => onNavClick(s.id)}
                    aria-label={`Navigate to ${s.label}`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              {SERVICES.map((s, idx) => (
                <li key={idx}>
                  <a href="#support" onClick={() => onNavClick('support')}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-links footer-contact-list">
              <li>
                <a href="mailto:info@albertowatch.com" className="footer-contact-item">
                  <Mail size={14} className="gold-icon" aria-hidden="true" />
                  <span>info@albertowatch.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+12125550194" className="footer-contact-item">
                  <Phone size={14} className="gold-icon" aria-hidden="true" />
                  <span>+1 (212) 555-0194</span>
                </a>
              </li>
              <li>
                <span className="footer-contact-item text-muted">
                  <MapPin size={14} className="gold-icon" aria-hidden="true" />
                  <span>142 Fifth Ave, New York, NY</span>
                </span>
              </li>
              <li>
                <span className="footer-contact-item text-muted">
                  <Clock size={14} className="gold-icon" aria-hidden="true" />
                  <span>Mon–Sat: 9am–8pm</span>
                </span>
              </li>
            </ul>

            {/* Brand Badges */}
            <div className="footer-brand-pills">
              {BRANDS.map((brand) => (
                <span key={brand} className="footer-brand-badge">
                  {brand}
                </span>
              ))}
            </div>

            {onOpenAppointment && (
              <div style={{ marginTop: '1.25rem' }}>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={onOpenAppointment}
                >
                  Book Private Viewing
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} Alberto Watch Company. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Service</a>
            <span>·</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
