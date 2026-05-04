import ServiceTemplate from "@/components/services/serviceTemplate";
import { performanceMarketingContent } from "@/data/services/digitalMarketing/performance-marketing";

export const metadata = performanceMarketingContent.meta;

export default function PerformanceMarketingPage() {
  return (
    <ServiceTemplate 
      category="digital-marketing" 
      service="performance-marketing" 
      content={performanceMarketingContent} 
    />
  );
}
