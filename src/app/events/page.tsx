"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Calendar, ArrowRight } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import { useLanguage } from "@/context/LanguageContext";

export default function EventsPage() {
  const { t } = useLanguage();
  const events = posts.filter(
    (p) =>
      p.category === "Events & Expo" ||
      p.category === "Offers & Partnerships" ||
      p.category === "Handover"
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Hero Header */}
      <InnerHero
        title={t("eventsTitle")}
        subtitle={t("eventsSubtitle")}
        badge="Happenings & Announcements • Corporate Milestones"
        breadcrumbs={[{ label: t("navEvents") }]}
        bgImage="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1800&auto=format&fit=crop&q=80"
        highlights={[
          "Official Project Handovers",
          "Property Exhibitions & Expos",
          "Community & Partnership News",
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(events.length > 0 ? events : posts.slice(0, 6)).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#84A441] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-[#84A441]" />
                  <span>{item.date}</span>
                </div>

                <Link href={`/blog/${item.slug}`}>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#84A441] transition-colors line-clamp-2 mb-3 leading-snug">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-gray-500 text-xs sm:text-sm line-clamp-3 mb-6 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="mt-auto pt-3 border-t border-gray-100">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#84A441] hover:text-[#6e8a32]"
                  >
                    <span>{t("viewDetails")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
