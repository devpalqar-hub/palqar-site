export const metadata = {
  title: "Contact Us — Get in Touch with Palqar",
  description:
    "Reach out for a work enquiry, customer support, or partnership opportunities. We respond within 24 hours.",
  alternates: { canonical: "https://palqar.com/contact" },
  openGraph: {
    title: "Contact Us — Get in Touch with Palqar",
    description:
      "Submit a project enquiry, get customer support, or explore partnership opportunities with Palqar.",
    url: "https://palqar.com/contact",
    siteName: "Palqar",
    images: [
      {
        url: "/hero-poster.png",
        width: 1200,
        height: 630,
        alt: "Contact Palqar — digital growth agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Get in Touch with Palqar",
    description:
      "Submit a project enquiry, get customer support, or explore partnership opportunities with Palqar.",
    images: ["/hero-poster.png"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
