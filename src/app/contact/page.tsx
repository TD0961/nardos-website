"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, ArrowRight } from "lucide-react";
import { trackInquirySubmit, trackCallClick, trackWhatsAppClick } from "@/lib/analytics";
import InnerHero from "@/components/InnerHero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          property: formData.subject || "Contact Page Inquiry",
          message: formData.message,
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
        `*New Contact Message - Temer Property*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
      );
      setWhatsappRedirectUrl(`https://wa.me/251938125777?text=${text}`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const directWhatsAppUrl =
    "https://wa.me/251938125777?text=Hello%20Temer%20Property%2C%20I%20would%20like%20to%20discuss%20available%20apartments.";

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Hero Header */}
      <InnerHero
        title="Contact Temer Property"
        subtitle="Have questions about our apartment developments, pricing, or installment plans? Connect directly with our Senior Property Advisors for personalized service and private site tours."
        badge="Direct Developer Support • Priority Inquiries"
        breadcrumbs={[{ label: "Contact Us" }]}
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&auto=format&fit=crop&q=80"
        highlights={[
          "Direct Advisor Hotline: 0938125777",
          "Fast Response via WhatsApp",
          "Sarbet Head Office Showroom",
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                Head Office & Inquiries
              </h2>

              <div className="space-y-4 text-sm text-gray-700">
                {/* Clickable Call */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Personal Contact Phone</h4>
                    <a
                      href="tel:0938125777"
                      onClick={() => trackCallClick("contact_page")}
                      className="text-lg font-extrabold text-[#84A441] hover:underline"
                    >
                      0938125777
                    </a>
                    <span className="block text-xs text-gray-400">Clickable direct call option</span>
                  </div>
                </div>

                {/* Direct WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Direct WhatsApp</h4>
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("contact_page")}
                      className="text-base font-bold text-[#25D366] hover:underline block"
                    >
                      Chat on WhatsApp Now
                    </a>
                    <span className="block text-xs text-gray-400">Instant answers from advisor</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Official Email</h4>
                    <a href="mailto:info@temerproperties.com" className="font-semibold text-gray-900 hover:text-[#84A441]">
                      info@temerproperties.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Office Location</h4>
                    <p className="font-medium text-gray-900">
                      Sarbet to Kera Road, Woldemaryam Building, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Working Hours</h4>
                    <p className="font-medium text-gray-900">
                      Monday – Saturday: 8:30 AM – 5:30 PM
                    </p>
                    <p className="text-xs text-gray-500">Sunday & Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[#84A441] mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Inquiry Dispatched!</h3>
                  <p className="text-gray-600 mb-6 text-sm max-w-md mx-auto">
                    Thank you for reaching out. We have received your message. You can also chat directly on WhatsApp right now for an immediate response.
                  </p>
                  {whatsappRedirectUrl && (
                    <a
                      href={whatsappRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("contact_page_submit_whatsapp")}
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
                    >
                      <span>Continue via WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Send an Optional Inquiry
                    </h3>
                    <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                      Direct to Advisor
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Almaz Bekele"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#84A441]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#84A441]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="09... / +251..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#84A441]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Project of Interest
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarbet City Plus / Aware Apartments"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#84A441]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="I am interested in pricing, floor plans, and installment schedules..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#84A441]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Submit Inquiry Directly"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-14 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
          <div className="p-6 bg-white border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-gray-900">Visit Our Main Office</h3>
              <p className="text-xs text-gray-500">Woldemaryam Building, Sarbet to Kera Road, Addis Ababa</p>
            </div>
            <a
              href="https://maps.app.goo.gl/3DraLh14fweui2oLA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#84A441] hover:underline"
            >
              Open in Google Maps ↗
            </a>
          </div>
          <div className="aspect-[21/9] min-h-[350px]">
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
    </div>
  );
}
