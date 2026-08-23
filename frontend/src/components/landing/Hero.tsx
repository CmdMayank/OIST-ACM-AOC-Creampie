import { Link } from 'react-router-dom';
import { Activity, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 64 }}>
      {/* Abstract signals visual / logo area */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 12,
          padding: '12px 24px',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-primary)',
          borderRadius: 100,
          boxShadow: '0 4px 24px rgba(0,0,0,0.1)'
        }}>
          <div style={{ position: 'relative', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Abstract signal dots */}
            <div style={{ position: 'absolute', top: 0, left: 4, width: 4, height: 4, borderRadius: '50%', background: 'var(--status-critical)' }} />
            <div style={{ position: 'absolute', bottom: 2, right: 0, width: 4, height: 4, borderRadius: '50%', background: 'var(--status-high)' }} />
            <div style={{ position: 'absolute', top: 12, left: 20, width: 4, height: 4, borderRadius: '50%', background: 'var(--accent-teal)' }} />
            <Activity size={20} color="var(--accent-blue)" style={{ zIndex: 1 }} />
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '0.02em' }}>CIVICIQ</span>
        </div>
      </div>

      <h1 style={{ 
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
        fontWeight: 800, 
        letterSpacing: '-0.04em', 
        lineHeight: 1.1, 
        marginBottom: 24,
        color: 'var(--text-primary)'
      }}>
        Different complaints.<br />
        <span style={{ color: 'var(--accent-blue)' }}>One hidden signal.</span>
      </h1>
      
      <p style={{ 
        fontSize: '1.25rem', 
        color: 'var(--text-secondary)', 
        maxWidth: 600, 
        margin: '0 auto 40px', 
        lineHeight: 1.6 
      }}>
        Cities don't need more tickets. They need intelligence connecting them.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/dashboard" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: 16, borderRadius: 8 }}>
          Explore CivicIQ
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
