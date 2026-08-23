export default function LandingFooter() {
  return (
    <footer style={{ 
      padding: '40px 24px', 
      borderTop: '1px solid var(--border-primary)', 
      textAlign: 'center' 
    }}>
      <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: '0.05em', marginBottom: 8 }}>
        CIVICIQ
      </div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 24 }}>
        Civic intelligence, connected.
      </div>
      
      <div style={{ 
        display: 'inline-block',
        fontSize: 11, 
        color: 'var(--text-tertiary)', 
        background: 'var(--bg-secondary)',
        padding: '8px 16px',
        borderRadius: 4,
        border: '1px solid var(--border-primary)'
      }}>
        Prototype uses synthetic civic data for demonstration. All root-cause output is AI-generated civic incident hypothesis.
      </div>
    </footer>
  );
}
