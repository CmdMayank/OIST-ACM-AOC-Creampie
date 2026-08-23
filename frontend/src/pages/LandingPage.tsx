import Hero from '../components/landing/Hero';
import SignalConvergenceDiagram from '../components/landing/SignalConvergenceDiagram';
import EngineSteps from '../components/landing/EngineSteps';
import ComparisonSection from '../components/landing/ComparisonSection';
import PipelinePreview from '../components/landing/PipelinePreview';
import PhilosophyStatement from '../components/landing/PhilosophyStatement';
import VerificationPreview from '../components/landing/VerificationPreview';
import CTASection from '../components/landing/CTASection';
import LandingFooter from '../components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <SignalConvergenceDiagram />
      <EngineSteps />
      <ComparisonSection />
      <PipelinePreview />
      <PhilosophyStatement />
      <VerificationPreview />
      <CTASection />
      <LandingFooter />
    </div>
  );
}
