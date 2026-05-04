import ServiceTemplate from "@/components/services/serviceTemplate";
import { emailMarketingContent } from "@/data/services/digitalMarketing/email-marketing";

export const metadata = emailMarketingContent.meta;

export default function EmailMarketingPage() {
  return (
    <ServiceTemplate 
      category="digital-marketing" 
      service="email-marketing" 
      content={emailMarketingContent} 
    />
  );
}
