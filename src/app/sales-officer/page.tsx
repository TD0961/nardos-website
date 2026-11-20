"use client";

import React, { useState } from "react";
import Image from "next/image";
import { salesOfficers } from "@/data/team";
import { useBooking } from "@/context/BookingContext";
import { Phone, Search, MessageSquare, ShieldCheck } from "lucide-react";
import InnerHero from "@/components/InnerHero";

export default function SalesOfficersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { openBooking } = useBooking();

  const filtered = salesOfficers.filter((officer) =>
    officer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Hero Header */}
      <InnerHero
        title="Sales Consultants & Property Advisors"
        subtitle="Connect directly with our dedicated real estate advisors for detailed unit layouts, pricing options, and private site tours. Zero third-party broker markups."
        badge="Property Advisory • Direct Developer Support"
        breadcrumbs={[{ label: "Sales & Advisory" }]}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&auto=format&fit=crop&q=80"
        highlights={[
          "Direct Advisor Hotline: 0938125777",
          "One-on-One Investment Guidance",
          "Free Site Inspections Available",
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search sales consultant by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#84A441] shadow-sm"
            />
          </div>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((officer) => (
            <div
              key={officer.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={officer.image}
                  alt={officer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-[#84A441] shadow">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#84A441] transition-colors mb-0.5">
                  {officer.name}
                </h3>
                <span className="text-xs font-semibold text-[#84A441] mb-4">
                  {officer.role}
                </span>

                <div className="mt-auto space-y-2 pt-3 border-t border-gray-100">
                  <a
                    href="tel:0938125777"
                    className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 0938125777</span>
                  </a>

                  <button
                    onClick={() => openBooking(`Consultation with ${officer.name}`)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

