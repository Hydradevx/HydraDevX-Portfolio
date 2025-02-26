import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  const aboutMeRef = useRef(null);
  const isInView = useInView(aboutMeRef, { margin: "-50%" });

  return (
    <section
      ref={aboutMeRef}
      className="w-full h-screen flex flex-col justify-center items-center text-center text-white transition-colors duration-1000 relative pt-20"
      style={{
        background: isInView
          ? "linear-gradient(to right, #1a1a2e, #16213e, #0f3460)"
          : "black",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-blue-400 drop-shadow-[0_0_20px_#00f]"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-8 text-xl text-gray-300 max-w-3xl"
      >
        🚀 <span className="text-blue-400">Working on Hydrion | Dev for Hire</span>
        <br /> I specialize in <span className="text-purple-400">automation, API development, and full-stack solutions.</span>
        <br /> I love pushing boundaries with new tech and building futuristic tools.
        <br /> Building <span className="text-blue-400">Discord Bots</span> is my passion, and I love making automation tools for the community.
        <br /> Currently exploring AI, distributed systems, and performance optimization.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="mt-8 flex space-x-4"
      >
        <a
          href="https://discord.gg/6Tufbvnebj"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all"
        >
          Join My Discord
        </a>
        <a
          href="https://github.com/Hydradevx"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all"
        >
          Check My GitHub
        </a>
      </motion.div>
      
      {/* GitHub Widgets Side by Side */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <img src="https://github-readme-stats.vercel.app/api?username=Hydradevx&theme=radical&hide_border=false&include_all_commits=true&count_private=true" alt="GitHub Stats" className="w-[400px] rounded-lg shadow-lg" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hydradevx&theme=radical&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="Top Languages" className="w-[400px] rounded-lg shadow-lg" />
      </div>
      
      {/* Additional Animated Elements */}
      <motion.div
        className="absolute left-10 top-1/4 w-40 h-40 border-2 border-blue-500 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-16 bottom-1/3 w-32 h-32 border-2 border-purple-500 rounded-lg opacity-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 w-2 h-2 rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>
    </section>
  );
}