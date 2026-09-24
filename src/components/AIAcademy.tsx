import { useState } from 'react';
import { FileText, Image, Video, Copy, Check, Shield, ChevronDown, Globe, Smartphone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const modules = [
  {
    id: 1,
    title: 'ماژول ۱: تولید متن',
    icon: FileText,
    color: 'from-mowj-500 to-mowj-700',
    glow: 'rgba(99, 102, 241, 0.3)',
    desc: 'آموزش نوشتن پرامپت‌های مؤثر برای تولید داستان‌های کودکانه با هوش مصنوعی.',
    prompt: `شما یک داستان‌نویس کودک هستید. یک داستان کوتاه آموزشی درباره «اهمیت همکاری» برای کودکان ۵ تا ۸ سال بنویسید. زبان ساده، لحن صمیمی و پایان خوش داشته باشد.`,
    tools: ['ChatGPT', 'Claude', 'Gemini'],
  },
  {
    id: 2,
    title: 'ماژول ۲: تولید تصویر',
    icon: Image,
    color: 'from-glow-purple to-purple-700',
    glow: 'rgba(168, 85, 247, 0.3)',
    desc: 'تبدیل داستان به تصویر با ابزارهای تولید تصویر هوش مصنوعی و سبک‌های مناسب کودک.',
    prompt: `تصویری رنگارنگ و کودکانه از یک شخصیت کارتونی دوست‌داشتنی که در حال کشف طبیعت است. سبک انیمیشن سه‌بعدی، رنگ‌های شاد، نور نرم، بدون متن.`,
    tools: ['DALL-E', 'Midjourney', 'Leonardo AI'],
  },
  {
    id: 3,
    title: 'ماژول ۳: تولید ویدیو',
    icon: Video,
    color: 'from-glow-cyan to-blue-600',
    glow: 'rgba(34, 211, 238, 0.3)',
    desc: 'ساخت انیمیشن و ویدیو از تصاویر و داستان با ابزارهای ویدیوی هوش مصنوعی.',
    prompt: `انیمیشن کوتاه ۱۰ ثانیه‌ای از یک شخصیت کارتونی که در باغ می‌رود. حرکت نرم، سبک کودکانه، رزولوشن ۱۰۸۰p، سرعت ۲۴ فریم بر ثانیه.`,
    tools: ['Runway', 'Pika', 'Sora'],
  },
];

const vpnSteps = [
  { title: 'نصب برنامه VPN', desc: 'یکی از برنامه‌های معتبر VPN را از فروشگاه برنامه نصب کنید.' },
  { title: 'اتصال به سرور', desc: 'به یک سرور خارج از ایران متصل شوید تا دسترسی به ابزارها فراهم شود.' },
  { title: 'ثبت‌نام در ابزار', desc: 'با ایمیل دانشگاهی در ابزارهای هوش مصنوعی ثبت‌نام کنید.' },
  { title: 'شروع تولید', desc: 'پس از تأیید حساب، می‌توانید تولید محتوا را آغاز کنید.' },
];

export default function AIAcademy() {
  const { ref, visible } = useScrollReveal();
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [openVpn, setOpenVpn] = useState(false);

  const copyPrompt = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="ai-academy" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-mowj-600/10 rounded-full blur-[100px]" />

      <div className="section-padding relative z-10">
        <div ref={ref} className={`text-center mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm text-glow-purple font-semibold tracking-wider">آکادمی هوش مصنوعی</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            دوره‌های <span className="neon-text">رایگان</span> و ابزارهای تولید
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            سه ماژول آموزشی رایگان برای یادگیری تولید متن، تصویر و ویدیو با هوش مصنوعی.
          </p>
        </div>

        {/* Module cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module, idx) => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                className="glass-card-hover p-6 group animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-5`}
                  style={{ boxShadow: `0 0 30px ${module.glow}` }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{module.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{module.desc}</p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {module.tools.map((tool) => (
                    <span key={tool} className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Prompt snippet */}
                <div className="mt-auto">
                  <div className="rounded-xl bg-black/40 border border-white/[0.06] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
                      <span className="text-xs text-slate-500 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        نمونه پرامپت
                      </span>
                      <button
                        onClick={() => copyPrompt(module.id, module.prompt)}
                        className="flex items-center gap-1.5 text-xs text-glow-purple hover:text-white transition-colors"
                      >
                        {copiedId === module.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            کپی شد
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            کپی
                          </>
                        )}
                      </button>
                    </div>
                    <p dir="rtl" className="px-4 py-3 text-xs text-slate-400 leading-relaxed max-h-24 overflow-y-auto">
                      {module.prompt}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* VPN Guide */}
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setOpenVpn(!openVpn)}
            className="w-full glass-card-hover p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-glow-cyan/10 border border-glow-cyan/20 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-glow-cyan" />
              </div>
              <div className="text-right">
                <h3 className="text-base font-bold text-white">راهنمای VPN موبایل</h3>
                <p className="text-xs text-slate-400">دسترسی به ابزارهای هوش مصنوعی از موبایل</p>
              </div>
            </div>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openVpn ? 'rotate-180' : ''}`} />
          </button>

          <div className={`overflow-hidden transition-all duration-500 ${openVpn ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
            <div className="glass-card p-6 space-y-4">
              {vpnSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-glow-cyan/10 border border-glow-cyan/30 flex items-center justify-center text-xs font-bold text-glow-cyan">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-white/[0.06]">
                <Shield className="w-4 h-4" />
                استفاده از VPN فقط برای دسترسی به ابزارهای آموزشی مجاز است.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
