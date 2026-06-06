import { Heart, Globe, Sparkles } from "lucide-react";
import { Github } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t-4 border-black py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="font-black text-2xl tracking-tighter uppercase mb-4 select-none flex items-center gap-1.5">
            <Sparkles size={22} className="fill-neoyellow text-neoyellow" /> Open <span className="bg-neoyellow text-black px-2 py-0.5 ml-1 rounded-[6px]">Guestbook</span>
          </div>
          <p className="text-gray-400 font-bold text-sm max-w-md leading-relaxed">
            A fun, hands-on repository created to help junior developers learn Git branching, pull requests, and component design by creating their own customized board cards.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/UthkarshMandloi/open-source-guestbook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white text-black border-2 border-white hover:bg-neoyellow hover:border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              aria-label="GitHub Repository"
            >
              <Github size={20} strokeWidth={2.5} />
            </a>
            <a
              href="#"
              className="p-2 bg-white text-black border-2 border-white hover:bg-neocyan hover:border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              aria-label="Website"
            >
              <Globe size={20} strokeWidth={2.5} />
            </a>
          </div>
          
          <p className="text-gray-500 font-mono text-xs flex items-center gap-1 select-none">
            Built with <Heart size={12} className="text-neopink fill-current animate-pulse" /> for open-source learners.
          </p>
        </div>
      </div>
    </footer>
  );
}
