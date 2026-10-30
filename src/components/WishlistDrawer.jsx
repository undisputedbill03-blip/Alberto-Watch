import { X, Trash2, Calendar, ShieldCheck } from 'lucide-react';
import { watches } from '../data/watchData';

function formatCurrency(num) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(num);
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  savedIds,
  onRemove,
  onClear,
  onOpenAppointment,
}) {
  if (!isOpen) return null;

  const savedWatches = watches.filter((w) => savedIds.includes(w.id));
  const totalValue = savedWatches.reduce((sum, w) => sum + w.price, 0);

  return (
    <div
      className="drawer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-drawer-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <aside className="drawer-panel animate-drawer">
        {/* Header */}
        <div className="drawer-header">
          <div>
            <span className="section-eyebrow">Private Curation</span>
            <h3 id="wishlist-drawer-title" className="drawer-title">
              Saved References ({savedWatches.length})
            </h3>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close saved references drawer"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="drawer-content">
          {savedWatches.length === 0 ? (
            <div className="drawer-empty-state">
              <div className="empty-icon-circle">
                <ShieldCheck size={36} className="gold-icon" aria-hidden="true" />
              </div>
              <h4>Your Private Collection is Empty</h4>
              <p>
                Browse our Haute Horlogerie vault or historic archive and save references of interest to curate your personal acquisition shortlist.
              </p>
              <button
                type="button"
                className="btn btn-gold"
                onClick={onClose}
                style={{ marginTop: '1.25rem' }}
              >
                Explore Curated Collection
              </button>
            </div>
          ) : (
            <div className="saved-items-list" role="list">
              {savedWatches.map((watch) => (
                <div key={watch.id} className="saved-item-card" role="listitem">
                  <div className="saved-item-thumb">
                    <img src={watch.image} alt={watch.name} />
                  </div>
                  <div className="saved-item-details">
                    <span className="saved-item-ref">{watch.reference}</span>
                    <h5 className="saved-item-name">{watch.name}</h5>
                    <span className="saved-item-brand">{watch.brand} · {watch.specs?.movement || 'Mechanical'}</span>
                    <div className="saved-item-price">{formatCurrency(watch.price)}</div>
                  </div>
                  <button
                    type="button"
                    className="saved-item-remove"
                    onClick={() => onRemove(watch.id)}
                    aria-label={`Remove ${watch.name} from saved references`}
                    title="Remove reference"
                  >
                    <Trash2 size={15} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {savedWatches.length > 0 && (
          <div className="drawer-footer">
            <div className="drawer-total-row">
              <span className="total-label">Curated Valuation Total:</span>
              <span className="total-value">{formatCurrency(totalValue)}</span>
            </div>
            <p className="drawer-total-note">
              Complimentary armored transit and white-glove salon viewings included.
            </p>
            <div className="drawer-actions">
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => {
                  onClose();
                  onOpenAppointment(savedWatches[0]);
                }}
              >
                <Calendar size={15} aria-hidden="true" />
                Schedule Salon Viewing for Saved Pieces
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={onClear}
                style={{ fontSize: '0.8rem', padding: '0.5rem 0.8rem' }}
              >
                Clear Shortlist
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
