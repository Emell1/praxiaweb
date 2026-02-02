import { useMemo, useState } from "react";

interface ServiceHeroImageProps {
  baseName: string; // e.g., "hero-comercial" (without extension)
  alt: string;
  objectPosition?: string; // custom positioning for different images
  /**
   * Zoom factor. Use <1 to zoom out (show more), >1 to zoom in.
   * Default is slightly zoomed out to avoid cutting off the wooden figures.
   */
  scale?: number;
  /** Pan the image after scaling (percentages). Positive moves right/down. */
  offsetX?: number;
  offsetY?: number;
}

const ServiceHeroImage = ({
  baseName,
  alt,
  objectPosition = "center 60%",
  // Default: keep full figure visible and fairly large
  scale = 1,
  offsetX = 0,
  offsetY = 0,
}: ServiceHeroImageProps) => {
  const [imageSrc, setImageSrc] = useState(`/images/servicios/${baseName}.png`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      // Try .jpg if .png fails
      setImageSrc(`/images/servicios/${baseName}.jpg`);
      setHasError(true);
    }
  };

  const transform = useMemo(() => {
    const x = Number.isFinite(offsetX) ? offsetX : 0;
    const y = Number.isFinite(offsetY) ? offsetY : 0;
    const s = Number.isFinite(scale) ? scale : 1;
    // translate first to avoid surprising offsets when scaling
    return `translate(${x}%, ${y}%) scale(${s})`;
  }, [offsetX, offsetY, scale]);

  return (
    <div className="relative w-full h-72 md:h-[28rem] bg-muted mb-12 rounded-lg overflow-hidden">
      {/* Background fill (makes the hero feel full-size) */}
      <img
        src={imageSrc}
        alt=""
        aria-hidden
        onError={handleError}
        className="absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-30"
        loading="lazy"
      />

      {/* Foreground (full object visible + centered) */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src={imageSrc}
          alt={alt}
          onError={handleError}
          className="h-full w-full object-contain p-4 md:p-6"
          style={{
            objectPosition,
            transform,
            transformOrigin: "center",
            willChange: "transform",
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ServiceHeroImage;
