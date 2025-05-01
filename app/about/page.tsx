import { Metadata } from "next";
import {
  Users,
  Globe,
  Library,
  MapPin,
  Code,
  Server,
  Shield,
  FlaskConical,
} from "lucide-react";
import { CosmicBackground } from "@/components/cosmic-background";

export const metadata: Metadata = {
  title: "About M31Lab",
  description: "Learn about M31Lab's mission, vision, and core focus areas in AI agents and cybersecurity frameworks. Discover how we're shaping the future of intelligent automation.",
  openGraph: {
    title: "About M31Lab - Our Mission & Vision",
    description: "Learn about M31Lab's mission, vision, and core focus areas in AI agents and cybersecurity frameworks.",
  },
  twitter: {
    title: "About M31Lab - Our Mission & Vision",
    description: "Learn about M31Lab's mission, vision, and core focus areas in AI agents and cybersecurity frameworks.",
  },
};

export default function AboutPage() {
  const stats = [
    {
      label: "Organization",
      value: "M31Lab",
      icon: Users,
    },
    {
      label: "Base Location",
      value: "Bangladesh",
      icon: MapPin,
    },
    {
      label: "Operated by",
      value: "Tonmoy Infrastructure & Vision",
      icon: Globe,
    },
    {
      label: "Primary Stack",
      value: "TypeScript, Python, Rust",
      icon: Code,
    },
    {
      label: "Focus",
      value: "Autonomous Agents, Security Frameworks",
      icon: Shield,
    },
    {
      label: "License",
      value: "MIT / Open Source",
      icon: Library,
    },
  ];

  return (
    <>
      <CosmicBackground />
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-16">
          <section>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About M31Lab
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                Autonomous AI Agents & Cybersecurity Frameworks
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                M31Lab is a GitHub organization dedicated to developing
                cutting-edge autonomous AI agents, tools, and frameworks that
                enhance productivity and cybersecurity for modern digital
                ecosystems. Operated under Tonmoy Infrastructure & Vision,
                M31Lab is rooted in innovation, based in Bangladesh, and driven
                by a mission to shape the future of intelligent automation.
              </p>
            </div>
          </section>

          <section>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Mission Statement</h2>
              <div className="relative overflow-hidden rounded-2xl border bg-card p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative">
                  <p className="text-xl italic">
                    "To build autonomous, intelligent frameworks that accelerate
                    next-generation AI capabilities, empower productivity, and
                    fortify digital security."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Core Focus Areas</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="group relative overflow-hidden rounded-2xl border bg-card p-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-4 rounded-xl bg-card p-6">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Server className="h-6 w-6 text-primary" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-transparent to-transparent ml-4" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Autonomous AI Agents
                    </h3>
                    <p className="text-muted-foreground">
                      Development of modular, self-operating agent architectures
                      using modern languages like TypeScript and Rust.
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/50 via-purple-500/50 to-transparent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border bg-card p-2">
                  <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-4 rounded-xl bg-card p-6">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-transparent to-transparent ml-4" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Cybersecurity Tools
                    </h3>
                    <p className="text-muted-foreground">
                      Frameworks and utilities for red team operations, threat
                      intelligence, and proactive digital defense.
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500/50 via-primary/50 to-transparent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border bg-card p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-4 rounded-xl bg-card p-6">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-primary/10 p-3">
                        <FlaskConical className="h-6 w-6 text-primary" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-transparent to-transparent ml-4" />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Developer Tooling
                    </h3>
                    <p className="text-muted-foreground">
                      CLI and GUI tools to streamline agent development,
                      integration, and lifecycle management.
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500/50 via-primary/50 to-transparent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">At a Glance</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-center gap-4 rounded-xl bg-card p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                        <p className="font-medium">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Vision for the Future</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                M31Lab aims to be a leading platform in the AI and security
                ecosystem by fostering innovation through open-source
                contributions, strategic collaboration, and community-driven
                intelligence.
              </p>
              <div className="relative overflow-hidden rounded-2xl border bg-card p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative">
                  <p className="text-xl font-medium italic">
                    "Join us in building the autonomous future — one intelligent
                    agent at a time."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}