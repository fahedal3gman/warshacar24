import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CoverageMap } from './components/CoverageMap';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LegalModal, CookieBanner } from './components/LegalModals';
import { CONTACT_INFO } from './data/mockData';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'about' | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const acceptedCookies = localStorage.getItem('cookies_accepted');
    if (!acceptedCookies) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookies_accepted', 'true');
    setShowCookieBanner(false);
  };

  const handleOpenDispatch = (category?: string) => {
    let serviceName = 'صيانة متنقلة';
    if (category === 'electrical') serviceName = 'إصلاح كهرباء السيارات والدينامو';
    if (category === 'mechanical') serviceName = 'صيانة الميكانيك السريع والفرامل';
    if (category === 'battery') serviceName = 'تغيير أو اشتراك البطارية بالضمان';
    if (category === 'computer') serviceName = 'برمجة وفحص الكمبيوتر';

    const text = `مرحباً، أود حجز ورشة متنقلة في الرياض لخدمة: (${serviceName}). موقعي في الرياض.`;
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-amber-500 selection:text-slate-950 antialiased dir-rtl text-right" dir="rtl">
      
      {/* Fixed Navigation Header */}
      <Header
        onOpenDispatch={handleOpenDispatch}
        activeVansCount={14}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenDispatch={handleOpenDispatch} />

        {/* Core Services Section: Electrical, Mechanical, Battery, Computer */}
        <ServicesSection onOpenDispatch={handleOpenDispatch} />

        {/* Coverage Cities Map & Neighborhoods */}
        <CoverageMap onOpenDispatch={handleOpenDispatch} />

        {/* Customer Reviews & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Mandatory Floating WhatsApp & Call Buttons & Mobile Sticky Bar */}
      <FloatingActions onOpenDispatch={() => handleOpenDispatch()} />

      {/* Google Ads Compliance Legal Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Cookie & Privacy Consent Banner */}
      {showCookieBanner && (
        <CookieBanner
          onAccept={handleAcceptCookies}
          onOpenPrivacy={() => setLegalModalType('privacy')}
        />
      )}

    </div>
  );
}
