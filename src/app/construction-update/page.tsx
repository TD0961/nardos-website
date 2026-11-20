"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useBooking } from "@/context/BookingContext";
import { MapPin, Clock, Video, ArrowRight, CheckCircle2 } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function ConstructionUpdatePage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const { openBooking } = useBooking();

  const filtered =
    selectedStatus === "All"
      ? projects
      : projects.filter((p) => p.status === selectedStatus);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#181d24] text-white py-16 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#84A441] text-xs sm:text-sm font-bold uppercase tracking-widest inline-block mb-2">
            Transparency & Progress
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Construction Updates & Handover Schedules
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Stay up to date with ongoing construction milestones, structural progress, and handover timelines across all Temer Property project sites.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
            <span className="flex items-center gap-1 text-[#84A441]">
              <CheckCircle2 className="w-4 h-4" /> 100% Free Public Verification
            </span>
            <span>•</span>
            <span>Site Visits Available 6 Days a Week</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {["All", "In Progress", "Delivered", "Upcoming"].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedStatus === status
                  ? "bg-[#84A441] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {status === "All" ? "All Site Updates" : status}
            </button>
          ))}
        </div>

        {/* Sites Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((site) => {
            const waMsg = encodeURIComponent(
              `Hello Temer Property, I would like more information and a site visit for *${site.title}* (${site.location}).`
            );
            const waUrl = `https://wa.me/251938125777?text=${waMsg}`;

            return (
              <div
                key={site.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Media preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={site.image}
                    alt={site.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>

                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full text-white shadow ${
                        site.status === "Delivered"
                          ? "bg-emerald-600"
                          : site.status === "In Progress"
                          ? "bg-[#84A441]"
                          : "bg-amber-600"
                      }`}
                    >
                      {site.status}
                    </span>

                    {site.videoUrl && (
                      <span className="bg-red-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                        <Video className="w-3 h-3" /> Video Update
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-[#84A441]" />
                      {site.location}
                    </span>
                    <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                      {site.units}
                    </span>
                  </div>
                </div>

                {/* Site Update Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#84A441] transition-colors mb-2">
                    {site.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {site.description}
                  </p>

                  {/* Progress bar */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-5">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-700 mb-1.5">
                      <span>Overall Construction</span>
                      <span className="text-[#84A441] text-sm font-extrabold">{site.progress}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#84A441] rounded-full transition-all duration-700"
                        style={{ width: `${site.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-gray-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Delivery
                      </span>
                      <span className="font-semibold text-gray-700">{site.delivery}</span>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("site_update", site.title)}
                      className="flex-1 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => openBooking(site.title)}
                      className="flex-1 bg-gray-900 hover:bg-black text-white font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Site Tour</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#84A441]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
