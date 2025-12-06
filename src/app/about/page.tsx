'use client';

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, BookOpen } from 'lucide-react';
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer";

export default function AboutPage() {
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
      <div className="pt-24 sm:pt-32" />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}

