"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogSection() {
  const { t } = useLanguage();
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="py-20 bg-white" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#84A441] text-xs sm:text-sm font-bold uppercase tracking-widest inline-block mb-2">
              Real Estate In Ethiopia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t("readFromOurBlog")}
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              {t("readFromOurBlogSubtitle")}
            </p>
          </div>

          <Link
            href="/blog-list"
            className="inline-flex items-center gap-2 text-[#84A441] hover:text-[#6e8a32] font-bold text-sm mt-4 md:mt-0 group"
          >
            <span>{t("viewAllArticles")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#84A441] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
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
                    <span>{t("viewDetails")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
