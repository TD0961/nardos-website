"use client";

import React, { useState } from "react";
import { Phone, MapPin, CheckCircle, Send, ArrowRight } from "lucide-react";
import { trackInquirySubmit, trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          phone: formData.mobile,
          email: formData.email,
          property: "General Contact Request",
          message: formData.message,
        }),
      });

      const json = await res.json();
      if (json.whatsappUrl) {
        setWhatsappRedirectUrl(json.whatsappUrl);
      }
      trackInquirySubmit("ContactSection", "ContactForm");
      setSubmitted(true);
    } catch {
      const text = encodeURIComponent(
        `*New Website Contact - Temer Property*\nName: ${fullName}\nPhone: ${formData.mobile}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      );
      setWhatsappRedirectUrl(`https://wa.me/251938125777?text=${text}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirectUrl =
    "https://wa.me/251938125777?text=Hello%20Temer%20Property%2C%20I%20would%20like%20to%20discuss%20available%20apartments%20and%20payment%20plans.";

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Contact details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#84A441] text-xs sm:text-sm font-bold uppercase tracking-widest inline-block mb-2">
                Direct Contact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                Connect Directly With Temer Property
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We believe in full transparency and direct communication. Feel free to call us, reach out on WhatsApp, or send an inquiry. All listings, floor plans, and pricing details are completely open and accessible.
              </p>
            </div>

            <div className="space-y-4">
              {/* Clickable Phone Option */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Direct Call / Hotline
                  </h4>
                  <a
                    href="tel:0938125777"
                    onClick={() => trackCallClick("contact_section")}
                    className="text-lg font-bold text-gray-900 hover:text-[#84A441] transition-colors"
                  >
                    0938125777
                  </a>
                  <span className="block text-[11px] text-gray-500">Tap to call directly</span>
                </div>
              </div>

              {/* Direct WhatsApp Option */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    WhatsApp Chat
                  </h4>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("contact_section")}
                    className="text-lg font-bold text-[#25D366] hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                  <span className="block text-[11px] text-gray-500">Quick response • 0938125777</span>
                </div>
              </div>

              {/* Email & Office */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Headquarters
                  </h4>
                  <p className="text-sm font-semibold text-gray-900">
                    Sarbet & Aware Sites, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 text-[#84A441] mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Dispatched!</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Thank you for reaching out. We have received your inquiry. Connect on WhatsApp to get the instant catalog.
                  </p>
                  {whatsappRedirectUrl && (
                    <a
                      href={whatsappRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("contact_form_success")}
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
                    >
                      <span>Continue to WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-gray-100 pb-3 mb-2 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Send an Inquiry
                      </h3>
                      <p className="text-xs text-gray-500">
                        Optional form • Directly reaches our personal property advisor
                      </p>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-1 rounded-md">
                      No sign-up needed
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="e.g. Dawit"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="e.g. Kebede"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="09... or +251..."
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Message / Interested Unit
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="I am interested in pricing, floor plans, and installment schedules..."
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#84A441] hover:bg-[#6e8a32] active:scale-98 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
