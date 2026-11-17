import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { BookingProvider } from "@/context/BookingContext";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://temerproperties.com"),
  title: "Temer Properties | Leading Real Estate Developer in Addis Ababa, Ethiopia",
  description:
    "Temer Properties delivers state-of-the-art apartments and commercial spaces for sale in Addis Ababa, Ethiopia. Explore prime properties in Sarbet, Aware, Ayat, and more.",
  keywords: [
    "Temer Properties",
    "Real Estate in Ethiopia",
    "Apartments for sale Addis Ababa",
    "Houses in Addis Ababa",
    "Sarbet apartments",
    "Ethiopian Real Estate",
  ],
  icons: {
    icon: "/images/logo-square.png",
    apple: "/images/logo-square.png",
  },
  openGraph: {
    title: "Temer Properties | Leading Real Estate Developer in Addis Ababa",
    description:
      "Explore modern luxury apartments and commercial real estate in Addis Ababa with Temer Properties.",
    url: "https://temerproperties.com",
    siteName: "Temer Properties",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased selection:bg-[#84A441] selection:text-white">
        <BookingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
