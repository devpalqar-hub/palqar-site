import ServiceTemplate from "@/components/services/serviceTemplate";
import { influencerMarketingContent } from "@/data/services/digitalMarketing/influencer-marketing";

export const metadata = influencerMarketingContent.meta;

export default function InfluencerMarketingPage() {
  return (
    <ServiceTemplate 
      category="digital-marketing" 
      service="influencer-marketing" 
      content={influencerMarketingContent} 
    />
  );
}
