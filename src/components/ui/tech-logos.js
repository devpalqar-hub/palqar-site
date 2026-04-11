"use client";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiZoho, SiAngular, SiJavascript, SiRedux, SiGoogleads, SiMeta, SiOdoo, SiWhatsapp, SiInstagram, SiTiktok} from "react-icons/si";

export default function TechLogos() {
  return [
    { node: <SiReact />, title: "React"},
    { node: <SiNextdotjs />, title: "Next.js"},
    { node: <SiTypescript />, title: "TypeScript"},
    { node: <SiTailwindcss />, title: "Tailwind CSS"},
    { node: <SiFlutter />, title: "Flutter" },
    { node: <SiZoho />, title: "Zoho" },
    { node: <SiAngular />, title: "Angular" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiRedux />, title: "Redux" }
  ];
}
