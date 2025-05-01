import { Metadata } from "next";
import DevelopersContent from "./developers-content";

export const metadata: Metadata = {
  title: "Developers - Meet the Team",
  description: "Meet the talented developers behind M31Lab who are building the future of autonomous AI and cybersecurity frameworks.",
  openGraph: {
    title: "M31Lab Developers - Meet Our Team",
    description: "Meet the talented individuals behind M31Lab building the future of AI and cybersecurity.",
  },
  twitter: {
    title: "M31Lab Developers - Meet Our Team",
    description: "Meet the talented individuals behind M31Lab building the future of AI and cybersecurity.",
  },
};

export default function DevelopersPage() {
  return <DevelopersContent />;
}