import { motion } from 'framer-motion';

const skills = {
  "Stealth Development": ["Node.js", "Python", "TypeScript", "React"],
  "Cyber Warfare": ["Discord API", "WebSockets", "REST APIs", "Automation"],
  "Shadow Tools": ["Git", "Docker", "Linux", "Bash", "Vim"],
  "Covert Ops": ["Reverse Engineering", "Security Research", "Performance Optimization"]
};

export default function Skills() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-10 relative bg-[#0a0a0a] overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-5xl font-black font-nerd bg-gradient-to-r from-[#ff003c] to-[#8b0000] bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          WEAPONS_ARSENAL
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              className="border border-red-500/30 bg-black/40 backdrop-blur-sm rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-red-400 font-nerd text-lg mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-sm font-nerd text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}