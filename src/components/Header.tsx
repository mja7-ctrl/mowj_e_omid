import { useState } from 'react';
import { Waves, Menu, X, LogIn } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'بانک‌های داده', href: '#data-banks' },
  { label: 'آکادمی هوش مصنوعی', href: '#ai-academy' },
  { label: 'راهنماها', href: '#guidelines' },
  { label: 'زمان‌بندی', href: '#timeline' },
];

export default function Header() {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-glow-purple/40 blur-xl rounded-full group-hover:bg-glow-purple/60 transition-all duration-500" />
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-mowj-500 to-glow-purple flex items-center justify-center neon-border">
              <Waves className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white leading-tight">موج امید</span>
            <span className="text-[11px] text-slate-400 leading-tight">جهاد دانشگاهی</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 right-0 left-0 h-px bg-gradient-to-l from-mowj-400 to-glow-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#register" className="btn-primary flex items-center gap-2 text-sm">
            <LogIn className="w-4 h-4" />
            ثبت‌نام و ورود
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white"
          aria-label="منو"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="section-padding py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-slate-300 hover:bg-white/[0.05] hover:text-white transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-2 flex items-center justify-center gap-2 text-sm"
          >
            <LogIn className="w-4 h-4" />
            ثبت‌نام و ورود
          </a>
        </nav>
      </div>
    </header>
  );
}
