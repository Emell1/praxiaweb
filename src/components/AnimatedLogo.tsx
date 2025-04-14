
import React from "react";
import { cn } from "@/lib/utils";

const AnimatedLogo = () => {
  const totalFrames = 30;

  return (
    <div className="relative inline-flex items-center justify-center h-6 w-6 align-middle overflow-hidden">
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          console.error("Error loading image:", e);
          e.currentTarget.style.display = 'none';
        }}
      />
      
      <div className="logo-animation absolute inset-0">
        {[...Array(totalFrames)].map((_, frameIndex) => (
          <img 
            key={frameIndex}
            src={`/logo-frames/1bfb2347e9924335954c7edecbb50dd7Cwg1pjV2ZbgvfAvX-${frameIndex}.png`}
            alt={`Animation Frame ${frameIndex}`}
            className={cn(
              "absolute inset-0 w-full h-full object-contain",
              "opacity-0 transition-opacity duration-300",
              `frame-${frameIndex}`
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogo;
