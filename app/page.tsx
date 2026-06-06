import Link from "next/link";
import { contributors } from "@/components/registry";
import { MoveRight, Sparkles, User, HelpCircle, LayoutGrid, FolderOpen } from "lucide-react";
import { Github } from "@/components/Icons";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. Scrolling Marquee Banner */}
      <div className="w-full bg-black py-3 border-y-3 border-black overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-white font-mono text-xs font-black uppercase tracking-widest">
          <span>✦ Open Source Guestbook ✦</span>
          <span>✦ Create Your Card ✦</span>
          <span>✦ Practice Git Branching ✦</span>
          <span>✦ Submit Pull Requests ✦</span>
          <span>✦ Rate Profiles ✦</span>
          <span>✦ Neo-Pop Style ✦</span>
          {/* Duplicate for infinite effect */}
          <span>✦ Open Source Guestbook ✦</span>
          <span>✦ Create Your Card ✦</span>
          <span>✦ Practice Git Branching ✦</span>
          <span>✦ Submit Pull Requests ✦</span>
          <span>✦ Rate Profiles ✦</span>
          <span>✦ Neo-Pop Style ✦</span>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-12">
        
        {/* 2. Hero Welcome Board */}
        <section className="bg-neoyellow border-3 border-black p-5 md:p-6 lg:p-8 neo-shadow flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden rounded-[2rem]">
          <div className="absolute right-4 top-4 text-7xl opacity-10 select-none font-black rotate-12">
            GIT
          </div>
          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-black text-white text-[10px] font-mono font-bold uppercase mb-2 neo-shadow-sm rounded-full">
              <Sparkles size={10} className="text-neogreen fill-current" /> Learner Hub
            </div>
            <h1 className="font-syne font-black text-2xl sm:text-3xl md:text-4xl text-black leading-none uppercase mb-2 tracking-tighter">
              Welcome to the <br className="hidden sm:inline" />
              open-source-guestbook board
            </h1>
            <p className="text-black text-xs sm:text-sm font-bold leading-normal mb-4 max-w-lg">
              This is a collaborative whiteboard for developers to practice making open-source contributions. 
              Create your own custom component card, import it to the whiteboard, and link it to your own custom page!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/get-card" 
                className="px-4 py-2 bg-black text-white border-3 border-black text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 hover:bg-white hover:text-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 rounded-full"
              >
                Get Your Card <MoveRight size={14} />
              </Link>
              <a 
                href="https://github.com/UthkarshMandloi/open-source-guestbook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black border-3 border-black text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 hover:bg-black hover:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 rounded-full"
              >
                Fork Repo <Github size={14} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <div className="bg-neopink border-3 border-black p-4 neo-shadow max-w-[240px] rotate-2 hover:rotate-0 transition-transform rounded-[1.5rem]">
              <HelpCircle size={24} className="text-black" strokeWidth={2.5} />
              <h3 className="font-extrabold text-sm text-black uppercase mt-1">How to play</h3>
              <p className="text-black text-[10px] sm:text-xs font-semibold mt-0.5 leading-normal">
                1. Fork repository<br/>
                2. Add custom card in user-card folder<br/>
                3. Register in registry.ts<br/>
                4. Submit a Pull Request!
              </p>
            </div>
          </div>
        </section>

        {/* 3. Slider/Carousel for Contributor Quick-Links */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-syne font-black text-2xl uppercase tracking-tight text-black flex items-center gap-2">
              <Sparkles size={20} className="fill-neoyellow text-black animate-pulse" /> Contributor Pages Slider
            </h2>
            <span className="font-mono text-xs font-bold text-gray-500 uppercase">
              Swipe to explore &rarr;
            </span>
          </div>
          
          <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-4 md:gap-6 py-2 px-1 w-max">
              {contributors.map((contrib, index) => {
                const rotateClass = index % 2 === 0 ? "hover:rotate-1 rotate-[-1deg]" : "hover:rotate-[-1deg] rotate-[1deg]";
                const bgColors = ["bg-neocyan", "bg-neopink", "bg-neogreen", "bg-neopurple"];
                const bgColor = bgColors[index % bgColors.length];

                return (
                  <Link
                    href={`/profile/${contrib.username}`}
                    key={contrib.username}
                    className={`block w-64 p-4 ${bgColor} border-3 border-black neo-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-150 rounded-[1.5rem] ${rotateClass}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[10px] font-bold bg-black text-white px-2.5 py-1 uppercase rounded-full">
                        @{contrib.gitUsername}
                      </span>
                      <User size={14} className="text-black" />
                    </div>
                    <h4 className="font-black text-lg text-black uppercase truncate">
                      {contrib.name}
                    </h4>
                    <p className="font-bold text-xs text-black/85 mt-1 flex items-center gap-1 uppercase underline decoration-2">
                      Visit profile page &rarr;
                    </p>
                  </Link>
                );
              })}
              {contributors.length === 0 && (
                <div className="p-4 bg-white border-2 border-dashed border-black font-semibold text-gray-500 text-sm rounded-[1rem]">
                  No pages added yet! Be the first.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. Whiteboard Grid */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <h2 className="font-syne font-black text-3xl uppercase tracking-tight text-black flex items-center gap-2">
              <LayoutGrid size={24} className="text-black" strokeWidth={2.5} /> The whiteboard
            </h2>
            <div className="px-3 py-1 bg-black text-white text-xs font-mono font-bold uppercase rounded-full">
              {contributors.length} Registered
            </div>
          </div>
          
          <div className="w-full whiteboard-bg border-3 border-black p-6 md:p-10 neo-shadow min-h-[450px] rounded-[3rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              {contributors.map((contrib) => {
                const CardComp = contrib.cardComponent;
                return (
                  <Link 
                    href={`/profile/${contrib.username}`} 
                    key={contrib.username}
                    className="block group"
                  >
                    <CardComp />
                  </Link>
                );
              })}
            </div>
            
            {contributors.length === 0 && (
              <div className="w-full flex flex-col items-center justify-center py-20 text-center">
                <FolderOpen size={48} className="text-gray-400 mb-2 animate-bounce" strokeWidth={2} />
                <h3 className="font-extrabold text-xl text-black uppercase">The whiteboard is blank!</h3>
                <p className="text-gray-500 font-semibold max-w-sm mt-1">
                  Add your contributor card to `components/user-card` and import it in `components/registry.ts` to see it here.
                </p>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
