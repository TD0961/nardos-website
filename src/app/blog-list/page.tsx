"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Calendar, User, Search, ArrowRight } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogListPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Handover", "Commercial", "Offers & Partnerships", "Careers & Community", "Events & Expo", "Real Estate"];

  const filtered = posts.filter((p) => {
    if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase()) && !p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedCategory !== "All" && p.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Hero Header */}
      <InnerHero
        title={t("blogListTitle")}
        subtitle={t("blogListSubtitle")}
        badge="News & Market Insights • Expert Guides"
        breadcrumbs={[{ label: t("navBlog") }]}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&auto=format&fit=crop&q=80"
        highlights={[
          "Market Trends & Legal Guides",
          "Project Handover Reports",
          "Diaspora Investment Insights",
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Category Pills */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#84A441] text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#84A441] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#84A441]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#84A441]" />
                    {post.author}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#84A441] transition-colors line-clamp-2 mb-3 leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-500 text-xs sm:text-sm line-clamp-3 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#84A441] group-hover:text-[#6e8a32]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

