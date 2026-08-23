import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

export default function CTASection() {
  return (
    <section style={{ padding: '100px 24px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 24 }}>
        Explore CivicIQ
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 40px', fontSize: '1.1rem' }}>
        Experience the decision-support system in action. View how the authority dashboard interprets synthetic demo scenarios.
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
        <Link to="/dashboard" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: 16, borderRadius: 8 }}>
          Open Authority Dashboard
          <ArrowRight size={18} />
        </Link>
        <Link to="/report" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: 16, borderRadius: 8 }}>
          <FileText size={18} />
          View Citizen Reporter
        </Link>
      </div>
    </section>
  );
}
