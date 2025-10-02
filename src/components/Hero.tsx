import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["影の開発者", "Hydra_DevX"];
  const typingSpeed = 100;
  const switchDelay = 3000;
  const scrollRef = useRef(null);
  const isScrolling = useInView(scrollRef, { margin: "-50%" });

  useEffect(() => {
    let i = 0;
    let currentText = texts[currentTextIndex];
    
    const typingInterval = setInterval(() => {
      if (i < currentText.length) {
        setDisplayText(currentText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, switchDelay);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentTextIndex]);

  useEffect(() => {
    setDisplayText('');
  }, [currentTextIndex]);

  return (
    <section className="relative w-full h-screen flex items-center justify-between px-12 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Left Side - Main Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-start text-left w-1/2"
      >
        {/* Japanese Seal */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-20 h-20 border-2 border-red-600 rounded-full mb-6 flex items-center justify-center relative"
        >
          <div className="absolute inset-0 border-2 border-red-900 rounded-full animate-ping opacity-20"></div>
          <span className="text-red-600 text-lg font-japanese">忍</span>
        </motion.div>

        {/* Codename */}
        <div className="mb-2">
          <span className="text-sm text-gray-500 font-nerd tracking-widest border-b border-red-500/30 pb-1">
            CODENAME_ACTIVE
          </span>
        </div>
        
        {/* Main Title - Switching Text */}
        <div className="h-24 mb-4 flex items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`text-6xl font-black bg-gradient-to-r from-[#ff003c] to-[#8b0000] bg-clip-text text-transparent drop-shadow-[0_0_30px_#ff003c55] ${
                currentTextIndex === 0 ? 'font-japanese' : 'font-nerd'
              }`}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-red-500"
              >
                |
              </motion.span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p 
            key={currentTextIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-gray-400 font-japanese mb-6 tracking-wider"
          >
            {currentTextIndex === 0 ? "暗黒の開発者" : "Shadow Developer"}
          </motion.p>
        </AnimatePresence>
        
        {/* Mission Briefing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-lg text-gray-300 font-nerd border border-red-500/30 bg-black/40 backdrop-blur-sm p-6 rounded-lg w-full max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-500 text-sm">MISSION_BRIEFING</span>
          </div>
          <p className="leading-relaxed">
            SPECIALIZING IN <span className="text-red-400">STEALTH DEVELOPMENT</span><br/>
            AND <span className="text-red-400">LETHAL USER EXPERIENCES</span>.<br/>
            OPERATING IN THE SHADOWS OF MODERN TECHNOLOGY.
          </p>
        </motion.div>
      </motion.div>

      {/* Right Side - Discord & Visual Elements */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-end w-2/5"
      >
        {/* Discord Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="relative mb-8"
        >
          <div className="absolute -inset-1 bg-red-500/20 rounded-lg blur-sm"></div>
          <img
            src="https://lanyard.cnrad.dev/api/1251647487081709682"
            alt="Mission Status"
            className="relative rounded-lg border border-red-500/30 bg-black/30 backdrop-blur-sm w-full"
          />
          <div className="absolute bottom-3 left-3 text-xs text-red-400 font-nerd bg-black/70 px-2 py-1 rounded border border-red-900/50">
            ACTIVE_MISSION
          </div>
        </motion.div>

        {/* Stats Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="border border-red-500/20 bg-black/30 backdrop-blur-sm rounded-lg p-6 w-full"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-red-500/10 pb-2">
              <span className="text-gray-400 font-nerd text-sm">STATUS</span>
              <span className="text-red-500 font-nerd text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                OPERATIONAL
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-red-500/10 pb-2">
              <span className="text-gray-400 font-nerd text-sm">SPECIALTY</span>
              <span className="text-red-400 font-nerd text-sm">STEALTH_DEV</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-nerd text-sm">LOCATION</span>
              <span className="text-red-400 font-nerd text-sm">SHADOW_NET</span>
            </div>
          </div>
        </motion.div>

        {/* Vertical Kanji */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="mt-8 text-right"
        >
          <div className="text-red-500/40 font-japanese text-lg writing-mode-vertical-rl tracking-widest h-32 flex items-center justify-center">
            影<br/>忍<br/>開<br/>発<br/>闇
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900 rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-800 rounded-full blur-[80px] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,60,0.03)_1px,transparent_1px)] bg-[size:100%_3px]"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-red-500/20"></div>
        <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-red-500/20"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-red-500/20"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-red-500/20"></div>
      </div>

      {/* Text Cycle Indicator */}
      <div className="absolute bottom-20 left-12">
        <div className="flex items-center gap-2 text-xs text-gray-500 font-nerd">
          <div className="flex gap-1">
            {texts.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTextIndex ? 'bg-red-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          <span>TEXT_CYCLE_ACTIVE</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      {!isScrolling && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-red-500/70 text-sm font-nerd mb-3 tracking-widest"
            >
              スクロール
            </motion.div>
            <motion.div
              animate={{ 
                opacity: [1, 0.3, 1]
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-12 bg-gradient-to-t from-red-500 to-transparent mx-auto"
            />
          </div>
        </motion.div>
      )}
      <div ref={scrollRef} className="absolute bottom-0 w-full h-10" />
    </section>
  );
}