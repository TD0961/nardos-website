import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="bg-[#181d24] text-white py-16 mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">Last updated: 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm prose text-gray-700 leading-relaxed text-sm sm:text-base space-y-6">
          <p>
            At <strong>Temer Properties</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting personal information you provide to us through our website.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6">1. Information We Collect</h3>
          <p>
            When you request property details, book a site visit, or submit job inquiries, we may collect your name, phone number, email address, and property preferences.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6">2. How We Use Your Information</h3>
          <p>
            We use your information solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your property questions and consultation requests.</li>
            <li>Coordinate and confirm site visits to our development locations.</li>
            <li>Send construction updates and progress announcements.</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mt-6">3. Data Security & Third Parties</h3>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We enforce rigorous security measures to protect your contact data against unauthorized access.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6">4. Contact Information</h3>
          <p>
            For any questions regarding this policy, please reach out to us at <a href="mailto:info@temerproperties.com" className="text-[#84A441] underline">info@temerproperties.com</a> or via phone <strong>0938125777</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

