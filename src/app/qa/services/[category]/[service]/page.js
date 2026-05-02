import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/services/serviceTemplate";

// ─── Content registry ─────────────────────────────────────────────────────────
const contentRegistry = {
  "digital-marketing": {
    seo: () =>
      import("@/data/services/digitalMarketing/seo").then((m) => ({
        content: m.seoContent,
        meta: m.seoContent.meta,
      })),
  },
};

export async function generateStaticParams() {
  return [
    { category: "digital-marketing", service: "seo" },
  ];
}

export async function generateMetadata({ params }) {
  const { category, service } = await params;

  const loader = contentRegistry[category]?.[service];
  if (!loader) return { title: "Service Not Found" };

  const { meta } = await loader();
  const canonicalUrl = `https://palqar.com/qa/services/${category}/${service}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(", "),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: "Palqar",
      locale: "en_QA",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }) {
  const { category, service } = await params;
  console.log("SERVER SIDE: QA Page hit:", category, service);

  const loader = contentRegistry[category]?.[service];
  if (!loader) notFound();

  const { content } = await loader();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: content.meta.title,
            description: content.meta.description,
            provider: { "@type": "Organization", name: "Palqar" },
          }),
        }}
      />
      <ServiceTemplate
        category={category}
        service={service}
        content={content}
      />
    </>
  );
}
