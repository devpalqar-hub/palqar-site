import { servicesData } from "../data/serviceData"; 
import ServiceHero from "../components/ServiceHero/ServiceHero";
import ServiceIntro from "../components/ServiceIntro/ServiceIntro";
import ApproachSection from "../components/ApproachSection/ApproachSection";
import WorkflowSection from "../components/WorkflowSection/WorkflowSection";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import FAQSection from "../components/FAQSection/FAQSection";

export const metadata = {
  title: "Services - Palqar",
  description: "Explore our range of services designed to drive your business forward.",
};

export default async function ServicePage({ params }) {
  const {slug } = await params; 
  const service = servicesData[slug];

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <ServiceHero data={service.hero} />

      <ServiceIntro text={service.intro} />

      <ApproachSection cards={service.approach} />

      <WorkflowSection workflows={service.workflow} />

      <WhyChoose items={service.whyChoose} />

      <FAQSection faq={service.faq} />
    </>
  );
}