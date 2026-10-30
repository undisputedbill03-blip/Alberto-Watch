import { useState, useMemo } from 'react';
import { watches, categories } from '../data/watchData';
import {
  Bookmark,
  Check,
  Search,
  CheckCircle2,
  XCircle,
  X,
  ChevronRight,
  ShieldCheck,
  Compass,
  Calendar,
  Phone,
  Tag,
} from 'lucide-react';

function formatCurrency(val) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val);
}

function ProductModal({
  watch,
  onClose,
  isSaved,
  onToggleSave,
  onOpenAppointment,
  onOpenConcierge,
}) {
  if (!watch) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="watch-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="product-modal animate-modal">
        {/* Visual Column */}
        <div className="product-modal-visual">
          <img src={watch.image} alt={`${watch.brand} ${watch.name}`} className="modal-watch-img" />
          {watch.badge && (
            <div className="modal-badge-pill">
              <Tag size={12} aria-hidden="true" />
              <span>{watch.badge}</span>
            </div>
          )}
          <button
            type="button"
            className="modal-close modal-close-mobile"
            onClick={onClose}
            aria-label="Close product details"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Content Column */}
        <div className="product-modal-details">
          <div className="modal-details-header">
            <span className="modal-category-tag">{watch.category?.toUpperCase()}</span>
            <button
              type="button"
              className="modal-close modal-close-desktop"
              onClick={onClose}
              aria-label="Close product details"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <h3 id="watch-modal-title" className="modal-watch-name">
            {watch.name}
          </h3>
          <div className="modal-watch-brand">by <strong>{watch.brand}</strong> · {watch.reference}</div>

          <div className="modal-watch-price-row">
            <span className="modal-price-val">{formatCurrency(watch.price)}</span>
            <span className="modal-stock-indicator">
              {watch.inStock ? (
                <>
                  <CheckCircle2 size={15} className="stock-in-icon" aria-hidden="true" />
                  <span className="stock-in-text">In Stock · Ready for Delivery</span>
                </>
              ) : (
                <>
                  <XCircle size={15} className="stock-out-icon" aria-hidden="true" />
                  <span className="stock-out-text">Out of Stock · Order On Request</span>
                </>
              )}
            </span>
          </div>

          <p className="modal-watch-desc">{watch.description}</p>

          {/* Features List */}
          <div className="modal-features-section">
            <h4 className="modal-section-title">Features &amp; Highlights</h4>
            <ul className="modal-features-list">
              {watch.features.map((feat, idx) => (
                <li key={idx} className="modal-feature-item">
                  <Compass size={13} className="feature-bullet-icon" aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          {watch.specs && (
            <div className="modal-specs-section">
              <h4 className="modal-section-title">Technical Specifications</h4>
              <div className="specs-grid">
                <div className="spec-card">
                  <span className="spec-label">Movement</span>
                  <span className="spec-value">{watch.specs.movement}</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Case Diameter</span>
                  <span className="spec-value">{watch.specs.caseDiameter}</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Case Thickness</span>
                  <span className="spec-value">{watch.specs.caseThickness}</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Water Resistance</span>
                  <span className="spec-value">{watch.specs.waterResistance}</span>
                </div>
                {watch.specs.lugWidth && (
                  <div className="spec-card">
                    <span className="spec-label">Lug Width</span>
                    <span className="spec-value">{watch.specs.lugWidth}</span>
                  </div>
                )}
                {watch.specs.powerReserve && (
                  <div className="spec-card">
                    <span className="spec-label">Power Reserve</span>
                    <span className="spec-value">{watch.specs.powerReserve}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Modal Action Controls */}
          <div className="modal-actions-bar">
            <button
              type="button"
              className="btn btn-gold modal-btn-main"
              onClick={() => {
                onClose();
                onOpenAppointment(watch);
              }}
            >
              <Calendar size={15} aria-hidden="true" />
              <span>Book Salon Viewing for This Watch</span>
            </button>

            <button
              type="button"
              className={`btn btn-outline modal-btn-save ${isSaved ? 'is-saved' : ''}`}
              onClick={() => onToggleSave(watch.id)}
              aria-label={isSaved ? 'Remove from saved watches' : 'Save watch to private collection'}
            >
              {isSaved ? <Check size={14} aria-hidden="true" /> : <Bookmark size={14} aria-hidden="true" />}
              <span>{isSaved ? 'Saved in Shortlist' : 'Save Reference'}</span>
            </button>

            <button
              type="button"
              className="btn btn-outline modal-btn-inquire"
              onClick={() => {
                onClose();
                onOpenConcierge(watch);
              }}
            >
              <Phone size={14} aria-hidden="true" />
              <span>Inquire With Concierge</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products({
  savedIds = [],
  onToggleSave,
  onOpenAppointment,
  onOpenConcierge,
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWatch, setSelectedWatch] = useState(null);

  const filteredWatches = useMemo(() => {
    return watches.filter((w) => {
      const matchesCategory = activeCategory === 'all' || w.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        w.name.toLowerCase().includes(query) ||
        w.brand.toLowerCase().includes(query) ||
        (w.reference && w.reference.toLowerCase().includes(query)) ||
        (w.specs?.movement && w.specs.movement.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="section products-section" aria-labelledby="products-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">Curated Horological Collections</span>
          <h2 id="products-heading" className="section-title">
            Our <span className="gold-serif-italic">Collections</span>
          </h2>
          <p className="section-subtitle">
            Discover our curated selection of luxury, vintage, smart, and classic timepieces — each an authentic
            masterpiece of precision engineering and timeless aesthetic beauty.
          </p>
        </div>

        {/* Toolbar: Category Tabs & Search Bar */}
        <div className="catalog-toolbar animate-on-scroll">
          {/* Category Tabs */}
          <div className="category-tabs" role="tablist" aria-label="Product categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`tab-${cat.id}`}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="catalog-search-wrap">
            <Search size={15} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              className="catalog-search-input"
              placeholder="Search by watch name, brand, or calibre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search watch collection"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                <X size={14} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredWatches.length === 0 ? (
          <div className="empty-results-box animate-on-scroll">
            <Compass size={36} className="gold-icon" aria-hidden="true" />
            <h3>No Timepieces Match Your Search</h3>
            <p>
              We regularly source rare and discontinued models through our international collector network. Contact our
              concierge desk to commission a personalized sourcing request.
            </p>
            <button
              type="button"
              className="btn btn-gold btn-sm"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="products-grid" role="list" aria-label={`${activeCategory} watches`}>
            {filteredWatches.map((watch, i) => {
              const isSaved = savedIds.includes(watch.id);
              return (
                <article
                  key={watch.id}
                  className="product-card animate-on-scroll"
                  style={{ animationDelay: `${(i % 6) * 0.07}s` }}
                  onClick={() => setSelectedWatch(watch)}
                  role="listitem"
                  aria-label={`${watch.name} by ${watch.brand}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedWatch(watch)}
                >
                  {/* Card Media Header */}
                  <div className="product-card-image">
                    <img src={watch.image} alt={watch.name} loading="lazy" />

                    {/* Reference tag */}
                    <span className="product-ref-pill">{watch.reference}</span>

                    {/* Badge */}
                    {watch.badge && (
                      <span className="product-card-badge">
                        <Tag size={10} style={{ marginRight: '4px' }} aria-hidden="true" />
                        {watch.badge}
                      </span>
                    )}

                    {/* Bookmark Save Button */}
                    <button
                      type="button"
                      className={`product-bookmark-btn ${isSaved ? 'saved' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(watch.id);
                      }}
                      aria-label={isSaved ? `Remove ${watch.name} from saved shortlist` : `Save ${watch.name} to private shortlist`}
                      title={isSaved ? 'Saved in shortlist' : 'Save to shortlist'}
                    >
                      <Bookmark size={14} aria-hidden="true" />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="product-card-body">
                    <div className="product-card-brand">{watch.brand}</div>
                    <h3 className="product-card-name">{watch.name}</h3>

                    <div className="product-card-condition">
                      <ShieldCheck size={12} className="gold-icon" aria-hidden="true" />
                      <span>{watch.condition || 'Alberto Certified'}</span>
                    </div>

                    <p className="product-card-desc">{watch.description}</p>

                    <div className="product-card-specs-row">
                      <span>{watch.specs?.caseDiameter}</span>
                      <span>·</span>
                      <span>{watch.specs?.movement?.split(' ')[0] || 'Swiss'}</span>
                      <span>·</span>
                      <span>{watch.specs?.waterResistance?.split(' ')[0] || '30m'}</span>
                    </div>

                    {/* Card Footer */}
                    <div className="product-card-footer">
                      <span className="product-card-price">{formatCurrency(watch.price)}</span>
                      <button
                        type="button"
                        id={`view-details-btn-${watch.id}`}
                        className="btn btn-outline btn-sm btn-view-details"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedWatch(watch);
                        }}
                        aria-label={`View details for ${watch.name}`}
                      >
                        <span>View Details</span>
                        <ChevronRight size={13} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Specification Modal */}
      {selectedWatch && (
        <ProductModal
          watch={selectedWatch}
          onClose={() => setSelectedWatch(null)}
          isSaved={savedIds.includes(selectedWatch.id)}
          onToggleSave={onToggleSave}
          onOpenAppointment={onOpenAppointment}
          onOpenConcierge={onOpenConcierge}
        />
      )}
    </section>
  );
}
