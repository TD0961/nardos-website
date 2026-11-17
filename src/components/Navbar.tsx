"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Building,
  Clock,
  Briefcase,
  Users,
  Compass,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  const isHome = pathname === "/";

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || !isHome
            ? "bg-white text-gray-800 shadow-md py-2.5"
            : "bg-black/25 backdrop-blur-[2px] text-white py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-32 sm:w-40">
              <Image
                src="/images/logo.png"
                alt="Temer Properties"
                fill
                priority
                className={`object-contain transition-all duration-200 ${!scrolled && isHome ? "brightness-100" : ""
                  }`}
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[14px] font-medium tracking-wide">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md transition-colors ${pathname === "/"
                  ? "text-[#84A441] font-semibold"
                  : scrolled || !isHome
                    ? "text-gray-700 hover:text-[#84A441]"
                    : "text-white/90 hover:text-white"
                }`}
            >
              Home
            </Link>

            {/* Projects Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("projects")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-2 flex items-center gap-1 rounded-md transition-colors ${pathname.includes("properties") || pathname.includes("construction")
                    ? "text-[#84A441] font-semibold"
                    : scrolled || !isHome
                      ? "text-gray-700 group-hover:text-[#84A441]"
                      : "text-white/90 group-hover:text-white"
                  }`}
              >
                Projects <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/properties-standard-list"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Building className="w-4 h-4 text-[#84A441]" />
                  Properties Standard List
                </Link>
                <Link
                  href="/half-map-properties-list"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Compass className="w-4 h-4 text-[#84A441]" />
                  Properties With Map
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link
                  href="/construction-update"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Clock className="w-4 h-4 text-[#84A441]" />
                  Construction Update
                </Link>
                <div className="pl-9 pr-4 py-1 space-y-1 text-xs text-gray-500">
                  <Link href="/construction-update?status=in-progress" className="block hover:text-[#84A441]">
                    • In Progress
                  </Link>
                  <Link href="/construction-update?status=delivered" className="block hover:text-[#84A441]">
                    • Delivered
                  </Link>
                  <Link href="/construction-update?status=upcoming" className="block hover:text-[#84A441]">
                    • Upcoming
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about-us"
              className={`px-3 py-2 rounded-md transition-colors ${pathname === "/about-us"
                  ? "text-[#84A441] font-semibold"
                  : scrolled || !isHome
                    ? "text-gray-700 hover:text-[#84A441]"
                    : "text-white/90 hover:text-white"
                }`}
            >
              About
            </Link>

            {/* Events Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("events")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-2 flex items-center gap-1 rounded-md transition-colors ${pathname.includes("blog") || pathname.includes("events")
                    ? "text-[#84A441] font-semibold"
                    : scrolled || !isHome
                      ? "text-gray-700 group-hover:text-[#84A441]"
                      : "text-white/90 group-hover:text-white"
                  }`}
              >
                Events <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/events"
                  className="block px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  News & Events
                </Link>
                <Link
                  href="/blog-list"
                  className="block px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  Blog Articles
                </Link>
              </div>
            </div>

            {/* Our Team Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("team")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-2 flex items-center gap-1 rounded-md transition-colors ${pathname.includes("team") || pathname.includes("sales") || pathname.includes("job")
                    ? "text-[#84A441] font-semibold"
                    : scrolled || !isHome
                      ? "text-gray-700 group-hover:text-[#84A441]"
                      : "text-white/90 group-hover:text-white"
                  }`}
              >
                Our Team <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/our-team"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Users className="w-4 h-4 text-[#84A441]" />
                  Management Team
                </Link>
                <Link
                  href="/sales-officer"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Users className="w-4 h-4 text-[#84A441]" />
                  Sales Officers
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link
                  href="/job-portal"
                  className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#84A441]/10 hover:text-[#84A441] transition-colors text-sm"
                >
                  <Briefcase className="w-4 h-4 text-[#84A441]" />
                  Job Portal
                </Link>
              </div>
            </div>

            {/* Book Now Action */}
            <button
              onClick={() => openBooking()}
              className="bg-[#84A441] hover:bg-[#6e8a32] text-white px-4 py-2 rounded-full font-semibold transition-all shadow hover:shadow-md ml-1"
            >
              Book Now
            </button>
          </nav>

          {/* Right Secondary Bar (Contact & Phone) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className={`flex items-center gap-1.5 text-sm transition-colors ${scrolled || !isHome
                  ? "text-gray-700 hover:text-[#84A441]"
                  : "text-white/90 hover:text-white"
                }`}
            >
              <Mail className="w-4 h-4 text-[#84A441]" />
              <span>Contact</span>
            </Link>

            <a
              href="tel:6033"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#84A441]/15 text-[#84A441] border border-[#84A441]/30 hover:bg-[#84A441] hover:text-white transition-all text-sm font-bold"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>6033</span>
            </a>

            <a
              href="tel:+251975666699"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${scrolled || !isHome
                  ? "text-gray-800 hover:text-[#84A441]"
                  : "text-white hover:text-white/90"
                }`}
            >
              <Phone className={`w-3.5 h-3.5 ${scrolled || !isHome ? "text-[#84A441]" : "text-white"}`} />
              <span>+251975666699</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:6033"
              className="px-2.5 py-1 rounded-full bg-[#84A441] text-white text-xs font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> 6033
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled || !isHome
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
                }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="relative h-9 w-28">
                <Image src="/images/logo.png" alt="Temer Properties" fill className="object-contain" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-800 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-4 space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#84A441]"
              >
                Home
              </Link>

              {/* Mobile Projects */}
              <div>
                <button
                  onClick={() => toggleDropdown("mob-projects")}
                  className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-gray-800 hover:text-[#84A441]"
                >
                  <span>Projects</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "mob-projects" ? "rotate-180" : ""}`} />
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
                      Construction Update
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
                  <span>Events</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "mob-events" ? "rotate-180" : ""}`} />
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
                      Blog
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
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "mob-team" ? "rotate-180" : ""}`} />
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
                Contact
              </Link>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full bg-[#84A441] text-white py-3 rounded-xl font-semibold text-center hover:bg-[#6e8a32] transition-colors"
              >
                Book Now
              </button>

              <div className="text-center space-y-1 text-sm text-gray-600">
                <p>
                  Hotline:{" "}
                  <a href="tel:6033" className="font-bold text-[#84A441]">
                    6033
                  </a>
                </p>
                <p>
                  Direct:{" "}
                  <a href="tel:+251975666699" className="font-bold text-[#84A441]">
                    +251975666699
                  </a>
                </p>
                <p className="text-xs text-gray-400">Sarbet to Kera Road, Addis Ababa</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

