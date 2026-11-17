"use client";

import React, { useState } from "react";
import { jobsList, JobListing } from "@/data/jobs";
import {
  Briefcase,
  MapPin,
  Search,
  ChevronDown,
  Mail,
  CheckCircle2,
} from "lucide-react";

export default function JobPortalPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [expandedJobId, setExpandedJobId] = useState<number | null>(1);
  const [applyModalJob, setApplyModalJob] = useState<JobListing | null>(null);

  const filteredJobs = jobsList.filter((job) => {
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && !job.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedType !== "All" && job.type !== selectedType) {
      return false;
    }
    return true;
  });

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Page Hero Header */}
      <div className="bg-[#181d24] text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#84A441] text-xs sm:text-sm font-bold uppercase tracking-widest inline-block mb-2">
            Careers at Temer Properties
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Find Your Dream Job
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Explore exciting career opportunities with Temer Properties in Addis Ababa. Join our team and build your future.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search job title, keywords or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441]"
              />
            </div>

            <div className="sm:col-span-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#84A441] bg-gray-50"
              >
                <option value="All">All Job Types</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings Accordion */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <div
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="bg-[#84A441]/10 text-[#84A441] text-xs font-bold px-2.5 py-0.5 rounded-full">
                          {job.type}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{job.company}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplyModalJob(job);
                        }}
                        className="bg-[#84A441] hover:bg-[#6e8a32] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all"
                      >
                        Apply Now
                      </button>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-sm text-gray-600 space-y-5 animate-fade-in">
                      {/* Summary */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                          Role Summary
                        </h4>
                        <p className="leading-relaxed">{job.description.summary}</p>
                      </div>

                      {/* Responsibilities */}
                      {job.description.responsibilities && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-1.5">
                            {job.description.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                                <CheckCircle2 className="w-4 h-4 text-[#84A441] flex-shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Qualifications */}
                      {job.description.Qualifications && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Qualifications & Experience
                          </h4>
                          <ul className="space-y-1.5">
                            {job.description.Qualifications.map((qual, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                                <CheckCircle2 className="w-4 h-4 text-[#84A441] flex-shrink-0 mt-0.5" />
                                <span>{qual}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Requirements */}
                      {job.requirements && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Competencies Required
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.requirements.map((req, i) => (
                              <span
                                key={i}
                                className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-lg"
                              >
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Apply CTA Bar */}
                      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-4 rounded-xl">
                        <div className="text-xs text-gray-600">
                          Submit your CV to:{" "}
                          <a
                            href="mailto:jobs@temerproperties.com"
                            className="font-bold text-[#84A441] hover:underline"
                          >
                            jobs@temerproperties.com
                          </a>
                        </div>
                        <button
                          onClick={() => setApplyModalJob(job)}
                          className="w-full sm:w-auto bg-[#84A441] hover:bg-[#6e8a32] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors"
                        >
                          Submit Application
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
              <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800 mb-1">No Jobs Found</h3>
              <p className="text-xs text-gray-500">
                Try searching for other titles or resetting your filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Application Instructions Modal */}
      {applyModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 relative">
            <div className="w-12 h-12 rounded-2xl bg-[#84A441]/10 text-[#84A441] flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Apply for {applyModalJob.title}
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              {applyModalJob.company} • {applyModalJob.location}
            </p>

            <div className="bg-gray-50 p-4 rounded-xl text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 space-y-2">
              <p>
                To apply, please send your updated CV and cover letter directly to our Talent Acquisition team at:
              </p>
              <div className="p-3 bg-white rounded-lg border border-gray-200 text-center font-bold text-base text-[#84A441]">
                <a href={`mailto:jobs@temerproperties.com?subject=Application: ${applyModalJob.title}`}>
                  jobs@temerproperties.com
                </a>
              </div>
              <p className="text-gray-500 text-xs">
                ⚠️ Important: Please specify <strong>&ldquo;{applyModalJob.title}&rdquo;</strong> in the subject line of your email.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={`mailto:jobs@temerproperties.com?subject=Application for ${applyModalJob.title}`}
                className="flex-1 bg-[#84A441] hover:bg-[#6e8a32] text-white py-2.5 rounded-xl font-bold text-xs text-center transition-colors"
              >
                Open Email Client
              </a>
              <button
                onClick={() => setApplyModalJob(null)}
                className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

