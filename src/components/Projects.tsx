import { motion } from "framer-motion";

const projects = [
  {
    name: "Hydrion Game Bot",
    description: "A feature-rich Discord game bot with fun and engaging commands.",
    github: "https://github.com/Hydradevx/Hydrion-Game-Bot",
  },
  {
    name: "Hydrion S3LFB0T",
    description: "A powerful selfbot for Discord with automation and utility commands.",
    github: "https://github.com/Hydradevx/Hydrion-S3LFB0T",
  },
  {
    name: "Hydrion OwO Farmbot",
    description: "An automated farming bot for the OwO Discord bot.",
    github: "https://github.com/Hydradevx/Hydrion-OwO-Farmbot",
  },
  {
    name: "HydraDevX Portfolio",
    description: "My personal portfolio showcasing my work and skills.",
    github: "https://github.com/Hydradevx/HydraDevX-Portfolio",
  },
];

export default function Projects() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center text-white py-20 px-10 relative overflow-hidden">
      {/* Animated Ocean-like Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0d1b2a] to-[#112a46] animate-gradient">
        <motion.div
          className="absolute w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(0,0,255,0.2),_transparent)]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-5xl font-bold text-blue-400 drop-shadow-[0_0_20px_#00f] mb-12"
      >
        My Projects
      </motion.h2>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1a1a2e] p-6 rounded-2xl shadow-lg border border-blue-500 hover:shadow-blue-500 transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-blue-400">{project.name}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}