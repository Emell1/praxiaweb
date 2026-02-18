import { useMemo, useState } from "react";

interface ServiceHeroImageProps {
  baseName: string;
  alt: string;
  objectPosition?: string;
  scale?: number;
  offsetX?: number;
  offsetY?: number;
  containMode?: boolean;
  backgroundPosition?: string;
}

const ServiceHeroImage = ({
  baseName,
  alt,
  objectPosition = "50% 50%",
  scale = 1,
  offsetX = 0,
  offsetY = 0,
  containMode = false,
  backgroundPosition = "center center",
}: ServiceHeroImageProps) => {
  const [imageSrc, setImageSrc] = useState(`/images/servicios/${baseName}.png`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImageSrc(`/images/servicios/${baseName}.jpg`);
      setHasError(true);
    }
  };

  const transform = useMemo(() => {
    const x = Number.isFinite(offsetX) ? offsetX : 0;
    const y = Number.isFinite(offsetY) ? offsetY : 0;
    const s = Number.isFinite(scale) ? scale : 1;
    return `scale(${s}) translate(${x}%, ${y}%)`;
  }, [offsetX, offsetY, scale]);

  if (containMode) {
    return (
      <div
        className="hero-image-wrapper mb-12 rounded-lg"
        style={{ height: "350px", backgroundColor: "#ffffff" }}
      >
        <img
          src={imageSrc}
          alt={alt}
          onError={handleError}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: objectPosition,
          }}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="hero-image-wrapper mb-12 rounded-lg">
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        className="hero-image"
        style={{
          transform,
          objectPosition,
        }}
        loading="lazy"
      />
    </div>
  );
};

export default ServiceHeroImage;
