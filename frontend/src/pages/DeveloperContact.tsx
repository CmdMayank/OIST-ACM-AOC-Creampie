import { ArrowLeft, User, Code, Server, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DeveloperContact() {
  const navigate = useNavigate();

  const team = [
    { name: 'Mayank Sharma', role: 'Project Lead • Multi-Agent Architecture • Backend Integration', icon: <User size={20} className="team-icon" /> },
    { name: 'Prakhar', role: 'Frontend Development • UI/UX • Dashboard', icon: <Code size={20} className="team-icon" /> },
    { name: 'Om Rawat', role: 'Backend Development • API Integration • Agent Workflow', icon: <Server size={20} className="team-icon" /> },
    { name: 'Kapil', role: 'AI Engineering • Vision AI • Knowledge Base • Testing', icon: <Cpu size={20} className="team-icon" /> },
  ];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <button 
        className="btn btn-secondary" 
        onClick={() => navigate(-1)}
        style={{ alignSelf: 'flex-start', marginBottom: '20px' }}
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-primary)' }}>Developer Contact</h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            CivicIQ is a prototype built for demonstration purposes. The project is maintained by a dedicated development team.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 16 }}>The Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
            {team.map((member) => (
              <div key={member.name} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: 16, background: 'var(--bg-primary)', borderRadius: 8, border: '1px solid var(--border-primary)' }}>
                <div style={{ color: 'var(--accent-blue)', background: 'rgba(37, 99, 235, 0.1)', padding: 10, borderRadius: '50%' }}>
                  {member.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>{member.name}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)' }}>Project Repository</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            You can find our source code and issue tracker on GitHub.
          </p>
          <a href="https://github.com/CmdMayank/OIST-ACM-AOC-Creampie" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
