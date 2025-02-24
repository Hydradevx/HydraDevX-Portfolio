import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-xl border-b border-blue-700 shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 text-gray-300 text-xl font-bold">
          <img
            src="https://avatars.githubusercontent.com/u/185927943?s=400&u=81d65d74e28356cb0f77c12442e915fa2dda7c8b&v=4"
            alt="Hydra_DevX Logo"
            className="w-10 h-10 rounded-full border-2 border-blue-700"
          />
          <span className="text-blue-500">Hydra_DevX</span>
        </a>
        <ul className="hidden md:flex space-x-6 text-gray-300">
          <li><a href="https://github.com/Hydradevx" className="hover:text-blue-500 transition">GitHub</a></li>
          <li><a href="https://discord.gg/6Tufbvnebj" className="hover:text-blue-500 transition">Discord Server</a></li>
          <li><a href="https://discord.com/users/1251647487081709682" className="hover:text-blue-500 transition">Discord Profile</a></li>
        </ul>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-300">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-black/95 text-gray-300 px-6 py-4 space-y-4">
          <a href="https://github.com/Hydradevx" className="block hover:text-blue-500">GitHub</a>
          <a href="https://discord.gg/6Tufbvnebj" className="block hover:text-blue-500">Discord Server</a>
          <a href="https://discord.com/users/1251647487081709682" className="block hover:text-blue-500">Discord Profile</a>
        </div>
      )}
    </nav>
  );
}