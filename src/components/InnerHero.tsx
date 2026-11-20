"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, ShieldCheck, Sparkles } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface InnerHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  children?: React.ReactNode;
  highlights?: string[];
}

export default function InnerHero({
  title,
  subtitle,
  badge = "Temer Property • Direct Developer Advisory",
  breadcrumbs,
  bgImage = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&auto=format&fit=crop&q=80",
  children,
  highlights = [
    "100% Free Public Access",
    "Zero Intermediary Markup",
    "Direct Advisor Hotline: 0938125777",
  ],
}: InnerHeroProps) {
  return (
    <div className="relative bg-[#181d24] text-white overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 mb-10 border-b border-gray-800">
      {/* Background Architectural Image with Luxury Overlays */}
      <div className="absolute inset-0 z-0 opacity-20 select-none pointer-events-none">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181d24] via-[#181d24]/90 to-[#181d24]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(#84A441_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs text-gray-400 mb-6 flex-wrap"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#84A441] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                <ChevronRight className="w-3 h-3 text-gray-600 flex-shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#84A441] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-gray-200 font-medium" : ""}>
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Content Block */}
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84A441]/20 border border-[#84A441]/30 text-[#a3c952] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#84A441]" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6">
              {subtitle}
            </p>
          )}

          {/* Value Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-300 pt-2 border-t border-gray-800/80">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#84A441] flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Optional Custom Page Widgets (Search, Tabs, CTAs) */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}
