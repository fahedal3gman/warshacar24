import React, { useState } from 'react';
import { Phone, Wrench, Shield, Clock, MapPin, Zap, MessageSquare, BatteryCharging, Cpu, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface HeaderProps {
  onOpenDispatch: (category?: string) => void;
  activeVansCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDispatch, activeVansCount }) => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const handleNavClick = (id: string) => {
    setShowServicesMenu(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      {/* Top Emergency Ticker */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-1.5 px-4 text-center flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
        <span>ورشة صيانة متنقلة طوارئ 24/7 عند باب المنزل والموقع</span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline-flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> وصول سريع خلال 15 - 25 دقيقة
        </span>
        <span className="bg-slate-900 text-amber-400 text-xs px-2 py-0.5 rounded-full mr-2">
          {activeVansCount} ورشة نشطة بالقرب منك
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 font-black text-2xl">
              <Wrench className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
                  الورشة <span className="text-amber-400">المتنقلة</span>
                </span>
                <span className="hidden lg:inline-block bg-slate-800 text-amber-400 text-xs px-2 py-0.5 rounded border border-amber-500/30">
                  صيانة سريعة
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                صيانة وإصلاح السيارات في الموقع وأمام المنزل
              </p>
            </div>
          </div>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {/* Dropdown for Services */}
            <div className="relative">
              <button
                onClick={() => setShowServicesMenu(!showServicesMenu)}
                className="flex items-center gap-1 hover:text-amber-400 transition-colors py-2 focus:outline-none"
              >
                <span>خدمات الصيانة الميدانية</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showServicesMenu ? 'rotate-180' : ''}`} />
              </button>

              {showServicesMenu && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-2 space-y-1 text-xs z-50">
                  <button
                    onClick={() => handleNavClick('service-electrical')}
                    className="w-full text-right flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-900 text-slate-200 hover:text-amber-400 transition-colors"
                  >
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>إصلاح كهرباء السيارات والدينامو</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('service-mechanical')}
                    className="w-full text-right flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-900 text-slate-200 hover:text-amber-400 transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>الميكانيك المتنقل والفرامل</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('service-battery')}
                    className="w-full text-right flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-900 text-slate-200 hover:text-amber-400 transition-colors"
                  >
                    <BatteryCharging className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>تغيير واشتراك البطاريات</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('service-computer')}
                    className="w-full text-right flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-900 text-slate-200 hover:text-amber-400 transition-colors"
                  >
                    <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>برمجة وفحص بالكمبيوتر</span>
                  </button>
                </div>
              )}
            </div>

            <a href="#coverage" className="hover:text-amber-400 transition-colors">مناطق التغطية</a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors">تقييمات العملاء</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">الأسئلة الشائعة</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Quick Request */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-900/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>واتساب الفني</span>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${CONTACT_INFO.phoneNumber}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-amber-300 transition-all transform active:scale-95"
            >
              <Phone className="w-4 h-4 fill-current animate-bounce" />
              <span>اتصل بالفني الآن</span>
            </a>

            {/* Request Dispatch Drawer */}
            <button
              onClick={() => onOpenDispatch()}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>اطلب الخدمة لموقعك</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
