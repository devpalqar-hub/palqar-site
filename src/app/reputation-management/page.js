import ServiceTemplate from "@/components/services/serviceTemplate";
import { reputationManagementContent } from "@/data/services/digitalMarketing/reputation-management";

export const metadata = reputationManagementContent.meta;

export default function ReputationManagementPage() {
  return (
    <ServiceTemplate 
      category="digital-marketing" 
      service="reputation-management" 
      content={reputationManagementContent} 
    />
  );
}
