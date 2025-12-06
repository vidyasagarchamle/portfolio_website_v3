"use client";

import { motion } from "framer-motion";
import { CountAnimation } from "@/components/ui/count-animation";
import { Spotlight } from "@/components/ui/spotlight";
import { BlurFade } from "@/components/ui/blur-fade";

const metrics = [
  {
    value: 15,
    suffix: "+",
    label: "Products Launched",
    description: "Successfully shipped products from concept to market",
  },
  {
    value: 50,
    suffix: "M+",
    label: "Users Impacted",
    description: "Global users benefiting from products I've built",
  },
  {
    value: 8,
    suffix: "M",
    prefix: "$",
    label: "Revenue Generated",
    description: "Direct revenue impact across product initiatives",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Building products across various industries",
  },
];

export function MetricsSection() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(255,255,255,0.5)"
      />

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: '72rem' }}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <BlurFade delay={0}>
            <span 
              className="text-sm uppercase text-white/40 font-medium"
              style={{ letterSpacing: '0.3em' }}
            >
              Impact
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
              Numbers That Matter
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p 
              className="mt-6 text-lg text-white/60 mx-auto"
              style={{ maxWidth: '42rem' }}
            >
              Measurable outcomes from products I&apos;ve shipped. 
              I believe in data-driven decisions and transparent results.
            </p>
          </BlurFade>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}
          className="lg:grid-cols-4"
        >
          {metrics.map((metric, index) => (
            <BlurFade key={metric.label} delay={0.1 * index}>
              <motion.div
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 25px 50px -12px rgba(255,255,255,0.1)',
                }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                <div 
                  className="relative p-8 h-full transition-all duration-500"
                  style={{
                    borderRadius: '1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {/* Glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      borderRadius: '1rem',
                      background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 70%)',
                    }}
                  />
                  
                  <div className="relative text-center">
                    <motion.div 
                      className="text-5xl md:text-6xl font-bold text-white mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
                    >
                      <CountAnimation 
                        number={metric.value} 
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        duration={2.5}
                      />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white/90 mb-2">
                      {metric.label}
                    </h3>
                    <p className="text-sm text-white/40" style={{ lineHeight: '1.75' }}>
                      {metric.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
