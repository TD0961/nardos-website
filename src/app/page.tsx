"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import VideoSection from "@/components/VideoSection";
import StatsCounter from "@/components/StatsCounter";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import BlogSection from "@/components/BlogSection";
import ContactFormSection from "@/components/ContactFormSection";
import { properties } from "@/data/properties";
import { useLanguage } from "@/context/LanguageContext";
import { Building, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const { t } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>("All");

  const handleHeroSearch = (filters: { area: string; category: string; bedrooms: string }) => {
    if (filters.area) setSelectedArea(filters.area);
    if (filters.category) setSelectedCategory(filters.category);
    if (filters.bedrooms) setSelectedBedrooms(filters.bedrooms);
  };

  const filteredProperties = properties.filter((p) => {
    if (selectedArea !== "All" && p.area !== selectedArea && !p.location.toLowerCase().includes(selectedArea.toLowerCase())) {
      return false;
    }
    if (selectedCategory !== "All" && !p.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
      return false;
    }
    if (selectedBedrooms !== "All" && p.bedrooms !== parseInt(selectedBedrooms)) {
      return false;
    }
    return true;
  });

  const areas = ["All", "Sarbet", "Aware", "Ayat", "Gelan", "Garment", "Piyassa"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with Video & Quick Filter */}
      <HeroSection onSearch={handleHeroSearch} />

      {/* 2. Stats Counters */}
      <StatsCounter />

      {/* 3. Featured Properties Section */}
      <section className="py-20 bg-gray-50/50" id="featured-properties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#84A441] text-xs sm:text-sm font-bold uppercase tracking-widest inline-block mb-2">
              Real Estate In Ethiopia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t("latestProperties")}
            </h2>
            <div className="w-16 h-1 bg-[#84A441] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 text-sm mt-3">
              {t("latestPropertiesSubtitle")}
            </p>
          </div>

          {/* Location Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedArea === area
                    ? "bg-[#84A441] text-white shadow-md"
                    : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {area === "All" ? t("allLocations") : area}
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.slice(0, 6).map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-8 max-w-md mx-auto">
              <Building className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800 mb-1">No Properties Found</h3>
              <p className="text-xs text-gray-500 mb-4">
                No active listings match your current filters. Try resetting the location or bedroom filter.
              </p>
              <button
                onClick={() => {
                  setSelectedArea("All");
                  setSelectedCategory("All");
                  setSelectedBedrooms("All");
                }}
                className="bg-[#84A441] text-white text-xs font-semibold px-4 py-2 rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* View All Listings Button */}
          <div className="text-center mt-12">
            <Link
              href="/properties-standard-list"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-bold px-8 py-3.5 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <span>Explore All {properties.length} Properties</span>
              <ArrowRight className="w-4 h-4 text-[#84A441]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Video Showcase Section */}
      <VideoSection />

      {/* 5. Projects Showcase */}
      <ProjectsShowcase />

      {/* 6. Blog & Insights */}
      <BlogSection />

      {/* 7. Contact Inquiry Form */}
      <ContactFormSection />
    </div>
  );
}
