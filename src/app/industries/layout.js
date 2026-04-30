export const metadata = {
  title: "Our Work — Selected Projects by Palqar",
  description:
    "Browse Palqar's portfolio of branding, marketing, and web & mobile projects built for ambitious visionaries.",
  alternates: { canonical: "https://palqar.com/industries" },
  openGraph: {
    title: "Our Work — Selected Projects by Palqar",
    description:
      "From silent disruptors to market leaders. Explore branding, marketing, and web projects by Palqar.",
    url: "https://palqar.com/industries",
    siteName: "Palqar",
    images: [
      {
        url: "/hero-poster.png",
        width: 1200,
        height: 630,
        alt: "Palqar selected works — branding, marketing, web & mobile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Selected Projects by Palqar",
    description:
      "From silent disruptors to market leaders. Explore branding, marketing, and web projects by Palqar.",
    images: ["/hero-poster.png"],
  },
};

export default function IndustriesLayout({ children }) {
  return children;
}
