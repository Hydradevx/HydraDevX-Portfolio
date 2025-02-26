import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Hey! I'm Hydra_DevX";
  const typingSpeed = 100;
  const scrollRef = useRef(null);
  const isScrolling = useInView(scrollRef, { margin: "-50%" });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, (i % fullText.length) + 1));
      i++;
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-between px-12 bg-black text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-start text-left w-1/2">
        <h1 className="text-6xl font-extrabold text-blue-500 drop-shadow-[0_0_30px_#00f]">{text}</h1>
        <p className="mt-6 text-2xl text-gray-300 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_#00f]">
          A passionate developer who loves creating 
          futuristic solutions and pushing the limits of 
          technology. Exploring new possibilities 
          every day with innovation and creativity.
        </p>
        <motion.img
          src="https://lanyard.cnrad.dev/api/1251647487081709682"
          alt="Discord Activity"
          className="mt-8 w-[35rem] rounded-lg shadow-lg border-4 border-blue-500 animate-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>
      
      {/* 3D Sphere with Distortion Effect */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[500px] h-[500px]">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <Sphere args={[2.5, 32, 32]}>
            <MeshDistortMaterial
              color="#0077FF"
              attach="material"
              distort={0.5}
              speed={4}
            />
          </Sphere>
        </Canvas>
      </div>
      
      {/* Glitch & Hologram Effect Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-full h-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-10"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-full h-full bg-noise opacity-5"
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
      
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3], filter: ["blur(0px)", "blur(5px)", "blur(0px)"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-grid bg-repeat opacity-10" />
      </motion.div>

      {/* Scroll Indicator - Hides When Scrolling to Next Section */}
      {!isScrolling && (
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-blue-400 text-lg animate-bounce">
          Scroll Down ↓
        </motion.div>
      )}
      <div ref={scrollRef} className="absolute bottom-0 w-full h-10" />
    </section>
  );
}
