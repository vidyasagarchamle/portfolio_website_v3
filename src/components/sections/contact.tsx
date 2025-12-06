"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, ArrowUpRight, Copy, Check } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useState } from "react";

const email = "vidyasagar.chamle@gmail.com";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vidyasagarchamle/",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/vidyasagarchamle",
    color: "hover:text-white",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/w3rippr",
    color: "hover:text-[#1DA1F2]",
  },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Subtle gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(120,119,198,0.1), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Header */}
        <BlurFade delay={0}>
          <span className="text-xs uppercase text-white/30 font-medium tracking-[0.3em]">
            Contact
          </span>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Let&apos;s work together
          </h2>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about product and technology.
          </p>
        </BlurFade>

        {/* Email CTA */}
        <BlurFade delay={0.3}>
          <div className="mt-12">
            <motion.a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5 text-white/50 group-hover:text-white/70 transition-colors" />
              <span className="text-lg text-white/80 group-hover:text-white transition-colors">
                {email}
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>

            {/* Copy button */}
            <motion.button
              onClick={copyEmail}
              className="ml-3 inline-flex items-center gap-2 px-4 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] text-white/50 hover:text-white/70 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </BlurFade>

        {/* Social Links */}
        <BlurFade delay={0.4}>
          <div className="mt-16">
            <p className="text-sm text-white/30 mb-6">Or find me on</p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white/50 ${link.color} hover:border-white/[0.12] transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <link.icon className="w-5 h-5 transition-colors" />
                  <span className="text-sm font-medium transition-colors">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
