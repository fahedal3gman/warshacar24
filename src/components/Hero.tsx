import React, { useState } from 'react';
import { Shield, Clock, MapPin, Zap, Phone, MessageSquare, Wrench, BatteryCharging, Cpu, CheckCircle2, ArrowLeft } from 'lucide-react';
import { CONTACT_INFO, CAR_MAKES } from '../data/mockData';

interface HeroProps {
  onOpenDispatch: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDispatch }) => {
  const [selectedService, setSelectedService] = useState('battery');
  const [carMake, setCarMake] = useState('تويوتا');

  const handleQuickDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    let serviceLabel = 'تغيير أو اشتراك بطارية';
    if (selectedService === 'electrical') serviceLabel = 'إصلاح الكهرباء والدينامو';
    if (selectedService === 'mechanical') serviceLabel = 'الميكانيك والفرامل والحرارة';
    if (selectedService === 'computer') serviceLabel = 'برمجة وكشف بالكمبيوتر';

    const text = `مرحباً، أود حجز صيانة متنقلة بالرياض لسيارتي (${carMake}) - نوع الخدمة المطلوبة: (${serviceLabel}).`;
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-slate-950 text-white pt-8 pb-16 lg:py-20 overflow-hidden border-b border-slate-800">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy & Hero Action */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>الورشة المتنقلة أصبحت بالقرب منك الآن</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              ورشة صيانة السيارات <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                المتنقلة في الموقع
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-bold">
                أو أمام باب المنزل
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              خدمة إغاثة وصيانة طوارئ متكاملة أينما توقفت سيارتك. مجهزون بأحدث أجهزة فحص الكمبيوتر، قطع الغيار الأصلية، وعدة صيانة الميكانيك والكهرباء والتكييف.
            </p>

            {/* Core Service Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <button 
                onClick={() => onOpenDispatch('electrical')}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all text-right group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-extrabold text-white">اصلاح الكهرباء</h3>
                <p className="text-[10px] text-slate-400">دينامو، سلف، فيوزات</p>
              </button>

              <button 
                onClick={() => onOpenDispatch('mechanical')}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all text-right group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-extrabold text-white">الميكانيك المتنقل</h3>
                <p className="text-[10px] text-slate-400">فرامل، حرارة، سيور</p>
              </button>

              <button 
                onClick={() => onOpenDispatch('battery')}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all text-right group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-extrabold text-white">تغيير البطاريات</h3>
                <p className="text-[10px] text-slate-400">اشتراك أو تبديل جديد</p>
              </button>

              <button 
                onClick={() => onOpenDispatch('computer')}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all text-right group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-extrabold text-white">برمجة الكمبيوتر</h3>
                <p className="text-[10px] text-slate-400">فحص OBD2 وتصفير أخطاء</p>
              </button>
            </div>

            {/* Primary Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href={`tel:${CONTACT_INFO.phoneNumber}`}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-300 transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <Phone className="w-5 h-5 fill-current animate-bounce" />
                <span>طلب إغاثة طوارئ مباشر ({CONTACT_INFO.formattedPhone})</span>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('مرحباً، أحتاج فني ورشة متنقلة لسيارتي عند باب المنزل بشكل عاجل')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-900/30 transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>إرسال الموقع بالواتساب</span>
              </a>
            </div>

            {/* Value Props Bullet points */}
            <div className="flex items-center gap-6 text-xs sm:text-sm text-slate-400 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>وصول خلال 15 - 25 دقيقة</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ضمان شامل معتمد</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>أسعار محددة مسبقاً</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Showcase & Quick Booking Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-900">
              
              {/* Hero Image */}
              <img
                src="/src/assets/images/mobile_workshop_hero_1786524467174.jpg"
                alt="ورشة متنقلة صيانة سيارات في الموقع"
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Floating Emergency Status Overlay */}
              <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-amber-500/30 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">متوسط سرعة الاستجابة</p>
                  <p className="text-sm font-black text-amber-400">18 دقيقة فقط</p>
                </div>
              </div>

              {/* Quick Order Widget Overlay at bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-extrabold text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    احجز صيانة أمام المنزل الآن
                  </h3>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">
                    تأكيد فورى
                  </span>
                </div>

                <form onSubmit={handleQuickDispatch} className="space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">نوع الخدمة المطلوب</label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2 focus:border-amber-400 outline-none"
                      >
                        <option value="battery">تغيير أو اشتراك بطارية</option>
                        <option value="electrical">اصلاح الكهرباء والدينامو</option>
                        <option value="mechanical">الميكانيك والفرامل والحرارة</option>
                        <option value="computer">برمجة وكشف بالكمبيوتر</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">ماركة السيارة</label>
                      <select
                        value={carMake}
                        onChange={(e) => setCarMake(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg p-2 focus:border-amber-400 outline-none"
                      >
                        {CAR_MAKES.slice(0, 10).map((make) => (
                          <option key={make} value={make}>{make}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold text-xs shadow-lg hover:from-amber-400 hover:to-amber-300 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>طلب توجيه الفني لموقعي الآن</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
