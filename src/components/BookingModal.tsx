"use client";

import React, { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import { X, CheckCircle, Phone, Calendar, Mail, User, Building } from "lucide-react";

export default function BookingModal() {
  const { isOpen, selectedProperty, closeBooking } = useBooking();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: selectedProperty || "",
    preferredDate: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // reset after brief confirmation
    }, 4000);
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
          <div className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">
            <Building className="w-4 h-4" /> Temer Properties
          </div>
          <h2 className="text-2xl font-bold">Book a Consultation / Visit</h2>
          <p className="text-white/90 text-sm mt-1">
            Schedule a site visit or consultation with our property specialists.
          </p>
        </div>

        {/* Form or Success State */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-[#84A441] mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your booking request has been received. Our sales executive will call you within 15 minutes to confirm your appointment.
              </p>
              <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 mb-6">
                Need immediate assistance? Call us directly:
                <div className="text-lg font-bold text-[#84A441] mt-1">
                  <a href="tel:0938125777">0938125777</a>
                </div>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  closeBooking();
                }}
                className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white font-medium py-3 rounded-xl transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#84A441] focus:ring-1 focus:ring-[#84A441]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+251 9..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#84A441] focus:ring-1 focus:ring-[#84A441]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#84A441] focus:ring-1 focus:ring-[#84A441]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Property or Project Interested In
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. Sarbet City Plus, Aware, Gelan"
                    value={formData.property || selectedProperty}
                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#84A441] focus:ring-1 focus:ring-[#84A441]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Preferred Visit Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#84A441] focus:ring-1 focus:ring-[#84A441]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Message / Special Request
                </label>
                <textarea
                  rows={2}
                  placeholder="I would like to visit the site..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-[#84A441] focus:ring-1 focus:ring-[#84A441]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#84A441] hover:bg-[#6e8a32] text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 mt-2"
              >
                Submit Booking Request
              </button>

              <div className="pt-2 text-center text-xs text-gray-500">
                Contact Phone:{" "}
                <a href="tel:0938125777" className="text-[#84A441] font-bold hover:underline">
                  0938125777
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

