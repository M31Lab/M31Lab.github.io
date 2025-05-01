'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Heart,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedLogo } from "@/components/animated-logo";

export function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const socialLinks = [
    {
      href: "https://github.com/M31Lab",
      icon: Github,
      label: "GitHub",
      color: "hover:text-[#2ea44f]",
    },
    {
      href: "https://twitter.com/eshanized",
      icon: Twitter,
      label: "Twitter",
      color: "hover:text-[#1DA1F2]",
    },
    {
      href: "https://linkedin.com/company/m31lab",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]",
    },
    {
      href: "mailto:m31.lab@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-primary",
    },
  ];

  const quickLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/developers", label: "Developers" },
    {
      href: "https://github.com/M31Lab/M31Lab.github.io",
      label: "Source Code",
      external: true,
    },
  ];

  return (
    <footer className="relative w-full border-t">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />

      <div className="container relative space-y-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <AnimatedLogo className="text-primary" size={32} />
              <span className="text-2xl font-bold">M31Lab</span>
            </div>
            <p className="text-muted-foreground">
              Building autonomous AI agents and cybersecurity frameworks for the
              future of intelligent automation.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-muted-foreground transition-colors hover:text-primary"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                    {link.external && (
                      <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className={`transition-colors ${social.color}`}
                  asChild
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Location</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Globe className="mt-1 h-4 w-4 shrink-0" />
              <div>
                <p>Tonmoy Infrastructure & Vision</p>
                <p>Bangladesh</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row md:text-left"
        >
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} M31Lab.</span>
            <span className="hidden md:inline">All rights reserved.</span>
            <span className="flex items-center gap-1">
              Made with
              <Heart className="h-3 w-3 text-red-500" />
              in Bangladesh
            </span>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}