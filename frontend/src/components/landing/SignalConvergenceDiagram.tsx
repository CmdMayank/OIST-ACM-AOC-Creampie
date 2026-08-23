import { MapPin, Droplets, Car, Waves, AlertTriangle } from 'lucide-react';

export default function SignalConvergenceDiagram() {
  return (
    <section style={{ padding: '64px 0', borderTop: '1px solid var(--border-primary)' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: 64 }}>
        From Signals &rarr; Incidents
      </h2>

      <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', height: 400 }}>
        {/* Left Side: Scattered Complaint Nodes */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'var(--bg-secondary)', position: 'relative', zIndex: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--status-high)' }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Pothole</div>
              <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>Main St & 4th</div>
            </div>
            <Car size={14} style={{ color: 'var(--text-tertiary)', marginLeft: 'auto' }} />
          </div>

          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'var(--bg-secondary)', position: 'relative', zIndex: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-blue)' }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Water Leak</div>
              <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>Main St & 3rd</div>
            </div>
            <Droplets size={14} style={{ color: 'var(--text-tertiary)', marginLeft: 'auto' }} />
          </div>

          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'var(--bg-secondary)', position: 'relative', zIndex: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--status-critical)' }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Road Damage</div>
              <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>Main St & 4th</div>
            </div>
            <AlertTriangle size={14} style={{ color: 'var(--text-tertiary)', marginLeft: 'auto' }} />
          </div>

          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'var(--bg-secondary)', position: 'relative', zIndex: 2 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-teal)' }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Flooding</div>
              <div style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>Elm & 4th</div>
            </div>
            <Waves size={14} style={{ color: 'var(--text-tertiary)', marginLeft: 'auto' }} />
          </div>

        </div>

        {/* Center: CivicIQ Node */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
          <div style={{ 
            width: 80, 
            height: 80, 
            borderRadius: '50%', 
            background: 'var(--bg-elevated)', 
            border: '2px solid var(--accent-blue)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 0 32px rgba(37, 99, 235, 0.2)'
          }}>
            <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: '0.05em' }}>CIVICIQ</span>
          </div>
        </div>

        {/* Right Side: Unified Incident */}
        <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: 220, zIndex: 2 }}>
          <div className="card" style={{ border: '1px solid var(--accent-blue)', background: 'rgba(37, 99, 235, 0.05)', padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <MapPin size={16} color="var(--accent-blue)" />
              <span style={{ fontWeight: 700, fontSize: 14 }}>One underlying incident</span>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, lineHeight: 1.2 }}>Main St Infrastructure Failure</h3>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              Water main break eroding road base, leading to multiple surface fractures and localized flooding.
            </p>
          </div>
        </div>

        {/* SVG Connecting Lines */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
          <path d="M 200 40 C 350 40, 300 200, 400 200" fill="none" stroke="var(--border-secondary)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 200 146 C 300 146, 350 200, 400 200" fill="none" stroke="var(--border-secondary)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 200 252 C 300 252, 350 200, 400 200" fill="none" stroke="var(--border-secondary)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 200 360 C 350 360, 300 200, 400 200" fill="none" stroke="var(--border-secondary)" strokeWidth="2" strokeDasharray="4 4" />
          
          <path d="M 400 200 L 580 200" fill="none" stroke="var(--accent-blue)" strokeWidth="2" />
        </svg>

      </div>
    </section>
  );
}
