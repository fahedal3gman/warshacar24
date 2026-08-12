import React from 'react';
import { X, ShieldCheck, FileText, Lock, CheckCircle, Info } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'about' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl space-y-6 text-slate-200 dir-rtl text-right">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-amber-400 pb-2 border-b border-slate-800">
              <Lock className="w-6 h-6 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-black text-white">سياسة الخصوصية وحماية البيانات</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              تلتزم <strong className="text-amber-400">{CONTACT_INFO.companyName}</strong> بجميع معايير الخصوصية وحماية بيانات المستخدمين بما يتوافق مع السياسات الأنظمة المعمول بها في المملكة العربية السعودية وسياسات إعلانات جوجل (Google Ads Policies).
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <h4 className="font-bold text-white text-base">1. البيانات التي نجمعها</h4>
              <p className="text-slate-400">
                عند التواصل معنا عبر الاتصال أو الواتساب لحجز ورشة متنقلة، نجمع البيانات الضرورية فقط لتقديم الخدمة الميدانية وتشمل:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 pr-2">
                <li>رقم الهاتف للتواصل المباشر مع الفني.</li>
                <li>موقع السيارة الجغرافي الميداني في مدينة الرياض.</li>
                <li>نوع السيارة وموديلها ووصف المشكلة أو العطل الميكانيكي/الكهربائي.</li>
              </ul>

              <h4 className="font-bold text-white text-base pt-2">2. كيفية استخدام البيانات</h4>
              <p className="text-slate-400">
                تستخدم البيانات المجمعة حصرياً لإرسال الفني الميداني القريب لموقعك وإتمام عمليات الصيانة المطلوبة، ولا يتم استخدام بياناتك لأي أغراض تسويقية غير مصرح بها.
              </p>

              <h4 className="font-bold text-white text-base pt-2">3. حماية البيانات وعدم المشاركة</h4>
              <p className="text-slate-400">
                نتعهد بعدم بيع، تأجير، أو مشاركة بياناتك الشخصية مع أي أطراف خارجية أو شركات تسويق نهائياً. جميع بيانات التواصل تبقى مشفرة وآمنة.
              </p>

              <h4 className="font-bold text-white text-base pt-2">4. ملفات التعريف (Cookies) وإعلانات Google</h4>
              <p className="text-slate-400">
                قد نستخدم ملفات الكوكيز وأدوات التحليل المعتمدة من Google قياس أداء الإعلانات وتحسين تجربة الوصول للخدمات الميدانية بشكل سريع وسلس.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-amber-400 pb-2 border-b border-slate-800">
              <FileText className="w-6 h-6 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-black text-white">الشروط والأحكام وإخلاء المسؤولية</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              أهلاً بكم في <strong className="text-amber-400">{CONTACT_INFO.companyName}</strong>. استخدامكم لخدماتنا الميدانية أو تواصلكم معنا يعني موافقتكم الشاملة على الشروط والأحكام التالية:
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <h4 className="font-bold text-white text-base">1. طبيعة الخدمة وشفافية العمل</h4>
              <p className="text-slate-400">
                نقدم خدمات صيانة السيارات الميدانية المستقلة (كهرباء، ميكانيك سريع، بطاريات، فحص كمبيوتر) في مدينة الرياض. يتم فحص السيارة ومعاينتها وإطلاع العميل على التكلفة والقطع المطلوبة قبل البدء بالعمل.
              </p>

              <h4 className="font-bold text-white text-base pt-2">2. زمن الوصول وحالة الطريق</h4>
              <p className="text-slate-400">
                تقدير زمن الوصول (15 - 25 دقيقة) هو زمن تقديري يعتمد على القرب الجغرافي للفني، الظروف المرورية، وحالة الطقس داخل مدينة الرياض.
              </p>

              <h4 className="font-bold text-white text-base pt-2">3. سياسة الضمان وقطع الغيار</h4>
              <p className="text-slate-400">
                تسري ضمانات البطاريات وقطع الغيار الجديدة الموردة بناءً على شروط الضمان المعتمدة من الوكلاء والمصنعين في المملكة العربية السعودية مع تقديم كرت ضمان معتمد للعميل.
              </p>

              <h4 className="font-bold text-white text-base pt-2">4. الامتثال للسياسات الإعلانية</h4>
              <p className="text-slate-400">
                نلتزم بتوفير معلومات دقيقة وشفافة دون أي إدعاءات مضللة، وجميع الأسعار والخدمات تخضع للمعاينة المباشرة والتقدير الشفاف قبل التنفيذ.
              </p>
            </div>
          </div>
        )}

        {type === 'about' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-amber-400 pb-2 border-b border-slate-800">
              <Info className="w-6 h-6 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-black text-white">عن الورشة المتنقلة ونطاق العمل</h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <strong className="text-amber-400">{CONTACT_INFO.companyName}</strong> هي خدمة صيانة سيارات ميدانية متكاملة تعمل على مدار 24 ساعة في جميع مناطق وأحياء مدينة الرياض بالمملكة العربية السعودية.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>معلومات مزود الخدمة المعنية:</span>
                </div>
                <ul className="space-y-1 text-slate-400 text-xs">
                  <li>• <strong>اسم الخدمة:</strong> الورشة المتنقلة بالرياض</li>
                  <li>• <strong>مقر ونطاق الخدمة:</strong> مدينة الرياض، المملكة العربية السعودية</li>
                  <li>• <strong>الهاتف المباشر:</strong> {CONTACT_INFO.formattedPhone}</li>
                  <li>• <strong>ساعات العمل:</strong> طوارئ صيانة ميدانية 24 ساعة / 7 أيام</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors"
          >
            فهمت وإغلاق
          </button>
        </div>

      </div>
    </div>
  );
};

interface CookieBannerProps {
  onAccept: () => void;
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onOpenPrivacy }) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-slate-900/95 border border-amber-500/30 backdrop-blur-md rounded-2xl p-4 shadow-2xl text-slate-200 dir-rtl text-right text-xs space-y-3 animate-slideUp">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed text-slate-300">
          نستخدم ملفات التعريف (Cookies) وسياسات الاستخدام المعتمدة لضمان تقديم أفضل خدمة صيانة سيارات ميدانية بالرياض وتسهيل وصول الفني لموقعك.
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 pt-1 border-t border-slate-800">
        <button
          onClick={onOpenPrivacy}
          className="text-amber-400 hover:underline font-bold text-[11px]"
        >
          سياسة الخصوصية
        </button>

        <button
          onClick={onAccept}
          className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors shadow-md"
        >
          موافقة ومتابعة
        </button>
      </div>
    </div>
  );
};
