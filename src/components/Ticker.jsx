import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Phone, Mail, Award, Wrench, X, Activity } from 'lucide-react';

export default function Ticker() {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const [location, setLocation] = useState('New York · Beverly Hills · Chicago');
  const [minimized, setMinimized] = useState(false);
  const contentRef = useRef(null);

  // Update clock every second safely
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Safe geolocation with fallback
  useEffect(() => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation(`${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E (Local Atelier Sync)`);
        },
        () => {
          try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setLocation(tz.replace('_', ' ') || 'New York · Beverly Hills · Chicago');
          } catch {
            setLocation('New York · Beverly Hills · Chicago');
          }
        },
        { timeout: 5000 }
      );
    }
  }, []);

  const dateStr = currentTime.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const timeStr = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const tickerItems = [
    { Icon: Calendar, label: 'Date', value: dateStr },
    { Icon: Clock, label: 'Live Atelier Time', value: timeStr },
    { Icon: Activity, label: 'Escapement Cadence', value: '28,800 vph · 4 Hz Swiss Lever Rhythm' },
    { Icon: MapPin, label: 'Atelier Salons', value: location },
    { Icon: Sparkles, label: 'Alberto Watch Co.', value: 'Since 1987 · Luxury Timepieces & Master Restoration' },
    { Icon: Phone, label: 'Private Concierge', value: '+1 (212) 555-0194' },
    { Icon: Mail, label: 'Direct Desk', value: 'info@albertowatch.com' },
    { Icon: Award, label: 'Authorized Dealer', value: 'Rolex · Michael Kors · Citizen · Bulova' },
    { Icon: Wrench, label: 'Master Repair Bench', value: 'All Major Luxury Brands · Same-Day Service Available' },
  ];

  const allItems = [...tickerItems, ...tickerItems];

  if (minimized) {
    return (
      <button
        type="button"
        className="ticker-reopen-btn"
        onClick={() => setMinimized(false)}
        aria-label="Re-open live horological status ticker"
        title="View live atelier status"
      >
        <Clock size={13} className="gold-icon" aria-hidden="true" />
        <span>Live Atelier Status</span>
      </button>
    );
  }

  return (
    <div
      className="ticker-wrap"
      role="marquee"
      aria-label="Live horological status ticker with date, time, and store information"
      aria-live="off"
    >
      <div className="ticker-label" aria-hidden="true">
        <span className="ticker-live-dot" />
        <span>LIVE</span>
      </div>

      <div className="ticker-track">
        <div className="ticker-content" ref={contentRef} aria-hidden="true">
          {allItems.map((item, i) => {
            const ItemIcon = item.Icon;
            return (
              <span key={i} className="ticker-item">
                <span className="ticker-dot" />
                <span className="ticker-item-content">
                  <ItemIcon size={13} className="ticker-icon" aria-hidden="true" />
                  <strong>{item.label}:</strong>
                  <span className="ticker-val">&nbsp;{item.value}</span>
                </span>
              </span>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="ticker-close-btn"
        onClick={() => setMinimized(true)}
        aria-label="Dismiss live ticker"
        title="Minimize ticker"
      >
        <X size={13} aria-hidden="true" />
      </button>
    </div>
  );
}

