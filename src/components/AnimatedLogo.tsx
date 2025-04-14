
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Reinicia la animación cada vez que termine el ciclo
  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => setIsAnimating(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const lines = [
    { from: { x: -10, y: -10 }, to: { x: 10, y: 10 } },  // Línea diagonal 1 (↘)
    { from: { x: -10, y: 10 }, to: { x: 10, y: -10 } },  // Línea diagonal 2 (↗)
  ];

  return (
    <div className="relative inline-flex items-center justify-center h-6 w-6 align-middle mx-1">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isAnimating ? { 
            pathLength: 1, 
            opacity: 1,
            transition: { 
              pathLength: { delay: index * 0.3, duration: 0.5, ease: "easeInOut" },
              opacity: { delay: index * 0.3, duration: 0.2 }
            }
          } : {}}
          onAnimationComplete={() => {
            if (index === lines.length - 1) {
              setTimeout(() => setIsAnimating(false), 1000);
            }
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: 2,
            background: "#222222",
            transformOrigin: "center",
            transform: index === 0 
              ? "rotate(45deg)" 
              : "rotate(-45deg)"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLogo;
