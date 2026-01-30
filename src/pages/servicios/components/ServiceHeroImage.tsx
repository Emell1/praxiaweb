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
  scale = 0.9,
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
    <div className="w-full h-64 md:h-96 bg-muted mb-12 rounded-lg overflow-hidden">
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        className="w-full h-full object-cover"
        style={{
          objectPosition,
          transform,
          transformOrigin: objectPosition,
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default ServiceHeroImage;
