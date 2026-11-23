"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Building,
  Clock,
  Briefcase,
  Users,
  Compass,
} from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const whatsappUrl =
    "https://wa.me/251938125777?text=Hello%20Temer%20Property%2C%20I%20am%20interested%20in%20your%20apartments.";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white text-gray-800 shadow-md py-2.5"
            : "bg-black/35 backdrop-blur-md text-white py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-32 sm:w-36">
              <Image
                src="/images/logo.png"
                alt="Temer Property"
                fill
                priority
                sizes="(max-width: 640px) 128px, 144px"
                className={`object-contain transition-all duration-200 ${
                  !scrolled ? "brightness-100" : ""
                }`}
              />
            </div>
            <span
              className={`hidden sm:inline-block font-extrabold tracking-wide text-sm ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Temer Property
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[14px] font-medium tracking-wide">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === "/"
                  ? "text-[#84A441] font-bold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#84A441]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("navHome")}
            </Link>

            {/* Projects Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("projects")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-2 flex items-center gap-1 rounded-md transition-colors ${
                  pathname.includes("properties") || pathname.includes("construction")
                    ? "text-[#84A441] font-bold"
                    : scrolled
                    ? "text-gray-700 group-hover:text-[#84A441]"
                    : "text-white/90 group-hover:text-white"
                }`}
              >
                {t("navProjects")}{" "}
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/properties-standard-list"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Building className="w-4 h-4 text-[#84A441]" />
                  {t("navPropertiesList")}
                </Link>
                <Link
                  href="/half-map-properties-list"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Compass className="w-4 h-4 text-[#84A441]" />
                  {t("navPropertiesMap")}
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link
                  href="/construction-update"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Clock className="w-4 h-4 text-[#84A441]" />
                  {t("navConstructionUpdates")}
                </Link>
              </div>
            </div>

            <Link
              href="/about-us"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === "/about-us"
                  ? "text-[#84A441] font-bold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#84A441]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("navAboutUs")}
            </Link>

            {/* Events / News */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("events")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-2 flex items-center gap-1 rounded-md transition-colors ${
                  pathname.includes("events") || pathname.includes("blog")
                    ? "text-[#84A441] font-bold"
                    : scrolled
                    ? "text-gray-700 group-hover:text-[#84A441]"
                    : "text-white/90 group-hover:text-white"
                }`}
              >
                {t("navEvents")}{" "}
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-52 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/events"
                  className="block px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  {t("navNewsEvents")}
                </Link>
                <Link
                  href="/blog-list"
                  className="block px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  {t("navBlog")}
                </Link>
              </div>
            </div>

            {/* Team Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("team")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-2 flex items-center gap-1 rounded-md transition-colors ${
                  pathname.includes("team") || pathname.includes("sales-officer") || pathname.includes("job")
                    ? "text-[#84A441] font-bold"
                    : scrolled
                    ? "text-gray-700 group-hover:text-[#84A441]"
                    : "text-white/90 group-hover:text-white"
                }`}
              >
                {t("navOurTeam")}{" "}
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/our-team"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Users className="w-4 h-4 text-[#84A441]" />
                  {t("navManagement")}
                </Link>
                <Link
                  href="/sales-officer"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Briefcase className="w-4 h-4 text-[#84A441]" />
                  {t("navSalesOfficers")}
                </Link>
                <Link
                  href="/job-portal"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Clock className="w-4 h-4 text-[#84A441]" />
                  {t("navJobPortal")}
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === "/contact" || pathname === "/contact-us-2"
                  ? "text-[#84A441] font-bold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#84A441]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("navContact")}
            </Link>
          </nav>

          {/* Right Action: Clickable Call, WhatsApp, Language & Booking */}
          <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
            {/* Language Switcher */}
            <LanguageSwitcher variant="desktop" />

            {/* Clickable Call Option */}
            <a
              href="tel:0938125777"
              onClick={() => trackCallClick("navbar_header")}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                scrolled
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#84A441]" />
              <span>0938125777</span>
            </a>

            {/* Direct WhatsApp Option */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("navbar_header")}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              aria-label="Direct WhatsApp chat"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Inquire CTA */}
            <button
              onClick={() => openBooking()}
              className="bg-[#84A441] hover:bg-[#6e8a32] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:0938125777"
              onClick={() => trackCallClick("mobile_nav_quick")}
              className="p-2 rounded-lg bg-[#84A441] text-white text-xs font-bold flex items-center"
              aria-label="Call 0938125777"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="relative ml-auto w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="relative h-9 w-28">
                  <Image src="/images/logo.png" alt="Temer Property" fill sizes="112px" className="object-contain" />
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-1">
              {/* Mobile Language Switcher */}
              <div className="mb-4">
                <LanguageSwitcher variant="mobile" />
              </div>

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#84A441]"
              >
                {t("navHome")}
              </Link>

              {/* Mobile Projects */}
              <div>
                <button
                  onClick={() => toggleDropdown("mob-projects")}
                  className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-gray-800 hover:text-[#84A441]"
                >
                  <span>Projects</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "mob-projects" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mob-projects" && (
                  <div className="pl-4 pb-2 space-y-2 text-sm text-gray-600">
                    <Link
                      href="/properties-standard-list"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-[#84A441]"
                    >
                      Properties Standard List
                    </Link>
                    <Link
                      href="/half-map-properties-list"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-[#84A441]"
                    >
                      Properties With Map
                    </Link>
                    <Link
                      href="/construction-update"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-[#84A441]"
                    >
                      Construction Updates
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#84A441]"
              >
                About Us
              </Link>

              {/* Mobile Events */}
              <div>
                <button
                  onClick={() => toggleDropdown("mob-events")}
                  className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-gray-800 hover:text-[#84A441]"
                >
                  <span>Events & Insights</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "mob-events" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mob-events" && (
                  <div className="pl-4 pb-2 space-y-2 text-sm text-gray-600">
                    <Link
                      href="/events"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-[#84A441]"
                    >
                      News & Events
                    </Link>
                    <Link
                      href="/blog-list"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-[#84A441]"
                    >
                      Blog Articles
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Team */}
              <div>
                <button
                  onClick={() => toggleDropdown("mob-team")}
                  className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-gray-800 hover:text-[#84A441]"
                >
                  <span>Our Team</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "mob-team" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mob-team" && (
                  <div className="pl-4 pb-2 space-y-2 text-sm text-gray-600">
                    <Link
                      href="/our-team"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-[#84A441]"
                    >
                      Management Team
                    </Link>
                    <Link
                      href="/sales-officer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-[#84A441]"
                    >
                      Sales Officers
                    </Link>
                    <Link
                      href="/job-portal"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 hover:text-[#84A441]"
                    >
                      Job Portal
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#84A441]"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100 space-y-3">
              {/* Call Button */}
              <a
                href="tel:0938125777"
                onClick={() => {
                  trackCallClick("mobile_drawer");
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#84A441]" />
                <span>Call 0938125777</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick("mobile_drawer");
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full bg-[#84A441] text-white py-3 rounded-xl font-bold text-center hover:bg-[#6e8a32] transition-colors"
              >
                Inquire / Site Visit
              </button>

              <div className="text-center space-y-1 text-xs text-gray-500 pt-2">
                <p>Personal Representative: 0938125777</p>
                <p>Sarbet & Aware Sites, Addis Ababa</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
