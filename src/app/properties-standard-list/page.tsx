"use client";

import React, { useState } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import InnerHero from "@/components/InnerHero";
import { Search, Home } from "lucide-react";

export default function PropertiesStandardListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBedrooms, setSelectedBedrooms] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
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
    if (selectedPriceRange !== "All") {
      if (selectedPriceRange === "under-10m" && p.priceNumeric >= 10000000) return false;
      if (
        selectedPriceRange === "10m-15m" &&
        (p.priceNumeric < 10000000 || p.priceNumeric > 15000000)
      )
        return false;
      if (
        selectedPriceRange === "15m-20m" &&
        (p.priceNumeric < 15000000 || p.priceNumeric > 20000000)
      )
        return false;
      if (selectedPriceRange === "above-20m" && p.priceNumeric <= 20000000) return false;
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
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* High-Impact Hero Section */}
      <InnerHero
        title="Available Apartments & Penthouses"
        subtitle="Explore our verified collection of luxury apartments, penthouses, and commercial retail shops across prime Addis Ababa neighborhoods. 100% direct developer pricing with 15% down payment and 36-month interest-free installments."
        badge="Temer Property • Portfolio & Listings"
        breadcrumbs={[{ label: "Properties" }]}
        bgImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&auto=format&fit=crop&q=80"
        highlights={[
          "100% Free Public Pricing Access",
          "15% Down Payment & 36-Mo Installments",
          "Direct Senior Advisor: 0938125777",
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-8 -mt-6 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-center">
            {/* Search Input */}
            <div className="relative lg:col-span-2">
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

            {/* Price Range Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] bg-gray-50/50 font-medium text-gray-700"
              >
                <option value="All">All Budgets</option>
                <option value="under-10m">Under 10M ETB</option>
                <option value="10m-15m">10M - 15M ETB</option>
                <option value="15m-20m">15M - 20M ETB</option>
                <option value="above-20m">20M+ ETB</option>
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
                setSelectedPriceRange("All");
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
