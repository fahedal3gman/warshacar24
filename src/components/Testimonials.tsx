import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>تقييمات وثقة عملائنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            ماذا يقول عملاؤنا <span className="text-amber-400">عن الورشة المتنقلة؟</span>
          </h2>
          <p className="text-slate-300 text-sm">
            آراء حقيقية من عملائنا بعد تقديم خدمة الصيانة والإصلاح الميداني عند باب منزلهم.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-all shadow-xl"
            >
              <div className="space-y-3">
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 font-bold mr-1">{review.date}</span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed italic">
                  "{review.comment}"
                </p>

              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-white flex items-center gap-1">
                    {review.author}
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="عميل موثق" />
                    )}
                  </h4>
                  <span className="text-[10px] text-amber-400 font-bold block">{review.carInfo}</span>
                  <span className="text-[10px] text-slate-400">{review.serviceType} - {review.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
