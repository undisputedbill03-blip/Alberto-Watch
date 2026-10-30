import { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Mail, Phone, Watch, CheckCircle2 } from 'lucide-react';
import { salons } from '../data/watchData';

export default function AppointmentModal({ isOpen, onClose, preselectedWatch = null, preselectedSalonId = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    salonId: preselectedSalonId || salons[0].id,
    service: 'acquisition',
    preferredDate: '',
    preferredTime: 'afternoon',
    notes: preselectedWatch ? `Inquiring regarding ${preselectedWatch.brand} ${preselectedWatch.name} (${preselectedWatch.reference})` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedSalon = salons.find((s) => s.id === Number(formData.salonId)) || salons[0];

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="appointment-modal animate-modal">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close salon booking dialog"
        >
          <X size={18} aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="appointment-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="gold-icon" aria-hidden="true" />
            </div>
            <h3 id="appointment-modal-title" className="success-title">
              Private Salon Consultation Requested
            </h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name}</strong>. Our Private Client Concierge at our{' '}
              <strong>{selectedSalon.name}</strong> has received your viewing request.
            </p>
            <div className="appointment-summary-card">
              <div className="summary-row">
                <span className="summary-label">Salon Location:</span>
                <span className="summary-val">{selectedSalon.city} ({selectedSalon.neighborhood})</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Consultation Focus:</span>
                <span className="summary-val">
                  {formData.service === 'acquisition' && 'Private Timepiece Acquisition'}
                  {formData.service === 'restoration' && 'Master Overhaul & Restoration Assessment'}
                  {formData.service === 'appraisal' && 'GIA Certified Valuation & Appraisal'}
                  {formData.service === 'bespoke' && 'Bespoke Complication Sourcing'}
                </span>
              </div>
              {formData.preferredDate && (
                <div className="summary-row">
                  <span className="summary-label">Preferred Date:</span>
                  <span className="summary-val">{formData.preferredDate} ({formData.preferredTime})</span>
                </div>
              )}
            </div>
            <p className="success-subtext">
              A private client advisor will contact you within four business hours via phone or email to confirm your
              appointment and prepare the requested references in advance.
            </p>
            <button type="button" className="btn btn-gold" onClick={handleReset} style={{ marginTop: '1.5rem' }}>
              Return to Ateliers
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="modal-header-text">
              <span className="section-eyebrow">Personalized Horological Advisory</span>
              <h2 id="appointment-modal-title" className="modal-heading">
                Reserve a Private Salon Consultation
              </h2>
              <p className="modal-subheading">
                Experience exceptional timepieces in the discretion of our dedicated private viewing suites.
                Complimentary refreshments and master watchmaker consultations provided.
              </p>
            </div>

            <div className="form-grid">
              {/* Salon Selection */}
              <div className="form-group full-width">
                <label htmlFor="salon-select">
                  <MapPin size={14} className="form-label-icon" aria-hidden="true" />
                  Select Flagship Salon *
                </label>
                <select
                  id="salon-select"
                  name="salonId"
                  className="form-control"
                  value={formData.salonId}
                  onChange={handleChange}
                  required
                >
                  {salons.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.city} — {s.name} ({s.neighborhood})
                    </option>
                  ))}
                </select>
              </div>

              {/* Consultation Type */}
              <div className="form-group full-width">
                <label htmlFor="service-select">
                  <Watch size={14} className="form-label-icon" aria-hidden="true" />
                  Consultation Purpose *
                </label>
                <select
                  id="service-select"
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="acquisition">Timepiece Acquisition & Private Viewing</option>
                  <option value="restoration">Master Watchmaker Service & Overhaul Assessment</option>
                  <option value="appraisal">GIA Insurance Valuation & Estate Appraisal</option>
                  <option value="bespoke">Rare Historical Reference Sourcing</option>
                </select>
              </div>

              {/* Client Name */}
              <div className="form-group">
                <label htmlFor="client-name">
                  <User size={14} className="form-label-icon" aria-hidden="true" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="client-name"
                  name="name"
                  className="form-control"
                  placeholder="Lord / Lady / Mr. / Ms. Alexander Wright"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Client Email */}
              <div className="form-group">
                <label htmlFor="client-email">
                  <Mail size={14} className="form-label-icon" aria-hidden="true" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="client-email"
                  name="email"
                  className="form-control"
                  placeholder="alexander@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="client-phone">
                  <Phone size={14} className="form-label-icon" aria-hidden="true" />
                  Telephone (for private confirmation) *
                </label>
                <input
                  type="tel"
                  id="client-phone"
                  name="phone"
                  className="form-control"
                  placeholder="+1 (555) 019-2834"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Preferred Date */}
              <div className="form-group">
                <label htmlFor="preferred-date">
                  <Calendar size={14} className="form-label-icon" aria-hidden="true" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferred-date"
                  name="preferredDate"
                  className="form-control"
                  value={formData.preferredDate}
                  onChange={handleChange}
                />
              </div>

              {/* Preferred Time Window */}
              <div className="form-group full-width">
                <label htmlFor="preferred-time">
                  <Clock size={14} className="form-label-icon" aria-hidden="true" />
                  Preferred Time Window
                </label>
                <select
                  id="preferred-time"
                  name="preferredTime"
                  className="form-control"
                  value={formData.preferredTime}
                  onChange={handleChange}
                >
                  <option value="morning">Morning (10:30 AM – 1:00 PM)</option>
                  <option value="afternoon">Afternoon (1:00 PM – 4:30 PM)</option>
                  <option value="evening">Late Afternoon / Evening (4:30 PM – 6:30 PM)</option>
                </select>
              </div>

              {/* Reference notes */}
              <div className="form-group full-width">
                <label htmlFor="client-notes">
                  Specific References or Inquiries
                </label>
                <textarea
                  id="client-notes"
                  name="notes"
                  className="form-control"
                  rows={3}
                  placeholder="Specify any references, historical calibres, or vintage pieces you wish prepared for your consultation..."
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="modal-actions-footer">
              <button type="button" className="btn btn-outline" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-gold">
                Confirm Consultation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

