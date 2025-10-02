import { useState, useEffect } from 'react';
import { Menu, X, Github, Users, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'SOURCE_INTEL',
      href: 'https://github.com/Hydradevx',
      icon: Github,
      codename: 'GITHUB'
    },
    {
      name: 'SHADOW_NETWORK', 
      href: 'https://discord.gg/6Tufbvnebj',
      icon: Users,
      codename: 'DISCORD_SERVER'
    },
    {
      name: 'OPERATIVE_PROFILE',
      href: 'https://discord.com/users/1251647487081709682',
      icon: User,
      codename: 'DISCORD_PROFILE'
    }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-red-500/30' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Operative Identity */}
        <motion.a 
          href="#" 
          className="flex items-center space-x-3 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/185927943?s=400&u=81d65d74e28356cb0f77c12442e915fa2dda7c8b&v=4"
              alt="Operative Identity"
              className="w-9 h-9 rounded-full border-2 border-red-500 group-hover:border-red-400 transition-colors duration-300"
            />
            <motion.div
              className="absolute -inset-1 border border-red-500 rounded-full opacity-0 group-hover:opacity-100"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-nerd bg-gradient-to-r from-[#ff003c] to-[#8b0000] bg-clip-text text-transparent text-lg font-black tracking-tight">
              Shadow_Operative
            </span>
            <span className="font-nerd text-red-500/60 text-xs -mt-1">
              STATUS: ACTIVE
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-1">
          {navItems.map((item, index) => (
            <motion.li key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-red-500/20 bg-black/40 text-gray-300 font-nerd text-sm hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={16} className="text-red-500" />
                <span>{item.name}</span>
                <motion.div
                  className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg border border-red-500/20 bg-black/40 text-gray-300 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-red-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg border border-red-500/20 bg-black/40 text-gray-300 font-nerd text-sm hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon size={18} className="text-red-500" />
                  <div className="flex-1">
                    <div>{item.name}</div>
                    <div className="text-red-500/60 text-xs">{item.codename}</div>
                  </div>
                  <motion.div
                    className="w-2 h-2 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.a>
              ))}
              
              {/* Mobile Status */}
              <motion.div
                className="p-3 rounded-lg border border-red-500/10 bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="flex items-center justify-between text-xs font-nerd">
                  <span className="text-gray-400">CONNECTION:</span>
                  <span className="text-red-500 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    SECURE
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.nav>
  );
}