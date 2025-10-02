import { motion } from "framer-motion";

const projects = [
  {
    name: "Hydrion Game Bot",
    description: "A feature-rich Discord game bot with fun and engaging commands.",
    github: "https://github.com/Hydradevx/Hydrion-Game-Bot",
    codename: "GAME_INFILTRATION"
  },
  {
    name: "Hypr",
    description: "A powerful automation tool for Discord with advanced capabilities.",
    github: "https://github.com/Hydradevx/Hypr", 
    codename: "SHADOW_AUTOMATION"
  },
  {
    name: "Dotfiles",
    description: "My personalized development environment and system configuration.",
    github: "https://github.com/Hydradevx/dotfiles",
    codename: "OPERATIVE_SETUP"
  },
  {
    name: "HydraDevX Portfolio",
    description: "My personal portfolio showcasing my work and skills.",
    github: "https://github.com/Hydradevx/HydraDevX-Portfolio",
    codename: "IDENTITY_MASK"
  },
];

export default function Projects() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center text-white py-20 px-10 relative overflow-hidden bg-[#0a0a0a]">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-black font-nerd bg-gradient-to-r from-[#ff003c] to-[#8b0000] bg-clip-text text-transparent drop-shadow-[0_0_20px_#ff003c55] mb-4">
            OPERATIVE_ARSENAL
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#ff003c] to-[#8b0000] mx-auto"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-gray-400 font-nerd text-sm"
          >
            CLASSIFIED_TOOLS_AND_WEAPONS
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Project Card */}
              <div className="relative border border-red-500/30 bg-black/40 backdrop-blur-sm rounded-lg p-6 h-full transition-all duration-500 group-hover:border-red-500/60 group-hover:bg-black/60">
                
                {/* Codename Badge */}
                <div className="absolute -top-3 left-4 bg-red-500 text-black font-nerd text-xs px-3 py-1 rounded-full border border-red-300">
                  {project.codename}
                </div>
                
                {/* Project Header */}
                <div className="mb-4 pt-2">
                  <h3 className="text-2xl font-bold font-nerd text-white group-hover:text-red-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 font-nerd text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Access Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff003c] to-[#8b0000] text-white font-nerd rounded-lg border border-red-500/50 hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>ACCESS_SOURCE</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </motion.a>

                {/* Hover Effect Glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Connection Lines (for grid layout) */}
              {index < projects.length - 1 && (
                <motion.div
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-red-500/30"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Arsenal Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 border border-red-500/20 bg-black/30 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-500 font-nerd text-sm">ARSENAL_STATUS</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="text-gray-300 font-nerd text-sm space-y-2">
            <p><span className="text-red-400">&gt;_ </span>ACTIVE_WEAPONS: <span className="text-red-400">{projects.length}</span></p>
            <p><span className="text-red-400">&gt;_ </span>OPERATIONAL_STATUS: <span className="text-red-400">FULLY_ARMED</span></p>
            <p><span className="text-red-400">&gt;_ </span>NEXT_DEPLOYMENT: <span className="text-red-400">AWAITING_ORDERS</span></p>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red Accent Glows */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-900 rounded-full blur-[100px] opacity-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-red-800 rounded-full blur-[80px] opacity-10"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,60,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Corner Brackets */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-red-500/20"></div>
        <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-red-500/20"></div>
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-red-500/20"></div>
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-red-500/20"></div>
      </div>

      {/* Floating Binary Rain */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500/20 font-nerd text-xs"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 6 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Section Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute left-8 top-1/2 transform -translate-y-1/2"
      >
        <div className="flex items-center gap-2 text-red-500/60 font-nerd text-sm rotate-90 origin-left">
          <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
          OPERATIVE_ARSENAL
        </div>
      </motion.div>
    </section>
  );
}