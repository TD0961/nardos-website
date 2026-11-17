"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useBooking } from "@/context/BookingContext";
import { MapPin, Clock, Video, ArrowRight } from "lucide-react";

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
            Construction Updates
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Stay up to date with ongoing construction milestones, structural progress, and handover timelines across all Temer project sites.
          </p>
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
          {filtered.map((site) => (
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
                    <span className="text-[#84A441] text-sm">{site.progress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#84A441] rounded-full transition-all duration-700"
                      style={{ width: `${site.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-gray-400 mt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Timeline
                    </span>
                    <span className="font-semibold text-gray-700">{site.delivery}</span>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => openBooking(site.title)}
                    className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <span>Request Site Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

