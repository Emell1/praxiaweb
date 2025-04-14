
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  const parts = [
    { rotate: 45, translateX: "-25%", translateY: "-25%" },    // Top right
    { rotate: 135, translateX: "25%", translateY: "-25%" },    // Bottom right
    { rotate: 225, translateX: "25%", translateY: "25%" },     // Bottom left
    { rotate: 315, translateX: "-25%", translateY: "25%" },    // Top left
  ];

  return (
    <div className="relative inline-block h-8 w-8 align-middle">
      {parts.map((part, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "40%",
            height: "2px",
            backgroundColor: "#222222",
            transformOrigin: "center",
            transform: `rotate(${part.rotate}deg) translate(${part.translateX}, ${part.translateY})`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLogo;
