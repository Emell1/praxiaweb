
import React from "react";

const AnimatedLogo = () => {
  // URL directa para visualizar archivos de Google Drive
  const gifUrl = "https://drive.google.com/uc?export=view&id=1WKSDecFgqLRqWAdcPrLQl9KZAXGj3uky";

  return (
    <div className="relative inline-flex items-center justify-center h-6 w-6 align-middle">
      <img 
        src={gifUrl} 
        alt="Animated X Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          console.error("Error loading image:", e);
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
};

export default AnimatedLogo;
