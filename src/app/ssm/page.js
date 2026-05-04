import ServiceTemplate from "@/components/services/serviceTemplate";
import { ssmContent } from "@/data/services/digitalMarketing/ssm";

export const metadata = ssmContent.meta;

export default function SSMPage() {
  return (
    <ServiceTemplate 
      category="digital-marketing" 
      service="ssm" 
      content={ssmContent} 
    />
  );
}
