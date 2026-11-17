import React from "react";
import { Users, Award, Building2, Home } from "lucide-react";

export default function StatsCounter() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Satisfied Customers",
      desc: "Homeowners and retail investors who trust Temer",
    },
    {
      icon: Award,
      value: "10+",
      label: "Years Of Experience",
      desc: "Delivering real estate excellence across Ethiopia",
    },
    {
      icon: Building2,
      value: "10+",
      label: "Delivered Projects",
      desc: "Completed on schedule with 100% legal ownership",
    },
    {
      icon: Home,
      value: "350+",
      label: "Apartment Units",
      desc: "Modern luxury living spaces delivered to clients",
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center mb-3 group-hover:bg-[#84A441] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#84A441] mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-500 hidden sm:block">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

