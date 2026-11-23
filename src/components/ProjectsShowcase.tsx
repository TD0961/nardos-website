"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Building, Calendar, ArrowRight } from "lucide-react";

export default function ProjectsShowcase() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const { t } = useLanguage();

  const tabs = [
    { key: "All", labelKey: "tabAll" },
    { key: "In Progress", labelKey: "tabInProgress" },
    { key: "Delivered", labelKey: "tabDelivered" },
    { key: "Upcoming", labelKey: "tabUpcoming" },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.status === activeTab);

  return (
    <section className="py-20 bg-gray-50/70" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#84A441] text-xs sm:text-sm font-bold uppercase tracking-widest inline-block mb-2">
              Portfolio & Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t("ourProjects")}
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl">
              {t("ourProjectsSubtitle")}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm self-start md:self-auto overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-[#84A441] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-[#84A441] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {project.status}
                  </span>
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#84A441] transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>
                </Link>

                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#84A441] flex-shrink-0" />
                  <span>{project.location}</span>
                </div>

                <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Units & Specs */}
                <div className="grid grid-cols-2 gap-2 py-2.5 bg-gray-50 rounded-xl px-3 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#84A441]" />
                    <span className="truncate">{project.units}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="font-bold text-[#84A441] truncate">{project.progress}</span>
                  </div>
                </div>

                {/* Metadata & Actions */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{project.delivery}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-bold text-white bg-[#84A441] hover:bg-[#6e8a32] px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-sm"
                    >
                      <span>{t("viewDetails")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects footer */}
        <div className="text-center mt-12">
          <Link
            href="/construction-update"
            className="inline-flex items-center gap-2 bg-[#84A441] hover:bg-[#6e8a32] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all"
          >
            <span>{t("navConstructionUpdates")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
