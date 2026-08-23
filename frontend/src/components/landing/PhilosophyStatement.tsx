export default function PhilosophyStatement() {
  return (
    <section style={{ 
      padding: '120px 24px', 
      background: 'var(--bg-elevated)', 
      textAlign: 'center',
      borderTop: '1px solid var(--border-primary)',
      borderBottom: '1px solid var(--border-primary)'
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
          fontWeight: 800, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.1,
          marginBottom: 24,
          color: 'var(--text-primary)'
        }}>
          AI investigates. <span style={{ color: 'var(--accent-blue)' }}>Humans decide.</span>
        </h2>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)', 
          lineHeight: 1.6,
          fontWeight: 500 
        }}>
          Every response plan, escalation, and closure passes through a person before it's final. 
          CivicIQ is decision-support, not an autonomous authority.
        </p>
      </div>
    </section>
  );
}
