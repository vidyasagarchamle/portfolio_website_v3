"use client";

import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const metrics = [
  { value: "7+", label: "Products Launched" },
  { value: "800K+", label: "Users Impacted" },
  { value: "3+", label: "Years Experience" },
];

export function ImpactStrip() {
  return (
    <section 
      className="relative py-12 bg-black overflow-hidden"
      style={{ 
        borderTop: '1px solid rgba(255,255,255,0.05)', 
        borderBottom: '1px solid rgba(255,255,255,0.05)' 
      }}
    >
      {/* Subtle background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)',
        }}
      />

      <motion.div 
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <InfiniteSlider gap={100} duration={25} durationOnHover={50}>
          {metrics.map((metric) => (
            <motion.div 
              key={metric.label}
              className="flex items-center gap-3 px-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="text-2xl md:text-3xl font-semibold text-white/80 whitespace-nowrap">
                {metric.value}
              </span>
              <span className="text-sm text-white/40 whitespace-nowrap">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </InfiniteSlider>
      </motion.div>
    </section>
  );
}
