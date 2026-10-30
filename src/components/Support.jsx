import { useState } from 'react';
import { faqs, serviceItems } from '../data/watchData';
import { Wrench, Award, Package, RefreshCw, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

const SERVICE_ICONS = [Wrench, Award, Package, RefreshCw];

export default function Support({ onNavClick }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="support" className="section support-section" aria-labelledby="support-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">Client Services &amp; Commitments</span>
          <h2 id="support-heading" className="section-title">
            Customer <span className="gold-serif-italic">Support</span> &amp; Guarantees
          </h2>
          <p className="section-subtitle">
            Have questions about our watch collections, repair services, or appraisals? Browse our service guarantees
            and frequently asked questions or reach out to our team directly.
          </p>
        </div>

        {/* 4 Service Highlights (from Initial Specs) */}
        <div className="service-highlights-grid animate-on-scroll" role="list" aria-label="Support services">
          {serviceItems.map((item, i) => {
            const Icon = SERVICE_ICONS[i] || Award;
            return (
              <div key={i} className="service-highlight-card" role="listitem">
                <div className="service-highlight-icon-wrap" aria-hidden="true">
                  <Icon size={26} className="gold-icon" />
                </div>
                <h3 className="service-highlight-title">{item.title}</h3>
                <span className="service-highlight-sub">{item.sub}</span>
                <p className="service-highlight-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* FAQ Accordion Section */}
        <div className="faq-container animate-on-scroll">
          <div className="faq-heading-group">
            <div className="faq-eyebrow">
              <HelpCircle size={15} className="gold-icon" aria-hidden="true" />
              <span>Collector &amp; Client Guidance</span>
            </div>
            <h3 className="faq-main-title">Frequently Asked Questions</h3>
          </div>

          <div className="faq-list" role="region" aria-label="Frequently asked questions">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} id={`faq-item-${i}`} className={`faq-card ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-btn-${i}`}
                  >
                    <span className="faq-question-title">{faq.question}</span>
                    <ChevronDown size={18} className="faq-chevron" aria-hidden="true" />
                  </button>

                  <div
                    id={`faq-answer-${i}`}
                    className="faq-collapse-body"
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                  >
                    <div className="faq-answer-text">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faq-bottom-cta">
            <MessageSquare size={16} className="gold-icon" aria-hidden="true" />
            <span>Need personalized appraisal or service advice?</span>
            <button
              type="button"
              className="btn btn-gold btn-sm"
              onClick={() => onNavClick && onNavClick('contact')}
            >
              Contact Our Advisors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
