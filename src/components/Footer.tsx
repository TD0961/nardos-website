import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TikTokIcon,
} from "./SocialIcons";

export default function Footer() {
  return (
    <footer id="colophon" className="bg-[#181d24] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          {/* Column 1: Company Description (col-lg-6) */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide border-l-4 border-[#84A441] pl-3">
              Temer Properties – Leading Real Estate Developer in Addis Ababa, Ethiopia
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed pr-0 lg:pr-8">
              Temer Properties is a trusted name in Addis Ababa’s real estate market, known for delivering high-quality, modern apartments with a strong focus on timely completion and customer satisfaction. We specialize in building well-designed residential properties that offer comfort, durability, and long-term value. Explore premium houses for sale in Addis Ababa with a developer committed to excellence and reliability.
            </p>
          </div>

          {/* Column 2: Contact Info (col-lg-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide border-l-4 border-[#84A441] pl-3">
              CONTACT
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#84A441] flex-shrink-0" />
                <a
                  href="tel:0938125777"
                  className="hover:text-[#84A441] transition-colors font-medium text-white"
                >
                  0938125777
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#84A441] flex-shrink-0" />
                <a
                  href="mailto:info@temerproperties.com"
                  className="hover:text-[#84A441] transition-colors"
                >
                  info@temerproperties.com
                </a>
              </p>

              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#84A441] flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/3DraLh14fweui2oLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#84A441] transition-colors"
                >
                  Sarbet to Kera Road, Woldemaryam Building, Addis Ababa
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links & Social (col-lg-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide border-l-4 border-[#84A441] pl-3">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://www.facebook.com/temerproperties?mibextid=JRoKGi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#84A441] transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#84A441]" /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@TemerProperties"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#84A441] transition-colors"
                  >
                    <YoutubeIcon className="w-4 h-4 text-[#84A441]" /> YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@temer_properties"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#84A441] transition-colors"
                  >
                    <TikTokIcon className="w-4 h-4 text-[#84A441]" /> TikTok
                  </a>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#84A441] transition-colors block pt-1"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>

              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://t.me/temer_properties"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#84A441] transition-colors"
                  >
                    <TelegramIcon className="w-4 h-4 text-[#84A441]" /> Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/temerproperties?igsh=MXJ6ZGozY3QwaXBsMQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#84A441] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#84A441]" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/temer-realestate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#84A441] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#84A441]" /> LinkedIn
                  </a>
                </li>
                <li>
                  <Link
                    href="/terms-of-use"
                    className="hover:text-[#84A441] transition-colors block pt-1"
                  >
                    Terms Of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Temer Properties. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/construction-update" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
