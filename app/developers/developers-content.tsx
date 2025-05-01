"use client";

import { useEffect, useState } from "react";
import { CosmicBackground } from "@/components/cosmic-background";
import { motion } from "framer-motion";
import { GithubUser, Contributor, getUser, getContributors } from "@/lib/github";
import {
  Calendar,
  ExternalLink,
  MapPin,
  Mail,
  Link as LinkIcon,
  Twitter,
  Users,
  Briefcase,
  GitBranch,
  GitFork,
  Github,
  Code,
  Eye,
  Star,
  BookOpen,
  Globe,
  Shield,
  Bot,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";

export default function DevelopersContent() {
  const [developer, setDeveloper] = useState<GithubUser | null>(null);
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [userData, contributorsData] = await Promise.all([
          getUser("eshanized"),
          getContributors("M31Lab"),
        ]);
        setDeveloper(userData);
        setContributors(contributorsData);
        setError("");
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const expertiseAreas = [
    {
      icon: Bot,
      title: "AI Development",
      description: "Expertise in autonomous agents and machine learning systems",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced knowledge in security frameworks and threat analysis",
    },
    {
      icon: Terminal,
      title: "System Architecture",
      description: "Design and implementation of scalable software systems",
    },
  ];

  return (
    <>
      <CosmicBackground />
      <div className="container py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mx-auto max-w-4xl space-y-12"
        >
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Developers
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              Meet the talented individuals behind M31Lab who are building the
              future of autonomous AI and cybersecurity.
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-8">
              <div className="group relative overflow-hidden rounded-2xl border bg-card p-2">
                <div className="relative h-40 w-full bg-gradient-to-r from-primary/20 to-purple-500/20">
                  <div className="absolute -bottom-16 left-8">
                    <Skeleton className="h-32 w-32 rounded-xl" />
                  </div>
                </div>
                <div className="mt-20 space-y-4 p-8">
                  <div className="space-y-2">
                    <Skeleton className="h-8 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                  <Skeleton className="h-20 w-full" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Skeleton className="h-8 w-1/4" />
                <div className="grid gap-6 md:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-48 w-full rounded-xl" />
                  ))}
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="rounded-xl border bg-destructive/10 p-6 text-center">
              <p className="text-lg font-medium text-destructive">{error}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Lead Developer Section */}
              {developer && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-6 rounded-xl bg-card">
                    {/* Hero Banner */}
                    <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background/40 to-background/60" />
                    </div>

                    {/* Profile Section */}
                    <div className="relative px-8">
                      <div className="absolute -top-16 flex items-end gap-6">
                        <div className="h-32 w-32 overflow-hidden rounded-xl border-4 border-background shadow-xl">
                          <Image
                            src={developer.avatar_url}
                            alt={developer.name || developer.login}
                            width={128}
                            height={128}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="mb-2">
                          <h2 className="text-2xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {developer.name || developer.login}
                          </h2>
                          <p className="text-muted-foreground">@{developer.login}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8 px-8 pt-20 pb-8">
                      {/* Bio */}
                      {developer.bio && (
                        <div className="space-y-2">
                          <h3 className="font-semibold text-primary">About</h3>
                          <p className="text-lg">{developer.bio}</p>
                        </div>
                      )}

                      {/* Expertise Areas */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-primary">Expertise</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                          {expertiseAreas.map((area, index) => (
                            <div
                              key={index}
                              className="group relative overflow-hidden rounded-xl border bg-card/50 p-4 transition-colors hover:bg-card"
                            >
                              <div className="flex items-center gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                  <area.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <h4 className="font-medium">{area.title}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {area.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact & Links */}
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-primary">Contact & Links</h3>
                          <div className="space-y-3">
                            {developer.company && (
                              <div className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4 text-muted-foreground" />
                                <span>{developer.company}</span>
                              </div>
                            )}
                            {developer.location && (
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>{developer.location}</span>
                              </div>
                            )}
                            {developer.email && (
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <a
                                  href={`mailto:${developer.email}`}
                                  className="hover:text-primary"
                                >
                                  {developer.email}
                                </a>
                              </div>
                            )}
                            {developer.blog && (
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-muted-foreground" />
                                <a
                                  href={
                                    developer.blog.startsWith("http")
                                      ? developer.blog
                                      : `https://${developer.blog}`
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-primary"
                                >
                                  {developer.blog}
                                </a>
                              </div>
                            )}
                            {developer.twitter_username && (
                              <div className="flex items-center gap-2">
                                <Twitter className="h-4 w-4 text-muted-foreground" />
                                <a
                                  href={`https://twitter.com/${developer.twitter_username}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-primary"
                                >
                                  @{developer.twitter_username}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* GitHub Stats */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-primary">GitHub Stats</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl border bg-card/50 p-4">
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Repositories</span>
                              </div>
                              <p className="mt-1 text-2xl font-bold">{developer.public_repos}</p>
                            </div>
                            <div className="rounded-xl border bg-card/50 p-4">
                              <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Followers</span>
                              </div>
                              <p className="mt-1 text-2xl font-bold">{developer.followers}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Joined GitHub on {formatDate(developer.created_at)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4">
                        <Button asChild className="flex-1">
                          <Link
                            href={developer.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View GitHub Profile
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Contributors Section */}
              {contributors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl font-bold">Contributors</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {contributors.map((contributor) => (
                      <motion.div
                        key={contributor.id}
                        whileHover={{ scale: 1.02 }}
                        className="group relative overflow-hidden rounded-2xl border bg-card p-2"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative rounded-xl bg-card p-6">
                          <div className="flex items-start gap-4">
                            <div className="h-16 w-16 overflow-hidden rounded-xl">
                              <Image
                                src={contributor.avatar_url}
                                alt={contributor.login}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-lg font-semibold">
                                    {contributor.name || contributor.login}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    @{contributor.login}
                                  </p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-muted-foreground hover:text-primary"
                                  asChild
                                >
                                  <Link
                                    href={contributor.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                              {contributor.role && (
                                <p className="mt-2 text-sm font-medium text-primary">
                                  {contributor.role}
                                </p>
                              )}
                              {contributor.bio && (
                                <p className="mt-2 text-sm text-muted-foreground">
                                  {contributor.bio}
                                </p>
                              )}
                              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <GitBranch className="h-4 w-4" />
                                  <span>{contributor.contributions} contributions</span>
                                </div>
                                {contributor.location && (
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{contributor.location}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}