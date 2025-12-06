"use client";

import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
  tags,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  description: string;
  href: string;
  cta: string;
  tags?: string[];
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl cursor-pointer",
      "bg-white/[0.02] [border:1px_solid_rgba(255,255,255,.06)]",
      "transform-gpu hover:border-white/[0.12] transition-colors duration-300",
      className
    )}
  >
    {/* Background */}
    <div className="absolute inset-0">{background}</div>
    
    {/* Content */}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/[0.05] text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-white">
        {name}
      </h3>
      <p className="max-w-lg text-sm text-white/40 leading-relaxed mt-1">
        {description}
      </p>
    </div>

    {/* CTA */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-4 transform-gpu flex-row items-center justify-between p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <span className="text-sm text-white/60 pointer-events-auto">
        {cta}
      </span>
      <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
        <ArrowUpRight className="w-4 h-4 text-white/70" />
      </div>
    </div>
    
    {/* Hover overlay */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[0.02]" />
  </motion.a>
);

export { BentoCard, BentoGrid };

