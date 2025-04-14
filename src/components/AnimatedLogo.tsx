
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const AnimatedLogo = () => {
  const totalFrames = 30;
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Precargar imágenes para asegurar que la animación funcione correctamente
    const preloadImages = async () => {
      const imagePromises = Array.from({ length: totalFrames }).map((_, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `/logo-frames/1bfb2347e9924335954c7edecbb50dd7Cwg1pjV2ZbgvfAvX-${index}.png`;
          img.onload = () => {
            setImagesLoaded(prev => prev + 1);
            resolve(img);
          };
          img.onerror = (e) => {
            console.error(`Error cargando frame ${index}:`, e);
            reject(e);
          };
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsAnimating(true);
        console.log("Todos los frames cargados correctamente");
      } catch (err) {
        console.error("Error al cargar los frames:", err);
      }
    };

    preloadImages();
  }, []);

  return (
    <div className="relative inline-flex items-center justify-center h-6 w-6 align-middle overflow-hidden">
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="w-full h-full object-contain"
        style={{ display: isAnimating ? "none" : "block" }}
      />
      
      {isAnimating && (
        <div className="logo-animation absolute inset-0">
          {Array.from({ length: totalFrames }).map((_, frameIndex) => (
            <img 
              key={frameIndex}
              src={`/logo-frames/1bfb2347e9924335954c7edecbb50dd7Cwg1pjV2ZbgvfAvX-${frameIndex}.png`}
              alt={`Animation Frame ${frameIndex}`}
              className={`absolute inset-0 w-full h-full object-contain frame-${frameIndex}`}
              loading="eager"
            />
          ))}
        </div>
      )}

      {!isAnimating && imagesLoaded > 0 && (
        <div className="text-xs text-gray-400 absolute -bottom-4">
          Cargando: {Math.round((imagesLoaded / totalFrames) * 100)}%
        </div>
      )}
    </div>
  );
};

export default AnimatedLogo;
