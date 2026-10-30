import { Gem, CalendarClock, ArrowRight, ShieldCheck, ChevronDown, Award, Compass } from 'lucide-react';

export default function Hero({ onNavClick, onOpenAppointment }) {
  return (
    <section id="home" className="hero-section" aria-label="Hero banner">
      {/* Background with classical subtle lighting & hairline vignette */}
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      {/* Asymmetric Editorial Content Grid */}
      <div className="hero-content container">
        <div className="hero-editorial-layout">
          {/* Left Column: Authoritative Editorial Masthead */}
          <div className="hero-editorial-col animate-on-scroll">
            {/* Heritage Hallmark */}
            <div className="hero-badge">
              <Gem size={13} className="gold-icon" aria-hidden="true" />
              <span>Geneva Trained Atelier · Est. 1987 · New York · Beverly Hills · Chicago</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="hero-title">
              <span className="hero-title-top">Master Horology, Provenance &amp;</span>
              <span className="gold-serif-italic hero-title-highlight">Atelier Restoration.</span>
            </h1>

            {/* Concrete Editorial Narrative */}
            <p className="hero-description">
              Alberto Watch Company curates certified high-complication timepieces from Rolex, Bulova Precisionist,
              Citizen Eco-Drive, and Michael Kors alongside bespoke Alberto Originals. Master bench servicing,
              laser micro-welding, and written GIA appraisals conducted by AWCI-certified horologists since 1987.
            </p>

            {/* Direct Tactile CTAs */}
            <div className="hero-cta">
              <button
                type="button"
                id="hero-explore-btn"
                className="btn btn-gold btn-hero"
                onClick={() => onNavClick('products')}
                aria-label="Explore our curated watch vault"
              >
                <Compass size={16} aria-hidden="true" />
                <span>Explore Curated Vault</span>
                <ArrowRight size={14} aria-hidden="true" />
              </button>

              <button
                type="button"
                id="hero-contact-btn"
                className="btn btn-outline btn-hero"
                onClick={() => (onOpenAppointment ? onOpenAppointment() : onNavClick('contact'))}
                aria-label="Reserve a private salon viewing"
              >
                <CalendarClock size={16} aria-hidden="true" />
                <span>Reserve Salon Viewing</span>
              </button>
            </div>

            {/* Horological Trust Strip */}
            <div className="hero-trust-strip">
              <span className="trust-item">
                <ShieldCheck size={14} className="gold-icon" aria-hidden="true" />
                <span>Authorized Luxury Dealer</span>
              </span>
              <span className="trust-separator" aria-hidden="true">·</span>
              <span className="trust-item">
                <Award size={14} className="gold-icon" aria-hidden="true" />
                <span>AWCI Certified Master Horologists</span>
              </span>
              <span className="trust-separator" aria-hidden="true">·</span>
              <span className="trust-item">
                <ShieldCheck size={14} className="gold-icon" aria-hidden="true" />
                <span>Tamper-Evident Insured Courier</span>
              </span>
            </div>
          </div>

          {/* Right Column: Featured Flagship Timepiece Showcase */}
          <div className="hero-showcase-col animate-on-scroll">
            <div className="hero-showcase-card">
              <div className="showcase-card-header">
                <span className="showcase-tag">Flagship Reference In Vault</span>
                <span className="showcase-ref">Ref. 126331-JUB</span>
              </div>

              <div className="showcase-img-wrap">
                <img
                  src="/luxury_watch.png"
                  alt="Rolex Oyster Perpetual Datejust 41 in Everose gold with slate sundust dial"
                  className="showcase-img"
                  loading="eager"
                  width="440"
                  height="440"
                />
                <div className="showcase-loupe-indicator" aria-hidden="true">
                  <span className="loupe-ring" />
                  <span className="loupe-label">10× Loupe Inspection</span>
                </div>
              </div>

              <div className="showcase-details">
                <div className="showcase-title-row">
                  <div>
                    <h3 className="showcase-name">Oyster Perpetual Datejust 41</h3>
                    <span className="showcase-brand">Rolex · 18k Everose Gold &amp; Slate Sundust Dial</span>
                  </div>
                  <span className="showcase-price">$14,850</span>
                </div>

                <div className="showcase-spec-chips">
                  <span className="showcase-chip">Calibre 3235</span>
                  <span className="showcase-chip">70h Reserve</span>
                  <span className="showcase-chip">COSC Superlative</span>
                  <span className="showcase-chip">100m Waterproof</span>
                </div>

                <button
                  type="button"
                  className="btn btn-outline btn-showcase-action"
                  onClick={() => onNavClick('products')}
                >
                  <span>Inspect Full Specification Dossier</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Bar: Architectural Ledger Layout */}
        <div className="hero-stats animate-on-scroll" role="list" aria-label="Atelier credentials and statistics">
          <div className="hero-stat-card" role="listitem">
            <span className="hero-stat-number">37+</span>
            <span className="hero-stat-label">Years Atelier Heritage</span>
            <span className="hero-stat-sub">Established 1987 in Manhattan</span>
          </div>
          <div className="hero-stat-card" role="listitem">
            <span className="hero-stat-number">500+</span>
            <span className="hero-stat-label">Curated Timepieces</span>
            <span className="hero-stat-sub">Rolex, Bulova, Citizen &amp; Bespoke</span>
          </div>
          <div className="hero-stat-card" role="listitem">
            <span className="hero-stat-number">12K+</span>
            <span className="hero-stat-label">Certified Appraisals</span>
            <span className="hero-stat-sub">GIA &amp; AWCI Underwritten</span>
          </div>
          <div className="hero-stat-card" role="listitem">
            <span className="hero-stat-number">3</span>
            <span className="hero-stat-label">Flagship Salons</span>
            <span className="hero-stat-sub">New York · Beverly Hills · Chicago</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        type="button"
        className="hero-scroll-hint"
        onClick={() => onNavClick('products')}
        aria-label="Scroll to curated watch collections"
      >
        <span>Explore Horological Vault</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>
    </section>
  );
}
