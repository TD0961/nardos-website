import React from "react";
import InnerHero from "@/components/InnerHero";

export default function TermsOfUsePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <InnerHero
        title="Terms of Use"
        subtitle="Please review the terms and conditions governing the use of the Temer Property website and property information services."
        badge="Legal & Compliance • Terms of Service"
        breadcrumbs={[{ label: "Terms of Use" }]}
        highlights={[
          "Fair & Transparent Information",
          "Official Contract Precedence",
          "Ethiopian Legal Compliance",
        ]}
      />

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

