import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Open Source AI & Security Tools",
  description: "Explore M31Lab's open-source projects focused on autonomous AI agents, cybersecurity frameworks, and developer productivity tools.",
  openGraph: {
    title: "M31Lab Projects - Open Source AI & Security Tools",
    description: "Explore our open-source repositories focused on autonomous AI agents, cybersecurity, and developer productivity.",
  },
  twitter: {
    title: "M31Lab Projects - Open Source AI & Security Tools",
    description: "Explore our open-source repositories focused on autonomous AI agents, cybersecurity, and developer productivity.",
  },
};

import ProjectsContent from "./projects-content";

export default function ProjectsPage() {
  return <ProjectsContent />;
}