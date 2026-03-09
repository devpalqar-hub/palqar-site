import AdminInfrastructureSection from "./AdminInfrastructureSection/AdminInfrastructureSection";
import AutomationFeaturesSection from "./AutomationFeaturesSection/AutomationFeaturesSection";
import BrandIdentitySection from "./BrandIdentitySection/BrandIdentitySection";
import ChallengeSection from "./ChallengeSection/ChallengeSection";
import CTASection from "./CTASection/CTASection";
import DigitalEcosystemSection from "./DigitalEcosystemSection/DigitalEcosystemSection";
import CleanMariaHero from "./heroSection/CleanMariaHero";
import MarketingEngineSection from "./MarketingEngineSection/MarketingEngineSection";
import MobileAppSection from "./MobileAppSection/MobileAppSection";
import NumbersSection from "./NumbersSection/NumbersSection";
import PillarsSection from "./PillarsSection/PillarsSection";
import ResultsSection from "./ResultSection/ResultSection";
import SoftwareAutomationSection from "./SoftwareAutomationSection/SoftwareAutomationSection";

export default function CleanMaria() {
    return (
        <>
           <CleanMariaHero /> 
           <ResultsSection />
           <ChallengeSection />
           <PillarsSection />
           <BrandIdentitySection />
           <MarketingEngineSection />
           <DigitalEcosystemSection />
           <MobileAppSection />
           <AdminInfrastructureSection />
           <SoftwareAutomationSection />
           <AutomationFeaturesSection />
           <NumbersSection />
           <CTASection />
        </>
    )
}