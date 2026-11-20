import React from "react";
import Image from "next/image";
import Link from "next/link";
import { leadership, management } from "@/data/team";
import { Phone } from "lucide-react";
import InnerHero from "@/components/InnerHero";

export default function OurTeamPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Hero Header */}
      <InnerHero
        title="Executive Leadership & Management"
        subtitle="Meet the experienced visionary leaders, engineers, and executives guiding Temer Property toward architectural excellence and reliable handover delivery."
        badge="Leadership & Vision • Company Direction"
        breadcrumbs={[{ label: "Our Team" }]}
        bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&auto=format&fit=crop&q=80"
        highlights={[
          "Executive Board & Founders",
          "Decades of Collective Real Estate Mastery",
          "Dedicated Construction & Legal Departments",
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Executive Founders Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#84A441] text-xs font-bold uppercase tracking-wider">
              Executive Board
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Founders & Executive Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((exec) => (
              <div
                key={exec.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group text-center"
              >
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-semibold text-[#84A441] bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                      {exec.role}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                  <p className="text-xs text-gray-500 mb-4">{exec.department}</p>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#84A441]" />
                      {exec.phone}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#84A441] text-xs font-bold uppercase tracking-wider">
              Operational Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Top Management Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((mgr) => (
              <div
                key={mgr.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/4.5] bg-gray-100 overflow-hidden">
                  <Image
                    src={mgr.image}
                    alt={mgr.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#84A441] transition-colors">
                    {mgr.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#84A441] mt-0.5 mb-2">
                    {mgr.role}
                  </span>
                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span>{mgr.department}</span>
                    <a href="tel:0938125777" className="hover:text-[#84A441]">
                      0938125777
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Sales Officers & Job Portal */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Looking to Connect with Our Sales Officers?
            </h3>
            <p className="text-sm text-gray-500">
              Our professional property consultants are ready to assist you in selecting your next home.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/sales-officer"
              className="bg-[#84A441] hover:bg-[#6e8a32] text-white px-6 py-3 rounded-full font-bold text-sm shadow transition-all whitespace-nowrap"
            >
              Meet Sales Officers
            </Link>
            <Link
              href="/job-portal"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold text-sm transition-all whitespace-nowrap"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

