import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  const aboutMeRef = useRef(null);
  const isInView = useInView(aboutMeRef, { margin: "-50%" });

  return (
    <section
      ref={aboutMeRef}
      className="w-full h-screen flex flex-col justify-center items-center text-center text-white relative pt-20 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-black font-nerd bg-gradient-to-r from-[#ff003c] to-[#8b0000] bg-clip-text text-transparent drop-shadow-[0_0_20px_#ff003c55] mb-4">
            OPERATIVE_DOSSIER
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#ff003c] to-[#8b0000] mx-auto"></div>
        </motion.div>

        {/* Mission Briefing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left"
          >
            <div className="border border-red-500/30 bg-black/40 backdrop-blur-sm rounded-lg p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-500 font-nerd text-sm">ACTIVE_MISSION_BRIEF</span>
              </div>
              
              <div className="space-y-4 text-gray-300 font-nerd">
                <p>
                  <span className="text-red-400">&gt;_ </span>
                  OPERATIVE_STATUS: <span className="text-red-400">ACTIVE</span>
                </p>
                <p>
                  <span className="text-red-400">&gt;_ </span>
                  CURRENT_DEPLOYMENT: <span className="text-red-400">HYDRION</span>
                </p>
                <p>
                  <span className="text-red-400">&gt;_ </span>
                  SPECIALIZATION: <span className="text-red-400">STEALTH_DEVELOPMENT</span>
                </p>
                <div className="border-t border-red-500/20 pt-4 mt-4">
                  <p className="text-red-400 mb-2">PRIMARY_SKILLSET:</p>
                  <ul className="text-sm space-y-1">
                    <li>• AUTOMATION_ENGINEERING</li>
                    <li>• API_ARCHITECTURE</li>
                    <li>• FULL_STACK_OPERATIONS</li>
                    <li>• DISCORD_BOT_INFILTRATION</li>
                    <li>• AI_INTEGRATION</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - GitHub Intel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            {/* GitHub Stats */}
            <div className="border border-red-500/30 bg-black/40 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-500 font-nerd text-sm">OPERATIVE_STATS</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=Hydradevx&theme=dark&bg_color=0a0a0a&title_color=ff003c&text_color=ffffff&icon_color=ff003c&hide_border=true&include_all_commits=true&count_private=true" 
                  alt="GitHub Stats" 
                  className="w-full max-w-[400px] rounded"
                />
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hydradevx&theme=dark&bg_color=0a0a0a&title_color=ff003c&text_color=ffffff&icon_color=ff003c&hide_border=true&layout=compact" 
                  alt="Top Languages" 
                  className="w-full max-w-[400px] rounded"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://discord.gg/6Tufbvnebj"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-[#ff003c] to-[#8b0000] text-white font-nerd rounded-lg border border-red-500/50 hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/20"
              >
                JOIN_SECRET_COMMUNITY
              </a>
              <a
                href="https://github.com/Hydradevx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white font-nerd rounded-lg border border-red-500/30 hover:border-red-400 transition-all duration-300 hover:scale-105"
              >
                ACCESS_GITHUB_INTEL
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Current Operations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 border border-red-500/20 bg-black/30 backdrop-blur-sm rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-500 font-nerd text-sm">CURRENT_OPERATIONS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 font-nerd text-sm">
            <div className="text-center p-3 border border-red-500/10 rounded">
              <div className="text-red-400 mb-1">AI_RESEARCH</div>
              <div className="text-xs text-gray-400">ADVANCED_THREAT_ANALYSIS</div>
            </div>
            <div className="text-center p-3 border border-red-500/10 rounded">
              <div className="text-red-400 mb-1">DISTRIBUTED_SYSTEMS</div>
              <div className="text-xs text-gray-400">SHADOW_NETWORK_EXPANSION</div>
            </div>
            <div className="text-center p-3 border border-red-500/10 rounded">
              <div className="text-red-400 mb-1">PERFORMANCE_OPS</div>
              <div className="text-xs text-gray-400">OPTIMIZATION_PROTOCOLS</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red Accent Glows */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-900 rounded-full blur-[80px] opacity-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-red-800 rounded-full blur-[60px] opacity-10"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Scan Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,60,0.02)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
        
        {/* Corner Brackets */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-red-500/30"></div>
        <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-red-500/30"></div>
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-red-500/30"></div>
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-red-500/30"></div>
      </div>

      {/* Floating Code Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500/30 font-nerd text-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {['&gt;_', '0x', 'func()', 'async', 'await', 'const', 'export', 'import'][i]}
          </motion.div>
        ))}
      </div>

      {/* Section Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        className="absolute left-8 top-1/2 transform -translate-y-1/2"
      >
        <div className="flex items-center gap-2 text-red-500/60 font-nerd text-sm rotate-90 origin-left">
          <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
          OPERATIVE_DOSSIER
        </div>
      </motion.div>
    </section>
  );
}