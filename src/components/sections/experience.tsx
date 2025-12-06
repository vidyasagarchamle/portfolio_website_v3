"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

const experiences = [
  {
    company: "ZAVIS",
    role: "Lead Product Manager",
    period: "Current",
    location: "UAE & GCC Region",
    description: "Building AI voice agents that automate business calls across support, onboarding, and verifications — tailored for the UAE & GCC region.",
    highlights: [
      "Leading product from zero to rollout, defining AI voice agent capabilities and business call automation flows",
      "Working closely with engineering and ops teams to ship fast, scalable solutions for enterprise clients",
      "Designing localized experiences for UAE & GCC markets with cultural and business context considerations",
    ],
    current: true,
  },
  {
    company: "Webhash",
    role: "Lead Product Manager",
    period: "Current",
    location: "Remote",
    description: "Working on a permissionless network to make websites permanent and censorship-resistant using IPFS.",
    highlights: [
      "Leading product strategy across protocol and ecosystem products for decentralized web infrastructure",
      "Defining technical specifications and user experiences for permissionless website hosting",
      "Collaborating with protocol engineers to build scalable IPFS-based solutions for content permanence",
    ],
    current: true,
  },
  {
    company: "League Sports Co.",
    role: "Associate Product Manager",
    period: "Oct 2024 – Mar 2025",
    location: "Remote (Dubai)",
    project: "Bit Billionaire",
    description: "A Telegram-based Web3 mini-game that introduced casual players to crypto gaming through simple, viral mechanics.",
    highlights: [
      "Shaped core gameplay loops and in-game economy focused on retention and engagement",
      "Collaborated across design and engineering to launch fast, iterative feature releases",
      "Designed onboarding flows that abstracted Web3 complexity for non-crypto-native users",
    ],
  },
  {
    company: "League Sports Co.",
    role: "Associate Product Manager",
    period: "Sept 2023 – Sept 2024",
    location: "Remote (Dubai)",
    project: "WBL TMS & Play",
    description: "A SaaS platform for sports tournament organizers, with a companion app to streamline player participation.",
    highlights: [
      "Led a full UX revamp of backend workflows for organizers and support staff",
      "Launched a player-facing app to simplify registration and match tracking",
      "Drove cross-functional execution across product, ops, and engineering teams",
    ],
  },
  {
    company: "League Sports Co.",
    role: "Associate Product Manager",
    period: "Oct 2022 – Nov 2023",
    location: "Remote (Dubai)",
    project: "Zone",
    description: "A GameFi platform built on Algorand offering PvP, fantasy, and hypercasual games with real rewards.",
    highlights: [
      "Developed user flows that balanced fun, accessibility, and blockchain integration",
      "Helped scale game operations and supported launches of new competitive formats",
      "Focused on reducing entry barriers and refining the experience for mobile-first users",
    ],
  },
  {
    company: "TRRAIN Circle Technologies",
    role: "Product Management Intern",
    period: "June 2022 – Aug 2022",
    location: "Mumbai, India",
    description: "A mobile learning and engagement app for India's frontline retail workforce.",
    highlights: [
      "Analyzed behavioral patterns using CleverTap to improve user journeys",
      "Proposed UX improvements that simplified onboarding and daily task completion",
      "Contributed to engagement strategies targeting low-activity user segments",
    ],
  },
];

function TimelineEntry({ 
  experience, 
  index, 
  isLast 
}: { 
  experience: typeof experiences[0]; 
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="relative pl-8 md:pl-10 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] md:left-[9px] top-3 bottom-0 w-px bg-white/10" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-0.5 top-1.5">
        <div
          className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 ${
            experience.current 
              ? "bg-emerald-500/20 border-emerald-500" 
              : "bg-white/5 border-white/30"
          }`}
        >
          {experience.current && (
            <motion.div
              className="absolute inset-0 rounded-full bg-emerald-500/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
          <div className="flex items-center gap-3">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {experience.company}
            </h3>
            {experience.current && (
              <span className="px-2 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                Current
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span>{experience.period}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">{experience.location}</span>
          </div>
        </div>

        {/* Role & Project */}
        <div className="mb-3">
          <p className="text-white/70 font-medium">
            {experience.role}
            {experience.project && (
              <span className="text-white/40 font-normal"> — {experience.project}</span>
            )}
          </p>
          <p className="text-sm text-white/40 md:hidden">{experience.location}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-white/50 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              className="text-sm text-white/40 leading-relaxed pl-4 relative"
            >
              <span 
                className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-white/20"
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className="relative bg-black"
    >
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(120, 119, 198, 0.08), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 md:gap-12 lg:gap-20">
          
          {/* Left Column - Sticky Header */}
          <div className="md:col-span-5 lg:col-span-4 pt-20 pb-12 md:pb-20">
            <div className="md:sticky md:top-32">
              <BlurFade delay={0}>
                <span className="text-xs uppercase text-white/30 font-medium tracking-[0.3em]">
                  Experience
                </span>
              </BlurFade>
              <BlurFade delay={0.1}>
                <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.2] tracking-tight">
                  Where I&apos;ve Made
                  <span className="block text-white/40 mt-2">Impact</span>
                </h2>
              </BlurFade>
              <BlurFade delay={0.2}>
                <p className="mt-6 text-white/50 leading-relaxed">
                  From Web3 gaming to AI voice agents—building products across 
                  emerging tech that solve real problems.
                </p>
              </BlurFade>

              {/* Progress indicator - Desktop only */}
              <div className="hidden md:block mt-12">
                <div className="flex items-center gap-3 text-sm text-white/30">
                  <div className="relative w-1 h-24 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 w-full bg-white/40 rounded-full"
                      style={{ height: progressHeight }}
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/50 font-medium">{experiences.length} roles</p>
                    <p className="text-xs">3+ years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="md:col-span-7 lg:col-span-8 py-12 md:py-20">
            <div className="relative">
              {experiences.map((experience, index) => (
                <TimelineEntry
                  key={`${experience.company}-${experience.period}`}
                  experience={experience}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
