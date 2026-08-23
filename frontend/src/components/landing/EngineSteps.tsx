import { Eye, Network, Search, AlertCircle, FileEdit, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'observe',
    icon: <Eye size={20} />,
    title: 'OBSERVE',
    description: 'Ingests real-time civic reports across all channels and departments.'
  },
  {
    id: 'connect',
    icon: <Network size={20} />,
    title: 'CONNECT',
    description: 'Finds nearby, recent reports that may be symptoms of the same problem.'
  },
  {
    id: 'investigate',
    icon: <Search size={20} />,
    title: 'INVESTIGATE',
    description: 'Generates hypotheses about hidden root causes using pattern recognition.'
  },
  {
    id: 'prioritize',
    icon: <AlertCircle size={20} />,
    title: 'PRIORITIZE',
    description: 'Scores real-world impact to separate critical failures from minor nuisances.'
  },
  {
    id: 'plan',
    icon: <FileEdit size={20} />,
    title: 'PLAN',
    description: 'Drafts coordinated, multi-department response workflows for human review.'
  },
  {
    id: 'verify',
    icon: <CheckCircle2 size={20} />,
    title: 'VERIFY',
    description: 'Analyzes post-resolution evidence to confirm the root problem was actually fixed.'
  }
];

export default function EngineSteps() {
  return (
    <section style={{ padding: '64px 0', borderTop: '1px solid var(--border-primary)' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: 64 }}>
        The CivicIQ Engine
      </h2>

      <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24, padding: '0 24px' }}>
        {steps.map((step, index) => (
          <div key={step.id} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch' }}>
              <div style={{ 
                width: 48, 
                height: 48, 
                borderRadius: '50%', 
                background: 'var(--bg-elevated)', 
                border: '1px solid var(--border-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)',
                flexShrink: 0,
                zIndex: 2
              }}>
                {step.icon}
              </div>
              {index < steps.length - 1 && (
                <div style={{ width: 2, flex: 1, background: 'var(--border-secondary)', margin: '8px 0' }} />
              )}
            </div>

            <div className="card" style={{ flex: 1, padding: '24px', transform: 'translateY(-6px)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 8, letterSpacing: '0.05em' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
