"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { 
  Target, 
  Globe, 
  Cpu, 
  BarChart3, 
  Wrench,
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "product",
    title: "Product",
    icon: Target,
    skills: [
      "Product Strategy",
      "Roadmapping",
      "User Research",
      "Wireframing",
      "Go-to-Market",
      "A/B Testing",
      "Agile & Scrum",
      "PRDs & Specs",
    ],
  },
  {
    id: "web3",
    title: "Web3",
    icon: Globe,
    skills: [
      "Token Economics",
      "Smart Contracts",
      "Wallet UX",
      "GameFi & NFTs",
      "DAO Governance",
      "IPFS",
      "Cross-chain",
      "DeFi Products",
    ],
  },
  {
    id: "ai",
    title: "AI",
    icon: Cpu,
    skills: [
      "LLM Integration",
      "Voice Agents",
      "Prompt Engineering",
      "AI Workflows",
      "Content Moderation",
      "Cursor & Windsurf",
      "Claude & GPT",
      "Lovable & v0",
    ],
  },
  {
    id: "data",
    title: "Analytics",
    icon: BarChart3,
    skills: [
      "Product Analytics",
      "Mixpanel",
      "SQL Queries",
      "Cohort Analysis",
      "Funnel Optimization",
      "KPI Frameworks",
      "A/B Analysis",
      "Segment & CleverTap",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      "Figma",
      "Notion & Linear",
      "Jira & Confluence",
      "Miro",
      "GitHub",
      "Vercel & AWS",
      "Webflow",
      "Slack & Loom",
    ],
  },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = skillCategories[activeTab];

  return (
    <section id="skills" className="relative py-32 bg-black px-6" style={{ pointerEvents: 'auto' }}>
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139, 92, 246, 0.06), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-4xl" style={{ pointerEvents: 'auto' }}>
        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0}>
            <span className="text-xs uppercase text-white/30 font-medium tracking-[0.3em]">
              Expertise
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.2] tracking-tight">
              Skills & Tools
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-white/40 max-w-lg mx-auto">
              A blend of product thinking, technical depth, and modern tooling
            </p>
          </BlurFade>
        </div>

        {/* Tabs */}
        <div className="relative z-10 flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]" style={{ pointerEvents: 'auto' }}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = index === activeTab;

            return (
              <button
                key={category.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Tab clicked:', index, category.title);
                  setActiveTab(index);
                }}
                className={cn(
                  "relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer",
                  isActive 
                    ? "bg-white/10 text-white" 
                    : "text-white/50 hover:text-white/70 hover:bg-white/[0.05]"
                )}
                style={{ 
                  pointerEvents: 'auto',
                  position: 'relative',
                  zIndex: 11
                }}
              >
                <Icon className="w-4 h-4 pointer-events-none" />
                <span className="text-sm font-medium hidden sm:inline pointer-events-none">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <BlurFade delay={0.4}>
          <div className="mt-12 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
              >
                {activeCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div
                      className={cn(
                        "px-4 py-3 rounded-xl text-center",
                        "bg-white/[0.02] border border-white/[0.06]",
                        "hover:bg-white/[0.05] hover:border-white/[0.12]",
                        "transition-all duration-300"
                      )}
                    >
                      <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </BlurFade>

        {/* Bottom decorative element */}
        <BlurFade delay={0.5}>
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-6 text-white/30 text-xs">
              <span>Product</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Technology</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Design</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Growth</span>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
