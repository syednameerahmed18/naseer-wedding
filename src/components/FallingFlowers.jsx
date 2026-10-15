import { motion } from "motion/react";

const flowers = [
  { id: 1, left: 3, size: 22, duration: 6, delay: 0, drift: 30 },
  { id: 2, left: 8, size: 28, duration: 7, delay: 0.4, drift: -25 },
  { id: 3, left: 13, size: 18, duration: 5.5, delay: 1, drift: 35 },
  { id: 4, left: 18, size: 24, duration: 8, delay: 0.7, drift: -30 },
  { id: 5, left: 23, size: 20, duration: 6.5, delay: 1.5, drift: 20 },
  { id: 6, left: 28, size: 26, duration: 7.5, delay: 0.2, drift: -35 },
  { id: 7, left: 33, size: 18, duration: 5, delay: 1.8, drift: 25 },
  { id: 8, left: 38, size: 24, duration: 8, delay: 0.9, drift: -20 },
  { id: 9, left: 43, size: 22, duration: 6, delay: 2, drift: 30 },
  { id: 10, left: 48, size: 28, duration: 7, delay: 1.2, drift: -25 },
  { id: 11, left: 53, size: 16, duration: 6.5, delay: 2.5, drift: 20 },
  { id: 12, left: 58, size: 22, duration: 7.5, delay: 0.5, drift: -30 },
  { id: 13, left: 63, size: 18, duration: 5.5, delay: 1.6, drift: 25 },
  { id: 14, left: 68, size: 26, duration: 8, delay: 0.8, drift: -20 },
  { id: 15, left: 73, size: 20, duration: 6, delay: 2.2, drift: 35 },
  { id: 16, left: 78, size: 24, duration: 7, delay: 1.1, drift: -25 },
  { id: 17, left: 83, size: 18, duration: 5.5, delay: 2.7, drift: 30 },
  { id: 18, left: 88, size: 28, duration: 7.5, delay: 0.3, drift: -35 },
  { id: 19, left: 93, size: 22, duration: 6.5, delay: 1.9, drift: 20 },
  { id: 20, left: 97, size: 20, duration: 8, delay: 1.4, drift: -30 },
  { id: 21, left: 15, size: 16, duration: 7, delay: 3, drift: 25 },
  { id: 22, left: 35, size: 24, duration: 6, delay: 3.5, drift: -20 },
  { id: 23, left: 57, size: 20, duration: 7.5, delay: 4, drift: 30 },
  { id: 24, left: 76, size: 26, duration: 5.5, delay: 3.2, drift: -25 },
  { id: 25, left: 90, size: 18, duration: 6.5, delay: 4.5, drift: 35 },
];


function FallingFlowers() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {flowers.map((flower) => (
        <motion.span
          key={flower.id}
          className="absolute -top-10 select-none"
          style={{
            left: `${flower.left}%`,
            fontSize: `${flower.size}px`,
            color: "#E8A1B5",
            filter: "drop-shadow(0 1px 2px rgba(152,77,104,0.15))",
          }}
          initial={{ y: "-5vh", x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: "115vh",
            x: [0, flower.drift, -flower.drift, flower.drift / 2],
            rotate: 360,
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            ease: "linear",
            times: [0, 0.15, 0.85, 1],
          }}
        >
          🌸
        </motion.span>
        
      ))}
    </div>
  );
}

export default FallingFlowers;