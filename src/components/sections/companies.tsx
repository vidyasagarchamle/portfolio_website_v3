"use client";

import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const companies = [
  { name: "Google" },
  { name: "Microsoft" },
  { name: "Amazon" },
  { name: "Meta" },
  { name: "Apple" },
  { name: "Netflix" },
];

export function CompaniesSection() {
  return (
    <section className="relative py-20 bg-black overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Animated background gradient */}
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

      <div className="mx-auto px-6" style={{ maxWidth: '72rem' }}>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center text-sm uppercase text-white/40 font-medium mb-12"
          style={{ letterSpacing: '0.2em' }}
        >
          Trusted by teams at
        </motion.p>
      </div>
      
      <motion.div 
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <InfiniteSlider gap={80} duration={30} durationOnHover={60}>
          {companies.map((company, index) => (
            <motion.div 
              key={company.name}
              className="flex items-center justify-center px-8"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="text-2xl font-semibold text-white/30 hover:text-white/70 transition-colors duration-500 whitespace-nowrap cursor-default">
                {company.name}
              </span>
            </motion.div>
          ))}
        </InfiniteSlider>
      </motion.div>
    </section>
  );
}
