import { useState } from 'react';
import { Database, Users, FlaskConical, Shield, Star, ArrowLeft } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const tabs = [
  {
    id: 'scientific',
    label: 'دستاوردهای علمی',
    icon: FlaskConical,
    items: [
      { title: 'پژوهش‌های آموزشی', desc: 'بیش از ۲۰۰ مقاله علمی در حوزه آموزش کودک و روان‌شناسی رشد', tag: '۲۰۰+ مقاله' },
      { title: 'فناوری‌های نوین', desc: 'مستندسازی دستاوردهای فناوری در حوزه انیمیشن و تولید محتوا', tag: 'فناوری' },
      { title: 'تجربیات موفق', desc: 'مجموعه‌ای از پروژه‌های موفق آموزشی سراسر کشور', tag: 'پروژه‌های نمونه' },
      { title: 'منابع آموزشی', desc: 'کتاب‌ها، جزوه و ویدیوهای آموزشی برای خالقان محتوا', tag: 'منابع' },
    ],
  },
  {
    id: 'heroes',
    label: 'شخصیت‌های قهرمان',
    icon: Users,
    items: [
      { title: 'قهرمانان ملی', desc: 'شخصیت‌های تاریخی و فرهنگی مناسب برای داستان کودکانه', tag: 'ملی' },
      { title: 'الگو‌های علمی', desc: 'دانشمندان و پژوهشگران ایرانی به‌عنوان الگوی الهام‌بخش', tag: 'علمی' },
      { title: 'شخصیت‌های داستانی', desc: 'شخصیت‌های آماده برای استفاده در انیمیشن‌های آموزشی', tag: 'داستانی' },
      { title: 'طراحی شخصیت', desc: 'راهنمای طراحی شخصیت‌های جذاب و آموزشی برای کودکان', tag: 'طراحی' },
    ],
  },
];

export default function DataBanks() {
  const { ref, visible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];

  return (
    <section id="data-banks" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-glow-purple/10 rounded-full blur-[120px]" />

      <div className="section-padding relative z-10">
        <div ref={ref} className={`text-center mb-12 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm text-glow-purple font-semibold tracking-wider">بانک‌های داده اصلی</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            منابع <span className="neon-text">علمی</span> و <span className="neon-text">الهام‌بخش</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            دسترسی به بانک‌های داده غنی برای پژوهش و خلق داستان‌های آموزشی کودکانه.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-mowj-600 to-glow-purple text-white shadow-[0_0_30px_rgba(99,102,241,0.3)]'
                    : 'glass-card text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="grid sm:grid-cols-2 gap-5">
          {currentTab.items.map((item, idx) => (
            <div
              key={`${currentTab.id}-${idx}`}
              className="glass-card-hover p-6 group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mowj-500/20 to-glow-purple/20 border border-white/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-glow-purple" />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
              <div className="flex items-center gap-2 text-sm text-glow-purple group-hover:gap-3 transition-all duration-300 cursor-pointer">
                مشاهده جزئیات
                <ArrowLeft className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {[
            { icon: Shield, label: 'داده‌های معتبر' },
            { icon: Star, label: 'منابع انتخاب‌شده' },
            { icon: Database, label: 'به‌روزرسانی مداوم' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm text-slate-400">
              <badge.icon className="w-4 h-4 text-glow-purple" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
