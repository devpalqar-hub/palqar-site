export const metadata = {
  title: "Careers — Join the Palqar Team",
  description:
    "Explore open roles at Palqar. Join a team of designers, developers, and strategists building the future of digital experiences.",
  alternates: { canonical: "https://palqar.com/career" },
  openGraph: {
    title: "Careers — Join the Palqar Team",
    description:
      "Explore open roles at Palqar. Join a team of designers, developers, and strategists building the future of digital experiences.",
    url: "https://palqar.com/career",
    siteName: "Palqar",
    images: [
      {
        url: "/hero-poster.png",
        width: 1200,
        height: 630,
        alt: "Careers at Palqar — join our team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Join the Palqar Team",
    description:
      "Explore open roles at Palqar. Join a team of designers, developers, and strategists.",
    images: ["/hero-poster.png"],
  },
};

export default function CareerLayout({ children }) {
  return children;
}
