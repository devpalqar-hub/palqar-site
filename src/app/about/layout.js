export const metadata = {
  title: "About Us — Meet the Palqar Team",
  description:
    "Learn about Palqar's philosophy, mission, leadership team, and the journey behind the digital agency redefining growth-focused web experiences.",
  alternates: { canonical: "https://palqar.com/about" },
  openGraph: {
    title: "About Us — Meet the Palqar Team",
    description:
      "Learn about Palqar's philosophy, mission, leadership team, and the journey behind the digital agency redefining growth-focused web experiences.",
    url: "https://palqar.com/about",
    siteName: "Palqar",
    images: [
      {
        url: "/about/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "The Palqar team gathered in our studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Meet the Palqar Team",
    description:
      "Discover Palqar's philosophy, mission, and the team driving digital innovation.",
    images: ["/about/about-team.jpg"],
  },
};

export default function AboutLayout({ children }) {
  return children;
}
