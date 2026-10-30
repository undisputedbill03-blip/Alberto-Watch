import { Trophy, Wrench, Gem, Globe, ScrollText, Star, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '../data/watchData';

const HIGHLIGHTS = [
  { Icon: Trophy, text: 'Authorized dealer for Rolex, Citizen, Bulova & Michael Kors' },
  { Icon: Wrench, text: 'Certified watchmakers trained in Geneva & Tokyo' },
  { Icon: Gem, text: 'GIA-certified appraisers for luxury timepieces' },
  { Icon: Globe, text: 'Fully insured international shipping to 45+ countries' },
  { Icon: ScrollText, text: 'Member of the American Watchmakers-Clockmakers Institute' },
  { Icon: Star, text: '4.9/5 stars across 12,000+ verified collector appraisals' },
];

export default function About({ onOpenAppointment, onNavClick }) {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-layout">
          {/* Image & Founder Badge Column */}
          <div className="about-image-wrap animate-on-scroll">
            <div className="about-img-container">
              <img
                src="/hero_banner.png"
                alt="Alberto Watch Company store interior with premium watch collections on display"
                className="about-primary-img"
              />
              <div className="about-badge">
                <span className="about-badge-num">37+</span>
                <span className="about-badge-label">Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content animate-on-scroll">
            <span className="section-eyebrow">Atelier Lineage Since 1987</span>
            <h2 id="about-heading" className="section-title">
              Master Watchmaking &amp; <span className="gold-serif-italic">Horological Heritage.</span>
            </h2>

            <div className="about-prose">
              <p>
                Alberto Watch Company was founded in 1987 by Alberto Reyes, a master horologist trained at the
                École d&apos;Horlogerie de Genève. What originated as a dedicated restoration workshop in downtown New
                York has evolved into one of North America&apos;s most respected luxury watch curators, restoration ateliers,
                and certified appraisal salons.
              </p>
              <p>
                We view fine watchmaking as an enduring convergence of micro-mechanical engineering and artistic devotion.
                Every reference entering our vault undergoes rigorous 5-position amplitude regulation, waterproof pressure
                validation, and movement certification by AWCI-certified master watchmakers.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="about-highlights" role="list" aria-label="About us highlights">
              {HIGHLIGHTS.map((item, i) => {
                const ItemIcon = item.Icon;
                return (
                  <div key={i} className="highlight-item" role="listitem">
                    <div className="highlight-icon-box" aria-hidden="true">
                      <ItemIcon size={16} className="gold-icon" />
                    </div>
                    <span className="highlight-text">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="about-actions-row">
              <button
                type="button"
                id="about-learn-more-btn"
                className="btn btn-gold"
                onClick={() => onOpenAppointment && onOpenAppointment()}
              >
                <span>Book Salon Consultation</span>
                <ArrowRight size={14} aria-hidden="true" />
              </button>
              <button
                type="button"
                id="about-meet-team-btn"
                className="btn btn-outline"
                onClick={() => onNavClick && onNavClick('store')}
              >
                <span>Visit Our Boutiques</span>
              </button>
            </div>
          </div>
        </div>

        {/* Collector Provenance & Voices */}
        <div className="about-testimonials-wrap animate-on-scroll">
          <div className="testimonials-header">
            <span className="section-eyebrow">Collector Provenance</span>
            <h3 className="testimonials-title">Discerning Collector Endorsements</h3>
            <p className="testimonials-subtitle">
              Authentic reflections from patrons who have acquired, restored, and preserved their heirloom timepieces with Alberto.
            </p>
          </div>

          <div className="testimonials-grid" role="list" aria-label="Collector testimonials">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card" role="listitem">
                <Quote size={22} className="testimonial-quote-icon" aria-hidden="true" />
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-footer">
                  <div className="author-avatar" aria-hidden="true">
                    {t.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div className="author-info">
                    <strong className="author-name">{t.author}</strong>
                    <span className="author-role">{t.role} · {t.city}</span>
                    <span className="author-watch-badge">{t.watch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
