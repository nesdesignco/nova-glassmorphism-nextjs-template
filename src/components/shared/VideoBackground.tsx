"use client";

import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  src?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function VideoBackground({
  src = "/video.mp4",
  className,
  overlay = true,
  overlayOpacity = 40,
}: VideoBackgroundProps) {
  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}

      {/* Fallback gradient for when video doesn't load */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
    </div>
  );
}
