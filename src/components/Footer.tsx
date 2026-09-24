import { Waves, Mail, Phone, MapPin, Instagram, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-mowj-600/10 rounded-full blur-[100px]" />

      <div className="section-padding relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mowj-500 to-glow-purple flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-base font-bold text-white block leading-tight">موج امید</span>
                <span className="text-xs text-slate-500 leading-tight">طرح ملی جهاد دانشگاهی</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              بستری ملی برای خلق محتوای آموزشی کودک با کمک هوش مصنوعی،
              با مشارکت دانشجویان خالق سراسر کشور.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">راه‌های ارتباطی</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-glow-purple" />
                info@mowjomid.ir
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-glow-purple" />
                ۰۲۱-۸۸۸۸۸۸۸
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-glow-purple" />
                تهران، جهاد دانشگاهی
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">شبکه‌های اجتماعی</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'اینستاگرام' },
                { icon: Linkedin, label: 'لینکدین' },
                { icon: Globe, label: 'وب‌سایت' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-mowj-400/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              برای اطلاع از آخرین اخبار و رویدادها در شبکه‌های اجتماعی ما را دنبال کنید.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            تمامی حقوق این طرح برای جهاد دانشگاهی محفوظ است.
          </p>
          <p className="text-xs text-slate-500">
            طراحی و توسعه با امید برای آینده‌ای روشن
          </p>
        </div>
      </div>
    </footer>
  );
}
