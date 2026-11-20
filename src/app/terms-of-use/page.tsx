import React from "react";

export default function TermsOfUsePage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="bg-[#181d24] text-white py-16 mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Terms Of Use
          </h1>
          <p className="text-gray-400 text-sm">Last updated: 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm prose text-gray-700 leading-relaxed text-sm sm:text-base space-y-6">
          <p>
            Welcome to <strong>Temer Property</strong>. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6">1. Property Listings & Accuracy</h3>
          <p>
            All architectural renderings, floor plans, pricing estimates, and delivery schedules shown on this website are provided for illustrative and informational purposes. Official contract documents, sales agreements, and specifications provided by Temer Property at the time of purchase govern all sales.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6">2. Intellectual Property</h3>
          <p>
            All content, including videos, photographs, logos, and written materials, is the intellectual property of Temer Property and may not be reproduced without written permission.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6">3. Governing Law</h3>
          <p>
            These terms are governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia.
          </p>
        </div>
      </div>
    </div>
  );
}

