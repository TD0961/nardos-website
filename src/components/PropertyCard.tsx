"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/properties";
import { useBooking } from "@/context/BookingContext";
import { MapPin, Bed, Bath, Maximize2, Phone, ArrowUpRight } from "lucide-react";

export default function PropertyCard({ property }: { property: Property }) {
  const { openBooking } = useBooking();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="bg-[#84A441] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {property.badge || "For Sale"}
          </span>
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {property.category}
          </span>
        </div>

        {/* Location pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
          <MapPin className="w-3.5 h-3.5 text-[#84A441]" />
          <span>{property.location}</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/properties/${property.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#84A441] transition-colors line-clamp-1 mb-2">
            {property.title}
          </h3>
        </Link>

        <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
          {property.excerpt}
        </p>

        {/* Features row */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 text-xs text-gray-600 mb-4">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-[#84A441]" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-[#84A441]" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-4 h-4 text-[#84A441]" />
            <span>{property.size}</span>
          </div>
        </div>

        {/* Bottom actions & price */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
              Price
            </span>
            <span className="text-sm font-bold text-[#84A441]">
              {property.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openBooking(property.title)}
              className="bg-gray-100 hover:bg-[#84A441] text-gray-700 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>Inquire</span>
            </button>

            <Link
              href={`/properties/${property.slug}`}
              className="bg-[#84A441] hover:bg-[#6e8a32] text-white p-2 rounded-lg transition-colors flex items-center justify-center"
              aria-label={`View details of ${property.title}`}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

