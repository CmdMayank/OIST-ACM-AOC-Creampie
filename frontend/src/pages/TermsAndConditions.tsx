import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <button 
        className="btn btn-secondary" 
        onClick={() => navigate(-1)}
        style={{ alignSelf: 'flex-start', marginBottom: '20px' }}
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-primary)' }}>Terms & Conditions</h1>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Last updated: September 13, 2026</p>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>1. Introduction</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            Welcome to CivicIQ. This is a prototype system developed for demonstration purposes. These Terms & Conditions govern your use of the CivicIQ application and website.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>2. Acceptance of Terms</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            By accessing or using CivicIQ, you agree to be bound by these Terms. If you do not agree, please do not use the application.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>3. Use of the Website</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            CivicIQ is a student/college project prototype. It is not affiliated with, endorsed by, or connected to any real municipal government or grievance system. You may use the website for evaluation and demonstration purposes.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>4. User Responsibilities</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            When filing a report via the platform, you agree to provide reasonable and appropriate information. Do not submit malicious content, illegal material, or attempt to exploit the platform's infrastructure.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>5. Intellectual Property</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            All rights, title, and interest in and to the platform (excluding user-generated content) are and will remain the exclusive property of the CivicIQ development team.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>6. Data/Content Disclaimer</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            All root-cause outputs are AI-generated civic incident hypotheses and should not be treated as confirmed diagnoses. Any complaint filing shown is a simulated municipal grievance workflow for demonstration purposes only.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>7. Limitation of Liability</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            In no event shall the developers be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the platform or any information provided therein.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>8. Changes to Terms</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            We reserve the right to modify these terms at any time. We do not provide advance notice of changes to these Terms. Continued use of the platform after any changes shall constitute your consent to such changes.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>9. Contact Information</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            If you have any questions about these Terms, please reach out via our Developer Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
