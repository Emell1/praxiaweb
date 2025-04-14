
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedLogo = () => {
  const [animationKey, setAnimationKey] = useState(0);
  
  // Efecto para reiniciar la animación periódicamente
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 3000); // Reinicia cada 3 segundos
    
    return () => clearInterval(timer);
  }, []);

  // Definimos las líneas que forman la X
  const lines = [
    { id: 1, from: { x: -10, y: -10 }, to: { x: 10, y: 10 } }, // Línea diagonal superior izquierda a inferior derecha (↘)
    { id: 2, from: { x: 10, y: -10 }, to: { x: -10, y: 10 } }  // Línea diagonal superior derecha a inferior izquierda (↙)
  ];

  return (
    <div className="relative inline-flex items-center justify-center h-6 w-6 align-middle">
      {lines.map((line, index) => (
        <motion.div
          key={`${line.id}-${animationKey}`}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.4, // Retraso secuencial para cada línea
            ease: "easeInOut"
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
