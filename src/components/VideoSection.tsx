"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const { openBooking } = useBooking();

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#84A441]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#84A441]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#84A441] text-xs sm:text-sm font-bold uppercase tracking-widest inline-block mb-2">
            THE BEST Real Estate In Ethiopia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Watch This Video To Know Us Better
          </h2>
          <div className="w-20 h-1 bg-[#84A441] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Video Player & Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Video Container (7 cols) */}
          <div className="lg:col-span-7">
            <div
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-black group cursor-pointer"
              onClick={handlePlayToggle}
            >
              <video
                ref={videoRef}
                playsInline
                loop
                muted={isMuted}
                poster="https://temerproperties.com/wp-content/uploads/2026/05/threebeds.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
                <source src="/videos/hero-background.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>

              {/* Overlay Play Button */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center transition-all">
                  <div className="w-20 h-20 rounded-full bg-[#84A441] flex items-center justify-center text-white shadow-xl transform transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 ml-1 fill-current" />
                  </div>
                </div>
              )}

              {/* Controls bar on hover */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
                <button
                  onClick={handleMuteToggle}
                  className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-colors"
                  aria-label="Toggle Mute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={handlePlayToggle}
                  className="bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-colors"
                  aria-label="Toggle Play"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>

              {/* YouTube fallback badge */}
              <div className="absolute top-4 left-4">
                <a
                  href="https://www.youtube.com/watch?v=kOfmRUApHHM"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-red-600/90 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow"
                >
                  <span>Watch on YouTube</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Description & Features (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Crafting Modern Landmarks in Addis Ababa
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Founded with a visionary commitment to elevate Ethiopia&apos;s living standards, Temer Properties has established a proven track record of timely completion, engineering integrity, and enduring architectural beauty.
              </p>
            </div>

            <div className="space-y-3.5 text-sm text-gray-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#84A441] flex-shrink-0 mt-0.5" />
                <span>Prime locations in Sarbet, Piyassa, Ayat, Aware, and Garment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#84A441] flex-shrink-0 mt-0.5" />
                <span>100% legal ownership titles & transparent handover process</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#84A441] flex-shrink-0 mt-0.5" />
                <span>Flexible 1% monthly payment schedules and diaspora packages</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#84A441] flex-shrink-0 mt-0.5" />
                <span>Exclusive partnership with Ethiopian Airlines (ShebaMiles Rewards)</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBooking()}
                className="bg-[#84A441] hover:bg-[#6e8a32] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all"
              >
                Schedule Site Tour
              </button>
              <a
                href="tel:0938125777"
                className="flex items-center gap-2 text-gray-300 hover:text-white font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#84A441]" />
                <span>Call 0938125777</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

