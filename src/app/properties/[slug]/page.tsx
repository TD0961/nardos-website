import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Building,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

export function generateStaticParams() {
  return properties.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const related = properties
    .filter((p) => p.id !== property.id && (p.area === property.area || p.category === property.category))
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Breadcrumb & Navigation */}
      <div className="bg-white border-b border-gray-200 py-3.5 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#84A441]">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties-standard-list" className="hover:text-[#84A441]">
              Properties
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">
              {property.title}
            </span>
          </div>

          <Link
            href="/properties-standard-list"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#84A441] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to listings</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#84A441] text-white text-xs font-bold px-3 py-1 rounded-full">
                {property.badge || "Active"}
              </span>
              <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                {property.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#84A441]" />
                {property.location}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {property.title}
            </h1>
          </div>

          <div className="md:text-right">
            <span className="block text-xs uppercase tracking-wider text-gray-400 font-semibold">
              Investment Pricing
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#84A441]">
              {property.price}
            </span>
            <span className="block text-xs text-gray-500">1% Monthly Payment Plan Available</span>
          </div>
        </div>

        {/* Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-10">
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={property.image}
              alt={property.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="https://temerproperties.com/wp-content/uploads/2026/05/twobedrooms.jpg"
                alt="Interior showcase"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="https://temerproperties.com/wp-content/uploads/2026/05/threebeds.jpg"
                alt="Architectural view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Stats Bar */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 border-r border-gray-100 last:border-0">
                <Bed className="w-5 h-5 text-[#84A441] mx-auto mb-1" />
                <span className="block text-lg font-bold text-gray-900">{property.bedrooms}</span>
                <span className="text-xs text-gray-400 uppercase font-semibold">Bedrooms</span>
              </div>
              <div className="p-3 border-r border-gray-100 last:border-0">
                <Bath className="w-5 h-5 text-[#84A441] mx-auto mb-1" />
                <span className="block text-lg font-bold text-gray-900">{property.bathrooms}</span>
                <span className="text-xs text-gray-400 uppercase font-semibold">Bathrooms</span>
              </div>
              <div className="p-3 border-r border-gray-100 last:border-0">
                <Maximize2 className="w-5 h-5 text-[#84A441] mx-auto mb-1" />
                <span className="block text-lg font-bold text-gray-900">{property.size}</span>
                <span className="text-xs text-gray-400 uppercase font-semibold">Gross Area</span>
              </div>
              <div className="p-3">
                <Building className="w-5 h-5 text-[#84A441] mx-auto mb-1" />
                <span className="block text-lg font-bold text-gray-900">{property.category}</span>
                <span className="text-xs text-gray-400 uppercase font-semibold">Property Type</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                Property Description
              </h2>
              <div className="prose text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{property.excerpt}</p>
                <p>
                  Temer Properties presents an extraordinary residential opportunity situated in {property.location}.
                  Each apartment is thoughtfully engineered with expansive living rooms, floor-to-ceiling panoramic windows,
                  modern open kitchens, and dedicated utility storage spaces.
                </p>
                <p>
                  Built to the highest seismic and structural standards, the development provides comprehensive amenities
                  including multiple high-speed elevators, underground reserved parking, a dedicated transformer, and large-capacity
                  backup water reservoirs to guarantee seamless comfort.
                </p>
              </div>
            </div>

            {/* Features & Amenities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                Features & Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "24/7 Monitored CCTV & Security",
                  "Dual High-Speed Passenger Elevators",
                  "Automatic Generator for 100% Power Backup",
                  "Underground & Overhead Water Reservoir",
                  "Dedicated Secure Parking Spaces",
                  "Spacious Panoramic Balconies",
                  "Contemporary Modular Kitchen",
                  "High-Speed Fiber Internet Ready",
                  "Waste Management & Chute System",
                  "Fire Alarm & Emergency Suppression System",
                  "100% Legal Ownership Title Deed Provided",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84A441] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Preview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Location & Neighborhood</h2>
              <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#84A441]" />
                {property.location}
              </p>
              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.660144955776!2d38.74205837591632!3d8.995079289455325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b854e4df5b9e5%3A0xc3cf0205e44ba2eb!2sSarbet%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Contact & Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Agent / Contact Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src="https://temerproperties.com/wp-content/uploads/2025/08/tedy.jpg"
                    alt="Sales Consultant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Temer Sales Office</h3>
                  <span className="text-xs text-[#84A441] font-semibold">Authorized Representative</span>
                </div>
              </div>

              {/* Direct call action */}
              <div className="py-4 space-y-2.5">
                <a
                  href="tel:0938125777"
                  className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call 0938125777</span>
                </a>
              </div>

              {/* Fast Inquiry Form */}
              <form className="space-y-3 pt-3 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Request Information / Site Visit
                </h4>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#84A441]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#84A441]"
                />
                <textarea
                  rows={3}
                  placeholder={`I am interested in ${property.title}. Please provide more details.`}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#84A441]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-black text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Send Consultation Request
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#84A441]" />
                <span>Verified Listing • Temer Official</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Similar Properties You May Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

