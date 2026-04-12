import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import LoaderWrapper from "@/components/ui/LoaderWrapper";
import { Smooch_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Raleway } from "next/font/google";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://palqar.com"),
  title: {
    default: "Palqar",
    template: "%s | Palqar",
  },
  description:
    "Palqar builds growth-focused digital experiences through web development, branding, marketing, automation, and business strategy.",
  applicationName: "Palqar",
  keywords: [
    "Palqar",
    "web development",
    "branding",
    "performance marketing",
    "business consulting",
    "digital agency",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Palqar",
    description:
      "Growth-focused web development, branding, marketing, automation, and consulting.",
    url: "https://palqar.com",
    siteName: "Palqar",
    images: [
      {
        url: "/hero-poster.png",
        width: 1200,
        height: 630,
        alt: "Palqar digital growth services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palqar",
    description:
      "Growth-focused web development, branding, marketing, automation, and consulting.",
    images: ["/hero-poster.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};
const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-smooch",
  display: "swap",
});

export const viewport = {
  themeColor: "#000000",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${smoochSans.variable} ${dmSans.variable} ${raleway.variable} ${inter.variable} ${jetbrains.variable}`}
      >
        <LoaderWrapper>
          <Header />
          {children}
          <Footer />
        </LoaderWrapper>
        <GoogleAnalytics gaId="G-NVTL72KW7M" />
      </body>
    </html>
  );
}
