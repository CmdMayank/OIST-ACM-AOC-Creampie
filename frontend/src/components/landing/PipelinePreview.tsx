import AgentPipeline, { buildPipelineStages } from '../AgentPipeline';

export default function PipelinePreview() {
  const mockPipelineResult = {
    perception: { status: 'complete', result: { issue_type: 'Water Leak', severity: 'High', confidence: 0.95 } },
    clustering: { status: 'complete', result: { cluster_size: 4 } },
    incident_detection: { status: 'complete', result: { classification: 'Infrastructure Damage', confidence: 0.88 } },
    root_cause: { status: 'complete', result: { chain: ['Water Leak', 'Road Weakening', 'Pothole'], confidence: 0.92 } },
    impact: { status: 'complete', result: { score: 85, priority: 'Critical' } },
    response: { status: 'complete', result: { steps: [{}, {}, {}], approved: true } },
    filing: { status: 'complete', result: {} }
  };
  
  const displayStages = buildPipelineStages(mockPipelineResult as any);

  return (
    <section style={{ padding: '64px 0', borderTop: '1px solid var(--border-primary)' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: 24 }}>
        See the System Think
      </h2>
      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
        The Agent Pipeline provides total transparency into how CivicIQ transforms raw inputs into actionable response plans.
      </p>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        {/* Reuse the exact AgentPipeline component from the dashboard */}
        <AgentPipeline stages={displayStages} />
      </div>
    </section>
  );
}
