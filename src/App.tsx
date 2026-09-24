import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StudentJourney from '@/components/StudentJourney';
import DataBanks from '@/components/DataBanks';
import AIAcademy from '@/components/AIAcademy';
import Guidelines from '@/components/Guidelines';
import RegistrationForm from '@/components/RegistrationForm';
import TimelinePrizes from '@/components/TimelinePrizes';
import Footer from '@/components/Footer';

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="بازگشت به بالا"
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-mowj-600 to-glow-purple flex items-center justify-center text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-110 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 relative overflow-x-hidden">
      {/* Global background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mowj-900/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-glow-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <StudentJourney />
          <DataBanks />
          <AIAcademy />
          <Guidelines />
          <RegistrationForm />
          <TimelinePrizes />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
