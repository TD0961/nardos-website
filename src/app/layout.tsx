import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileActionBar from "@/components/MobileActionBar";
import Analytics from "@/components/Analytics";
import { BookingProvider } from "@/context/BookingContext";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://temerproperties.com"),
  title: "Temer Property | Leading Real Estate Developer in Addis Ababa, Ethiopia",
  description:
    "Temer Property delivers state-of-the-art apartments and commercial spaces for sale in Addis Ababa, Ethiopia. Explore prime luxury apartments in Sarbet, Aware, Ayat, and more with 15% down payment and flexible installment plans.",
  keywords: [
    "Temer Property",
    "Real Estate in Ethiopia",
    "Apartments for sale Addis Ababa",
    "Houses in Addis Ababa",
    "Sarbet apartments",
    "Aware apartments",
    "Ethiopian Real Estate developer",
    "Luxury flats Addis Ababa",
    "Addis Ababa property installment plan",
  ],
  icons: {
    icon: "/images/logo-square.png",
    apple: "/images/logo-square.png",
  },
  openGraph: {
    title: "Temer Property | Premier Luxury Apartments in Addis Ababa",
    description:
      "Explore modern luxury apartments and prime real estate in Addis Ababa with Temer Property. Transparent pricing, 15% down payment, and milestone installments.",
    url: "https://temerproperties.com",
    siteName: "Temer Property",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Temer Property Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temer Property | Real Estate in Addis Ababa",
    description:
      "Find your dream home in Addis Ababa. Explore Sarbet, Aware, and Ayat luxury developments.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Temer Property",
    image: "https://temerproperties.com/images/logo.png",
    telephone: "0938125777",
    url: "https://temerproperties.com",
    priceRange: "ETB 7,000,000 - 25,000,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sarbet to Kera Road, Woldemaryam Building",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "18:00",
      },
    ],
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased selection:bg-[#84A441] selection:text-white pb-14 md:pb-0">
        <Analytics />
        <BookingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BookingModal />
          <FloatingWhatsApp />
          <MobileActionBar />
        </BookingProvider>
      </body>
    </html>
  );
}
