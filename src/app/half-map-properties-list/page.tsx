"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import { useBooking } from "@/context/BookingContext";
import { MapPin, Bed, Bath, Maximize2, Compass } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function HalfMapPropertiesListPage() {
  const [selectedArea, setSelectedArea] = useState("All");
  const [activePropertyId, setActivePropertyId] = useState<number>(properties[0]?.id || 1);
  const { openBooking } = useBooking();

  const filtered = properties.filter((p) => {
    if (
      selectedArea !== "All" &&
      p.area !== selectedArea &&
      !p.location.toLowerCase().includes(selectedArea.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const activeProperty = properties.find((p) => p.id === activePropertyId) || properties[0];

  const areas = ["All", "Sarbet", "Aware", "Ayat", "Gelan", "Garment", "Piyassa"];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen flex flex-col">
      {/* Top filter bar */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-8 py-3.5 z-20 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#84A441]" />
          <h1 className="text-lg font-bold text-gray-900">Temer Property Map View</h1>
          <span className="text-xs bg-[#84A441]/10 text-[#84A441] font-bold px-2 py-0.5 rounded-full ml-2">
            {filtered.length} Listings
          </span>
          <span className="hidden sm:inline-block text-xs text-gray-400">
            • 100% Free Public Access
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {areas.map((a) => (
            <button
              key={a}
              onClick={() => setSelectedArea(a)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedArea === a
                  ? "bg-[#84A441] text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* Split screen content: Listings on Left, Map representation on Right */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-[calc(100vh-140px)]">
        {/* Left Column: Property List (7 cols) */}
        <div className="lg:col-span-7 xl:col-span-7 p-4 sm:p-6 overflow-y-auto max-h-[calc(100vh-140px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filtered.map((property) => {
              const waLink = `https://wa.me/251938125777?text=${encodeURIComponent(
                `Hello Temer Property, I am interested in ${property.title} (${property.price}).`
              )}`;

              return (
                <div
                  key={property.id}
                  onMouseEnter={() => setActivePropertyId(property.id)}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col ${
                    activePropertyId === property.id
                      ? "border-[#84A441] shadow-xl ring-2 ring-[#84A441]/20"
                      : "border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 flex gap-1">
                      <span className="bg-[#84A441] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        {property.badge || "Active"}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[11px] text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      <MapPin className="w-3 h-3 text-[#84A441]" />
                      <span>{property.location}</span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <Link href={`/properties/${property.slug}`}>
                      <h3 className="text-sm font-bold text-gray-900 hover:text-[#84A441] line-clamp-1 mb-1">
                        {property.title}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-3 text-xs text-gray-500 my-2">
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-[#84A441]" />
                        {property.bedrooms} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5 text-[#84A441]" />
                        {property.bathrooms} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[#84A441]" />
                        {property.size}
                      </span>
                    </div>

                    <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-[#84A441] block">
                          {property.price}
                        </span>
                        <span className="text-[10px] text-gray-400 block font-medium">
                          {property.pricePerSqM}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick("half_map", property.title)}
                          className="text-[11px] bg-[#25D366] text-white px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-1"
                        >
                          <span>WA</span>
                        </a>
                        <button
                          onClick={() => openBooking(property.title)}
                          className="text-[11px] bg-gray-100 text-gray-800 px-2.5 py-1.5 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                        >
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Map Showcase (5 cols) */}
        <div className="lg:col-span-5 xl:col-span-5 relative bg-gray-200 border-l border-gray-300 min-h-[400px] lg:min-h-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.660144955776!2d38.74205837591632!3d8.995079289455325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b854e4df5b9e5%3A0xc3cf0205e44ba2eb!2sSarbet%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[500px]"
          ></iframe>

          {/* Floating Selected Property Card Overlay */}
          {activeProperty && (
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-100 z-10 flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src={activeProperty.image}
                  alt={activeProperty.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-[#84A441] uppercase tracking-wider">
                  {activeProperty.category} • {activeProperty.area}
                </span>
                <h4 className="text-sm font-bold text-gray-900 truncate">
                  {activeProperty.title}
                </h4>
                <p className="text-xs text-gray-500 truncate flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#84A441]" />
                  {activeProperty.location}
                </p>
                <div className="flex items-center gap-3 text-xs font-semibold text-gray-700 mt-1">
                  <span className="text-[#84A441] font-bold">{activeProperty.price}</span>
                  <span>•</span>
                  <span>{activeProperty.size}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-shrink-0">
                <Link
                  href={`/properties/${activeProperty.slug}`}
                  className="bg-[#84A441] hover:bg-[#6e8a32] text-white text-xs font-bold px-3 py-1.5 rounded-lg text-center transition-colors"
                >
                  View Details
                </Link>
                <button
                  onClick={() => openBooking(activeProperty.title)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                >
                  Book Visit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
