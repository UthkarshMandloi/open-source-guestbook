"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, Globe, ArrowUpRight, Code, Trophy, Eye, Laptop, Shield } from "lucide-react";
import { Github, Linkedin, Instagram } from "@/components/Icons";
import { UthkarshCard } from "../user-card/UthkarshCard";

export function UthkarshProfile() {
  const [gitUser, setGitUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/UthkarshMandloi")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error();
      })
      .then((data) => {
        setGitUser(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-8 md:p-12 bg-[#080f1d] border-3 border-[#FFE885] shadow-[0_0_30px_rgba(255,232,133,0.15)] rounded-[3rem] relative overflow-hidden text-white">
      
      {/* Starry background lights */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#111f38] to-transparent opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 pointer-events-none" />
      
      {/* Curved background light */}
      <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 bg-[#FFE885] rounded-full opacity-5 blur-3xl pointer-events-none" />

      {/* Decorative Laptop Icon */}
      <div className="absolute left-6 top-8 animate-float hidden lg:block opacity-30">
        <div className="bg-[#0e1e38] border-2 border-white/10 p-3 rounded-[1.5rem] rotate-12 shadow-md">
          <Laptop size={24} className="text-[#FFE885]" strokeWidth={2} />
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Content & Typography */}
        <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-[#FFE885] text-xs font-mono font-black uppercase tracking-widest rounded-full mb-6 border-2 border-[#FFE885]/40 shadow-[0_0_10px_rgba(255,232,133,0.2)]">
            <Sparkles size={12} className="animate-spin text-[#FFE885]" /> Project Creator
          </div>
          
          <p className="text-gray-300 font-extrabold text-lg md:text-xl mb-3">
            Hi, my name is Uthkarsh.
          </p>
          
          <h1 className="font-syne font-black text-5xl sm:text-6xl md:text-7xl leading-[0.9] text-white uppercase tracking-tighter mb-6">
            I CODE FOR <br />
            <span className="bg-gradient-to-r from-[#FFE885] to-[#FF99B2] bg-clip-text text-transparent px-1 select-none">GROWTH.</span>
          </h1>
          
          <p className="text-gray-300 font-semibold text-md md:text-lg max-w-lg leading-relaxed mb-8">
            {loading ? (
              "Loading developer bio..."
            ) : (
              gitUser?.bio || "I'm a Full Stack Developer & Open Source Mentor. Building intuitive developer playgrounds and guestbooks to help juniors grow."
            )}
          </p>
          
          {/* Custom Styled Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            
            {/* Personal Site */}
            <a
              href="https://uthkarshmandloi.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#FFE885] text-black border-2 border-black text-xs font-black uppercase tracking-wider rounded-full shadow-[3px_3px_0px_0px_#000] hover:translate-y-[-2px] active:translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#000] active:shadow-none transition-all duration-150 flex items-center gap-2"
            >
              <Globe size={16} strokeWidth={2.5} /> uthkarshmandloi.in <ArrowUpRight size={14} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/UthkarshMandloi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#0e1e38] text-white border border-white/10 text-xs font-black uppercase tracking-wider rounded-full hover:bg-white/5 hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-150 flex items-center gap-2"
            >
              <Github size={16} /> GitHub <ArrowUpRight size={14} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/uthkarsh-mandloi-257531328"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#0e1e38] text-[#9BE7FF] border border-[#9BE7FF]/25 text-xs font-black uppercase tracking-wider rounded-full hover:bg-white/5 hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-150 flex items-center gap-2"
            >
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/Uthkarsh.Mandloi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#0e1e38] text-[#FF99B2] border border-[#FF99B2]/25 text-xs font-black uppercase tracking-wider rounded-full hover:bg-white/5 hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-150 flex items-center gap-2"
            >
              <Instagram size={16} /> Instagram <ArrowUpRight size={14} />
            </a>

          </div>
        </div>

        {/* Right Side: Showcase of the actual Sports Trading Card */}
        <div className="relative flex justify-center items-center flex-shrink-0 w-80 h-auto md:w-[350px]">
          
          {/* Glow backdrop behind card */}
          <div className="absolute w-[85%] h-[85%] rounded-[2rem] bg-[#FFE885] opacity-10 blur-3xl -z-10 animate-pulse pointer-events-none" />

          {/* Interactive Custom Trading Card */}
          <div className="w-full">
            <UthkarshCard />
          </div>

          {/* Floating Sticker 1: Next.js or Tech Stack Badge */}
          <div className="absolute -top-4 -left-4 animate-float z-20 rotate-[-12deg] hover:scale-110 transition-transform">
            <div className="bg-[#0e1e38] border-2 border-white/10 px-4 py-2 rounded-[1.25rem] shadow-lg flex items-center gap-1.5 text-white">
              <Code size={14} className="text-[#9BE7FF]" />
              <span className="font-mono font-black text-xs">React 19</span>
            </div>
          </div>

          {/* Floating Sticker 2: Available Capsule Badge at bottom */}
          <div className="absolute -bottom-4 -right-4 z-20 rotate-[3deg] hover:scale-110 transition-transform">
            <div className="bg-[#10b981]/25 text-[#34d399] border-2 border-[#10b981]/40 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-ping" />
              <span className="font-mono font-black text-[9px] uppercase tracking-wider">Available for Collabs</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
