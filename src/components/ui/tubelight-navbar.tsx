"use client"

import React, { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  // Set active tab based on current pathname
  useEffect(() => {
    // Check if we're on a route page (not hash-based)
    const currentItem = items.find(item => {
      if (item.url.startsWith('/#')) {
        return false // Skip hash links
      }
      return pathname === item.url || (item.url === '/' && pathname === '/')
    })
    
    if (currentItem) {
      setActiveTab(currentItem.name)
      return // Don't set up scroll listener for route pages
    }

    // For hash-based navigation on home page, use scroll detection
    const handleScroll = () => {
      const sections = items
        .filter(item => item.url.startsWith('#'))
        .map(item => ({
          name: item.name,
          element: document.querySelector(item.url)
        }))
        .filter(s => s.element)

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const offsetTop = (section.element as HTMLElement).offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveTab(section.name)
            break
          }
        }
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    
    // Only add scroll listener on home page
    if (pathname === '/') {
      window.addEventListener("scroll", handleScroll, { passive: true })
      handleScroll()
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      if (pathname === '/') {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [items, pathname])

  const handleClick = (name: string) => {
    setActiveTab(name)
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
      style={{ pointerEvents: 'none' }}
    >
      <div className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg" style={{ pointerEvents: 'auto' }}>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => handleClick(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-white/80 hover:text-white",
                isActive && "bg-white/10 text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
