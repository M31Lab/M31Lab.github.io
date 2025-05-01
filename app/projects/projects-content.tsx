"use client";

import { useEffect, useState } from "react";
import { CosmicBackground } from "@/components/cosmic-background";
import { motion } from "framer-motion";
import { Repository, getRepositories } from "@/lib/github";
import {
  GitFork,
  Star,
  ExternalLink,
  AlertCircle,
  Calendar,
  Clock,
  Github,
  Code,
  Eye,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function ProjectsContent() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRepositories() {
      try {
        setIsLoading(true);
        const repos = await getRepositories("M31Lab");
        setRepositories(repos);
        setError("");
      } catch (err) {
        setError("Failed to load repositories. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadRepositories();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <CosmicBackground />
      <div className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl space-y-12"
        >
          <div className="space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              Open Source Projects
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
            >
              Our GitHub Repositories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-lg text-muted-foreground"
            >
              Explore our open-source repositories focused on autonomous AI agents,
              cybersecurity, and developer productivity.
            </motion.p>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-2"
                >
                  <div className="space-y-4 rounded-xl bg-card p-6">
                    <div className="space-y-3">
                      <Skeleton className="h-6 w-1/3" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border bg-destructive/10 p-8 text-center"
            >
              <AlertCircle className="mx-auto h-12 w-12 text-destructive" />
              <p className="mt-4 text-lg font-medium text-destructive">{error}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </motion.div>
          ) : repositories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border bg-card p-12 text-center"
            >
              <Github className="mx-auto h-20 w-20 text-muted-foreground" />
              <h3 className="mt-6 text-2xl font-medium">No repositories found</h3>
              <p className="mt-2 text-muted-foreground">
                The M31Lab organization doesn't have any public repositories yet or
                they couldn't be retrieved.
              </p>
              <Button asChild className="mt-6">
                <Link
                  href="https://github.com/M31Lab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit M31Lab on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="grid gap-6 md:grid-cols-2"
            >
              {repositories.map((repo) => (
                <motion.div
                  key={repo.id}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-4 rounded-xl bg-card p-6">
                    <div className="flex items-start justify-between">
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center space-x-2"
                      >
                        <Code className="h-5 w-5 text-primary" />
                        <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-xl font-bold text-transparent transition-colors group-hover:text-primary">
                          {repo.name}
                        </span>
                      </Link>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1 text-yellow-500">
                          <Star className="h-4 w-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-blue-500">
                          <GitFork className="h-4 w-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-green-500">
                          <Eye className="h-4 w-4" />
                          <span>{repo.watchers_count}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground">
                      {repo.description || "No description provided."}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-muted-foreground">
                      {repo.language && (
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1">
                          <div
                            className="mr-1.5 h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor: getLanguageColor(repo.language),
                            }}
                          />
                          <span className="text-primary">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Calendar className="mr-1.5 h-3.5 w-3.5" />
                        <span>Created {formatDate(repo.created_at)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1.5 h-3.5 w-3.5" />
                        <span>Updated {formatDate(repo.updated_at)}</span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full transition-all hover:bg-primary hover:text-primary-foreground"
                      >
                        <Link
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center"
                        >
                          <GitBranch className="mr-2 h-4 w-4" />
                          View Repository
                          <ExternalLink className="ml-2 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary/50 via-purple-500/50 to-transparent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Rust: "#dea584",
    Go: "#00ADD8",
    Java: "#b07219",
    "C#": "#178600",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Swift: "#ffac45",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Shell: "#89e051",
  };

  return colors[language] || "#6e7681";
}