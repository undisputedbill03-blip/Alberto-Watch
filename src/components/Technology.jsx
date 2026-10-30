import { useState } from 'react';
import { techFeatures, certifications } from '../data/watchData';
import {
  Settings2,
  Sun,
  Diamond,
  Wifi,
  ShieldCheck,
  Gauge,
  Award,
  Waves,
  Shield,
  Clock,
  Calendar,
} from 'lucide-react';

const ICON_MAP = {
  Settings2,
  Sun,
  Diamond,
  Wifi,
  ShieldCheck,
  Gauge,
};

const CERT_ICONS = [Award, Waves, Shield, Clock];

const CALIBRES = [
  {
    id: 'mechanical',
    label: 'Swiss Mechanical',
    title: 'Swiss Perpetual Automatic Mechanical',
    brandExample: 'Rolex Calibre 3235',
    frequency: '28,800 vph (4 Hz)',
    reserve: '70 Hours Power Reserve',
    accuracy: 'Superlative Chronometer (-2 / +2 sec/day)',
    source: 'Bidirectional Perpetual Rotor & Mainspring',
    jewels: '31 Synthetic Rubies',
    highlight: 'Paramagnetic blue Parachrom hairspring with Paraflex shock absorbers. Zero electronic dependencies.',
  },
  {
    id: 'eco-drive',
    label: 'Eco-Drive Solar',
    title: 'Eco-Drive Light-Absorption Calibre',
    brandExample: 'Citizen Calibre A060',
    frequency: '32,768 Hz Thermo-Compensated',
    reserve: '6 Months in Total Darkness',
    accuracy: '±5 Seconds per Year (Chronometer)',
    source: 'Natural sunlight & ambient indoor light conversion',
    jewels: 'Precision Jeweled Train',
    highlight: 'Titanium-lithium power cell charged continuously by ambient light. Eliminates battery replacement.',
  },
  {
    id: 'precisionist',
    label: '262 kHz Precisionist',
    title: 'High-Frequency Torsional Quartz',
    brandExample: 'Bulova 262,144 Hz Precisionist',
    frequency: '262,144 Hz (8x Standard Quartz)',
    reserve: '2-Year High-Drain Cell',
    accuracy: '±10 Seconds per Year',
    source: 'Three-Pronged Torsional Quartz Resonator',
    jewels: 'Jeweled Chronograph Train',
    highlight: 'Continuous, fluid sweeping seconds hand mirroring high-beat mechanical movements.',
  },
  {
    id: 'connected',
    label: 'Connected Engine',
    title: 'Connected Sensor Fusion Architecture',
    brandExample: 'Connected Calibre E4',
    frequency: 'ARM Cortex Multi-Core Micro-Architecture',
    reserve: 'Full-Day Active Sensor Operation',
    accuracy: 'Atomic Clock Sync via Multi-Band GNSS',
    source: 'High-Density Lithium-Polymer Magnetic Fast Charge',
    jewels: 'Solid-State Ceramic Integration',
    highlight: 'Autonomous GNSS positioning, optical heart-rate tracking, and scratchproof sapphire touchscreen.',
  },
];

export default function Technology({ onOpenAppointment }) {
  const [activeCalibreId, setActiveCalibreId] = useState('mechanical');
  const selectedCalibre = CALIBRES.find((c) => c.id === activeCalibreId) || CALIBRES[0];

  return (
    <section id="technology" className="section tech-section" aria-labelledby="tech-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">Horological Engineering</span>
          <h2 id="tech-heading" className="section-title">
            Watch <span className="gold-serif-italic">Technology</span> &amp; Innovation
          </h2>
          <p className="section-subtitle">
            From centuries-old Swiss mechanical craftsmanship to cutting-edge solar and smart technology — discover the
            engineering marvels that power Alberto’s finest timepieces.
          </p>
        </div>

        {/* 6 Technology Feature Cards */}
        <div className="tech-grid">
          {techFeatures.map((feat, i) => {
            const Icon = ICON_MAP[feat.icon] || Settings2;
            return (
              <div
                key={i}
                id={`tech-card-${i}`}
                className="tech-card animate-on-scroll"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="tech-card-header">
                  <div className="tech-icon-box" aria-hidden="true">
                    <Icon size={24} className="gold-icon" />
                  </div>
                  <span className="tech-number">0{i + 1}</span>
                </div>

                <h3 className="tech-card-title">{feat.title}</h3>
                <span className="tech-card-subtitle">{feat.subtitle}</span>
                <p className="tech-card-desc">{feat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Calibre Comparison Matrix */}
        <div className="calibre-matrix-wrap animate-on-scroll">
          <div className="calibre-matrix-header">
            <div>
              <span className="section-eyebrow">Horologist's Bench Dossier</span>
              <h3 className="calibre-matrix-title">Movement Architecture &amp; Calibre Comparison</h3>
            </div>
            <div className="calibre-tabs" role="tablist" aria-label="Calibre types">
              {CALIBRES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`calibre-tab-btn ${activeCalibreId === c.id ? 'active' : ''}`}
                  onClick={() => setActiveCalibreId(c.id)}
                  role="tab"
                  aria-selected={activeCalibreId === c.id}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="calibre-details-panel">
            <div className="calibre-info-col">
              <span className="calibre-tag">{selectedCalibre.brandExample}</span>
              <h4 className="calibre-title">{selectedCalibre.title}</h4>
              <p className="calibre-highlight">{selectedCalibre.highlight}</p>
            </div>

            <div className="calibre-specs-col">
              <div className="calibre-spec-item">
                <span className="calibre-spec-label">Operating Frequency</span>
                <strong className="calibre-spec-value">{selectedCalibre.frequency}</strong>
              </div>
              <div className="calibre-spec-item">
                <span className="calibre-spec-label">Power Autonomy</span>
                <strong className="calibre-spec-value">{selectedCalibre.reserve}</strong>
              </div>
              <div className="calibre-spec-item">
                <span className="calibre-spec-label">Timing Accuracy</span>
                <strong className="calibre-spec-value">{selectedCalibre.accuracy}</strong>
              </div>
              <div className="calibre-spec-item">
                <span className="calibre-spec-label">Energy Source</span>
                <strong className="calibre-spec-value">{selectedCalibre.source}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Certifications Banner */}
        <div className="tech-banner animate-on-scroll">
          <div className="tech-banner-header">
            <Award size={18} className="gold-icon" aria-hidden="true" />
            <h4 className="tech-banner-title">Certified Horological Industry Standards</h4>
          </div>

          <div className="tech-certifications-row" role="list" aria-label="Technology certifications">
            {certifications.map((cert, idx) => {
              const CertIcon = CERT_ICONS[idx] || Award;
              return (
                <div key={idx} className="cert-item" role="listitem">
                  <div className="cert-icon-circle">
                    <CertIcon size={22} className="gold-icon" aria-hidden="true" />
                  </div>
                  <strong className="cert-label">{cert.label}</strong>
                  <span className="cert-desc">{cert.desc}</span>
                </div>
              );
            })}
          </div>

          {/* Consultation bar */}
          <div className="tech-cta-strip">
            <span className="tech-cta-text">
              Have questions regarding calibre servicing, water resistance, or movement accuracy?
            </span>
            <button
              type="button"
              className="btn btn-gold btn-sm"
              onClick={() => onOpenAppointment && onOpenAppointment()}
            >
              <Calendar size={14} aria-hidden="true" />
              <span>Consult a Master Watchmaker</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
