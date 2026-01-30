import { useState } from "react";

interface ServiceHeroImageProps {
  baseName: string; // e.g., "hero-comercial" (without extension)
  alt: string;
  objectPosition?: string; // custom positioning for different images
}

const ServiceHeroImage = ({ baseName, alt, objectPosition = "center 60%" }: ServiceHeroImageProps) => {
  const [imageSrc, setImageSrc] = useState(`/images/servicios/${baseName}.png`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      // Try .jpg if .png fails
      setImageSrc(`/images/servicios/${baseName}.jpg`);
      setHasError(true);
    }
  };

  return (
    <div className="w-full h-64 md:h-96 bg-muted mb-12 rounded-lg overflow-hidden">
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        className="w-full h-full object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
};

export default ServiceHeroImage;
