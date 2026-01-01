'use client';

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, BookOpen } from 'lucide-react';
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ProjectsSection } from "@/components/sections/projects";
import { FooterSection } from "@/components/sections/footer";

export default function ProjectsPage() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Blog', url: '/blog', icon: BookOpen },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <NavBar items={navItems} />

      {/* Spacer for navbar */}
      <div className="pt-12 sm:pt-16" />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}

