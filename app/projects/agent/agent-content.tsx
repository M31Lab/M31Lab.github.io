"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Code2,
  Command,
  ExternalLink,
  FileCode,
  Github,
  MessageSquareCode,
  Puzzle,
  Rocket,
  ScrollText,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";
import { CosmicBackground } from "@/components/cosmic-background";

export default function AgentContent() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const features = [
    {
      icon: Brain,
      title: "Autonomous Decision Making",
      description:
        "Advanced AI capabilities for independent task execution and problem-solving",
    },
    {
      icon: Shield,
      title: "Secure Architecture",
      description:
        "Built with security-first principles and robust error handling",
    },
    {
      icon: Puzzle,
      title: "Modular Design",
      description:
        "Extensible plugin system for custom capabilities and integrations",
    },
    {
      icon: Terminal,
      title: "CLI Interface",
      description:
        "Powerful command-line tools for seamless agent management",
    },
    {
      icon: MessageSquareCode,
      title: "Natural Language Processing",
      description:
        "Advanced NLP capabilities for human-like interaction and understanding",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized for speed and efficiency in task execution",
    },
  ];

  const techStack = [
    {
      name: "TypeScript",
      description: "Type-safe development with modern JavaScript features",
      icon: FileCode,
      code: `interface Agent {
  id: string;
  name: string;
  capabilities: string[];
  execute(task: Task): Promise<Result>;
}

class AutonomousAgent implements Agent {
  constructor(
    private config: AgentConfig,
    private plugins: Plugin[]
  ) {}

  async execute(task: Task): Promise<Result> {
    // Implementation
  }
}`,
      language: "typescript",
    },
    {
      name: "Python",
      description: "Powerful data processing and AI capabilities",
      icon: Code2,
      code: `class NLPProcessor:
    def __init__(self, model: str):
        self.model = model
        self.tokenizer = AutoTokenizer.from_pretrained(model)
        
    def process_input(self, text: str) -> dict:
        tokens = self.tokenizer(text)
        return self.model(tokens)
        
    def generate_response(self, context: str) -> str:
        # Implementation
        return response`,
      language: "python",
    },
    {
      name: "Command Line",
      description: "Efficient CLI tools for agent management",
      icon: Command,
      code: `#!/usr/bin/env node
import { Command } from 'commander';
import { AgentManager } from './manager';

const program = new Command();

program
  .command('create')
  .description('Create a new agent')
  .action(async () => {
    const manager = new AgentManager();
    await manager.createAgent();
  });

program.parse(process.argv);`,
      language: "typescript",
    },
  ];

  return (
    <>
      <CosmicBackground />
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl space-y-16">
          <section>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6 text-center"
            >
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Featured Project
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="rounded-full bg-primary/10 p-6"
                >
                  <Bot className="h-16 w-16 text-primary" />
                </motion.div>
              </div>
              <h1 className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                M31Lab Agent
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                An advanced autonomous agent framework designed for efficient task
                execution and problem-solving. Built with TypeScript and Python,
                featuring a modular architecture and powerful CLI tools.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link
                    href="https://github.com/M31Lab/Agent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#features">
                    <Rocket className="mr-2 h-5 w-5" />
                    Explore Features
                  </Link>
                </Button>
              </div>
            </motion.div>
          </section>

          <section id="features">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold">Key Features</h2>
                <p className="mt-4 text-muted-foreground">
                  Discover the powerful capabilities of M31Lab Agent
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative space-y-4 rounded-xl bg-card p-6">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-primary/10 p-3">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/20 via-transparent to-transparent ml-4" />
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold">Technology Stack</h2>
                <p className="mt-4 text-muted-foreground">
                  Built with modern technologies for optimal performance
                </p>
              </div>
              <div className="grid gap-8">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="group relative overflow-hidden rounded-2xl border bg-card p-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative space-y-4 rounded-xl bg-card p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-primary/10 p-3">
                            <tech.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                              {tech.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-lg border bg-black/50">
                        <CodeBlock
                          code={tech.code}
                          language={tech.language}
                          className="!m-0 !rounded-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-center">Documentation</h2>
              <div className="relative overflow-hidden rounded-2xl border bg-card p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <ScrollText className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Getting Started</h3>
                  </div>
                  <div className="overflow-hidden rounded-lg border bg-black/50">
                    <CodeBlock
                      code={`# Clone the repository
git clone https://github.com/M31Lab/Agent.git

# Install dependencies
npm install

# Start the agent
npm start`}
                      language="bash"
                      className="!m-0 !rounded-none"
                    />
                  </div>
                  <Button asChild>
                    <Link
                      href="https://github.com/M31Lab/Agent#readme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Full Documentation
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}