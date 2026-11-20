"use client";

import React, { useState } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { Search, Home, CheckCircle2 } from "lucide-react";

export default function PropertiesStandardListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBedrooms, setSelectedBedrooms] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = properties.filter((p) => {
    if (
      searchQuery &&
      !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.location.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    if (
      selectedArea !== "All" &&
      p.area !== selectedArea &&
      !p.location.toLowerCase().includes(selectedArea.toLowerCase())
    ) {
      return false;
    }
    if (
      selectedCategory !== "All" &&
      !p.category.toLowerCase().includes(selectedCategory.toLowerCase())
    ) {
      return false;
    }
    if (selectedBedrooms !== "All" && p.bedrooms !== parseInt(selectedBedrooms)) {
      return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.priceNumeric - b.priceNumeric;
    if (sortBy === "price-desc") return b.priceNumeric - a.priceNumeric;
    if (sortBy === "bedrooms-asc") return a.bedrooms - b.bedrooms;
    if (sortBy === "bedrooms-desc") return b.bedrooms - a.bedrooms;
    return 0;
  });

  const areas = ["All", "Sarbet", "Aware", "Ayat", "Gelan", "Garment", "Piyassa", "Bulgaria"];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-[#181d24] text-white py-14 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#84A441] text-xs sm:text-sm font-bold uppercase tracking-widest inline-block mb-2">
            Temer Property Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Available Apartments & Penthouses
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Browse our comprehensive collection of premium apartments and commercial real estate across Addis Ababa. Transparent pricing, 15% down payment options, and milestone installments.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
            <span className="flex items-center gap-1.5 text-[#84A441]">
              <CheckCircle2 className="w-4 h-4" /> 100% Free Public Access
            </span>
            <span>•</span>
            <span>No Form Registration Needed</span>
            <span>•</span>
            <span>Direct WhatsApp & Call Support</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search title, neighborhood..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
              />
            </div>

            {/* Area Filter */}
            <div>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] bg-gray-50/50"
              >
                <option value="All">All Neighborhoods</option>
                {areas.slice(1).map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] bg-gray-50/50"
              >
                <option value="All">All Categories</option>
                <option value="Apartment">Apartment</option>
                <option value="Commercial">Commercial / Shop</option>
              </select>
            </div>

            {/* Bedrooms Filter */}
            <div>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] bg-gray-50/50"
              >
                <option value="All">Any Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] bg-gray-50/50"
              >
                <option value="featured">Featured Listings</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="bedrooms-asc">Bedrooms: Min to Max</option>
                <option value="bedrooms-desc">Bedrooms: Max to Min</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <strong className="text-gray-900">{sorted.length}</strong> available properties
          </p>
        </div>

        {/* Property Grid */}
        {sorted.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <Home className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800 mb-1">No matching properties found</h3>
            <p className="text-sm text-gray-500 mb-4">
              Try adjusting your filter criteria or search keyword.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedArea("All");
                setSelectedCategory("All");
                setSelectedBedrooms("All");
              }}
              className="bg-[#84A441] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#6e8a32] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
