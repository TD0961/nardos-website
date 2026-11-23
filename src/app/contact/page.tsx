"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import InnerHero from "@/components/InnerHero";
import { useLanguage } from "@/context/LanguageContext";
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
} from "lucide-react";
import { trackInquirySubmit, trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

export default function ContactPage() {
  const { t } = useLanguage();
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
    <div className="bg-[#fbfcfa] min-h-screen pb-20">
      {/* Page Hero Header with high clarity & transparency */}
      <InnerHero
        title={t("navContact")}
        subtitle="Connect directly with our real estate advisory team at Woldemaryam Building, Sarbet, Addis Ababa for private showings and developer pricing."
        badge="Direct Developer Support"
        breadcrumbs={[{ label: t("navContact") }]}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&auto=format&fit=crop&q=80"
        highlights={[
          "Sarbet Office: Woldemaryam Building",
          "Direct Hotline: 0938125777",
          "Site Tours Available Mon-Sat",
        ]}
      />

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
                  <span>{t("contactHotline")}</span>
                </a>
              </div>
            </div>

            {/* 2. Original Descriptive Text Block from temerproperties.com */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm leading-relaxed text-gray-700 text-sm sm:text-base space-y-4">
              <p>
                Temer Real Estate, located on Sarbet to Kera Road, Woldemaryam Building, is your trusted partner in the real estate market in Addis Ababa, Ethiopia. We specialize in offering high-quality{" "}
                <strong className="text-gray-900 font-bold">apartments for sale in Addis Ababa</strong>,{" "}
                <strong className="text-gray-900 font-bold">houses for sale</strong>, and{" "}
                <strong className="text-gray-900 font-bold">commercial properties</strong> in the most sought-after neighborhoods across the city.
              </p>
              <p>
                Whether you are looking to buy your dream home or make a smart investment in Ethiopia’s thriving property sector, our expert team is here to guide you every step of the way with professional advisory, verified title documentation, and milestone-based installment plans.
              </p>
              <p>
                Visit us today or call our hotline to explore the best real estate opportunities in Addis Ababa with direct developer transparency.
              </p>
            </div>

            {/* 3. Original "Contact Me" Form with Schedule Tour Selector */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2d3e1e]">
                    Contact Me
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Send a direct inquiry or request an in-person structural walkthrough.
                  </p>
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
                        {t("scheduleShowing")}
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
                      {t("yourName")} *
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
                        {t("yourEmail")} *
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
                        {t("yourPhone")} *
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
                      {t("yourMessage")} *
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
                      <span>{loading ? "Sending..." : t("sendEmail")}</span>
                    </button>

                    <a
                      href="https://wa.me/251938125777?text=Hello%20Temer%20Property%2C%20I%20would%20like%20to%20inquire%20about%20your%20available%20apartments."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("contact_page_form_whatsapp")}
                      className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Sticky Sidebar with Promo Banner & Latest Listings (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Promo Card */}
            <div className="bg-gradient-to-br from-[#2d3e1e] to-[#1a2512] text-white rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <span className="bg-[#84A441] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  Developer Direct
                </span>
                <h3 className="text-xl sm:text-2xl font-black leading-snug">
                  Zero Broker Fees • Direct Developer Pricing
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Purchase directly from Temer Property with verified master deed documentation and flexible milestone payments.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:0938125777"
                    onClick={() => trackCallClick("contact_sidebar_call")}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl text-xs hover:bg-[#84A441] hover:text-white transition-all shadow"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#84A441]" />
                    <span>Call: 0938125777</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Latest Listings Widget */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h4 className="font-extrabold text-[#2d3e1e] text-base mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#84A441]" />
                <span>Latest Listings</span>
              </h4>

              <div className="space-y-4">
                {latestListings.map((prop) => (
                  <Link
                    key={prop.id}
                    href={`/properties/${prop.slug}`}
                    className="group flex gap-3 items-center hover:bg-gray-50 p-2 rounded-xl transition-all"
                  >
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        sizes="80px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-gray-900 text-xs truncate group-hover:text-[#84A441] transition-colors">
                        {prop.title}
                      </h5>
                      <span className="text-xs font-extrabold text-[#84A441] block">
                        {prop.price}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-0.5">
                        <span className="flex items-center gap-0.5">
                          <Bed className="w-3 h-3" /> {prop.bedrooms}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Bath className="w-3 h-3" /> {prop.bathrooms}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2">
              <h4 className="font-extrabold text-[#2d3e1e] text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#84A441]" />
                <span>Office Hours</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Monday – Saturday: 8:30 AM – 5:30 PM (EAT)
                <br />
                Sunday: Private On-Site Tours by Appointment
              </p>
            </div>
          </div>
        </div>

        {/* 4. Google Maps Location Section */}
        <div className="mt-12 bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm overflow-hidden">
          <div className="mb-4">
            <h4 className="text-lg font-black text-[#2d3e1e]">Visit Our Head Office</h4>
            <p className="text-xs text-gray-500">
              Sarbet to Kera Road, Woldemaryam Building, Addis Ababa, Ethiopia
            </p>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="Temer Properties Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7183610991953!2d38.7408711!3d8.9980597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ce9df256d9%3A0xe7268d8ef534a6c4!2sSarbet%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1716000000000!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
