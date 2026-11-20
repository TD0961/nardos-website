"use client";

import React, { useRef, useState } from "react";
import { useBooking } from "@/context/BookingContext";
import { Phone, Search, MapPin, Home, Bed, ArrowRight, Play, Pause } from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

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

  const whatsappUrl =
    "https://wa.me/251938125777?text=Hello%20Temer%20Property%2C%20I%20am%20interested%20in%20your%20luxury%20apartments%20and%20payment%20plans.";

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

      {/* Video Control Button (top right corner) */}
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
          TEMER <span className="text-[#84A441]">PROPERTY</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg mb-8 leading-relaxed drop-shadow">
          Discover modern luxury apartments and prime commercial centers across Addis Ababa. 15% down payment, flexible 36-month milestone installments, and direct title deeds.
        </p>

        {/* CTA Buttons: Call, WhatsApp & Free Site Visit */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {/* Clickable Phone Call */}
          <a
            href="tel:0938125777"
            onClick={() => trackCallClick("hero_section")}
            className="flex items-center gap-2 bg-[#84A441] hover:bg-[#6e8a32] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <span>0938125777</span>
          </a>

          {/* Direct WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("hero_section")}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Book Site Visit */}
          <button
            onClick={() => openBooking()}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200"
          >
            <span>Book Tour</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-gray-400">
          ✓ 100% Free Access to All Units, Floor Plans & Pricing • No Registration Required
        </p>
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
