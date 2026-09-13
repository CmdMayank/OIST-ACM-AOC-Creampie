import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Activity, FileText, Sun, Moon } from 'lucide-react';
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CitizenReport from './pages/CitizenReport';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DeveloperContact from './pages/DeveloperContact';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './index.css';

function AppShell() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-primary)',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        height: 52,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'background 0.2s ease, border-color 0.2s ease',
      }}>
        <NavLink to="/" end style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 8, marginRight: 32 }}>
          <Activity size={18} color="var(--accent-blue)" />
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em' }}>
            CivicIQ
          </span>
          <span style={{
            fontSize: 10,
            color: 'var(--text-tertiary)',
            background: 'var(--bg-tertiary)',
            padding: '1px 6px',
            borderRadius: 3,
            fontWeight: 500,
          }}>
            PROTOTYPE
          </span>
        </NavLink>

        <div style={{ display: 'flex', gap: 4 }}>
          <NavLink to="/dashboard" style={({ isActive }) => ({
            padding: '6px 12px',
            borderRadius: 5,
            fontSize: 13,
            fontWeight: 500,
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            background: isActive ? 'var(--bg-tertiary)' : 'transparent',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.15s ease',
          })}>
            <Activity size={14} />
            Dashboard
          </NavLink>
          <NavLink to="/report" style={({ isActive }) => ({
            padding: '6px 12px',
            borderRadius: 5,
            fontSize: 13,
            fontWeight: 500,
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            background: isActive ? 'var(--bg-tertiary)' : 'transparent',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.15s ease',
          })}>
            <FileText size={14} />
            Submit Report
          </NavLink>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="nav-disclaimer" style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>
            Prototype uses synthetic civic data for demonstration
          </span>

          {/* Social Icons */}
          <div className="nav-social-container" style={{ display: 'flex', gap: 4, alignItems: 'center', marginRight: 4 }}>
            <a href="https://www.instagram.com/aka.mayankkk/" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="Instagram" title="Instagram">
              <FiInstagram size={16} />
            </a>
            <a href="https://x.com/MayannkkSharma" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="X (Twitter)" title="X">
              <FiTwitter size={16} />
            </a>
            <a href="https://www.linkedin.com/in/sharmamayankk/" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="LinkedIn" title="LinkedIn">
              <FiLinkedin size={16} />
            </a>
            <a href="https://github.com/CmdMayank" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="GitHub" title="GitHub">
              <FiGithub size={16} />
            </a>
          </div>

          {/* Light / Dark mode toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>

      {/* Routes */}
      <main style={{ flex: 1, padding: '20px 24px' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<CitizenReport />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<DeveloperContact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-primary)',
        padding: '16px 24px',
        fontSize: 12,
        color: 'var(--text-tertiary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        transition: 'border-color 0.2s ease',
      }}>
        <div style={{
          display: 'flex',
          gap: '24px',
          fontWeight: 500
        }}>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/contact" className="footer-link">Developer Contact</Link>
        </div>
        <div style={{ fontSize: 11, textAlign: 'center' }}>
          Prototype uses synthetic civic data for demonstration. All root-cause output is AI-generated civic incident hypothesis.
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}
