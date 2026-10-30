import { Gem, CalendarClock, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';

export default function Hero({ onNavClick, onOpenAppointment }) {
  return (
    <section id="home" className="hero-section" aria-label="Hero banner">
      {/* Background with classical subtle lighting */}
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      {/* Content Container */}
      <div className="hero-content container">
        {/* Heritage Badge */}
        <div className="hero-badge animate-on-scroll">
          <Gem size={13} className="gold-icon" aria-hidden="true" />
          <span>Est. 1987 · New York · Beverly Hills · Chicago</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title animate-on-scroll">
          <span>Where Every Second</span>
          <span className="gold-gradient-text">Tells a Timeless Story</span>
        </h1>

        {/* Narrative Description */}
        <p className="hero-description animate-on-scroll">
          Alberto Watch Company — your premier destination for luxury timepieces, master repair, and certified
          appraisals since 1987. Explore curated collections from Rolex, Michael Kors, Citizen, Bulova, and our own
          bespoke Alberto Originals.
        </p>

        {/* Call to Actions */}
        <div className="hero-cta animate-on-scroll">
          <button
            type="button"
            id="hero-explore-btn"
            className="btn btn-gold btn-hero"
            onClick={() => onNavClick('products')}
            aria-label="Explore our watch collections"
          >
            <Gem size={15} aria-hidden="true" />
            <span>Explore Collections</span>
            <ArrowRight size={14} aria-hidden="true" />
          </button>

          <button
            type="button"
            id="hero-contact-btn"
            className="btn btn-outline btn-hero"
            onClick={() => onOpenAppointment ? onOpenAppointment() : onNavClick('contact')}
            aria-label="Book an appointment at Alberto Watch Company"
          >
            <CalendarClock size={15} aria-hidden="true" />
            <span>Book an Appointment</span>
          </button>
        </div>

        {/* Statistics Bar (from Initial Specs) */}
        <div className="hero-stats animate-on-scroll" role="list" aria-label="Company statistics">
          <div className="hero-stat-card" role="listitem">
            <span className="hero-stat-number">37+</span>
            <span className="hero-stat-label">Years of Excellence</span>
          </div>
          <div className="hero-stat-card" role="listitem">
            <span className="hero-stat-number">500+</span>
            <span className="hero-stat-label">Curated Timepieces</span>
          </div>
          <div className="hero-stat-card" role="listitem">
            <span className="hero-stat-number">12K+</span>
            <span className="hero-stat-label">Satisfied Collectors</span>
          </div>
          <div className="hero-stat-card" role="listitem">
            <span className="hero-stat-number">3</span>
            <span className="hero-stat-label">Flagship Salons</span>
          </div>
        </div>

        {/* Horological Trust Strip */}
        <div className="hero-trust-strip animate-on-scroll">
          <span className="trust-item">
            <ShieldCheck size={14} className="gold-icon" aria-hidden="true" />
            <span>Authorized Luxury Dealer</span>
          </span>
          <span className="trust-separator" aria-hidden="true">·</span>
          <span className="trust-item">
            <ShieldCheck size={14} className="gold-icon" aria-hidden="true" />
            <span>AWCI Certified Master Horologists</span>
          </span>
          <span className="trust-separator" aria-hidden="true">·</span>
          <span className="trust-item">
            <ShieldCheck size={14} className="gold-icon" aria-hidden="true" />
            <span>Complimentary Insured Courier</span>
          </span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        type="button"
        className="hero-scroll-hint"
        onClick={() => onNavClick('products')}
        aria-label="Scroll to watch collections"
      >
        <span>Scroll to Explore</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>
    </section>
  );
}
