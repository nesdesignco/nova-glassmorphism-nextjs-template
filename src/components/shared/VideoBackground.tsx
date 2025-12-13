"use client";

import { useEffect, useRef } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay engellendi, kullanıcı etkileşimi bekle
      });
    }
  }, []);

  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
      />
      {overlay && <div className="absolute inset-0 bg-black/30" />}
      <div className="absolute inset-0 -z-10 bg-black" />
    </div>
  );
}
