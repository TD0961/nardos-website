import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import {
  MapPin,
  Building,
  Calendar,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ArrowLeft,
  Hammer,
  Video,
  Layers,
  Car,
  Zap,
  Droplets,
  ArrowRight,
  Maximize2,
} from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Temer Property",
    };
  }

  return {
    title: `${project.title} - ${project.status} | Temer Property Addis Ababa`,
    description: `${project.title}: ${project.description} Located in ${project.location}. Delivery: ${project.delivery}. ${project.units}.`,
    openGraph: {
      title: `${project.title} | Temer Property Developments`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Temer Property, I am interested in the *${project.title}* development (${project.location}, ${project.units}). Please share the floor plan brochure and site tour schedule.`
  );
  const whatsappUrl = `https://wa.me/251938125777?text=${whatsappMessage}`;

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3.5 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#84A441]">
              Home
            </Link>
            <span>/</span>
            <Link href="/construction-update" className="hover:text-[#84A441]">
              Projects
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">
              {project.title}
            </span>
          </div>

          <Link
            href="/construction-update"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#84A441] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm ${
                  project.status === "Delivered"
                    ? "bg-emerald-600"
                    : project.status === "In Progress"
                    ? "bg-[#84A441]"
                    : "bg-amber-600"
                }`}
              >
                {project.status}
              </span>
              <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                {project.type}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#84A441]" />
                {project.location}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Quick Progress Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 min-w-[280px] flex flex-col justify-center">
            <div className="flex justify-between items-baseline mb-2 text-xs font-bold text-gray-700">
              <span>Overall Completion</span>
              <span className="text-[#84A441] text-base">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden p-0.5 mb-3">
              <div
                className="bg-gradient-to-r from-[#84A441] to-[#6e8a32] h-full rounded-full transition-all duration-1000"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-500 pt-1 border-t border-gray-200">
              <span className="flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#84A441]" />
                Target Delivery
              </span>
              <strong className="text-gray-900">{project.delivery}</strong>
            </div>
          </div>
        </div>

        {/* Media & Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-5">
            {project.gallery.slice(1, 3).map((imgUrl, i) => (
              <div
                key={i}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-gray-100"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} view ${i + 2}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Video Walkthrough Section (if available) */}
        {project.videoUrl && (
          <div className="bg-[#181d24] text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider">
                <Video className="w-4 h-4" />
                <span>Live Construction Video Update</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Watch On-Site Video Walkthrough
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
                Experience real on-site progress, architectural scale, and concrete finishing verified on camera.
              </p>
            </div>

            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold py-3 px-6 rounded-2xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg whitespace-nowrap"
            >
              <Video className="w-4 h-4" />
              <span>Watch on YouTube ↗</span>
            </a>
          </div>
        )}

        {/* Main Details & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Project Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                Project Overview & Vision
              </h2>
              <div className="prose text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{project.fullOverview}</p>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-900 text-xs sm:text-sm">
                  <strong>Handover Guarantee:</strong> Every unit in {project.title} is backed by 100% legal title deeds (ካርታ / Carta), construction insurance, and structural compliance certified by the Addis Ababa City Construction Authority.
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                Key Technical Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Layers className="w-5 h-5 text-[#84A441]" />
                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase font-bold">Building Height</span>
                    <strong className="text-gray-900">{project.specs.floors}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Building className="w-5 h-5 text-[#84A441]" />
                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase font-bold">Total Capacity</span>
                    <strong className="text-gray-900">{project.specs.totalUnits}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Car className="w-5 h-5 text-[#84A441]" />
                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase font-bold">Parking Capacity</span>
                    <strong className="text-gray-900">{project.specs.parkingSpaces}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Building className="w-5 h-5 text-[#84A441]" />
                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase font-bold">Vertical Transit</span>
                    <strong className="text-gray-900">{project.specs.elevators}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Zap className="w-5 h-5 text-[#84A441]" />
                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase font-bold">Standby Power</span>
                    <strong className="text-gray-900">{project.specs.generator}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Droplets className="w-5 h-5 text-[#84A441]" />
                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase font-bold">Water Storage</span>
                    <strong className="text-gray-900">{project.specs.waterReservoir}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction Milestones */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-6 border-b border-gray-100">
                <Hammer className="w-5 h-5 text-[#84A441]" />
                <h2 className="text-xl font-bold text-gray-900">
                  Construction Milestone Breakdown
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Deep Foundation & Retaining Piles", val: project.milestones.foundation },
                  { label: "Reinforced Concrete Structural Framing", val: project.milestones.structure },
                  { label: "Blockwork, Brick Masonry & Partitions", val: project.milestones.masonry },
                  { label: "Mechanical, Electrical & Plumbing (MEP)", val: project.milestones.mep },
                  { label: "Interior Finishing, Glazing & Elevator Handover", val: project.milestones.finishing },
                ].map((m, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                      <span>{m.label}</span>
                      <span className={m.val === 100 ? "text-emerald-600" : "text-[#84A441]"}>
                        {m.val}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          m.val === 100 ? "bg-emerald-600" : "bg-[#84A441]"
                        }`}
                        style={{ width: `${m.val}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Units in this Project */}
            {project.availableUnits && project.availableUnits.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                  Available Unit Types & Floor Plans
                </h2>
                <div className="space-y-3">
                  {project.availableUnits.map((u, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{u.type}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Maximize2 className="w-3.5 h-3.5 text-[#84A441]" />
                            {u.size}
                          </span>
                          {u.bedrooms > 0 && <span>• {u.bedrooms} Beds</span>}
                          {u.bathrooms > 0 && <span>• {u.bathrooms} Baths</span>}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-[#84A441]">{u.price}</span>
                        <a
                          href={`https://wa.me/251938125777?text=${encodeURIComponent(
                            `Hello Temer Property, I am inquiring about the ${u.type} (${u.size}, ${u.price}) at ${project.title}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
                        >
                          Inquire
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                Building Amenities & Services Included
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                {project.amenities.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84A441] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Preview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Location & Neighborhood</h2>
              <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#84A441]" />
                {project.location}
              </p>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200">
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

          {/* Right Sidebar: Contact & Site Tour (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm sticky top-28">
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
                  <h3 className="text-sm font-bold text-gray-900">Temer Project Desk</h3>
                  <span className="text-xs text-[#84A441] font-semibold">Authorized Representative</span>
                </div>
              </div>

              {/* Action Buttons: Direct Call & WhatsApp */}
              <div className="py-4 space-y-2.5">
                {/* Clickable Call */}
                <a
                  href="tel:0938125777"
                  className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-all text-sm"
                >
                  <Phone className="w-4 h-4 text-[#84A441]" />
                  <span>Call 0938125777</span>
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

              {/* Request Tour Form */}
              <div className="pt-3 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Request Free Site Tour
                </h4>
                <div className="space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Book Tour with Advisor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#84A441]" />
                <span>Verified Site • Temer Property Official</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Explore Other Temer Property Developments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-[#84A441] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        {p.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#84A441] transition-colors mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                      {p.description}
                    </p>
                    <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#84A441]">
                        {p.progress}% Complete
                      </span>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="text-xs font-bold text-[#84A441] hover:underline flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

