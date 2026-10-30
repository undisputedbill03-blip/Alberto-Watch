import { useState } from 'react';
import { stores } from '../data/watchData';
import { MapPin, Phone, Mail, Clock, Navigation, Calendar, UserCheck, ShieldCheck } from 'lucide-react';

export default function StoreLocator({ onOpenAppointment }) {
  const [activeStoreIndex, setActiveStoreIndex] = useState(0);
  const activeStore = stores[activeStoreIndex] || stores[0];

  return (
    <section id="store" className="section store-section" aria-labelledby="store-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">Boutique Locations</span>
          <h2 id="store-heading" className="section-title">
            Store <span className="gold-serif-italic">Locator</span> &amp; Flagship Salons
          </h2>
          <p className="section-subtitle">
            Visit any of our three flagship boutiques for an immersive experience with our collections, expert repair
            services, and personalized horological consultations.
          </p>
        </div>

        <div className="store-layout animate-on-scroll">
          {/* Store List Column */}
          <div className="store-list" role="list" aria-label="Alberto Watch Company store locations">
            {stores.map((store, i) => {
              const isSelected = activeStoreIndex === i;
              return (
                <div
                  key={store.id}
                  id={`store-card-${store.id}`}
                  className={`store-card ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveStoreIndex(i)}
                  role="listitem button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={`${store.name} location`}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveStoreIndex(i)}
                >
                  <div className="store-card-header">
                    <h3 className="store-card-name">{store.name}</h3>
                    <span className="store-city-badge">{store.city}</span>
                  </div>

                  <div className="store-detail">
                    <MapPin size={15} className="store-detail-icon" aria-hidden="true" />
                    <span>{store.address}</span>
                  </div>

                  <div className="store-detail">
                    <Phone size={15} className="store-detail-icon" aria-hidden="true" />
                    <a
                      href={`tel:${store.phone.replace(/[^0-9+]/g, '')}`}
                      className="store-contact-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {store.phone}
                    </a>
                  </div>

                  <div className="store-detail">
                    <Mail size={15} className="store-detail-icon" aria-hidden="true" />
                    <a
                      href={`mailto:${store.email}`}
                      className="store-contact-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {store.email}
                    </a>
                  </div>

                  <div className="store-detail">
                    <Clock size={15} className="store-detail-icon" aria-hidden="true" />
                    <span>{store.hours}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map / Boutique Showcase Column */}
          <div className="store-showcase-pane" aria-label="Store boutique details">
            <div className="store-map-preview" aria-hidden="true">
              <div className="map-grid-pattern" />
              <div className="map-pin-pulse">
                <MapPin size={36} className="gold-icon" />
              </div>
            </div>

            <div className="store-showcase-body">
              <div className="showcase-lead-horologist">
                <UserCheck size={14} className="gold-icon" aria-hidden="true" />
                <span>Lead Horologist: <strong>{activeStore.leadHorologist}</strong></span>
              </div>

              <h3 className="showcase-store-title">{activeStore.name}</h3>
              <p className="showcase-store-addr">{activeStore.address}</p>
              <div className="showcase-store-hours">
                <Clock size={13} className="gold-icon" aria-hidden="true" />
                <span>{activeStore.hours}</span>
              </div>

              {activeStore.amenities && (
                <div className="showcase-amenities-list">
                  {activeStore.amenities.map((amenity, idx) => (
                    <div key={idx} className="showcase-amenity-pill">
                      <ShieldCheck size={12} className="gold-icon" aria-hidden="true" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="showcase-actions">
                <button
                  type="button"
                  className="btn btn-gold btn-sm"
                  onClick={() => onOpenAppointment && onOpenAppointment(null, activeStore.id)}
                >
                  <Calendar size={14} aria-hidden="true" />
                  <span>Schedule Private Viewing</span>
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeStore.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`get-directions-btn-${activeStore.id}`}
                  className="btn btn-outline btn-sm"
                  aria-label={`Get directions to ${activeStore.name} on Google Maps`}
                >
                  <Navigation size={13} aria-hidden="true" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
