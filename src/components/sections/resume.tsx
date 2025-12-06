"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { BlurFade } from "@/components/ui/blur-fade";

const experience = [
  {
    role: "Senior Product Manager",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Leading product strategy for the core platform serving 10M+ users.",
    achievements: [
      "Increased user retention by 45% through feature optimization",
      "Launched 3 major product lines generating $5M ARR",
      "Built and mentored a team of 4 product managers",
    ],
  },
  {
    role: "Product Manager",
    company: "StartupXYZ",
    period: "2019 - 2021",
    description: "Owned the end-to-end product lifecycle for the mobile app.",
    achievements: [
      "Grew MAU from 100K to 2M users",
      "Reduced churn by 30% with personalization features",
      "Led successful Series A fundraise with product demos",
    ],
  },
  {
    role: "Associate Product Manager",
    company: "BigTech Corp",
    period: "2017 - 2019",
    description: "Supported product initiatives for enterprise solutions.",
    achievements: [
      "Managed roadmap for B2B dashboard features",
      "Conducted 50+ customer interviews for discovery",
      "Improved NPS score from 32 to 58",
    ],
  },
];

const education = [
  {
    degree: "MBA, Technology Management",
    school: "Stanford GSB",
    period: "2015 - 2017",
  },
  {
    degree: "BS, Computer Science",
    school: "MIT",
    period: "2011 - 2015",
  },
];

const certifications = [
  "Certified Scrum Product Owner (CSPO)",
  "Google Analytics Certification",
  "AWS Cloud Practitioner",
];

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight
        className="top-40 right-0 md:right-60 md:top-20"
        fill="rgba(139,92,246,0.4)"
      />

      {/* Animated line pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${10 + i * 10}%`,
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)',
            }}
            animate={{
              x: [-1000, 1000],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto" style={{ maxWidth: '72rem' }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0}>
            <span 
              className="text-sm uppercase text-white/40 font-medium"
              style={{ letterSpacing: '0.3em' }}
            >
              Resume
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
              My Journey
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="group">
                <Download className="mr-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                Download Full Resume
              </Button>
            </motion.div>
          </BlurFade>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '3rem',
          }}
          className="lg:grid-cols-3 lg:gap-12"
        >
          {/* Experience Column */}
          <div style={{ gridColumn: 'span 2' }} className="lg:col-span-2">
            <BlurFade delay={0.3}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <motion.div 
                  className="flex items-center justify-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="w-5 h-5 text-white/60" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </div>
            </BlurFade>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experience.map((job, index) => (
                <BlurFade key={job.role} delay={0.1 * index}>
                  <motion.div
                    className="group relative"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="p-6 transition-all duration-300"
                      style={{
                        borderRadius: '1rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      {/* Hover glow */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          borderRadius: '1rem',
                          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.04), transparent 40%)',
                        }}
                      />
                      
                      <div className="relative">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                          <div>
                            <h4 className="text-lg font-semibold text-white">{job.role}</h4>
                            <p className="text-white/50">{job.company}</p>
                          </div>
                          <motion.span 
                            className="text-sm text-white/40 shrink-0"
                            style={{
                              padding: '0.25rem 0.75rem',
                              borderRadius: '9999px',
                              background: 'rgba(255, 255, 255, 0.05)',
                            }}
                          >
                            {job.period}
                          </motion.span>
                        </div>
                        <p className="text-white/60 mb-4" style={{ lineHeight: '1.75' }}>{job.description}</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {job.achievements.map((achievement, idx) => (
                            <motion.li 
                              key={idx} 
                              className="text-sm text-white/50"
                              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * idx }}
                            >
                              <motion.span 
                                className="shrink-0 mt-2"
                                style={{
                                  width: '4px',
                                  height: '4px',
                                  borderRadius: '50%',
                                  background: 'rgba(255, 255, 255, 0.4)',
                                }}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                              />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Education */}
            <BlurFade delay={0.4}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <motion.div 
                    className="flex items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <GraduationCap className="w-5 h-5 text-white/60" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {education.map((edu, index) => (
                    <motion.div 
                      key={edu.degree}
                      className="p-4"
                      style={{
                        borderRadius: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <p className="text-sm text-white/50">{edu.school}</p>
                      <p className="text-xs text-white/30 mt-1">{edu.period}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Certifications */}
            <BlurFade delay={0.5}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <motion.div 
                    className="flex items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="w-5 h-5 text-white/60" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">Certifications</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={cert}
                      className="text-sm text-white/60 hover:text-white/80 transition-colors cursor-default"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 5, background: 'rgba(255, 255, 255, 0.05)' }}
                    >
                      <motion.span
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </motion.span>
                      {cert}
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
