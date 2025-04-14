
import React, { useEffect, useState } from "react";

const AnimatedLogo = () => {
  const totalFrames = 30;
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Precargar todas las imágenes
  useEffect(() => {
    const preloadImages = async () => {
      console.log("Comenzando precarga de imágenes");
      const imagePromises = Array.from({ length: totalFrames }).map((_, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `/logo-frames/1bfb2347e9924335954c7edecbb50dd7Cwg1pjV2ZbgvfAvX-${index}.png`;
          img.onload = () => {
            setImagesLoaded(prev => prev + 1);
            console.log(`Frame ${index} cargado correctamente`);
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
        console.log("Todas las imágenes cargadas correctamente");
        setIsReady(true);
      } catch (err) {
        console.error("Error al cargar las imágenes:", err);
      }
    };

    preloadImages();
  }, []);

  // Controlar la animación usando un frame actual
  useEffect(() => {
    if (!isReady) return;
    
    const animationInterval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % totalFrames);
    }, 100); // Cambia el frame cada 100ms
    
    return () => clearInterval(animationInterval);
  }, [isReady, totalFrames]);

  return (
    <div className="relative inline-flex items-center justify-center h-6 w-6 align-middle overflow-hidden">
      {!isReady ? (
        <>
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
          {imagesLoaded > 0 && (
            <div className="text-xs text-gray-400 absolute -bottom-4">
              Cargando: {Math.round((imagesLoaded / totalFrames) * 100)}%
            </div>
          )}
        </>
      ) : (
        <img 
          src={`/logo-frames/1bfb2347e9924335954c7edecbb50dd7Cwg1pjV2ZbgvfAvX-${currentFrame}.png`}
          alt={`Logo Frame ${currentFrame}`}
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
};

export default AnimatedLogo;
