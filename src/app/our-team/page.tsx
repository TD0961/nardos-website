"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { leadership, management } from "@/data/team";
import { ArrowRight, Calendar } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function OurTeamPage() {
  const { openBooking } = useBooking();
  const { t } = useLanguage();

  return (
    <div className="bg-[#fbfcfa] min-h-screen pb-24">
      {/* Page Hero Header */}
      <InnerHero
        title={t("meetOurTeam")}
        subtitle={t("meetOurTeamSubtitle")}
        badge="Executive Leadership & Management"
        breadcrumbs={[{ label: t("navOurTeam") }]}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&auto=format&fit=crop&q=80"
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
              {t("executiveBoard")}
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

                  {/* Actions: Contact (WhatsApp) and Inquiry (Open Booking) - No phone call button */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-center gap-2">
                    <a
                      href={`https://wa.me/251938125777?text=${encodeURIComponent(
                        `Hello Temer Property, I would like to contact your office regarding ${exec.role} (${exec.name}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("team_exec_whatsapp")}
                      className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Contact</span>
                    </a>
                    <button
                      onClick={() =>
                        openBooking(`Executive Consultation - ${exec.name} (${exec.role})`)
                      }
                      className="flex-1 bg-[#84A441] hover:bg-[#6e8a32] text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t("inquireAdvisor")}</span>
                    </button>
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
              {t("executiveManagement")}
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

                  {/* Actions: Contact (WhatsApp) and Inquiry - No phone call button */}
                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-2">
                    <a
                      href={`https://wa.me/251938125777?text=${encodeURIComponent(
                        `Hello Temer Property, I would like to contact your office regarding ${mgr.role} (${mgr.name}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("team_mgr_whatsapp")}
                      className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Contact</span>
                    </a>
                    <button
                      onClick={() => openBooking(`Inquiry - ${mgr.role} (${mgr.name})`)}
                      className="flex-1 bg-[#84A441] hover:bg-[#6e8a32] text-white text-xs font-bold py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>{t("inquireAdvisor")}</span>
                    </button>
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
