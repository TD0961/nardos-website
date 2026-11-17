"use client";

import React, { useRef, useState } from "react";
import { useBooking } from "@/context/BookingContext";
import { Phone, Search, MapPin, Home, Bed, ArrowRight, Play, Pause } from "lucide-react";

interface HeroSectionProps {
  onSearch?: (filters: { area: string; category: string; bedrooms: string }) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { openBooking } = useBooking();

  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ area, category, bedrooms });
    }
    const listingsEl = document.getElementById("featured-properties");
    if (listingsEl) {
      listingsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-black pt-28 pb-12 sm:pt-36 sm:pb-16">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://temerproperties.com/wp-content/uploads/2026/05/onebedcityplus.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-all duration-700"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/70"></div>
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Video Control Button (bottom right corner) */}
      <button
        onClick={toggleVideo}
        className="absolute top-24 right-6 z-20 hidden md:flex items-center gap-2 bg-black/40 hover:bg-black/70 text-white/80 hover:text-white px-3 py-1.5 rounded-full text-xs backdrop-blur-md transition-all border border-white/10"
        aria-label="Toggle Hero Video"
      >
        {isPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5" /> Pause Video
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5" /> Play Video
          </>
        )}
      </button>

      {/* Center Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full text-center">
        <div className="inline-block animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#84A441]/25 text-[#84A441] border border-[#84A441]/40 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md mb-4">
            Ethiopia&apos;s Leading Real Estate Developer
          </span>
        </div>

        <h4 className="text-white/90 text-sm sm:text-xl lg:text-2xl font-light tracking-[0.25em] uppercase mb-3 drop-shadow-md">
          MAKE YOUR NEXT MOVE WITH US
        </h4>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6 drop-shadow-lg">
          TEMER <span className="text-[#84A441]">PROPERTIES</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg mb-8 leading-relaxed drop-shadow">
          Discover modern luxury apartments and prime commercial centers across Addis Ababa designed for lasting comfort, elegance, and high return on investment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="tel:0938125777"
            className="flex items-center gap-2 bg-[#84A441] hover:bg-[#6e8a32] text-white px-7 py-3.5 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>0938125777</span>
          </a>

          <button
            onClick={() => openBooking()}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-200"
          >
            <span>Book Site Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Floating Property Search Widget */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-6">
        <form
          onSubmit={handleSearch}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-5 border border-white/40"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-center">
            {/* Search by location */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-[#84A441]" /> Search By Location
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 font-medium focus:outline-none focus:border-[#84A441]"
              >
                <option value="">All Locations</option>
                <option value="Sarbet">Sarbet</option>
                <option value="Aware">Aware</option>
                <option value="Ayat">Ayat</option>
                <option value="Gelan">Gelan</option>
                <option value="Garment">Haile Garment</option>
                <option value="Piyassa">Piyassa / Arada</option>
                <option value="Bulgaria">Bulgaria</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                <Home className="w-3.5 h-3.5 text-[#84A441]" /> Property Type
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 font-medium focus:outline-none focus:border-[#84A441]"
              >
                <option value="">All Types</option>
                <option value="Apartment">Apartment</option>
                <option value="Commercial">Shops & Commercial</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                <Bed className="w-3.5 h-3.5 text-[#84A441]" /> Bedrooms
              </label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-800 font-medium focus:outline-none focus:border-[#84A441]"
              >
                <option value="">Any Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="pt-2 sm:pt-5">
              <button
                type="submit"
                className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Search className="w-4 h-4" />
                <span>Find Properties</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

