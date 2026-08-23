import { XCircle, CheckCircle } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section style={{ padding: '64px 0', borderTop: '1px solid var(--border-primary)' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: 64 }}>
        Not Just Another Ticket System
      </h2>

      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, padding: '0 24px' }}>
        
        {/* Traditional Path */}
        <div className="card" style={{ padding: 40, background: 'var(--bg-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <XCircle size={24} style={{ color: 'var(--status-critical)' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Traditional</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ padding: 16, border: '1px solid var(--border-secondary)', borderRadius: 8 }}>
              Citizen Report
            </div>
            <div style={{ width: 2, height: 24, background: 'var(--border-secondary)', margin: '0 auto' }} />
            <div style={{ padding: 16, border: '1px solid var(--status-critical)', background: 'var(--status-critical-bg)', borderRadius: 8, color: 'var(--text-primary)', textAlign: 'center', fontWeight: 600 }}>
              Isolated Ticket (Dead End)
            </div>
          </div>
          <p style={{ marginTop: 32, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            No connective reasoning. Duplicate effort across departments. Real root causes are often missed until catastrophic failure.
          </p>
        </div>

        {/* CivicIQ Path */}
        <div className="card" style={{ padding: 40, border: '1px solid var(--accent-blue)', background: 'rgba(37, 99, 235, 0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <CheckCircle size={24} style={{ color: 'var(--accent-blue)' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>CivicIQ</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ flex: 1, padding: 12, border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 13, textAlign: 'center' }}>Report A</div>
              <div style={{ flex: 1, padding: 12, border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 13, textAlign: 'center' }}>Report B</div>
              <div style={{ flex: 1, padding: 12, border: '1px solid var(--border-primary)', borderRadius: 8, fontSize: 13, textAlign: 'center' }}>Report C</div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
              <div style={{ width: 2, height: 16, background: 'var(--accent-blue)' }} />
            </div>
            
            <div style={{ padding: 12, background: 'var(--bg-elevated)', border: '1px solid var(--accent-blue)', borderRadius: 8, textAlign: 'center', fontWeight: 500, fontSize: 14 }}>
              Connect Signals
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
              <div style={{ width: 2, height: 16, background: 'var(--accent-blue)' }} />
            </div>

            <div style={{ padding: 12, background: 'var(--bg-elevated)', border: '1px solid var(--accent-blue)', borderRadius: 8, textAlign: 'center', fontWeight: 500, fontSize: 14 }}>
              Investigate Root Cause
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
              <div style={{ width: 2, height: 16, background: 'var(--accent-blue)' }} />
            </div>

            <div style={{ padding: 12, background: 'var(--status-resolved-bg)', border: '1px solid var(--status-resolved)', borderRadius: 8, color: 'var(--status-resolved)', textAlign: 'center', fontWeight: 600 }}>
              Verify Fix
            </div>
          </div>
          <p style={{ marginTop: 24, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Intelligent routing. Multi-department coordination. Closed-loop verification ensuring the real problem is solved.
          </p>
        </div>

      </div>
    </section>
  );
}
