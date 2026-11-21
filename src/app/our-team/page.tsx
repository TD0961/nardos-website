"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { leadership, management } from "@/data/team";
import { Phone, ArrowRight } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

export default function OurTeamPage() {
  return (
    <div className="bg-[#fbfcfa] min-h-screen pb-24">
      {/* Page Hero Header */}
      <InnerHero
        title="Meet Our Team"
        subtitle="Meet the visionary founders, executive directors, and experienced department heads driving excellence across Temer Property developments in Addis Ababa."
        badge="Executive Leadership & Management"
        breadcrumbs={[{ label: "Our Team" }]}
        bgImage="/images/placeholder-project.jpg"
        highlights={[
          "Executive Board & Visionary Founders",
          "Dedicated Civil Engineering & Project Supervision",
          "Direct Developer Transparency",
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Founders & Executive Board */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#84A441] text-xs font-black uppercase tracking-[0.2em] inline-block mb-1">
              Founders & Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2d3e1e] tracking-tight">
              Executive Board
            </h2>
            <div className="w-16 h-1 bg-[#84A441] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((exec) => (
              <div
                key={exec.id}
                className="group bg-white rounded-[2.5rem] p-8 shadow-sm border-2 border-[#84A441]/10 hover:shadow-2xl hover:border-[#84A441]/30 transition-all duration-300 flex flex-col text-center"
              >
                {/* Avatar with Circular Border and Logo Badge */}
                <div className="mb-6 flex justify-center relative">
                  <div className="w-44 h-44 rounded-full border-[6px] border-white shadow-xl overflow-hidden ring-2 ring-[#84A441]/10 relative bg-gray-100">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      fill
                      sizes="176px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Floating Mini Logo Badge */}
                  <div className="absolute -bottom-1 right-[22%] w-10 h-10 bg-white rounded-full shadow-md p-1.5 border border-slate-100 flex items-center justify-center">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/images/logo-square.png"
                        alt="Temer Logo"
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-black text-[#2d3e1e] mb-1">
                    {exec.name}
                  </h3>
                  <p className="text-[#84A441] font-extrabold text-xs uppercase tracking-[0.15em] mb-4">
                    {exec.role}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    {exec.department}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-center gap-3">
                    <a
                      href="tel:0938125777"
                      onClick={() => trackCallClick("team_exec_call")}
                      className="bg-[#84A441] hover:bg-[#6e8a32] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>0938125777</span>
                    </a>
                    <a
                      href={`https://wa.me/251938125777?text=${encodeURIComponent(
                        `Hello Temer Property, I would like to inquire about executive advisory regarding apartment investments.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("team_exec_whatsapp")}
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center gap-1 shadow-sm transition-all"
                    >
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Management Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#84A441] text-xs font-black uppercase tracking-[0.2em] inline-block mb-1">
              Management
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2d3e1e] tracking-tight">
              Executive Management Team
            </h2>
            <div className="w-16 h-1 bg-[#84A441] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((mgr) => (
              <div
                key={mgr.id}
                className="group bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#84A441]/20 transition-all duration-300 flex flex-col text-center"
              >
                {/* Circular Avatar with Floating Badge */}
                <div className="relative w-36 h-36 mx-auto mb-5">
                  <div className="w-full h-full rounded-full overflow-hidden border-[4px] border-white shadow-md relative bg-gray-100">
                    <Image
                      src={mgr.image}
                      alt={mgr.name}
                      fill
                      sizes="144px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-1 right-[5%] w-8 h-8 bg-white rounded-full shadow-md p-1.5 border border-slate-100 flex items-center justify-center">
                    <div className="relative w-5 h-5">
                      <Image
                        src="/images/logo-square.png"
                        alt="Temer Logo"
                        fill
                        sizes="20px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h4 className="font-black text-[#2d3e1e] text-lg mb-1 leading-snug">
                    {mgr.name}
                  </h4>
                  <p className="text-[#84A441] font-bold text-[11px] uppercase tracking-wider mb-2">
                    {mgr.role}
                  </p>
                  <p className="text-gray-400 text-xs mb-4">{mgr.department}</p>

                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <a
                      href="tel:0938125777"
                      onClick={() => trackCallClick("team_mgr_call")}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#84A441] bg-gray-50 hover:bg-[#84A441]/10 py-2 px-3 rounded-xl w-full transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#84A441]" />
                      <span>Contact 0938125777</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Sales & Advisory */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[#84A441] text-xs font-bold uppercase tracking-wider">
              Ready to Buy or Invest?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Connect with Our Dedicated Sales & Advisory Team
            </h3>
            <p className="text-gray-500 text-sm max-w-2xl">
              Get personalized floor plan catalogs, certified price per square meter schedules, and free site tours across all active developments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/sales-officer"
              className="bg-[#84A441] hover:bg-[#6e8a32] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Meet Sales Advisors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/251938125777?text=Hello%20Temer%20Property%2C%20I%20would%20like%20to%20consult%20with%20a%20property%20advisor."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
