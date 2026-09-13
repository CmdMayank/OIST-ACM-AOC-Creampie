import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
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
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text-primary)' }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Last updated: September 13, 2026</p>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>1. Introduction</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            CivicIQ ("we", "our", or "us") respects your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our prototype application.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>2. Information We Collect</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            When you submit a civic report through our platform, we collect the following information:
          </p>
          <ul style={{ fontSize: 14, color: 'var(--text-secondary)', marginLeft: 24, marginTop: 8 }}>
            <li><strong>Personal Information:</strong> Your name and phone number (as entered in the report form).</li>
            <li><strong>Location Data:</strong> GPS coordinates (latitude and longitude) and address based on browser geolocation or manual entry.</li>
            <li><strong>User-Generated Content:</strong> Civic issue photos and textual descriptions provided during the reporting process.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>3. How Information Is Used</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            The data collected is used solely for the purpose of demonstrating the capabilities of the CivicIQ prototype. It is utilized to:
          </p>
          <ul style={{ fontSize: 14, color: 'var(--text-secondary)', marginLeft: 24, marginTop: 8 }}>
            <li>Log simulated grievance incidents.</li>
            <li>Identify geographic clusters of civic issues.</li>
            <li>Allow the AI agents to generate root-cause hypotheses and coordinate mock departmental responses.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>4. Data Storage</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            As a prototype, the application stores data locally using JSON files on the backend. We do not use an external database, and data is routinely reset as part of the demo lifecycle.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>5. Data Security</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            We implement reasonable measures to protect your information within the prototype environment. However, since this is a demonstration project, we advise against submitting genuine sensitive personal information or highly private locations.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>6. User Rights</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            You have the right to request the deletion or modification of the data you have submitted. However, because data is routinely reset by scripts built into the prototype, long-term preservation of your submitted records is not guaranteed or intended.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>7. Changes to Privacy Policy</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            We may update our Privacy Policy periodically. We will reflect any changes by updating this page.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginTop: 12, marginBottom: 8 }}>8. Contact Information</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            If you have questions about this Privacy Policy, please contact the development team through the Developer Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
