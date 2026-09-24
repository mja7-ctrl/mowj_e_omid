import { useState, FormEvent } from 'react';
import { User, IdCard, Calendar, CheckCircle2, AlertCircle, Loader2, Send, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const qualificationQuestions = [
  'آیا دانشجوی فعال یکی از دانشگاه‌های سراسری کشور هستید؟',
  'آیا به ابزارهای هوش مصنوعی علاقه‌مند و آشنا هستید؟',
  'آیا امکان تولید محتوای انیمیشن کودکانه را دارید؟',
  'آیا با راهنمای محتوای کودک موافقت و تعهد می‌دهید؟',
];

export default function RegistrationForm() {
  const { ref, visible } = useScrollReveal();
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    age: '',
    university: '',
  });
  const [qualifications, setQualifications] = useState<boolean[]>([false, false, false, false]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ageNum = parseInt(formData.age, 10);
  const ageValid = formData.age !== '' && !isNaN(ageNum) && ageNum >= 18 && ageNum <= 40;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'نام و نام خانوادگی الزامی است';
    if (!formData.studentId.trim()) errs.studentId = 'شماره دانشجویی الزامی است';
    else if (formData.studentId.trim().length < 5) errs.studentId = 'شماره دانشجویی نامعتبر است';
    if (!formData.age) errs.age = 'سن الزامی است';
    else if (!ageValid) errs.age = 'سن باید بین ۱۸ تا ۴۰ سال باشد';
    if (!formData.university.trim()) errs.university = 'نام دانشگاه الزامی است';
    if (!qualifications.every(Boolean)) errs.qualifications = 'باید به همه پرسش‌ها پاسخ مثبت دهید';
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="register" className="relative py-24 overflow-hidden">
        <div className="section-padding relative z-10">
          <div ref={ref} className={`max-w-lg mx-auto text-center ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="glass-card p-10">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">ثبت‌نام موفق بود!</h3>
              <p className="text-slate-400 mb-6">
                {formData.fullName} عزیز، درخواست شما با موفقیت ثبت شد.
                اطلاعات بیشتر از طریق ایمیل به اطلاع شما خواهد رسید.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ fullName: '', studentId: '', age: '', university: '' });
                  setQualifications([false, false, false, false]);
                }}
                className="btn-ghost"
              >
                ثبت‌نام جدید
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-mowj-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-glow-purple/10 rounded-full blur-[100px]" />

      <div className="section-padding relative z-10">
        <div ref={ref} className={`max-w-2xl mx-auto ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-10">
            <span className="text-sm text-glow-purple font-semibold tracking-wider">ثبت‌نام هوشمند</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              فرم <span className="neon-text">ثبت‌نام</span> در طرح ملی
            </h2>
            <p className="text-slate-400">
              با تکمیل فرم زیر در طرح ملی «موج امید» شرکت کنید.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
            {/* Full Name */}
            <div>
              <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                <User className="w-4 h-4 text-glow-purple" />
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] text-white placeholder-slate-500 focus:border-mowj-400/50 focus:outline-none focus:ring-2 focus:ring-mowj-500/20 transition-all"
                placeholder="نام خود را وارد کنید"
              />
              {errors.fullName && (
                <p className="flex items-center gap-1.5 text-xs text-red-400 mt-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Student ID + Age */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                  <IdCard className="w-4 h-4 text-glow-purple" />
                  شماره دانشجویی
                </label>
                <input
                  type="text"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] text-white placeholder-slate-500 focus:border-mowj-400/50 focus:outline-none focus:ring-2 focus:ring-mowj-500/20 transition-all"
                  placeholder="مثال: ۹۹۱۲۳۴۵۶"
                  dir="ltr"
                />
                {errors.studentId && (
                  <p className="flex items-center gap-1.5 text-xs text-red-400 mt-2">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.studentId}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                  <Calendar className="w-4 h-4 text-glow-purple" />
                  سن
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    formData.age && !ageValid
                      ? 'border-red-500/50 focus:ring-red-500/20'
                      : 'border-white/[0.08] focus:border-mowj-400/50 focus:ring-mowj-500/20'
                  }`}
                  placeholder="۱۸ تا ۴۰ سال"
                  dir="ltr"
                />
                {errors.age && (
                  <p className="flex items-center gap-1.5 text-xs text-red-400 mt-2">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.age}
                  </p>
                )}
                {formData.age && ageValid && (
                  <p className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    سن در بازه مجاز است
                  </p>
                )}
              </div>
            </div>

            {/* University */}
            <div>
              <label className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                <GraduationCap className="w-4 h-4 text-glow-purple" />
                نام دانشگاه
              </label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] text-white placeholder-slate-500 focus:border-mowj-400/50 focus:outline-none focus:ring-2 focus:ring-mowj-500/20 transition-all"
                placeholder="نام دانشگاه سراسری"
              />
              {errors.university && (
                <p className="flex items-center gap-1.5 text-xs text-red-400 mt-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.university}
                </p>
              )}
            </div>

            {/* Qualification Questions */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold text-white mb-4">پرسش‌های احراز صلاحیت</h4>
              <div className="space-y-3">
                {qualificationQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      const next = [...qualifications];
                      next[idx] = !next[idx];
                      setQualifications(next);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-right transition-all duration-300 ${
                      qualifications[idx]
                        ? 'bg-emerald-500/10 border border-emerald-500/30'
                        : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/15'
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center transition-all duration-300 ${
                        qualifications[idx] ? 'bg-emerald-500' : 'border-2 border-white/20'
                      }`}
                    >
                      {qualifications[idx] && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <span className={`text-sm ${qualifications[idx] ? 'text-white' : 'text-slate-400'}`}>
                      {q}
                    </span>
                  </button>
                ))}
              </div>
              {errors.qualifications && (
                <p className="flex items-center gap-1.5 text-xs text-red-400 mt-3">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.qualifications}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  در حال ارسال...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  ارسال درخواست ثبت‌نام
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
