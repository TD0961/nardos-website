"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
  const { t } = useLanguage();

  return (
    <div className="relative text-white overflow-hidden pt-32 pb-14 sm:pt-36 sm:pb-18 mb-10 border-b border-gray-800/50 bg-[#0f141c]">
      {/* High-Clarity Transparent Architectural Hero Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Transparent Overlays: Darker at bottom for sharp contrast, luminous and clear at top under navbar */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f141c] via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#84A441_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs text-gray-300 mb-6 flex-wrap drop-shadow-sm"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#84A441] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t("navHome")}</span>
          </Link>

          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#84A441] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-white font-semibold drop-shadow-sm" : ""}>
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
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#84A441]/40 text-[#c2e276] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#84A441]" />
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 drop-shadow-md">
            {title}
          </h1>

          {subtitle && (
            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6 drop-shadow-sm font-medium">
              {subtitle}
            </p>
          )}

          {/* Value Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-200 pt-3 border-t border-white/15 drop-shadow-sm">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
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
