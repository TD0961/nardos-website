import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
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
  const whatsappUrl =
    "https://wa.me/251938125777?text=Hello%20Temer%20Property%2C%20I%20am%20interested%20in%20your%20luxury%20apartments.";

  return (
    <footer id="colophon" className="bg-[#181d24] text-white pt-16 pb-20 md:pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          {/* Column 1: Company Description (col-lg-5) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide border-l-4 border-[#84A441] pl-3">
              Temer Property – Leading Real Estate Developer in Addis Ababa
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed pr-0 lg:pr-6">
              Temer Property is a premier real estate developer in Addis Ababa, Ethiopia, delivering state-of-the-art apartments with high-end architecture, prime locations in Sarbet and Aware, transparent pricing, and flexible payment plans. All apartment listings and floor plans are completely open and accessible to all visitors.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#84A441] pt-1">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Direct Title Deeds • 0% Interest Installments • No Registration Required</span>
            </div>
          </div>

          {/* Column 2: Direct Contact (col-lg-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide border-l-4 border-[#84A441] pl-3">
              DIRECT CONTACT
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#84A441] flex-shrink-0" />
                <a
                  href="tel:0938125777"
                  className="hover:text-[#84A441] transition-colors font-bold text-white text-base"
                >
                  0938125777
                </a>
                <span className="text-xs text-gray-400">(Call Directly)</span>
              </p>

              <p className="flex items-center gap-2.5">
                <span className="w-4 h-4 text-[#25D366] flex-shrink-0 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-semibold text-[#25D366]"
                >
                  Direct WhatsApp Chat
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
                <span>Sarbet to Kera Road, Woldemaryam Building, Addis Ababa</span>
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
          <p>© 2026 Temer Property. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/properties-standard-list" className="hover:text-white transition-colors">
              Properties
            </Link>
            <Link href="/construction-update" className="hover:text-white transition-colors">
              Construction Updates
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
