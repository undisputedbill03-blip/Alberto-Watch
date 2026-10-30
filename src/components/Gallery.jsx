import { useState, useEffect, useCallback } from 'react';
import { ZoomIn, X, Compass } from 'lucide-react';
import { galleryImages } from '../data/watchData';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && lightbox) {
        setLightbox(null);
      }
    },
    [lightbox]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="gallery" className="section gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">Visual Horological Archive</span>
          <h2 id="gallery-heading" className="section-title">
            Atelier Impressions &amp;{' '}
            <span className="gold-serif-italic">Haute Horlogerie.</span>
          </h2>
          <p className="section-subtitle">
            A photographic chronicle through our master watchmaker workbenches, micro-mechanical calibres, and rare
            archive timepieces preserved within our Manhattan, Beverly Hills, and Chicago salons.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-masonry-grid" role="list" aria-label="Horological visual gallery">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className="gallery-tile animate-on-scroll"
              style={{ animationDelay: `${i * 0.08}s` }}
              role="listitem"
              tabIndex={0}
              aria-label={`${img.title} – ${img.category}. Click to enlarge.`}
              onClick={() => setLightbox(img)}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(img)}
            >
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={img.title} loading="lazy" className="gallery-img" width="800" height="600" />
                <div className="gallery-overlay">
                  <span className="gallery-zoom-badge" aria-hidden="true">
                    <ZoomIn size={18} />
                    <span>View Detail</span>
                  </span>
                </div>
              </div>

              <div className="gallery-meta">
                <span className="gallery-tag">
                  <Compass size={11} aria-hidden="true" />
                  {img.category}
                </span>
                <h4 className="gallery-item-title">{img.title}</h4>
                <p className="gallery-item-desc">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Dialog */}
      {lightbox && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={() => setLightbox(null)}
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightbox(null)}
              aria-label="Close enlarged visual"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <div className="lightbox-image-wrap">
              <img src={lightbox.src} alt={lightbox.title} className="lightbox-full-img" />
            </div>

            <div className="lightbox-caption-card">
              <span className="lightbox-category">{lightbox.category}</span>
              <h3 id="lightbox-title" className="lightbox-heading">
                {lightbox.title}
              </h3>
              <p className="lightbox-narrative">{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
