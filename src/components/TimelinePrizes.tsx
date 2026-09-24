import { Trophy, Calendar, Gift, Clock, CheckCircle2, Circle, CalendarDays } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const prizes = [
  {
    rank: 'نفر اول',
    amount: '۲۰',
    suffix: 'میلیون تومان',
    icon: Trophy,
    color: 'from-amber-400 to-yellow-600',
    glow: 'rgba(251, 191, 36, 0.4)',
    border: 'border-amber-400/30',
    badge: 'طلایی',
  },
  {
    rank: 'نفر دوم',
    amount: '۱۵',
    suffix: 'میلیون تومان',
    icon: Trophy,
    color: 'from-slate-300 to-slate-500',
    glow: 'rgba(203, 213, 225, 0.3)',
    border: 'border-slate-300/30',
    badge: 'نقره‌ای',
  },
  {
    rank: 'نفر سوم',
    amount: '۱۰',
    suffix: 'میلیون تومان',
    icon: Trophy,
    color: 'from-orange-400 to-orange-700',
    glow: 'rgba(249, 115, 22, 0.3)',
    border: 'border-orange-400/30',
    badge: 'برنزی',
  },
];

const events = [
  { date: '۱ تا ۱۵ مهر', title: 'ثبت‌نام و احراز هویت', desc: 'مرحله ثبت‌نام دانشجویان و بررسی مدارک', done: true },
  { date: '۱۶ تا ۳۰ مهر', title: 'آموزش ماژول‌ها', desc: 'دسترسی به دوره‌های رایگان و یادگیری ابزارها', done: true },
  { date: '۱ تا ۲۰ آبان', title: 'پژوهش و داستان‌نویسی', desc: 'استفاده از بانک‌های داده و نگارش سناریو', done: false, active: true },
  { date: '۲۱ آبان تا ۲۰ آذر', title: 'تولید با هوش مصنوعی', desc: 'تبدیل داستان به انیمیشن با ابزارهای AI', done: false },
  { date: '۲۱ تا ۳۰ آذر', title: 'ارسال و داوری', desc: 'ارسال آثار نهایی و آغاز فرایند داوری', done: false },
  { date: '۵ دی', title: ' اعلام نتایج و مراسم اهدای جوایز', desc: 'معرفی برندگان و تقدیر از خالقان', done: false },
];

export default function TimelinePrizes() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="timeline" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="section-padding relative z-10">
        {/* Prizes */}
        <div ref={ref} className={`text-center mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm text-glow-purple font-semibold tracking-wider">جوایز و زمان‌بندی</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            جوایز <span className="neon-text">ویژه</span> و تقویم رویداد
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            در ازای خلاقیت و تلاش شما، جوایز ارزشمند و فرصت حضور در مراسم ملی در نظر گرفته شده است.
          </p>
        </div>

        {/* Prize cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {prizes.map((prize, idx) => {
            const Icon = prize.icon;
            return (
              <div
                key={idx}
                className={`relative glass-card p-8 text-center group animate-fade-in-up ${prize.border}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Badge */}
                <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-gradient-to-r ${prize.color} text-white font-medium`}>
                  {prize.badge}
                </span>

                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `0 0 50px ${prize.glow}` }}
                />

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${prize.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-sm text-slate-400 mb-2">{prize.rank}</h3>
                <div className="text-4xl font-black text-white mb-1">
                  {prize.amount}
                </div>
                <p className="text-sm text-slate-500">{prize.suffix}</p>

                {/* Decorative line */}
                <div className={`h-px w-16 mx-auto mt-5 bg-gradient-to-r ${prize.color} opacity-50`} />
              </div>
            );
          })}
        </div>

        {/* Event timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <CalendarDays className="w-5 h-5 text-glow-purple" />
            <h3 className="text-xl font-bold text-white">تقویم رویداد</h3>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 right-[19px] w-px bg-gradient-to-b from-mowj-500/30 via-glow-purple/20 to-transparent" />

            <div className="space-y-6">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className={`flex gap-4 animate-fade-in-up ${visible ? '' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    {event.done ? (
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                    ) : event.active ? (
                      <div className="relative w-10 h-10 rounded-full bg-mowj-500/20 border border-mowj-400/40 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-mowj-400/20 animate-ping" />
                        <Clock className="w-5 h-5 text-mowj-300 relative" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
                        <Circle className="w-5 h-5 text-slate-600" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-2 ${event.active ? 'glass-card p-4' : ''}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span className={`text-xs ${event.active ? 'text-mowj-300 font-semibold' : 'text-slate-500'}`}>
                        {event.date}
                      </span>
                      {event.active && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-mowj-500/20 text-mowj-300 border border-mowj-400/30">
                          در حال انجام
                        </span>
                      )}
                    </div>
                    <h4 className={`text-base font-bold mb-1 ${event.done ? 'text-slate-400' : event.active ? 'text-white' : 'text-slate-200'}`}>
                      {event.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus */}
          <div className="glass-card p-5 mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-glow-purple to-mowj-600 flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">جوایز غیرنقدی</h4>
              <p className="text-xs text-slate-400 mt-1">
                گواهی شرکت در طرح ملی، فرصت همکاری با جهاد دانشگاهی و معرفی به صنعت انیمیشن کشور.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
