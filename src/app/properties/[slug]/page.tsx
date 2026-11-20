import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import MortgageCalculator from "@/components/MortgageCalculator";
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
  Calendar,
  Hammer,
} from "lucide-react";

export function generateStaticParams() {
  return properties.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return {
      title: "Property Not Found | Temer Property",
    };
  }

  return {
    title: `${property.title} - ${property.price} | Temer Property`,
    description: `${property.title} in ${property.location}. Size: ${property.size}, ${property.bedrooms} beds, ${property.bathrooms} baths. Price: ${property.price} (${property.pricePerSqM}). 15% down payment and flexible installment plans.`,
    openGraph: {
      title: `${property.title} | Temer Property Addis Ababa`,
      description: property.excerpt,
      images: [
        {
          url: property.image,
          width: 1200,
          height: 800,
          alt: property.title,
        },
      ],
    },
  };
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

  const whatsappMessage = encodeURIComponent(
    `Hello Temer Property, I am interested in *${property.title}* (${property.price}, ${property.size}, ${property.location}). Please share the latest floor plan and available unit floors.`
  );
  const whatsappUrl = `https://wa.me/251938125777?text=${whatsappMessage}`;

  // Structured Data (JSON-LD) for Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: property.title,
    image: property.image,
    description: property.excerpt,
    category: property.category,
    offers: {
      "@type": "Offer",
      price: property.priceNumeric,
      priceCurrency: "ETB",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      seller: {
        "@type": "RealEstateAgent",
        name: "Temer Property",
        telephone: "0938125777",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Floor Area",
        value: property.size,
      },
      {
        "@type": "PropertyValue",
        name: "Bedrooms",
        value: property.bedrooms,
      },
      {
        "@type": "PropertyValue",
        name: "Bathrooms",
        value: property.bathrooms,
      },
      {
        "@type": "PropertyValue",
        name: "Price per m²",
        value: property.pricePerSqM,
      },
      {
        "@type": "PropertyValue",
        name: "Expected Delivery",
        value: property.deliveryDate,
      },
    ],
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Google SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            <span>Back to all listings</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Financial Schedule Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-[#84A441] text-white text-xs font-bold px-3 py-1 rounded-full">
                {property.badge || "For Sale"}
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
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
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Prime residential development in {property.area} • Direct title deed transfer
            </p>
          </div>

          {/* Pricing Highlight Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col justify-center min-w-[280px]">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Total Price
              </span>
              <span className="text-xs text-[#84A441] font-bold">
                {property.pricePerSqM}
              </span>
            </div>
            <span className="text-2xl sm:text-3xl font-black text-[#84A441]">
              {property.price}
            </span>

            {/* Terms chips */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-200 text-[11px]">
              <div>
                <span className="text-gray-400 block">Down Payment</span>
                <span className="font-bold text-gray-800">{property.downPayment}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Cash Discount</span>
                <span className="font-bold text-emerald-600">10% Off Total</span>
              </div>
            </div>
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
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80"
                alt="Interior showcase"
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80"
                alt="Architectural view"
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
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

            {/* Construction Progress & Delivery Timeline */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-gray-100 gap-2">
                <div className="flex items-center gap-2">
                  <Hammer className="w-5 h-5 text-[#84A441]" />
                  <h2 className="text-lg font-bold text-gray-900">
                    Construction Update & Milestone Progress
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                  <Calendar className="w-4 h-4 text-[#84A441]" />
                  <span>Target Delivery: {property.deliveryDate}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-bold text-gray-700 mb-2">
                  <span>Current Structural & Finishing Completion</span>
                  <span className="text-[#84A441] font-extrabold">{property.constructionProgress}% Completed</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden p-0.5 border border-gray-200">
                  <div
                    className="bg-gradient-to-r from-[#84A441] to-[#6e8a32] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${property.constructionProgress}%` }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-gray-100 text-center text-xs">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Foundation</span>
                    <span className="font-bold text-emerald-600">✓ 100% Complete</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Structure</span>
                    <span className="font-bold text-emerald-600">✓ 100% Complete</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Brickwork & M&E</span>
                    <span className="font-bold text-emerald-600">✓ 90% Complete</span>
                  </div>
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Interior Finishing</span>
                    <span className="font-bold text-amber-600">In Progress ({property.constructionProgress}%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                Detailed Property Description
              </h2>
              <div className="prose text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{property.excerpt}</p>
                <p>
                  Temer Property presents an extraordinary residential opportunity situated in {property.location}.
                  Each apartment is thoughtfully engineered with expansive living rooms, floor-to-ceiling panoramic windows,
                  modern open kitchens, and dedicated utility storage spaces.
                </p>
                <p>
                  Built to the highest seismic and structural standards, the development provides comprehensive amenities
                  including multiple high-speed elevators, underground reserved parking, a dedicated transformer, and large-capacity
                  backup water reservoirs to guarantee seamless comfort.
                </p>
                <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 text-emerald-900 text-xs sm:text-sm">
                  <strong>Ownership Security:</strong> All purchasers receive 100% legal title deeds (ካርታ / Carta) directly transferred upon handover. Zero registration fee or gatekeeping required to review full documentation.
                </div>
              </div>
            </div>

            {/* Interactive Mortgage & Installment Calculator */}
            <MortgageCalculator
              propertyTitle={property.title}
              defaultPriceETB={property.priceNumeric}
            />

            {/* Features & Amenities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                Features & Amenities Included
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "24/7 Monitored CCTV & Security Patrol",
                  "Dual High-Speed Passenger Elevators",
                  "Automatic Generator for 100% Power Backup",
                  "Underground (100,000L) & Overhead Water Reservoirs",
                  "Dedicated Secure Basement Parking Spaces",
                  "Spacious Panoramic Balconies with Scenic Views",
                  "Contemporary Modular Fitted Kitchen",
                  "High-Speed Fiber Internet Connectivity",
                  "Modern Waste Management & Chute System",
                  "Fire Alarm & Emergency Suppression System",
                  "100% Legal Ownership Title Deed Guaranteed",
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

          {/* Right Sidebar: Contact & Direct Actions (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Property Consultant"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Temer Property Sales</h3>
                  <span className="text-xs text-[#84A441] font-semibold">Direct Advisor</span>
                </div>
              </div>

              {/* Action Buttons: Direct Call & WhatsApp */}
              <div className="py-4 space-y-2.5">
                {/* Clickable Call */}
                <a
                  href="tel:0938125777"
                  className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all text-sm"
                >
                  <Phone className="w-4 h-4 text-[#84A441]" />
                  <span>Call: 0938125777</span>
                </a>

                {/* Direct WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all text-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Fast Optional Inquiry Form */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Optional Inquiry Form
                  </h4>
                  <span className="text-[10px] text-gray-400">100% Free Access</span>
                </div>
                <form
                  action={async () => {
                    "use server";
                  }}
                  className="space-y-2.5"
                >
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#84A441]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your Phone Number"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#84A441]"
                  />
                  <textarea
                    rows={2}
                    name="message"
                    defaultValue={`I am interested in ${property.title}. Please provide more details.`}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#84A441]"
                  ></textarea>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Send Inquiry to Personal Advisor</span>
                  </a>
                </form>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#84A441]" />
                <span>Verified Listing • Temer Property Official</span>
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
