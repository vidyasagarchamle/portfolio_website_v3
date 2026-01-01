"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const testimonials = [
  {
    quote: "Working with him was transformative for our product strategy. He has an exceptional ability to translate complex user needs into clear, actionable roadmaps that our entire team could rally behind.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
    avatar: "SC",
  },
  {
    quote: "One of the most data-driven PMs I've worked with. He doesn't just rely on intuition - every decision is backed by user research and metrics. Our product adoption increased 3x under his leadership.",
    name: "Michael Rodriguez",
    role: "CEO",
    company: "StartupXYZ",
    avatar: "MR",
  },
  {
    quote: "His ability to align stakeholders across engineering, design, and business is remarkable. He created a culture of collaboration that significantly improved our sprint velocity.",
    name: "Emily Watson",
    role: "Head of Design",
    company: "DesignStudio",
    avatar: "EW",
  },
  {
    quote: "A rare PM who truly understands both the technical and business sides. He helped us pivot our product strategy which resulted in securing our Series B funding.",
    name: "David Kim",
    role: "CTO",
    company: "InnovateLabs",
    avatar: "DK",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)' }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)' }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles - using fixed positions to avoid hydration mismatch */}
      {[
        { left: 5, top: 18, duration: 3.4, delay: 0.2 },
        { left: 92, top: 27, duration: 4.1, delay: 1.3 },
        { left: 28, top: 73, duration: 3.8, delay: 0.7 },
        { left: 64, top: 12, duration: 4.5, delay: 1.6 },
        { left: 81, top: 58, duration: 3.2, delay: 0.4 },
        { left: 16, top: 85, duration: 4.3, delay: 1.1 },
        { left: 47, top: 42, duration: 3.6, delay: 0.9 },
        { left: 73, top: 91, duration: 4.8, delay: 1.8 },
        { left: 38, top: 31, duration: 3.3, delay: 0.3 },
        { left: 89, top: 67, duration: 4.2, delay: 1.5 },
        { left: 11, top: 53, duration: 3.9, delay: 0.6 },
        { left: 56, top: 79, duration: 4.6, delay: 1.2 },
        { left: 33, top: 8, duration: 3.5, delay: 0.8 },
        { left: 78, top: 36, duration: 4.0, delay: 1.4 },
        { left: 22, top: 62, duration: 3.7, delay: 0.5 },
        { left: 95, top: 44, duration: 4.4, delay: 1.7 },
        { left: 42, top: 95, duration: 3.1, delay: 0.1 },
        { left: 67, top: 21, duration: 4.7, delay: 1.9 },
        { left: 8, top: 38, duration: 3.4, delay: 1.0 },
        { left: 51, top: 56, duration: 4.9, delay: 0.0 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      <div className="relative mx-auto" style={{ maxWidth: '56rem' }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0}>
            <span 
              className="text-sm uppercase text-white/40 font-medium"
              style={{ letterSpacing: '0.3em' }}
            >
              Testimonials
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
              What People Say
            </h2>
          </BlurFade>
        </div>

        {/* Testimonial Card */}
        <BlurFade delay={0.2}>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="relative p-8 md:p-12"
              style={{
                borderRadius: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Quote Icon with animation */}
              <motion.div 
                className="absolute flex items-center justify-center"
                style={{
                  top: '-16px',
                  left: '32px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Quote className="w-4 h-4 text-white/60" />
              </motion.div>

              <div style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5 }}
                  >
                    <p 
                      className="text-xl md:text-2xl text-white/90 mb-8 font-light italic"
                      style={{ lineHeight: '1.75' }}
                    >
                      &ldquo;{testimonials[active].quote}&rdquo;
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <motion.div 
                        className="flex items-center justify-center"
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-sm font-semibold text-white/80">
                          {testimonials[active].avatar}
                        </span>
                      </motion.div>
                      <div>
                        <div className="font-semibold text-white">
                          {testimonials[active].name}
                        </div>
                        <div className="text-sm text-white/50">
                          {testimonials[active].role} at {testimonials[active].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div 
                className="mt-8 pt-8"
                style={{ 
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {/* Dots */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setActive(index);
                        setAutoplay(false);
                      }}
                      className="transition-all duration-300"
                      style={{
                        width: active === index ? '32px' : '8px',
                        height: '8px',
                        borderRadius: '9999px',
                        background: active === index ? 'white' : 'rgba(255, 255, 255, 0.2)',
                      }}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <motion.button
                    onClick={() => {
                      handlePrev();
                      setAutoplay(false);
                    }}
                    className="flex items-center justify-center hover:bg-white/5 transition-colors"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5 text-white/60" />
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      handleNext();
                      setAutoplay(false);
                    }}
                    className="flex items-center justify-center hover:bg-white/5 transition-colors"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5 text-white/60" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
