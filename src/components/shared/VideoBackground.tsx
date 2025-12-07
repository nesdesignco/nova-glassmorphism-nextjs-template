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
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && <div className="absolute inset-0 bg-black/30" />}
      <div className="absolute inset-0 -z-10 bg-black" />
    </div>
  );
}
