'use client';

import { GLSLHills } from "@/components/ui/glsl-hills";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, Mail, Code } from 'lucide-react';
import { AboutSection } from "@/components/sections/about";
import { ImpactStrip } from "@/components/sections/impact-strip";
import { ExperienceSection } from "@/components/sections/experience";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer";
import { Spotlight } from "@/components/ui/spotlight";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Portfolio() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Skills', url: '#skills', icon: Code },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <NavBar items={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
        {/* GLSL Background */}
        <div className="absolute inset-0 z-0">
          <GLSLHills />
        </div>
        
        {/* Spotlight Effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(255,255,255,0.5)"
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Name Introduction */}
          <BlurFade delay={0.2}>
            <motion.p
              className="text-lg md:text-xl text-white/50 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I&apos;m <span className="text-white/80 font-medium">Vidyasagar Chamle</span>
            </motion.p>
          </BlurFade>

          {/* Main Heading */}
          <BlurFade delay={0.25}>
            <h1 className="font-semibold text-5xl md:text-7xl leading-tight">
              <motion.span 
                className="block italic font-thin text-white/80"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Product Manager Who
              </motion.span>
              <motion.span 
                className="block mt-2 text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Ships What Matters
              </motion.span>
            </h1>
          </BlurFade>
          
          {/* Subtitle */}
          <BlurFade delay={0.4}>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              I build products that solve real problems. From strategy to launch, 
              I bring ideas to life through data-driven decisions and user-centric design.
            </p>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={0.5}>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="px-8" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <a href="mailto:vidyasagar.chamle@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Get in Touch
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </BlurFade>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="w-6 h-6 text-white/40 hover:text-white/70 transition-colors" />
          </motion.div>
        </motion.div>

        {/* Floating particles for extra depth - using fixed positions to avoid hydration mismatch */}
        {[
          { left: 12, top: 23, duration: 5.2, delay: 0.3 },
          { left: 87, top: 15, duration: 6.1, delay: 1.2 },
          { left: 34, top: 67, duration: 4.5, delay: 0.8 },
          { left: 56, top: 89, duration: 5.8, delay: 1.5 },
          { left: 78, top: 45, duration: 4.9, delay: 0.5 },
          { left: 23, top: 78, duration: 6.3, delay: 1.8 },
          { left: 91, top: 56, duration: 5.1, delay: 0.2 },
          { left: 45, top: 34, duration: 4.7, delay: 1.1 },
          { left: 67, top: 12, duration: 5.5, delay: 0.9 },
          { left: 8, top: 91, duration: 6.0, delay: 1.6 },
          { left: 52, top: 48, duration: 4.3, delay: 0.4 },
          { left: 73, top: 72, duration: 5.7, delay: 1.3 },
          { left: 19, top: 38, duration: 4.8, delay: 0.7 },
          { left: 84, top: 83, duration: 6.2, delay: 1.9 },
          { left: 41, top: 19, duration: 5.4, delay: 0.6 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </section>

      {/* Impact Metrics */}
      <ImpactStrip />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
