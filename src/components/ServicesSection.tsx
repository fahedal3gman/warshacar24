import React, { useState } from 'react';
import { Zap, Wrench, BatteryCharging, Cpu, CheckCircle2, Clock, Phone, MessageSquare, ArrowLeft, ShieldAlert } from 'lucide-react';
import { SERVICES_LIST, CONTACT_INFO } from '../data/mockData';
import { ServiceItem, ServiceCategory } from '../types';

interface ServicesSectionProps {
  onOpenDispatch: (category: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenDispatch }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory | 'all'>('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeTab);

  const getCategoryIcon = (category: ServiceCategory) => {
    switch (category) {
      case 'electrical': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'mechanical': return <Wrench className="w-5 h-5 text-blue-400" />;
      case 'battery': return <BatteryCharging className="w-5 h-5 text-emerald-400" />;
      case 'computer': return <Cpu className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Wrench className="w-3.5 h-3.5" />
            <span>خدمات ورشة الصيانة المتنقلة الفورية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            خدمات صيانة السيارات الشاملة <span className="text-amber-400">عند باب المنزل</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            نحضر إليك بطاقم فني محترف وورشة متكاملة مجهزة بالأدوات والقطع الأصلية لمعالجة كافة الأعطال دون الحاجة لسحب أو نقل السيارة بالسطحة.
          </p>
        </div>

        {/* Quick In-Page Service Links Bar */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-8 shadow-xl max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-3">
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              <span>روابط التنقل السريع بين الخدمات الميدانية:</span>
            </span>
            <span className="text-[11px] text-slate-400">انتقال مباشر للخدمة المحددة</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {SERVICES_LIST.map((s) => (
              <a
                key={`quick-link-${s.id}`}
                href={`#service-${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('all');
                  setTimeout(() => {
                    const el = document.getElementById(`service-${s.id}`);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 50);
                }}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 text-slate-300 hover:text-amber-400 font-bold flex items-center gap-2 transition-all"
              >
                {getCategoryIcon(s.category)}
                <span className="truncate">{s.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Service Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              activeTab === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            جميع الخدمات المتنقلة
          </button>

          <button
            onClick={() => setActiveTab('electrical')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'electrical'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>اصلاح الكهرباء</span>
          </button>

          <button
            onClick={() => setActiveTab('mechanical')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'mechanical'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>الميكانيك السريع</span>
          </button>

          <button
            onClick={() => setActiveTab('battery')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'battery'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <BatteryCharging className="w-4 h-4" />
            <span>تغيير البطاريات</span>
          </button>

          <button
            onClick={() => setActiveTab('computer')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'computer'
                ? 'bg-amber-500 text-slate-950 shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>برمجة الكمبيوتر</span>
          </button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl hover:border-amber-500/40 transition-all flex flex-col group scroll-mt-28"
            >
              {/* Card Image Banner */}
              {service.image && (
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 text-xs font-bold text-white shadow-lg">
                    {getCategoryIcon(service.category)}
                    <span>{service.title}</span>
                  </div>
                </div>
              )}

              {/* Service Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-black text-white flex items-center gap-2">
                      {service.title}
                    </h3>
                    <span className="text-xs text-slate-400 flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {service.estimatedTimeMinutes} دقيقة متوسط الصيانة
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Solved Problems Alert Box */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/80 mb-4">
                    <p className="text-[11px] font-bold text-amber-400 flex items-center gap-1 mb-2">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      يعالج هذا القسم الأعطال التالية عند باب بيتك:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {service.commonProblemsSolved.map((prob, i) => (
                        <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Features Checklist */}
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-400">ماذا تشمل خدمة الصيانة الميدانية؟</p>
                    <ul className="space-y-1.5">
                      {service.features.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-200 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    onClick={() => onOpenDispatch(service.category)}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs hover:from-amber-400 hover:to-amber-300 transition-all shadow-lg flex items-center justify-center gap-1.5"
                  >
                    <span>طلب هذه الخدمة لموقعك</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن خدمة (${service.title}) وسيارتي بحاجة صيانة في موقعي.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>واتساب</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
