import { CheckCircle2, XCircle } from 'lucide-react';

export default function VerificationPreview() {
  return (
    <section style={{ padding: '80px 24px', borderTop: '1px solid var(--border-primary)' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', marginBottom: 24 }}>
        Did the Fix Actually Work?
      </h2>
      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: 600, margin: '0 auto 64px', fontSize: '1.1rem' }}>
        Closing a ticket isn't the end. CivicIQ verifies contractor uploads against the original issue's location, timestamp, and visual evidence before allowing a closure.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', maxWidth: 1000, margin: '0 auto' }}>
        
        {/* Rejected Verification */}
        <div className="card" style={{ flex: '1 1 300px', padding: 24, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', gap: 4, background: 'var(--status-critical-bg)', color: 'var(--status-critical)', padding: '4px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700 }}>
            <XCircle size={14} /> REJECTED
          </div>
          
          <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Submitted Evidence</h4>
          
          <div style={{ height: 180, background: 'var(--bg-tertiary)', borderRadius: 8, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)', border: '1px dashed var(--border-secondary)' }}>
            [ Photo: Clean sidewalk ]
          </div>
          
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
            <div style={{ marginBottom: 4 }}><strong>Location:</strong> Mismatch (0.5mi away)</div>
            <div style={{ marginBottom: 4 }}><strong>Visual:</strong> No pothole repair visible</div>
          </div>
        </div>

        {/* Verified Fix */}
        <div className="card" style={{ flex: '1 1 300px', padding: 24, position: 'relative', borderColor: 'var(--status-resolved)' }}>
          <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', gap: 4, background: 'var(--status-resolved-bg)', color: 'var(--status-resolved)', padding: '4px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700 }}>
            <CheckCircle2 size={14} /> VERIFIED
          </div>
          
          <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Submitted Evidence</h4>
          
          <div style={{ height: 180, background: 'var(--bg-tertiary)', borderRadius: 8, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-tertiary)', border: '1px solid var(--status-resolved)' }}>
            [ Photo: Fresh asphalt patch ]
          </div>
          
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
            <div style={{ marginBottom: 4 }}><strong>Location:</strong> Match (5 meters)</div>
            <div style={{ marginBottom: 4 }}><strong>Visual:</strong> Fresh pavement repair visible</div>
          </div>
        </div>

      </div>
    </section>
  );
}
