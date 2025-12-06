'use client';

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, BookOpen } from 'lucide-react';
import { FooterSection } from "@/components/sections/footer";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  mediumUrl: string;
}

// Gradient and glow color combinations
const cardStyles = [
  { gradient: "from-purple-500/20 via-purple-500/5 to-transparent", glowColor: "rgba(168, 85, 247, 0.15)" },
  { gradient: "from-blue-500/20 via-blue-500/5 to-transparent", glowColor: "rgba(59, 130, 246, 0.15)" },
  { gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent", glowColor: "rgba(16, 185, 129, 0.15)" },
  { gradient: "from-orange-500/20 via-orange-500/5 to-transparent", glowColor: "rgba(249, 115, 22, 0.15)" },
  { gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent", glowColor: "rgba(6, 182, 212, 0.15)" },
  { gradient: "from-pink-500/20 via-pink-500/5 to-transparent", glowColor: "rgba(236, 72, 153, 0.15)" },
  { gradient: "from-violet-500/20 via-violet-500/5 to-transparent", glowColor: "rgba(139, 92, 246, 0.15)" },
  { gradient: "from-rose-500/20 via-rose-500/5 to-transparent", glowColor: "rgba(244, 63, 94, 0.15)" },
];


function BlogCard({ post, index, style }: { post: BlogPost; index: number; style: typeof cardStyles[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={post.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      className="group relative block overflow-hidden rounded-xl cursor-pointer"
      style={{ pointerEvents: 'auto', position: 'relative', zIndex: 1 }}
    >
      <div className="relative h-full" style={{ pointerEvents: 'none' }}>
        {/* Base background */}
        <div className="absolute inset-0 bg-[#0a0a0a] rounded-xl pointer-events-none" />
        
        {/* Animated gradient */}
        <motion.div
          className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none", style.gradient)}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at 50% 50%, ${style.glowColor}, transparent 50%)`,
          }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
        
        {/* Glass border */}
        <div className="absolute inset-0 rounded-xl border border-white/[0.08] group-hover:border-white/[0.15] transition-colors duration-300 backdrop-blur-sm pointer-events-none" />
        
        {/* Glass reflection */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />

        {/* Content - Tile Layout */}
        <div className="relative z-10 flex flex-col justify-between h-full p-5 md:p-6 pointer-events-none">
          {/* Top section */}
          <div className="flex-1">
            {/* Category badge */}
            <div className="mb-3">
              <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50 backdrop-blur-sm">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <motion.h3
              className="text-base md:text-lg font-semibold text-white leading-tight group-hover:text-white/90 transition-colors line-clamp-2"
              animate={isHovered ? { x: 2 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {post.title}
            </motion.h3>
          </div>

          {/* Bottom section */}
          <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-3 text-[10px] md:text-xs text-white/40">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <motion.div
              className="flex items-center gap-1.5 text-white/40 group-hover:text-white/70 transition-colors"
              animate={isHovered ? { x: 2 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Blog', url: '/blog', icon: BookOpen },
  ];

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        } else {
          setError('No articles found');
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load articles');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <NavBar items={navItems} />

      {/* Spacer for navbar */}
      <div className="pt-24 sm:pt-32" />

      {/* Blog Section */}
      <section className="relative py-20 bg-black px-6" style={{ pointerEvents: 'auto' }}>
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(120, 119, 198, 0.08), transparent)',
          }}
        />

        <div className="relative mx-auto max-w-7xl" style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}>
          {/* Header */}
          <div className="text-center mb-16" style={{ pointerEvents: 'none' }}>
            <BlurFade delay={0}>
              <span className="text-xs uppercase text-white/30 font-medium tracking-[0.3em]">
                Writing
              </span>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Blog & Articles
              </h1>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                Thoughts on product management, AI, Web3, and building products that matter.
                All articles are published on Medium.
              </p>
            </BlurFade>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white/30"></div>
              <p className="mt-4 text-white/50">Loading articles...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-20">
              <p className="text-white/50">{error}</p>
              <p className="mt-2 text-sm text-white/30">
                Make sure you have published articles on{' '}
                <a 
                  href="https://medium.com/@vidyasagar.chamle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white underline"
                >
                  Medium
                </a>
              </p>
            </div>
          )}

          {/* Blog Grid - Tile Layout */}
          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative" style={{ pointerEvents: 'auto', zIndex: 10 }}>
              {posts.map((post, index) => (
                <BlogCard 
                  key={post.mediumUrl || index} 
                  post={post} 
                  index={index}
                  style={cardStyles[index % cardStyles.length]}
                />
              ))}
            </div>
          )}

          {/* CTA to Medium */}
          {!loading && posts.length > 0 && (
            <div className="mt-16 text-center relative z-50" style={{ pointerEvents: 'auto' }}>
              <motion.a
                href="https://medium.com/@vidyasagar.chamle"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all text-white/70 hover:text-white backdrop-blur-sm cursor-pointer"
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 50 }}
              >
                <span>View all articles on Medium</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
