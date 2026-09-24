import { useState } from 'react';
import {
  BookOpen,
  Search,
  PenTool,
  Video,
  Send,
  Check,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    id: 1,
    title: 'یادگیری',
    description: 'آشنایی با مفاهیم هوش مصنوعی، تولید محتوا و داستان‌سازی کودکانه در سه ماژول آموزشی رایگان.',
    icon: BookOpen,
    color: 'from-mowj-500 to-mowj-700',
    glow: 'rgba(99, 102, 241, 0.4)',
  },
  {
    id: 2,
    title: 'پژوهش',
    description: 'استفاده از بانک‌های داده دستاوردهای علمی و شخصیت‌های قهرمان برای پیدا کردن موضوع داستان.',
    icon: Search,
    color: 'from-glow-purple to-purple-700',
    glow: 'rgba(168, 85, 247, 0.4)',
  },
  {
    id: 3,
    title: 'داستان‌گویی',
    description: 'نوشتن سناریو و داستان کودکانه بر اساس راهنمای محتوای آموزشی و روانی مناسب سن.',
    icon: PenTool,
    color: 'from-glow-cyan to-blue-600',
    glow: 'rgba(34, 211, 238, 0.4)',
  },
  {
    id: 4,
    title: 'تولید با هوش مصنوعی',
    description: 'تبدیل داستان به انیمیشن با ابزارهای تولید متن، تصویر و ویدیو به کمک هوش مصنوعی.',
    icon: Video,
    color: 'from-mowj-400 to-glow-purple',
    glow: 'rgba(129, 140, 248, 0.4)',
  },
  {
    id: 5,
    title: 'ارسال',
    description: 'ارسال نهایی اثر برای داوری و حضور در مسابقه ملی و کسب جوایز ویژه.',
    icon: Send,
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16, 185, 129, 0.4)',
  },
];

export default function StudentJourney() {
  const { ref, visible } = useScrollReveal();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="journey" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-mowj-600/10 rounded-full blur-[100px]" />

      <div className="section-padding relative z-10">
        {/* Section header */}
        <div ref={ref} className={`text-center mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm text-glow-purple font-semibold tracking-wider">مسیر دانشجویی</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            از <span className="neon-text">یادگیری</span> تا <span className="neon-text">خلق</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            پنج مرحله تعاملی که شما را از آشنایی با ابزارها تا تولید و ارسال اثر نهایی همراهی می‌کند.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 right-0 left-0 h-px bg-gradient-to-l from-mowj-500 via-glow-purple to-emerald-500 opacity-30" />
          <div
            className="absolute top-12 right-0 h-px bg-gradient-to-l from-mowj-500 via-glow-purple to-emerald-500 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStep;
              const isDone = idx < activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div
                    className={`relative w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? `bg-gradient-to-br ${step.color} scale-110`
                        : isDone
                        ? 'bg-emerald-600/20 border border-emerald-500/40'
                        : 'glass-card'
                    }`}
                    style={isActive ? { boxShadow: `0 0 40px ${step.glow}` } : {}}
                  >
                    {isDone ? (
                      <Check className="w-8 h-8 text-emerald-400" />
                    ) : (
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} />
                    )}
                    <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                      isActive ? 'bg-white text-mowj-700' : isDone ? 'bg-emerald-500 text-white' : 'bg-white/10 text-slate-400'
                    }`}>
                      {step.id}
                    </span>
                  </div>
                  <span className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active step detail */}
          <div className="mt-12 glass-card p-8 max-w-3xl mx-auto text-center" key={activeStep}>
            <div className="flex items-center justify-center gap-3 mb-4">
              {(() => {
                const Icon = steps[activeStep].icon;
                return <Icon className="w-6 h-6 text-glow-purple" />;
              })()}
              <h3 className="text-xl font-bold text-white">{steps[activeStep].title}</h3>
            </div>
            <p className="text-slate-400 leading-relaxed">{steps[activeStep].description}</p>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={`glass-card-hover p-5 flex gap-4 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-500">مرحله {step.id}</span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
