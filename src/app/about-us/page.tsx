"use client";

import React, { useState } from "react";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import { useBooking } from "@/context/BookingContext";
import {
  Target,
  Eye,
  HeartHandshake,
  ChevronDown,
  Phone,
} from "lucide-react";

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openBooking } = useBooking();

  const faqs = [
    {
      q: "Where can I find your real estates in Addis Ababa?",
      a: "We offer prime real estate in Ethiopia, with properties in top Addis Ababa areas like Piassa, Adwa 001, Sumale Tera, Sarbet, Ayat, Garment, and Lycee. Each site is chosen for its accessibility, value, and growth potential—ideal for apartments and investments.",
    },
    {
      q: "Do you sell both apartments and commercial shops in Ethiopia?",
      a: "Yes, we offer both residential apartments and commercial real estate in Ethiopia—choose what fits your needs best.",
    },
    {
      q: "Can I visit your real estates site in Addis Ababa before buying?",
      a: "Yes, absolutely. We encourage all clients to schedule a site visit to inspect the construction quality and neighborhood before purchasing property in Ethiopia.",
    },
    {
      q: "Where is your real estate office in Addis Ababa located?",
      a: "Our office is located at Woldemaryam Building, Sarbet to Kera Road, Addis Ababa — a prime area for real estate in Ethiopia.",
    },
    {
      q: "Are your Apartments ready for move-in?",
      a: "Some of our real estate projects in Ethiopia are ready for occupancy, while others are under construction with clear handover timelines. We provide transparent construction updates.",
    },
    {
      q: "Do your Apartment listings come with ownership documents?",
      a: "Yes, all our real estate properties in Ethiopia come with legal documentation. After full payment, you’ll receive official ownership and property transfer papers.",
    },
    {
      q: "Can I get updates after I purchase your real estate?",
      a: "Yes. We provide regular construction updates, site photos, and progress reports to keep real estate buyers in Ethiopia fully informed.",
    },
    {
      q: "What are your working hours for real estate visits?",
      a: "We’re open Monday–Saturday 8:30 AM–5:30 PM, and closed on Sundays and public holidays.",
    },
  ];

  const deliveredProjects = [
    { name: "AGT-TRADING", location: "Atena Tera", units: "45 Units", type: "Commercial Center" },
    { name: "Maw Complex", location: "Ayat Site", units: "60 Units", type: "Residential Complex" },
    { name: "2MA Apartments", location: "Lebu", units: "75 Units", type: "Modern Apartments" },
    { name: "SAHIL Project", location: "Lebu", units: "80 Units", type: "Luxury Living" },
    { name: "Mohammed.S Site", location: "Lebu", units: "90 Units", type: "Mixed Use" },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#181d24] text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#84A441] text-xs sm:text-sm font-bold uppercase tracking-widest inline-block mb-2">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            About Temer Properties
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Transforming the Ethiopian real estate landscape with architectural precision, structural reliability, and customer-first integrity since 2010 EC.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
            <Image
              src="https://temerproperties.com/wp-content/uploads/2026/05/threebeds.jpg"
              alt="Temer Properties Building"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-4 rounded-xl text-white">
              <span className="text-xs font-bold text-[#84A441] uppercase tracking-wider block">
                Since 2010 EC
              </span>
              <p className="text-sm font-semibold">10+ Completed Projects • 350+ Homes Handed Over</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-[#84A441] text-xs font-bold uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
              Building Trust & Delivering Dream Homes Across Addis Ababa
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Temer Properties, also known as Temer Real Estate, was founded in 2010 EC by two visionary individuals with a mission to transform the real estate landscape in Ethiopia. With a focus on delivering state-of-the-art real estate in Ethiopia, especially in Addis Ababa, we have successfully completed over 10 major projects, providing more than 350 quality apartment units and modern homes to our valued customers.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Currently, we are actively developing new apartments and commercial shops in Ethiopia, offering clients access to affordable housing and prime business spaces in top locations. Driven by our ambition to be the best real estate company in Ethiopia, Temer Properties is recognized for creativity, reliability, and a commitment to quality.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openBooking()}
                className="bg-[#84A441] hover:bg-[#6e8a32] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all"
              >
                Schedule Site Visit
              </button>
              <a
                href="tel:0938125777"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:border-[#84A441] hover:text-[#84A441] px-6 py-3 rounded-full font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call 0938125777</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To elevate the living experience in Addis Ababa by connecting residents with homes that embody the essence of this vibrant community. From historic neighborhoods to emerging developments, we are committed to showcasing the unique charm and opportunities that Addis Ababa has to offer.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To redefine the method in which real estate is delivered and experienced in Ethiopia. We aim to be the benchmark developer recognized for architectural innovation, transparency, prompt execution, and long-term customer fulfillment.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              United by an appreciation for design and architecture, our team’s personalized approach to real estate advisory is executed with the same meticulous consideration as the properties we represent. We foster relationships built on trust, integrity, and unwavering excellence.
            </p>
          </div>
        </div>

        {/* Stats */}
        <StatsCounter />

        {/* Delivered Projects Showcase */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#84A441] text-xs font-bold uppercase tracking-wider">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Delivered Projects
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              A sample of past projects successfully delivered to our esteemed homeowners and retail investors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveredProjects.map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-[#84A441] transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#84A441] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">{p.name}</h4>
                  <p className="text-xs text-gray-500">{p.location} • {p.type}</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-[#84A441] bg-[#84A441]/10 px-2.5 py-0.5 rounded-full">
                    {p.units} Delivered
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#84A441] text-xs font-bold uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Everything you need to know about purchasing property, titles, site visits, and payment schedules with Temer Properties.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 bg-white hover:bg-gray-50 font-semibold text-sm sm:text-base text-gray-900"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#84A441] flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-sm text-gray-600 bg-white leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

