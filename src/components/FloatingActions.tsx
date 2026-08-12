import React from 'react';
import { Phone, MessageSquare, MapPin, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onOpenDispatch: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenDispatch }) => {
  return (
    <>
      {/* Desktop & Mobile Floating Circular Buttons - Right & Left Bottom Floating */}
      <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex flex-col gap-3.5 items-end pointer-events-auto">
        
        {/* Floating WhatsApp Button */}
        <div className="group relative flex items-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl ml-2 whitespace-nowrap border border-slate-700 hidden sm:block">
            طلب صيانة سريعة عبر الواتساب
          </span>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل عبر الواتساب"
            className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 transition-transform transform hover:scale-110 active:scale-95 border-2 border-white/20 relative"
          >
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white text-[9px] font-bold text-white flex items-center justify-center">1</span>
            <MessageSquare className="w-7 h-7 fill-current" />
          </a>
        </div>

        {/* Floating Direct Call Button */}
        <div className="group relative flex items-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl ml-2 whitespace-nowrap border border-amber-500/30 hidden sm:block">
            اتصل مباشر بالفني الميداني
          </span>
          <a
            href={`tel:${CONTACT_INFO.phoneNumber}`}
            aria-label="اتصال مباشر"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 transition-transform transform hover:scale-110 active:scale-95 border-2 border-slate-950/20 relative animate-pulse"
          >
            <Phone className="w-7 h-7 fill-current stroke-slate-950" />
          </a>
        </div>

      </div>

      {/* Sticky Mobile Bottom Navigation Bar (Very high conversion for emergency roadside requests) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-2.5 px-3 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${CONTACT_INFO.phoneNumber}`}
          className="flex-1 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black py-3 px-3 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>اتصال مباشر</span>
        </a>

        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 px-3 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>واتساب فوري</span>
        </a>

        <button
          onClick={onOpenDispatch}
          className="bg-slate-800 border border-amber-500/40 text-amber-400 font-bold p-3 rounded-xl flex items-center justify-center text-xs active:scale-95"
          title="اطلب الخدمة لموقعك"
        >
          <MapPin className="w-5 h-5 text-amber-400" />
        </button>
      </div>
    </>
  );
};
