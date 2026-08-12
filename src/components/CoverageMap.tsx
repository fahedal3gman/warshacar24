import React, { useState } from 'react';
import { MapPin, Clock, Truck, Search, CheckCircle } from 'lucide-react';
import { COVERAGE_CITIES } from '../data/mockData';

interface CoverageMapProps {
  onOpenDispatch: () => void;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({ onOpenDispatch }) => {
  const [selectedCityId, setSelectedCityId] = useState('riyadh');
  const [searchQuery, setSearchQuery] = useState('');

  const activeCity = COVERAGE_CITIES.find(c => c.id === selectedCityId) || COVERAGE_CITIES[0];

  const filteredCities = COVERAGE_CITIES.filter(c =>
    c.name.includes(searchQuery) || c.neighborhoods.some(n => n.includes(searchQuery))
  );

  return (
    <section id="coverage" className="py-16 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <MapPin className="w-4 h-4" />
            <span>مناطق التغطية والوصول السريع بالرياض</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            ورش صيانة متنقلة <span className="text-amber-400">تغطي كافة أحياء مدينة الرياض</span>
          </h2>
          <p className="text-slate-300 text-sm">
            نوفر أطقم وورش متنقلة موجهة ومجهزة في كافة أحياء ومحاور مدينة الرياض لسرعة الوصول.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-8">
          {COVERAGE_CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCityId(city.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
                selectedCityId === city.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{city.name}</span>
              <span className="text-[10px] bg-slate-900 text-amber-300 px-2 py-0.5 rounded-full font-bold">
                {city.activeVans} ورشة
              </span>
            </button>
          ))}
        </div>

        {/* City Details Card */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">{activeCity.name} ({activeCity.region})</h3>
                <p className="text-xs text-amber-400 font-bold flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5" /> متوسط وقت الوصول: {activeCity.avgDispatchTime}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              تغطي الورشة المتنقلة أسطولاً جغرافياً واسعاً في جميع أحياء ومحاور مدينة {activeCity.name}. يتم توجيه أقرب مركبة صيانة مجهزة لك فور تأكيد الطلب.
            </p>

            <div>
              <span className="text-xs font-bold text-slate-400 block mb-2">الأحياء التي نخدمها في {activeCity.name}:</span>
              <div className="flex flex-wrap gap-2">
                {activeCity.neighborhoods.map((nh, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-900 border border-slate-800 text-slate-200 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{nh}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-slate-900 p-6 rounded-xl border border-slate-800 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
              <MapPin className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-white">هل أنت متواجد في {activeCity.name} الآن؟</h4>
              <p className="text-xs text-slate-400 mt-1">يتوفر حالياً {activeCity.activeVans} ورشة متنقلة جاهزة للتحرك فوراً نحو موقعك.</p>
            </div>

            <button
              onClick={onOpenDispatch}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs shadow-lg hover:from-amber-400 hover:to-amber-300 transition-all"
            >
              اطلب توجيه الورشة لموقعك في {activeCity.name}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
