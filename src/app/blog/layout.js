export const metadata = {
  title: "Blog — Insights & Ideas from Palqar",
  description:
    "Explore articles on strategy, innovation, design systems, branding, and UX research from the Palqar team.",
  alternates: { canonical: "https://palqar.com/blog" },
  openGraph: {
    title: "Blog — Insights & Ideas from Palqar",
    description:
      "Insights, ideas, and strategies shaping the future of digital and business transformation.",
    url: "https://palqar.com/blog",
    siteName: "Palqar",
    images: [
      {
        url: "/hero-poster.png",
        width: 1200,
        height: 630,
        alt: "Palqar blog — digital insights and ideas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Insights & Ideas from Palqar",
    description:
      "Insights, ideas, and strategies shaping the future of digital and business transformation.",
    images: ["/hero-poster.png"],
  },
};

export default function BlogLayout({ children }) {
  return children;
}
