import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-10 relative bg-[#0a0a0a]">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.h2 className="text-5xl font-black font-nerd bg-gradient-to-r from-[#ff003c] to-[#8b0000] bg-clip-text text-transparent mb-4">
          CONTACT_PROTOCOL
        </motion.h2>
        
        <motion.p className="text-gray-400 font-nerd mb-8">
          INITIATE_SECURE_CONNECTION
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.a
            href="https://discord.com/users/1251647487081709682"
            target="_blank"
            className="p-6 border border-red-500/30 bg-black/40 rounded-lg hover:border-red-500/60 transition-all group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-red-400 font-nerd mb-2">DIRECT_MESSAGE</div>
            <div className="text-gray-300 text-sm">DISCORD_PROTOCOL</div>
          </motion.a>
          
          <motion.a
            href="https://github.com/Hydradevx"
            target="_blank" 
            className="p-6 border border-red-500/30 bg-black/40 rounded-lg hover:border-red-500/60 transition-all group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-red-400 font-nerd mb-2">SOURCE_COMMS</div>
            <div className="text-gray-300 text-sm">GITHUB_CHANNEL</div>
          </motion.a>
        </div>

        <motion.div
          className="border border-red-500/20 bg-black/30 rounded-lg p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="text-red-400 font-nerd text-sm mb-2">ENCRYPTION_STATUS: ACTIVE</div>
          <div className="text-gray-400 font-nerd text-xs">ALL_COMMUNICATIONS_SECURE</div>
        </motion.div>
      </div>
    </section>
  );
}