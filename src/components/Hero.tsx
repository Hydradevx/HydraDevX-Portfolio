import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Hey! I'm Hydra_DevX";
  const typingSpeed = 100;

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
        <h1 className="text-8xl font-extrabold text-blue-500 drop-shadow-[0_0_30px_#00f]">{text}</h1>
        <p className="mt-6 text-2xl text-gray-300 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_#00f]">
          A passionate developer who loves creating <br />
          futuristic solutions and pushing the limits of <br />
          technology. Exploring new possibilities <br />
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
      <div className="relative w-1/2 flex justify-center">
        <motion.div className="relative w-[500px] h-[500px] flex items-center justify-center">
          {[100, 150, 200, 250].map((radius, index) => (
            <motion.div
              key={index}
              className="absolute border border-blue-500 rounded-full"
              style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
            />
          ))}
          {[2, 8, 18, 32].map((count, shellIndex) => (
            [...Array(count)].map((_, index) => {
              const angle = (index / count) * (2 * Math.PI);
              const radius = 100 + shellIndex * 50;
              return (
                <motion.div
                  key={`${shellIndex}-${index}`}
                  className="absolute w-3 h-3 bg-blue-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4 + shellIndex, ease: "linear" }}
                  style={{
                    top: `calc(50% + ${radius * Math.sin(angle)}px - 6px)`,
                    left: `calc(50% + ${radius * Math.cos(angle)}px - 6px)`
                  }}
                />
              );
            })
          ))}
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-blue-400 text-lg animate-bounce">
        Scroll Down ↓
      </motion.div>
    </section>
  );
}
