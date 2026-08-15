import React from 'react';
import { Wrench, Phone, MessageSquare, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface FooterProps {
  onOpenLegal?: (type: 'privacy' | 'terms' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-xl">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold text-white">
                الورشة <span className="text-amber-400">المتنقلة</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              خدمة صيانة وإصلاح السيارات المتنقلة الفورية في الموقع وأمام باب المنزل. إصلاح الكهرباء، الميكانيك، تغيير البطاريات، وبرمجة الكمبيوتر الكترونياً 24/7.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
              <Clock className="w-4 h-4" />
              <span>خدمة طوارئ مريحة على مدار الساعة</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white border-b border-slate-800 pb-2">خدمات الصيانة الميدانية</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('service-electrical');
                    if (el) {
                      const offset = 90;
                      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                      window.scrollTo({ top: pos, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  • إصلاح كهرباء السيارات والدينامو
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('service-mechanical');
                    if (el) {
                      const offset = 90;
                      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                      window.scrollTo({ top: pos, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  • الميكانيك السريع وإصلاح الفرامل
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('service-battery');
                    if (el) {
                      const offset = 90;
                      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                      window.scrollTo({ top: pos, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  • تغيير واشتراك البطاريات بالضمان
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('service-computer');
                    if (el) {
                      const offset = 90;
                      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                      window.scrollTo({ top: pos, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  • كشف وبرمجة كمبيوتر OBD2
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white border-b border-slate-800 pb-2">سياسات وإفصاح جوجل إعلانات</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegal?.('privacy')}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  • سياسة الخصوصية وحماية البيانات
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal?.('terms')}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  • الشروط والأحكام وإخلاء المسؤولية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal?.('about')}
                  className="hover:text-amber-400 transition-colors text-right"
                >
                  • عن مزود الخدمة ونطاق العمل
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Emergency Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white border-b border-slate-800 pb-2">الاتصال والإغاثة المباشرة</h4>
            <p className="text-xs text-slate-400">اتصل بنا للوصول الفوري خلال 15 - 25 دقيقة:</p>
            
            <a
              href={`tel:${CONTACT_INFO.phoneNumber}`}
              className="p-3 rounded-xl bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>اتصال مباشر: {CONTACT_INFO.formattedPhone}</span>
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>تواصل مباشر بالواتساب</span>
            </a>
          </div>

        </div>

        {/* Copyright & Guarantees */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لـ {CONTACT_INFO.companyName} - صيانة واصلاح السيارات عند باب المنزل.</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-slate-300 underline"
            >
              الخصوصية
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-slate-300 underline"
            >
              الشروط
            </button>
            <span>•</span>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>مزود خدمة معتمد بالرياض</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
