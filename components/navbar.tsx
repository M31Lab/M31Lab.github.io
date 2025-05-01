"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, Home, Info, Code2, Users, ExternalLink, Bot } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedLogo } from "@/components/animated-logo";

const routes = [
  {
    href: "/",
    label: "Home",
    icon: Home,
    color: "text-pink-500",
  },
  {
    href: "/about",
    label: "About",
    icon: Info,
    color: "text-blue-500",
  },
  {
    href: "/projects",
    label: "Projects",
    icon: Code2,
    color: "text-green-500",
  },
  {
    href: "/projects/agent",
    label: "Agent",
    icon: Bot,
    color: "text-purple-500",
  },
  {
    href: "/developers",
    label: "Developers",
    icon: Users,
    color: "text-orange-500",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <AnimatedLogo className="text-primary" />
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            M31Lab
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors relative group hover:text-foreground/90",
                  pathname === route.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 transition-colors",
                    pathname === route.href ? route.color : "text-foreground/60",
                    "group-hover:" + route.color
                  )}
                />
                {route.label}
                {pathname === route.href && (
                  <motion.span
                    layoutId="underline"
                    className={cn(
                      "absolute left-0 top-full h-[2px] w-full",
                      route.color.replace("text", "bg")
                    )}
                  />
                )}
                <span
                  className={cn(
                    "absolute left-0 top-full h-[2px] w-0 transition-all group-hover:w-full",
                    route.color.replace("text", "bg")
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex gap-1.5 text-foreground/60 hover:text-foreground"
            asChild
          >
            <Link
              href="https://github.com/M31Lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </Button>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center space-x-2">
                    <AnimatedLogo className="text-primary" size={24} />
                    <span>M31Lab</span>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  Autonomous AI Agents & Cybersecurity Frameworks
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {routes.map((route) => {
                  const Icon = route.icon;
                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-2 text-lg font-medium transition-colors",
                        pathname === route.href ? route.color : "text-foreground/60"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {route.label}
                    </Link>
                  );
                })}
                <Link
                  href="https://github.com/M31Lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg font-medium text-foreground/60 hover:text-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                  GitHub
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}