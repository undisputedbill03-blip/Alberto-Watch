import { useState, useMemo } from 'react';
import { watches } from '../data/watchData';
import { CheckCircle2, XCircle, Search, ArrowRight, X } from 'lucide-react';

const CATEGORY_LABELS = {
  luxury: 'Luxury',
  vintage: 'Vintage',
  smart: 'Smart',
  classic: 'Classic',
};

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function PriceList({ onSelectWatch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const sortedWatches = useMemo(() => {
    return [...watches].sort((a, b) => b.price - a.price);
  }, []);

  const filtered = useMemo(() => {
    return sortedWatches.filter((w) => {
      const matchCat = activeCategory === 'all' || w.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchCat;

      const matchQ =
        w.name.toLowerCase().includes(q) ||
        w.brand.toLowerCase().includes(q) ||
        (w.reference && w.reference.toLowerCase().includes(q)) ||
        (w.specs?.movement && w.specs.movement.toLowerCase().includes(q));

      return matchCat && matchQ;
    });
  }, [sortedWatches, activeCategory, searchQuery]);

  return (
    <section id="pricelist" className="section price-section" aria-labelledby="price-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">Horological Catalog &amp; Valuation</span>
          <h2 id="price-heading" className="section-title">
            Complete <span className="gold-serif-italic">Price List</span>
          </h2>
          <p className="section-subtitle">
            Transparent pricing on all our timepieces. All prices are in USD and include luxury presentation packaging,
            official certificates of authenticity, and our comprehensive 3-Year Atelier Warranty.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="price-toolbar animate-on-scroll">
          <div className="price-category-filters" role="tablist" aria-label="Filter price list by category">
            {[
              { id: 'all', label: 'All Watches' },
              { id: 'luxury', label: 'Luxury' },
              { id: 'vintage', label: 'Vintage' },
              { id: 'smart', label: 'Smart' },
              { id: 'classic', label: 'Classic' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                className={`price-filter-btn ${activeCategory === btn.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(btn.id)}
                role="tab"
                aria-selected={activeCategory === btn.id}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="price-search-box">
            <Search size={14} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              className="price-search-input"
              placeholder="Search table by name, brand, or caliber..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Filter price list"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear filter"
              >
                <X size={13} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Responsive Table Wrap */}
        <div className="price-table-wrap animate-on-scroll">
          <div className="table-scroll-hint" aria-hidden="true">
            <span>← Scroll horizontally to inspect full table specifications →</span>
          </div>

          <table className="price-table" aria-label="Watch price list">
            <thead>
              <tr>
                <th scope="col" style={{ width: '48px' }}>#</th>
                <th scope="col">Watch Name</th>
                <th scope="col">Brand</th>
                <th scope="col">Category</th>
                <th scope="col">Movement</th>
                <th scope="col">Water Resistance</th>
                <th scope="col">Availability</th>
                <th scope="col" className="text-right">Price</th>
                <th scope="col" className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((watch, i) => (
                <tr
                  key={watch.id}
                  className="price-table-row"
                  onClick={() => onSelectWatch && onSelectWatch(watch)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectWatch && onSelectWatch(watch)}
                  aria-label={`View dossier for ${watch.name}, priced at ${formatPrice(watch.price)}`}
                >
                  <td className="cell-num">{String(i + 1).padStart(2, '0')}</td>
                  <td className="cell-watch-name">
                    <strong className="table-model-name">{watch.name}</strong>
                    {watch.reference && <span className="table-ref-code">{watch.reference}</span>}
                  </td>
                  <td className="cell-brand">{watch.brand}</td>
                  <td>
                    <span className={`price-badge ${watch.category}`}>
                      {CATEGORY_LABELS[watch.category] || watch.category}
                    </span>
                  </td>
                  <td className="cell-movement">{watch.specs?.movement ?? '—'}</td>
                  <td className="cell-water">{watch.specs?.waterResistance ?? '—'}</td>
                  <td>
                    <span className={`availability-badge ${watch.inStock ? 'in-stock' : 'out-of-stock'}`}>
                      {watch.inStock ? (
                        <>
                          <CheckCircle2 size={13} aria-hidden="true" />
                          <span>In Stock</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={13} aria-hidden="true" />
                          <span>Out of Stock</span>
                        </>
                      )}
                    </span>
                  </td>
                  <td className="cell-price-val text-right">{formatPrice(watch.price)}</td>
                  <td className="cell-action text-right">
                    <button
                      type="button"
                      className="btn-examine-row"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectWatch) onSelectWatch(watch);
                      }}
                      aria-label={`Examine ${watch.name}`}
                    >
                      <span>Examine</span>
                      <ArrowRight size={12} aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Footnote */}
        <p className="price-footnote animate-on-scroll">
          * Prices subject to change without notice. All watches include manufacturer warranty and the 3-Year Alberto
          Atelier Guarantee. Contact our concierge desk for estate collection appraisals and trade-in valuations.
        </p>
      </div>
    </section>
  );
}
