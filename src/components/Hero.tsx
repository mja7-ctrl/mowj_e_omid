import { Sparkles, GraduationCap, ArrowLeft } from 'lucide-react';
import NeonSphere from '@/components/NeonSphere';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-glow-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-mowj-600/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-cyan/5 rounded-full blur-[150px]" />

      <div className="section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right side (text in RTL) */}
          <div className="text-center lg:text-right space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-slate-300 animate-fade-in-up">
              <GraduationCap className="w-4 h-4 text-glow-purple" />
              ویژه دانشجویان دانشگاهی سراسری
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              انیمیشن هوش مصنوعی و
              <br />
              <span className="neon-text">داستان‌سازی کودکانه</span>
              <br />
              برای دانشجویان خالق
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mr-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              طرح ملی «موج امید» بستری برای خلق محتوای آموزشی کودک با کمک هوش مصنوعی است.
              یاد بگیر، پژوهش کن، داستان بساز و با ابزارهای هوش مصنوعی تولید کن.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#register" className="btn-primary flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                همین حالا ثبت‌نام کن
              </a>
              <a href="#journey" className="btn-ghost flex items-center gap-2">
                مسیر را ببین
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { value: '۵۰۰+', label: 'دانشجو خالق' },
                { value: '۳', label: 'ماژول آموزشی' },
                { value: '۴۵', label: 'ماه تومان جوایز' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-right">
                  <div className="text-2xl font-bold neon-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Left side (3D neon sphere) */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-mowj-600/30 via-glow-purple/20 to-glow-cyan/20 blur-3xl animate-pulse-glow" />

              {/* Orbit rings (CSS decorative) */}
              <div className="absolute inset-8 rounded-full border border-mowj-400/20 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border border-glow-purple/15 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              <div className="absolute inset-24 rounded-full border border-glow-cyan/10 animate-spin-slow" style={{ animationDuration: '25s' }} />

              {/* 3D neon sphere */}
              <div className="absolute inset-0">
                <NeonSphere />
              </div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-glow-purple/60"
                  style={{
                    top: `${15 + i * 12}%`,
                    left: `${10 + (i % 3) * 30}%`,
                    animation: `float ${4 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                    boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
