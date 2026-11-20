import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { Calendar, User, ArrowLeft, Phone } from "lucide-react";

export function generateStaticParams() {
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const recentPosts = posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3.5 mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#84A441]">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog-list" className="hover:text-[#84A441]">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">
              {post.title}
            </span>
          </div>

          <Link
            href="/blog-list"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#84A441] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#84A441] text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar className="w-3.5 h-3.5 text-[#84A441]" />
                <span>{post.date}</span>
                <span>•</span>
                <User className="w-3.5 h-3.5 text-[#84A441]" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 shadow-md bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p className="text-lg font-medium text-gray-900 leading-relaxed">
              {post.excerpt}
            </p>

            <p>
              Temer Property continues to establish high benchmarks within Addis Ababa&apos;s real estate development landscape. With a relentless focus on prime positioning, exceptional architectural execution, and durable building standards, our developments offer unparalleled residential comfort and premier commercial opportunities.
            </p>

            <p>
              Whether you are an investor looking for high-yield rental returns or a family seeking a long-term home, Temer Property ensures each property is backed by clear legal ownership documentation, verified construction standards, and responsive post-handover property care.
            </p>

            <p>
              Our flexible 1% monthly payment programs and partnership programs (including Ethiopian Airlines ShebaMiles rewards) allow discerning buyers both locally and across the diaspora to acquire properties seamlessly with maximum peace of mind.
            </p>
          </div>

          {/* CTA Box */}
          <div className="mt-10 p-6 rounded-2xl bg-[#84A441]/10 border border-[#84A441]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-gray-900 text-base">
                Interested in Buying or Visiting Our Sites?
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                Our property advisors are available Monday through Saturday.
              </p>
            </div>
            <a
              href="tel:0938125777"
              className="bg-[#84A441] hover:bg-[#6e8a32] text-white px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 whitespace-nowrap shadow transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call 0938125777</span>
            </a>
          </div>
        </article>

        {/* Recent Articles */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm p-4 flex flex-col group"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-gray-100">
                  <Image src={r.image} alt={r.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <span className="text-[10px] font-bold text-[#84A441] uppercase">
                  {r.category}
                </span>
                <Link href={`/blog/${r.slug}`}>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#84A441] line-clamp-2 mt-1">
                    {r.title}
                  </h4>
                </Link>
                <span className="text-[11px] text-gray-400 mt-2">{r.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

