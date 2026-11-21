"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import {
  Phone,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  Send,
  Building,
  Bed,
  Bath,
  ChevronRight,
  Home,
} from "lucide-react";
import { trackInquirySubmit, trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scheduleShowing, setScheduleShowing] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleHour, setScheduleHour] = useState("09:00");
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const latestListings = properties.slice(0, 3);

  const hoursList = [
    "07:00", "07:15", "07:30", "07:45",
    "08:00", "08:15", "08:30", "08:45",
    "09:00", "09:15", "09:30", "09:45",
    "10:00", "10:15", "10:30", "10:45",
    "11:00", "11:15", "11:30", "11:45",
    "12:00", "12:15", "12:30", "12:45",
    "13:00", "13:15", "13:30", "13:45",
    "14:00", "14:15", "14:30", "14:45",
    "15:00", "15:15", "15:30", "15:45",
    "16:00", "16:15", "16:30", "16:45",
    "17:00", "17:15", "17:30", "17:45",
    "18:00", "18:15", "18:30", "18:45",
    "19:00", "19:15", "19:30", "19:45",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const messageDetails = `${formData.comment}${
      scheduleShowing
        ? `\n\n[Requested Tour Schedule: Date ${scheduleDate || "Flexible"}, Time: ${scheduleHour}]`
        : ""
    }`;

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          property: scheduleShowing
            ? `Site Tour Booking (${scheduleDate} at ${scheduleHour})`
            : "General Contact Inquiry",
          message: messageDetails,
        }),
      });

      const json = await res.json();
      if (json.whatsappUrl) {
        setWhatsappRedirectUrl(json.whatsappUrl);
      }
      trackInquirySubmit("ContactPage");
      setSubmitted(true);
    } catch {
      const text = encodeURIComponent(
        `*New Message - Temer Property*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n${
          scheduleShowing ? `Schedule Tour: ${scheduleDate} at ${scheduleHour}\n` : ""
        }Message: ${formData.comment}`
      );
      setWhatsappRedirectUrl(`https://wa.me/251938125777?text=${text}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen pt-24 pb-20">
      {/* Top Breadcrumb Bar matching temerproperties.com */}
      <div className="bg-white border-b border-gray-200 py-3.5 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-[#84A441] flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-semibold">Contact Us</span>
          </div>

          <a
            href="tel:0938125777"
            onClick={() => trackCallClick("contact_topbar")}
            className="hidden sm:inline-flex items-center gap-1.5 font-bold text-[#84A441] hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Hotline: 0938125777</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Company Info, Hotline Banner, Original Text & Form (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Company Header Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h1 className="text-2xl sm:text-3xl font-black text-[#2d3e1e]">
                Temer Properties
              </h1>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-[#84A441] flex-shrink-0" />
                <span>Sarbet to Kera Road, Woldemaryam Building, Addis Ababa, Ethiopia</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-100 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-medium">Mobile:</span>
                  <a
                    href="tel:0938125777"
                    onClick={() => trackCallClick("contact_company_mobile")}
                    className="font-bold text-[#84A441] hover:underline"
                  >
                    0938125777
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-medium">Email:</span>
                  <a
                    href="mailto:info@temerproperties.com"
                    className="font-semibold text-gray-700 hover:text-[#84A441]"
                  >
                    info@temerproperties.com
                  </a>
                </div>
              </div>

              {/* Prominent Green Hotline Banner matching temerproperties.com */}
              <div className="pt-2">
                <a
                  href="tel:0938125777"
                  onClick={() => trackCallClick("contact_green_hotline")}
                  className="bg-[#84A441] hover:bg-[#739134] text-white p-4 sm:p-5 text-center rounded-xl font-black text-lg sm:text-xl tracking-wide flex items-center justify-center gap-3 shadow-md transition-all active:scale-98"
                >
                  <Phone className="w-6 h-6 animate-pulse" />
                  <span>HOTLINE – 0938125777</span>
                </a>
              </div>
            </div>

            {/* 2. Original Descriptive Text Block from temerproperties.com */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm leading-relaxed text-gray-700 text-sm sm:text-base space-y-4">
              <p>
                Temer Real Estate, located on Sarbet to Kera Road, Woldemaryam Building, is your trusted partner in the real estate market in Addis Ababa, Ethiopia. We specialize in offering high-quality{" "}
                <strong className="text-gray-900 font-bold">apartments for sale in Addis Ababa</strong>,{" "}
                <strong className="text-gray-900 font-bold">houses for sale</strong>, and{" "}
                <strong className="text-gray-900 font-bold">commercial spaces in Addis Ababa</strong>
                —all delivered with a focus on quality and timeliness.
              </p>
              <p>
                Whether you are searching for your next home or investing in{" "}
                <strong className="text-gray-900 font-bold">real estate in Ethiopia</strong>, our experienced team is here to support you. From finding the perfect house for sale to exploring premium commercial space in Addis Ababa, we offer a seamless, efficient experience backed by deep local expertise.
              </p>
              <p>
                Temer Properties is one of the top real estate developers in Addis Ababa, Ethiopia—trusted for delivering superior residential and commercial projects. Reach out today and let us help you find your ideal property.
              </p>
            </div>

            {/* 3. Interactive Contact Form ("Contact Me") */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="border-b border-gray-200 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Contact Me</h3>
                  <p className="text-xs text-gray-500">Send an inquiry directly to our sales advisory team.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Direct Advisor Response</span>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-[#84A441] mx-auto mb-4 animate-bounce" />
                  <h4 className="text-2xl font-black text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out to Temer Property. We have received your message and our advisor will connect with you shortly.
                  </p>
                  {whatsappRedirectUrl && (
                    <a
                      href={whatsappRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
                    >
                      <span>Continue on WhatsApp</span>
                      <Send className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Schedule a Showing Checkbox Toggle */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={scheduleShowing}
                        onChange={(e) => setScheduleShowing(e.target.checked)}
                        className="w-4 h-4 text-[#84A441] rounded border-gray-300 focus:ring-[#84A441]"
                      />
                      <span className="text-sm font-bold text-gray-800">
                        Schedule a showing / site visit?
                      </span>
                    </label>

                    {/* Schedule Date & Hour Picker if Checked */}
                    {scheduleShowing && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                            Preferred Date
                          </label>
                          <div className="relative">
                            <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                            <input
                              type="date"
                              required={scheduleShowing}
                              value={scheduleDate}
                              onChange={(e) => setScheduleDate(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                            Preferred Time
                          </label>
                          <div className="relative">
                            <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                            <select
                              value={scheduleHour}
                              onChange={(e) => setScheduleHour(e.target.value)}
                              className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
                            >
                              {hoursList.map((hr) => (
                                <option key={hr} value={hr}>
                                  {hr}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] focus:bg-white"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09... / +251..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Comment / Message Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Message / Comment *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="I would like more information about apartment pricing and payment plans..."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] focus:bg-white"
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto bg-[#84A441] hover:bg-[#739134] text-white font-bold py-3 px-8 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? "Sending..." : "Send Email"}</span>
                    </button>

                    <a
                      href="https://wa.me/251938125777?text=Hello%20Temer%20Property%2C%20I%20would%20like%20to%20inquire%20about%20your%20apartments."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("contact_page_form")}
                      className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-8 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* 4. Embedded Google Map */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Our Office Location</h3>
              <p className="text-xs text-gray-500 mb-4">
                Woldemaryam Building, Sarbet to Kera Road, Addis Ababa, Ethiopia.
              </p>
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-gray-200 shadow-inner">
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

          {/* Right Column: Sticky Sidebar matching Houzez/WpResidence theme (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Promo Banner Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
              <div className="relative aspect-[16/10] bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80"
                  alt="Temer Property Promotion"
                  fill
                  sizes="350px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end text-white">
                  <span className="text-[11px] font-bold text-[#84A441] uppercase tracking-wider">
                    Prime Investment
                  </span>
                  <h4 className="text-base font-extrabold leading-snug">
                    Sarbet City Plus Luxury Apartments
                  </h4>
                  <p className="text-xs text-gray-300 mt-1">
                    15% Down Payment • 36 Months Delivery
                  </p>
                </div>
              </div>
            </div>

            {/* "Latest Listings" Widget matching temerproperties.com */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">
                Latest Listings
              </h3>

              <div className="space-y-4">
                {latestListings.map((prop) => (
                  <Link
                    key={prop.id}
                    href={`/properties/${prop.slug}`}
                    className="flex gap-3 group items-center"
                  >
                    <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        sizes="80px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#84A441] transition-colors truncate">
                        {prop.title}
                      </h4>
                      <span className="text-xs font-extrabold text-[#84A441] block">
                        {prop.price}
                      </span>
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-0.5">
                        <span className="flex items-center gap-0.5">
                          <Bed className="w-3 h-3 text-[#84A441]" />
                          {prop.bedrooms}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5">
                          <Bath className="w-3 h-3 text-[#84A441]" />
                          {prop.bathrooms}
                        </span>
                        <span>•</span>
                        <span>{prop.size}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                  href="/properties-standard-list"
                  className="text-xs font-bold text-[#84A441] hover:underline flex items-center justify-between"
                >
                  <span>View All Listings</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Quick Assistance Card */}
            <div className="bg-[#181d24] text-white rounded-2xl p-6 shadow-sm border border-gray-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#84A441] uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Need Direct Assistance?</span>
              </div>
              <h4 className="text-base font-extrabold">Speak with Our Lead Advisor</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Connect directly for personalized quotes, cash discount calculations, and immediate floor plan brochures.
              </p>
              <div className="pt-2">
                <a
                  href="tel:0938125777"
                  onClick={() => trackCallClick("contact_sidebar_call")}
                  className="w-full bg-[#84A441] hover:bg-[#739134] text-white py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 0938125777</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
