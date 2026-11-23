"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/properties";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Bed, Bath, Maximize2, ArrowUpRight, Calendar, Percent } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function PropertyCard({ property }: { property: Property }) {
  const { openBooking } = useBooking();
  const { t } = useLanguage();

  const whatsappMsg = encodeURIComponent(
    `Hello Temer Property, I am interested in *${property.title}* (${property.price}, ${property.size}). Please share the floor plan and payment plan details.`
  );
  const whatsappUrl = `https://wa.me/251938125777?text=${whatsappMsg}`;

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="bg-[#84A441] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            {property.badge || "For Sale"}
          </span>
          <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-1 rounded-full">
            {property.category}
          </span>
        </div>

        {/* Down payment tag on image top right */}
        {property.downPayment && (
          <div className="absolute top-3 right-3 bg-amber-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <Percent className="w-2.5 h-2.5" />
            <span>15% {t("downPayment")}</span>
          </div>
        )}

        {/* Location pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
          <MapPin className="w-3.5 h-3.5 text-[#84A441]" />
          <span>{property.location}</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/properties/${property.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#84A441] transition-colors line-clamp-1 mb-1">
            {property.title}
          </h3>
        </Link>

        {/* Price & Price/m² header */}
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-base font-extrabold text-[#84A441]">
              {property.price}
            </span>
            {property.pricePerSqM && (
              <span className="text-[11px] text-gray-400 block font-medium">
                {property.pricePerSqM}
              </span>
            )}
          </div>
          {property.deliveryDate && (
            <span className="text-[11px] text-gray-500 flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
              <Calendar className="w-3 h-3 text-[#84A441]" />
              <span>{property.deliveryDate}</span>
            </span>
          )}
        </div>

        <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
          {property.excerpt}
        </p>

        {/* Features row */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 text-xs text-gray-600 mb-4">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-[#84A441]" />
            <span>{property.bedrooms} {t("bedrooms")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-[#84A441]" />
            <span>{property.bathrooms} {t("bathrooms")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-4 h-4 text-[#84A441]" />
            <span>{property.size}</span>
          </div>
        </div>

        {/* Action buttons: WhatsApp direct chat + Inquire + View Details */}
        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("property_card", property.title)}
            className="flex-1 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
            aria-label={`Chat on WhatsApp about ${property.title}`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>{t("whatsappChat")}</span>
          </a>

          <button
            onClick={() => openBooking(property.title)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
          >
            {t("inquireNow")}
          </button>

          <Link
            href={`/properties/${property.slug}`}
            className="bg-[#84A441] hover:bg-[#6e8a32] text-white p-2 rounded-xl transition-colors flex items-center justify-center shadow-sm"
            aria-label={`View details of ${property.title}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
