import { Metadata } from "next";
import AgentContent from "./agent-content";

export const metadata: Metadata = {
  title: "M31Lab Agent - Autonomous AI Framework",
  description: "M31Lab Agent is an advanced autonomous agent framework designed for efficient task execution and problem-solving, built with TypeScript and Python.",
  openGraph: {
    title: "M31Lab Agent - Advanced AI Automation Framework",
    description: "Discover our autonomous agent framework for efficient task execution and intelligent automation.",
  },
  twitter: {
    title: "M31Lab Agent - Advanced AI Automation Framework",
    description: "Discover our autonomous agent framework for efficient task execution and intelligent automation.",
  },
};

export default function AgentPage() {
  return <AgentContent />;
}