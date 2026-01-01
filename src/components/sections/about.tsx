"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-24 px-6 bg-black overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(120, 119, 198, 0.08), transparent)',
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        
        {/* Section Label */}
        <BlurFade delay={0}>
          <span className="text-xs uppercase text-white/30 font-medium tracking-[0.3em]">
            About
          </span>
        </BlurFade>

        {/* Main Headline - The Hook */}
        <BlurFade delay={0.1}>
          <div className="mt-6 flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-12">
            {/* Profile Photo - Top on mobile, left on desktop */}
            <BlurFade delay={0.15}>
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex-shrink-0 rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] mb-6 md:mb-0">
                <Image
                  src="/profile.jpg"
                  alt="Vidyasagar Chamle"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </BlurFade>
            
            {/* Headline */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.2] tracking-tight">
                I don&apos;t just manage products.
                <span className="block text-white/40 mt-2">I build them.</span>
              </h2>
            </div>
          </div>
        </BlurFade>

        {/* Main Narrative */}
        <div className="mt-12 grid md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column - The Story */}
          <div className="md:col-span-7 space-y-6">
            <BlurFade delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Most PMs coordinate. I prototype. Most PMs write specs. I write specs 
                <em className="text-white/90"> and </em> ship code when needed. This isn&apos;t 
                about wearing multiple hats - it&apos;s about eliminating the gap between 
                vision and execution.
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-white/50 leading-relaxed">
                I&apos;ve always been obsessed with understanding how things work under the hood. 
                That curiosity means I can go deep with engineering teams without translation 
                layers. I don&apos;t just ask "can we build this?" - I understand the trade-offs, 
                the technical debt, the architecture decisions. This leads to faster alignment, 
                more realistic roadmaps, and products that actually ship.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <p className="text-white/50 leading-relaxed">
                Right now, I&apos;m working on two very different problems: at 
                <span className="text-white/80"> ZAVIS</span>, building AI voice agents 
                that are transforming customer experiences across the UAE & GCC. And at 
                <span className="text-white/80"> Webhash</span>, contributing to the 
                decentralized future of the web, making websites permanent, censorship-resistant, 
                and truly owned by their creators.
              </p>
            </BlurFade>

            <BlurFade delay={0.5}>
              <p className="text-white/50 leading-relaxed">
                Two different spaces. Same underlying drive: building things that 
                genuinely matter, not just things that ship.
              </p>
            </BlurFade>
          </div>

          {/* Right Column - The Details */}
          <div className="md:col-span-5">
            <BlurFade delay={0.3}>
              <div className="sticky top-32 space-y-8">
                
                {/* What I Do Best */}
                <div>
                  <h3 className="text-xs uppercase text-white/30 tracking-[0.2em] mb-4">
                    What I do best
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Taking messy, ambiguous problems and turning them into clear product direction",
                      "Bridging engineering and business without losing either",
                      "Shipping fast while maintaining quality: iteration over perfection",
                      "Building for emerging tech (AI, Web3) with user-first thinking",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm text-white/50 leading-relaxed pl-4"
                        style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* The Human Side */}
                <div>
                  <h3 className="text-xs uppercase text-white/30 tracking-[0.2em] mb-4">
                    Off the clock
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Philosophy books that make me question everything. Nolan films 
                    on repeat. Product ideas scribbled at 2am, fueled by too much coffee 
                    and not enough sleep. I believe the best PMs are perpetually curious - about 
                    users, about technology, about why things work the way they do.
                  </p>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p className="text-sm text-white/30 mb-4">
                    Want to build something together?
                  </p>
                  <motion.a
                    href="/#contact"
                    className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm font-medium"
                    whileHover={{ x: 4 }}
                  >
                    Let&apos;s talk
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </motion.a>
                </motion.div>

              </div>
            </BlurFade>
          </div>

        </div>

      </div>
    </section>
  );
}
