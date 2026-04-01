"use client";

import ScopeSection from "./ScopeSection/ScopeSection";
import ZodoHero from "./ZodoHero/ZodoHero";
import CoreExperienceSection from "./CoreExperienceSection/CoreExperienceSection";
import AppShowcaseSection from "./AppShowcaseSection/AppShowcaseSection";
import ZodoFeaturesSection from "./ZodoFeaturesSection/ZodoFeaturesSection";
import AboutProductSection from "./AboutProductSection/AboutProductSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import DownloadCTASection from "./DownloadCTASection/DownloadCTASection";
import HospitalOnboardSection from "./HospitalOnboardSection/HospitalOnboardSection";
import ContactSection from "./ContactSection/ContactSection";

export default function Zodo() {
  return (
    <>
      <ZodoHero />
      <ScopeSection />
      <CoreExperienceSection />
      <AppShowcaseSection />
      <ZodoFeaturesSection />
      <AboutProductSection />
      <ReviewsSection />
      <DownloadCTASection />
      <HospitalOnboardSection />
      <ContactSection />
    </>
  );
}
