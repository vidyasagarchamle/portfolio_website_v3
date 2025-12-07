"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCarousel } from "@/components/ui/carousel";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "framer-motion";

interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  pdfUrl: string;
  gradient: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    id: "just-dance-now",
    title: "Just Dance Now",
    category: "4-Part Case Study",
    summary: "Comprehensive analysis of DAU optimization, payer conversion, KPI-driven product optimization, and cross-functional collaboration.",
    pdfUrl: "/case-studies/just-dance-now.pdf",
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(30,30,30,1) 100%)",
  },
  {
    id: "slack",
    title: "Slack",
    category: "Feature Design",
    summary: "Improve user education for Slack Save for Later feature",
    pdfUrl: "/case-studies/slack.pdf",
    gradient: "linear-gradient(135deg, rgba(120,119,198,0.15) 0%, rgba(99,102,241,0.08) 50%, rgba(20,20,20,1) 100%)",
  },
  {
    id: "saasfras",
    title: "SaaSfras",
    category: "Revenue Strategy",
    summary: "Growth strategy to optimize revenue streams and enhance customer lifetime value.",
    pdfUrl: "/case-studies/saasfras.pdf",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(52,211,153,0.08) 50%, rgba(25,25,25,1) 100%)",
  },
  {
    id: "inshorts",
    title: "Inshorts",
    category: "Feed Optimization",
    summary: "Improving news feed through content personalization, UI enhancements, and engagement metrics.",
    pdfUrl: "/case-studies/inshorts.pdf",
    gradient: "linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(245,158,11,0.08) 50%, rgba(22,22,22,1) 100%)",
  },
];

function CaseStudyCard({ item }: { item: CaseStudyItem }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(item.pdfUrl, '_blank');
  };

  return (
      <div 
      onClick={handleClick}
      onMouseDown={(e) => e.stopPropagation()}
      className="group block relative w-full h-[320px] md:h-[400px] cursor-pointer"
      style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10, isolation: 'isolate' }}
    >
      <Card className="overflow-hidden h-full w-full rounded-2xl bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] transition-all duration-500" style={{ pointerEvents: 'auto' }}>
        {/* Gradient Background */}
        <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
          <div 
            className="absolute inset-0"
            style={{ background: item.gradient }}
          />
          {/* Subtle noise texture */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
            }}
          />
          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Title visible when not hovered */}
          <div className="absolute bottom-5 left-5 right-5 transition-opacity duration-300 group-hover:opacity-0">
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em]">{item.category}</span>
            <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>
          </div>
        </div>

        {/* Text Section - appears on hover */}
        <div className="absolute bottom-0 left-0 w-full h-0 px-5 py-0 transition-all duration-500 group-hover:h-1/2 group-hover:py-5 flex flex-col justify-center bg-black/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 overflow-hidden">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1">{item.category}</span>
          <h3 className="text-lg font-semibold text-white md:text-xl">{item.title}</h3>
          <p className="text-white/40 text-sm mt-2 line-clamp-3 leading-relaxed">
            {item.summary}
          </p>
          <div className="absolute bottom-4 right-4">
            <Button
              variant="outline"
              size="icon"
              className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:-rotate-45 transition-all duration-500 rounded-full"
            >
              <ArrowUpRight className="size-4 text-white/70" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function CarouselControls() {
  const { index, setIndex, itemsCount } = useCarousel();
  
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => index > 0 && setIndex(index - 1)}
        disabled={index === 0}
        className="h-10 w-10 rounded-full border-white/20 bg-transparent hover:bg-white/5 disabled:opacity-30"
      >
        <ChevronLeft className="h-4 w-4 text-white" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => index < itemsCount - 1 && setIndex(index + 1)}
        disabled={index >= itemsCount - 1}
        className="h-10 w-10 rounded-full border-white/20 bg-transparent hover:bg-white/5 disabled:opacity-30"
      >
        <ChevronRight className="h-4 w-4 text-white" />
      </Button>
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-black px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between md:mb-10 md:flex-row md:items-end lg:mb-12">
          <div className="max-w-2xl">
            <BlurFade delay={0}>
              <span className="text-xs uppercase text-white/30 font-medium tracking-[0.3em]">
                Case Studies
              </span>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-relaxed">
                Solving Product Challenges{" "}
                <span className="text-white/40 text-lg sm:text-xl lg:text-2xl font-normal">
                  — In-depth analyses of product problems and my approach to solving them.
                </span>
              </h2>
            </BlurFade>
          </div>
        </div>

        {/* Carousel */}
        <BlurFade delay={0.2}>
          <Carousel className="w-full">
            <div className="flex justify-end mb-6">
              <CarouselControls />
            </div>
            <div className="relative" style={{ zIndex: 60 }}>
              <CarouselContent className="-ml-4 md:-ml-6">
                {caseStudies.map((item, index) => (
                  <CarouselItem 
                    key={item.id} 
                    className="pl-4 md:pl-6 basis-[85%] sm:basis-[45%] lg:basis-[32%]"
                  >
                    <div style={{ position: 'relative', zIndex: 60 + index }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ pointerEvents: 'auto', position: 'relative', zIndex: 1 }}
                      >
                        <CaseStudyCard item={item} />
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </Carousel>
        </BlurFade>

        {/* View All Link */}
        <BlurFade delay={0.3}>
          <div className="mt-12 text-center">
            <motion.a
              href="https://www.vidyasagar.xyz/#case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
              whileHover={{ x: 4 }}
            >
              View all case studies
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
