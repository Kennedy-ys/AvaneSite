import { motion } from 'motion/react';

const BubbleBackground = () => {
  // Define a set of bubbles with unique positions, sizes, and colors
  const bubbles = [
    { id: 1, size: 'w-64 h-64', color: 'bg-purple-500', top: '10%', left: '20%' },
    { id: 2, size: 'w-96 h-96', color: 'bg-blue-400', top: '40%', left: '50%' },
    { id: 3, size: 'w-72 h-72', color: 'bg-orange-500', top: '70%', left: '10%' },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full blur-[80px] opacity-40 ${bubble.size} ${bubble.color}`}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 100, -50, 0], // Keyframes for horizontal movement
            y: [0, -50, 100, 0], // Keyframes for vertical movement
          }}
          transition={{
            duration: 15 + bubble.id * 2, // Varied speeds for natural look
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: bubble.top, left: bubble.left }}
        />
      ))}
      
      {/* Optional: Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
};

export default BubbleBackground;
