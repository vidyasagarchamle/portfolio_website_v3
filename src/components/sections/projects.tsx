"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  description: string;
  href: string;
  cta: string;
  tags: string[];
  gradient: string;
  glowColor: string;
}

const projects: Project[] = [
  {
    name: "Finwork CRM",
    description:
      "AI-powered practice management for CAs — smart tax calculations, compliance tracking, and client management.",
    href: "https://www.finworkcrm.com/",
    cta: "Visit Site",
    tags: ["AI/ML", "SaaS", "FinTech"],
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    name: "Modly AI",
    description:
      "AI-powered content moderation API that detects and filters policy violations automatically.",
    href: "https://modly.ai",
    cta: "Visit Site",
    tags: ["AI/ML", "API"],
    gradient: "from-violet-500/20 via-violet-500/5 to-transparent",
    glowColor: "rgba(139, 92, 246, 0.15)",
  },
  {
    name: "Token Trails",
    description:
      "AI-generated podcast exploring Web3 and blockchain with engaging storytelling.",
    href: "https://www.youtube.com/@tokentrails",
    cta: "Watch",
    tags: ["Web3", "AI", "Media"],
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    glowColor: "rgba(245, 158, 11, 0.15)",
  },
  {
    name: "DePolls",
    description:
      "Decentralized polling on Ethereum for secure, transparent community decisions.",
    href: "https://github.com/vidyasagarchamle",
    cta: "View Code",
    tags: ["Web3", "Ethereum"],
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
];

const aiTools = ["Cursor", "Windsurf", "Lovable", "v0", "Claude"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative block overflow-hidden rounded-2xl cursor-pointer h-full"
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-[#0a0a0a] rounded-2xl" />
      
      {/* Animated gradient background */}
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
          project.gradient
        )}
      />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at 50% 50%, ${project.glowColor}, transparent 50%)`,
        }}
      />
      
      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-white/[0.15] transition-colors duration-500" />
      
      {/* Animated corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${project.glowColor}, transparent 70%)`,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 p-8 h-full flex flex-col min-h-[320px]">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.05] text-white/50 border border-white/[0.05]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-white group-hover:text-white transition-colors">
          {project.name}
        </h3>

        {/* Description */}
        <p className="mt-4 text-base text-white/40 leading-relaxed group-hover:text-white/50 transition-colors">
          {project.description}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.05]">
          <span className="text-sm text-white/30 group-hover:text-white/60 transition-colors">
            {project.cta}
          </span>
          <motion.div
            className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all duration-300"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </motion.div>
        </div>
      </div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </motion.a>
  );
}

export function ProjectsSection() {
  return (
    <section className="relative py-32 bg-black px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <BlurFade delay={0}>
            <span className="text-xs uppercase text-white/30 font-medium tracking-[0.3em]">
              Side Projects
            </span>
          </BlurFade>
          
          <BlurFade delay={0.1}>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.2] tracking-tight">
              Built from Scratch
              <span className="block text-white/40 mt-2">with AI Tools</span>
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <p className="mt-6 text-white/50 leading-relaxed max-w-2xl">
              I leverage modern AI-powered development tools to rapidly prototype 
              and ship production-ready products. From idea to launch in days, not months.
            </p>
          </BlurFade>

          {/* AI Tools */}
          <BlurFade delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.div 
                className="flex items-center gap-2 text-white/30 text-sm mr-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Powered by:</span>
              </motion.div>
              {aiTools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/50 hover:text-white/70 hover:border-white/[0.15] transition-all cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Projects Grid - 2x2 Square */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <BlurFade delay={0.6}>
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/vidyasagarchamle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm group"
              whileHover={{ x: 4 }}
            >
              <span>View more on GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
