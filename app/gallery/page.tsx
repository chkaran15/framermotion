// import { RevealTransition } from "@/components/animation/reveal-transistion";

// export default function GalleryPage() {
//   return (
//     <div className="  flex flex-col justify-center items-center  bg-primaryShade bg-noise bg-no-repeat bg-cover text-white ">
//       <div className="h-screen w-full flex justify-center items-center px-10">
//         <RevealTransition className="w-auto">
//           <h1 className="text-black text-5xl font-bold py-4 ">
//             Welcome to gallery Page
//           </h1>
//         </RevealTransition>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { floating1, floating2, floating3, floating4, floating5, floating6, floating7, floating8 } from "@/components/floating-gallery/data";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Create spring animations for smooth movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.1 };

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  // Transform values for different layers (parallax effect)
  const x1 = useTransform(x, (value) => value);
  const y1 = useTransform(y, (value) => value);
  const x2 = useTransform(x, (value) => value * 0.5);
  const y2 = useTransform(y, (value) => value * 0.5);
  const x3 = useTransform(x, (value) => value * 0.25);
  const y3 = useTransform(y, (value) => value * 0.25);

  const handleMouseMove = (e) => {
    const { movementX, movementY } = e;

    // Accumulate movement with dampening
    x.set(x.get() + movementX * 0.01);
    y.set(y.get() + movementY * 0.01);
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="h-screen w-screen overflow-hidden relative bg-black cursor-none"
    >
      {/* First plane - brightness 70% */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="w-full h-full absolute brightness-75"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src={floating1}
            alt="image"
            width={300}
            height={200}
            className="absolute left-[90%] top-[70%] pointer-events-none"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={floating2}
            alt="image"
            width={300}
            height={200}
            className="absolute left-[5%] top-[65%] pointer-events-none"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src={floating7}
            alt="image"
            width={225}
            height={150}
            className="absolute left-[35%] top-0 pointer-events-none"
          />
        </motion.div>
      </motion.div>

      {/* Second plane - brightness 60% */}
      <motion.div
        style={{ x: x2, y: y2 }}
        className="w-full h-full absolute brightness-50"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src={floating4}
            alt="image"
            width={250}
            height={170}
            className="absolute left-[5%] top-[10%] pointer-events-none"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Image
            src={floating6}
            alt="image"
            width={200}
            height={130}
            className="absolute left-[80%] top-[5%] pointer-events-none"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Image
            src={floating8}
            alt="image"
            width={225}
            height={150}
            className="absolute left-[60%] top-[60%] pointer-events-none"
          />
        </motion.div>
      </motion.div>

      {/* Third plane - brightness 50% */}
      <motion.div
        style={{ x: x3, y: y3 }}
        className="w-full h-full absolute brightness-[0.35]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Image
            src={floating3}
            alt="image"
            width={150}
            height={100}
            className="absolute left-[65%] top-[2.5%] pointer-events-none"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Image
            src={floating5}
            alt="image"
            width={200}
            height={130}
            className="absolute left-[40%] top-[75%] pointer-events-none"
          />
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute left-1/2 top-[45%] transform -translate-x-1/2 -translate-y-1/2 text-lg z-10"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="font-normal text-white m-0 text-center"
        >
          Floating Images Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-gray-400 m-0 text-center mt-2"
        >
          Next.js and Framer Motion
        </motion.p>
      </motion.div>

      {/* Optional: Add a subtle mouse follower */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute w-4 h-4 bg-white/10 rounded-full pointer-events-none z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </main>
  );
}
