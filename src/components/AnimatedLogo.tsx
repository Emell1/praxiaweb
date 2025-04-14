
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";

const AnimatedLogo = () => {
  return (
    <div className="relative inline-flex items-center justify-center h-6 w-6 align-middle overflow-hidden">
      {/* Esta es una versión estática que usamos como fallback */}
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          console.error("Error loading image:", e);
          e.currentTarget.style.display = 'none';
        }}
      />
      
      {/* 
        Nota: Para implementar una animación con imágenes estáticas:
        1. Sube tus imágenes JPG/PNG en secuencia (por ejemplo: frame1.png, frame2.png, etc.)
        2. Descomenta y ajusta el código siguiente para crear una animación CSS
      */}
      
      {/* 
      <div className="logo-animation absolute inset-0">
        {[1, 2, 3].map((frameNum) => (
          <img 
            key={frameNum}
            src={`/logo-frames/frame${frameNum}.png`}
            alt={`Animation Frame ${frameNum}`}
            className={cn(
              "absolute inset-0 w-full h-full object-contain",
              "opacity-0 transition-opacity duration-300",
              `frame-${frameNum}`
            )}
          />
        ))}
      </div>
      */}

      {/* 
        Agrega este estilo en tu archivo CSS global o crea un archivo de estilos específico:
        
        .logo-animation .frame-1 { animation: frame1 3s infinite; }
        .logo-animation .frame-2 { animation: frame2 3s infinite; }
        .logo-animation .frame-3 { animation: frame3 3s infinite; }
        
        @keyframes frame1 {
          0%, 100% { opacity: 1; }
          33.33% { opacity: 0; }
          66.66% { opacity: 0; }
        }
        
        @keyframes frame2 {
          0% { opacity: 0; }
          33.33%, 100% { opacity: 1; }
          66.66% { opacity: 0; }
        }
        
        @keyframes frame3 {
          0%, 33.33% { opacity: 0; }
          66.66%, 100% { opacity: 1; }
        }
      */}
    </div>
  );
};

export default AnimatedLogo;
