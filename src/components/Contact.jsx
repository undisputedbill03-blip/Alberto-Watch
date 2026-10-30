import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';

const CONTACT_INFO_CARDS = [
  {
    Icon: MapPin,
    label: 'Headquarters',
    value: '142 Fifth Avenue, New York, NY 10011',
    note: 'Flatiron Historic District · 4th Floor Atelier',
  },
  {
    Icon: Phone,
    label: 'Telephone',
    value: '+1 (212) 555-0194',
    note: 'Private client lines open Mon–Sat 9am–8pm EST',
    isPhone: true,
  },
  {
    Icon: Mail,
    label: 'Direct Email',
    value: 'info@albertowatch.com',
    note: 'Response within 4 business hours',
    isEmail: true,
  },
  {
    Icon: Clock,
    label: 'Boutique Hours',
    value: 'Mon–Sat: 9am–8pm | Sun: 11am–6pm',
    note: 'Private salon viewings by pre-booking',
  },
];

export default function Contact({ prefilledWatch = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'product',
    message: '',
  });

  const [lastPrefilledId, setLastPrefilledId] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Sync prefilled watch when user clicks "Inquire" on a watch modal
  if (prefilledWatch && prefilledWatch.id !== lastPrefilledId) {
    setLastPrefilledId(prefilledWatch.id);
    setFormData((prev) => ({
      ...prev,
      subject: 'product',
      message: `Inquiring regarding availability and private viewing for the ${prefilledWatch.brand} ${prefilledWatch.name} (${prefilledWatch.reference || ''}).`,
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">Private Client Desk</span>
          <h2 id="contact-heading" className="section-title">
            Consult Our <span className="gold-serif-italic">Master Horologists</span>
          </h2>
          <p className="section-subtitle">
            Direct inquiry line to our Manhattan, Beverly Hills, and Chicago bench horologists for timepiece acquisition,
            bespoke complication sourcing, and insurance appraisal appointments.
          </p>
        </div>

        <div className="contact-layout animate-on-scroll">
          {/* Info Side */}
          <div className="contact-info-cards">
            {CONTACT_INFO_CARDS.map((card, i) => {
              const CardIcon = card.Icon;
              return (
                <div key={i} className="contact-info-card">
                  <div className="contact-icon" aria-hidden="true">
                    <CardIcon size={20} className="gold-icon" />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-label">{card.label}</span>
                    {card.isPhone ? (
                      <a href={`tel:${card.value.replace(/[^0-9+]/g, '')}`} className="contact-info-link">
                        {card.value}
                      </a>
                    ) : card.isEmail ? (
                      <a href={`mailto:${card.value}`} className="contact-info-link">
                        {card.value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{card.value}</span>
                    )}
                    {card.note && <span className="contact-info-note">{card.note}</span>}
                  </div>
                </div>
              );
            })}

            {/* Social Media Links */}
            <div className="contact-social-box">
              <span className="contact-social-title">Follow Alberto Watch Company</span>
              <p className="contact-social-desc">
                Discover new vault acquisitions, restoration stories, and master watchmaking films:
              </p>
              <div className="contact-social-row">
                <a
                  href="#"
                  id="social-instagram-link"
                  className="social-badge-link"
                  aria-label="Visit our Instagram page"
                >
                  <InstagramIcon size={14} aria-hidden="true" />
                  <span>Instagram</span>
                </a>
                <a
                  href="#"
                  id="social-facebook-link"
                  className="social-badge-link"
                  aria-label="Visit our Facebook page"
                >
                  <FacebookIcon size={14} aria-hidden="true" />
                  <span>Facebook</span>
                </a>
                <a
                  href="#"
                  id="social-twitter-link"
                  className="social-badge-link"
                  aria-label="Visit our X page"
                >
                  <TwitterIcon size={14} aria-hidden="true" />
                  <span>X / Twitter</span>
                </a>
                <a
                  href="#"
                  id="social-youtube-link"
                  className="social-badge-link"
                  aria-label="Visit our YouTube channel"
                >
                  <YoutubeIcon size={14} aria-hidden="true" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-container" role="region" aria-label="Contact form">
            <h3 className="form-title">Send Us a Message</h3>

            {submitted ? (
              <div className="contact-success-alert" role="alert">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={42} className="gold-icon" aria-hidden="true" />
                </div>
                <h4 className="success-heading">Message Sent Successfully</h4>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. Your correspondence has been routed to our senior team.
                  We will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'product', message: '' });
                  }}
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact inquiry form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      className="form-control"
                      placeholder="Alexander Wright"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      className="form-control"
                      placeholder="alexander@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="form-control"
                      placeholder="+1 (212) 555-0100"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject *</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="product">Product Inquiry</option>
                      <option value="repair">Watch Repair &amp; Service</option>
                      <option value="appraisal">Appraisal &amp; Valuation</option>
                      <option value="warranty">Warranty Claim</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-control"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-footer">
                  <div className="form-security-note">
                    <ShieldCheck size={14} className="gold-icon" aria-hidden="true" />
                    <span>Your private client information is strictly protected.</span>
                  </div>

                  <button type="submit" id="contact-submit-btn" className="btn btn-gold btn-send-message">
                    <Send size={15} aria-hidden="true" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
