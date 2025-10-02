import { Github, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-10 relative bg-black border-t border-red-500/20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <div className="text-red-400 font-nerd text-lg">Shadow_Operative</div>
            <div className="text-gray-500 font-nerd text-sm">STATUS: ACTIVE</div>
          </div>
          
          <div className="text-center">
            <div className="text-gray-400 font-nerd text-sm mb-2">SHADOW_NETWORK</div>
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/Hydradevx" className="text-gray-500 hover:text-red-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://discord.gg/6Tufbvnebj" className="text-gray-500 hover:text-red-400 transition-colors">
                <Users size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-gray-500 font-nerd text-sm">
              OPERATIVE_SINCE: 2024
            </div>
            <div className="text-gray-600 font-nerd text-xs">
              ALL_RIGHTS_RESERVED
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-red-500/10">
          <div className="text-gray-600 font-nerd text-xs">
            SHADOW_PROTOCOL_ACTIVE • ENCRYPTION: ENABLED • SYSTEM: OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}