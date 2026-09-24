import { useState } from 'react';
import { Heart, BookHeart, Smile, ShieldCheck, Baby, Eye, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const guidelines = [
  { icon: Baby, text: 'محتوا مناسب سن کودک (۳ تا ۱۲ سال) باشد' },
  { icon: Smile, text: 'لحن صمیمی، شاد و امیدبخش استفاده شود' },
  { icon: BookHeart, text: 'مفاهیم آموزشی و تربیتی در قالب داستان ارائه شود' },
  { icon: ShieldCheck, text: 'از خشونت، ترس و محتوای نامناسب خودداری شود' },
  { icon: Heart, text: 'احترام به تفاوت‌های فرهنگی و اجتماعی رعایت شود' },
  { icon: Eye, text: 'تصاویر بدون متن و با رنگ‌های ملایم و جذاب باشد' },
];

export default function Guidelines() {
  const { ref, visible } = useScrollReveal();
  const [checked, setChecked] = useState<number[]>([]);

  const toggle = (idx: number) => {
    setChecked((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const allChecked = checked.length === guidelines.length;

  return (
    <section id="guidelines" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="section-padding relative z-10">
        <div ref={ref} className={`max-w-3xl mx-auto ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-10">
            <span className="text-sm text-glow-purple font-semibold tracking-wider">راهنمای محتوای کودک</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              مرزهای <span className="neon-text">آموزشی</span> و <span className="neon-text">روانی</span>
            </h2>
            <p className="text-slate-400">
              چک‌لیست مواردی که هر اثر باید پیش از ارسال آن‌ها را رعایت کرده باشد.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <div className="space-y-3">
              {guidelines.map((item, idx) => {
                const Icon = item.icon;
                const isChecked = checked.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => toggle(idx)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-right ${
                      isChecked
                        ? 'bg-emerald-500/10 border border-emerald-500/30'
                        : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/15'
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300 ${
                        isChecked ? 'bg-emerald-500' : 'border-2 border-white/20'
                      }`}
                    >
                      {isChecked && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <Icon className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${isChecked ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <span className={`text-sm leading-relaxed transition-colors duration-300 ${isChecked ? 'text-white' : 'text-slate-400'}`}>
                      {item.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">پیشرفت رعایت راهنما</span>
                <span className="text-sm font-bold text-white">
                  {checked.length} / {guidelines.length}
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-l from-emerald-500 to-teal-400 transition-all duration-500"
                  style={{ width: `${(checked.length / guidelines.length) * 100}%` }}
                />
              </div>
              {allChecked && (
                <div className="flex items-center gap-2 mt-4 text-sm text-emerald-400 animate-fade-in-up">
                  <ShieldCheck className="w-4 h-4" />
                  همه موارد رعایت شده است. اثر شما آماده ارسال است.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
