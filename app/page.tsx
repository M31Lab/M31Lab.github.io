"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Shield, Cpu, Code } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CosmicBackground } from "@/components/cosmic-background";
import { motion } from "framer-motion";
import { AnimatedLogo } from "@/components/animated-logo";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <CosmicBackground />
      <section className="relative py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            variants={container}
            className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center"
          >
            <motion.div variants={item} className="mb-8">
              <AnimatedLogo className="text-primary" size={120} />
            </motion.div>
            <motion.div variants={item}>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                Autonomous AI & Cybersecurity
              </span>
            </motion.div>
            <motion.h1
              variants={item}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            >
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                M31Lab
              </span>{" "}
              — Shaping the Future of{" "}
              <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </motion.h1>
            <motion.p
              variants={item}
              className="max-w-[700px] text-lg text-muted-foreground md:text-xl"
            >
              Developing cutting-edge autonomous AI agents, tools, and frameworks
              that enhance productivity and cybersecurity for modern digital
              ecosystems.
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href="/projects">
                  <Github className="mr-2 h-4 w-4" />
                  Explore Projects
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mx-auto max-w-6xl"
          >
            <div className="grid gap-6 md:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border bg-card p-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative space-y-4 rounded-xl bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-transparent to-transparent ml-4" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Autonomous AI Agents
                  </h3>
                  <p className="text-muted-foreground">
                    Development of modular, self-operating agent architectures using
                    modern languages like TypeScript and Rust.
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/50 via-purple-500/50 to-transparent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border bg-card p-2"
              >
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
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border bg-card p-2"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative space-y-4 rounded-xl bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-transparent to-transparent ml-4" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Developer Tooling
                  </h3>
                  <p className="text-muted-foreground">
                    CLI and GUI tools to streamline agent development, integration,
                    and lifecycle management.
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500/50 via-primary/50 to-transparent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mx-auto max-w-6xl space-y-12 text-center"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Vision
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                M31Lab aims to be a leading platform in the AI and security
                ecosystem by fostering innovation through open-source
                contributions, strategic collaboration, and community-driven
                intelligence.
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
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
            <div className="pt-8">
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More About M31Lab
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}