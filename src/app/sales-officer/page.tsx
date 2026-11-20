"use client";

import React, { useState } from "react";
import Image from "next/image";
import { salesOfficers } from "@/data/team";
import { useBooking } from "@/context/BookingContext";
import { Phone, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

// Professional advisory specializations (without individual personal names)
const advisorRoles = [
  {
    role: "Senior Property Consultant",
    department: "Luxury Residential Division",
    specialty: "Luxury Living",
    bio: "Dedicated advisor specializing in premium 1 to 4-bedroom residential apartments and penthouses in Sarbet and Aware.",
  },
  {
    role: "Property Investment Consultant",
    department: "Investment & Capital Growth",
    specialty: "Investment & Financing",
    bio: "Expert real estate financial modeling advisor focusing on capital appreciation, 10% cash settlement discounts, and milestone payment plans.",
  },
  {
    role: "Commercial Real Estate Advisor",
    department: "Commercial & Retail Centers",
    specialty: "Commercial & Retail",
    bio: "Specialist guiding business owners and investors in prime retail shops and commercial floor acquisitions in Gelan Mall and Garment.",
  },
  {
    role: "Diaspora Real Estate Specialist",
    department: "International & Diaspora Services",
    specialty: "Diaspora Services",
    bio: "Assisting overseas Ethiopian diaspora buyers with foreign currency accounts, banking partnerships, and remote Power of Attorney procedures.",
  },
  {
    role: "Senior Sales & Contract Consultant",
    department: "Customer Relations & Legal",
    specialty: "Luxury Living",
    bio: "Guiding prospective homeowners through floor plan selection, customized down payment schedules, and verified title deed documentation.",
  },
  {
    role: "Site Inspection & Handover Specialist",
    department: "Project Verification & Delivery",
    specialty: "Investment & Financing",
    bio: "Coordinating private on-site structural tours and walk-throughs across all active construction sites 6 days a week.",
  },
  {
    role: "Penthouse & Luxury Living Advisor",
    department: "Prime Luxury Portfolio",
    specialty: "Luxury Living",
    bio: "Exclusive advisory for top-floor duplexes and panoramic penthouses in Sarbet City Plus and Blue Point.",
  },
  {
    role: "Commercial Plaza Advisor",
    department: "Commercial Developments",
    specialty: "Commercial & Retail",
    bio: "Focused on high-foot-traffic retail spaces, pharmacy locations, bank branches, and restaurant commercial allocations.",
  },
];

export default function SalesOfficersPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const { openBooking } = useBooking();

  const specialties = [
    "All",
    "Luxury Living",
    "Commercial & Retail",
    "Diaspora Services",
    "Investment & Financing",
  ];

  // Map each sales officer item to an anonymous professional advisory profile
  const advisoryTeam = salesOfficers.slice(0, 16).map((officer, index) => {
    const roleInfo = advisorRoles[index % advisorRoles.length];
    return {
      id: officer.id,
      role: roleInfo.role,
      department: roleInfo.department,
      specialty: roleInfo.specialty,
      bio: roleInfo.bio,
      image: officer.image,
      phone: "0938125777",
    };
  });

  const filtered =
    selectedSpecialty === "All"
      ? advisoryTeam
      : advisoryTeam.filter((adv) => adv.specialty === selectedSpecialty);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Hero Header */}
      <InnerHero
        title="Senior Property Advisors & Sales Consultants"
        subtitle="Connect directly with our dedicated real estate consultants for architectural floor plans, milestone payment schedules, and private on-site inspection tours. Zero third-party broker markups."
        badge="Property Advisory • Direct Developer Support"
        breadcrumbs={[{ label: "Sales & Advisory" }]}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&auto=format&fit=crop&q=80"
        highlights={[
          "Direct Advisor Hotline: 0938125777",
          "One-on-One Investment Guidance",
          "Free Site Inspections Available 6 Days a Week",
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Specialization Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedSpecialty === spec
                  ? "bg-[#84A441] text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-300 shadow-sm"
              }`}
            >
              {spec === "All" ? "All Advisory Specialists" : spec}
            </button>
          ))}
        </div>

        {/* Advisory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((advisor, index) => (
            <div
              key={`${advisor.id}-${index}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={advisor.image}
                  alt={advisor.role}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[#84A441] text-[11px] font-bold shadow flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Official Advisor</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#84A441] block mb-0.5">
                    {advisor.department}
                  </span>
                  <h3 className="text-base font-extrabold text-gray-900 group-hover:text-[#84A441] transition-colors leading-snug">
                    {advisor.role}
                  </h3>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {advisor.bio}
                </p>

                <div className="space-y-1.5 text-xs text-gray-600 mb-4 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#84A441]" />
                    <span>Direct Developer Pricing</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#84A441]" />
                    <span>Free Site Tour Booking</span>
                  </div>
                </div>

                <div className="mt-auto space-y-2 pt-3 border-t border-gray-100">
                  <a
                    href="tel:0938125777"
                    onClick={() => trackCallClick("sales_officer_card")}
                    className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 0938125777</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/251938125777?text=${encodeURIComponent(
                        `Hello Temer Property, I would like to consult with your ${advisor.role} regarding available units and payment terms.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("sales_officer_whatsapp")}
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => openBooking(`Consultation with ${advisor.role}`)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Book Tour</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
