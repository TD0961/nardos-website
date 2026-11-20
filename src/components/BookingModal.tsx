"use client";

import React, { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import { X, CheckCircle, Phone, Calendar, User, Building, ArrowRight } from "lucide-react";
import { trackInquirySubmit, trackWhatsAppClick } from "@/lib/analytics";

export default function BookingModal() {
  const { isOpen, selectedProperty, closeBooking } = useBooking();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: selectedProperty || "",
    preferredDate: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          property: selectedProperty || formData.property || "General Consultation",
        }),
      });

      const json = await res.json();
      if (json.whatsappUrl) {
        setWhatsappRedirectUrl(json.whatsappUrl);
      }
      trackInquirySubmit(selectedProperty || formData.property || "Modal");
      setSubmitted(true);
    } catch {
      // Fallback direct WhatsApp URL
      const text = encodeURIComponent(
        `*New Inquiry - Temer Property*\nName: ${formData.name}\nPhone: ${formData.phone}\nProperty: ${selectedProperty || "General Consultation"}\nDate: ${formData.preferredDate}\nMessage: ${formData.message}`
      );
      setWhatsappRedirectUrl(`https://wa.me/251938125777?text=${text}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#84A441] text-white p-6 relative">
          <button
            onClick={closeBooking}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-white/90 text-xs font-semibold uppercase tracking-wider mb-1">
            <Building className="w-4 h-4" /> Temer Property
          </div>
          <h2 className="text-2xl font-bold">Schedule an Optional Consultation</h2>
          <p className="text-white/90 text-xs sm:text-sm mt-1">
            Free site tours and personalized payment plans • Direct consultation with Senior Property Advisors & Developer Sales Team
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle className="w-16 h-16 text-[#84A441] mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Inquiry Received!</h3>
              <p className="text-gray-600 text-sm mb-6">
                Your message has been received. You can also connect immediately on WhatsApp to get the floor plans and pricing schedule right away.
              </p>

              {whatsappRedirectUrl && (
                <a
                  href={whatsappRedirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("modal_success_redirect")}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md mb-4"
                >
                  <span>Chat Directly on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}

              <button
                onClick={closeBooking}
                className="text-xs text-gray-400 hover:text-gray-600 underline font-medium"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              {/* Optional Quick WhatsApp alternative banner */}
              <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-between gap-3">
                <div className="text-xs text-emerald-900">
                  <strong>Prefer to chat immediately?</strong>
                  <p className="text-[11px] text-emerald-700">Skip the form and talk directly on WhatsApp.</p>
                </div>
                <a
                  href={`https://wa.me/251938125777?text=${encodeURIComponent(
                    `Hello Temer Property, I would like to schedule a site visit${
                      selectedProperty ? ` for ${selectedProperty}` : ""
                    }.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("modal_direct_skip")}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1 shadow-sm whitespace-nowrap"
                >
                  <span>WhatsApp</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Abebe Bikila"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#84A441]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        required
                        placeholder="09... / +251..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#84A441]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#84A441]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Property of Interest
                  </label>
                  <input
                    type="text"
                    value={formData.property || selectedProperty || "Any Luxury Apartment / Penthouse"}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#84A441]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Questions / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you're looking for (e.g. 2-bed in Sarbet, installment options)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-[#84A441]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#84A441] hover:bg-[#6e8a32] active:scale-98 text-white font-bold py-3 rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-2"
                >
                  {loading ? "Submitting..." : "Send Free Consultation Request"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
