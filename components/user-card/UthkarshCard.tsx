"use client";

import React, { useEffect, useState } from "react";
import { Trophy, Cpu, Clock } from "lucide-react";

export function UthkarshCard() {
  const [avatarUrl, setAvatarUrl] = useState("https://github.com/UthkarshMandloi.png");
  const [gitStats, setGitStats] = useState({ repos: 36, followers: 12 });

  useEffect(() => {
    // Dynamically fetch Uthkarsh's details from GitHub API to populate stats
    fetch("https://api.github.com/users/UthkarshMandloi")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error();
      })
      .then((data) => {
        if (data.avatar_url) setAvatarUrl(data.avatar_url);
        setGitStats({
          repos: data.public_repos || 36,
          followers: data.followers || 12,
        });
      })
      .catch(() => {
        // Fallback set in state
      });
  }, []);

  return (
    <div className="relative w-full min-h-[460px] bg-[#071120] border-[3px] border-[#FFE885] rounded-[2rem] p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:scale-[1.03] hover:rotate-[0.5deg] shadow-[0_0_15px_rgba(255,232,133,0.3)] hover:shadow-[0_0_25px_rgba(255,232,133,0.65)] select-none">
      
      {/* Holographic Sheen Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-30" />

      {/* Grid Overlay Line Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

      {/* Card Header Section */}
      <div className="flex items-center justify-between mb-2 relative z-10">
        {/* Golden Hex Badge */}
        <div className="w-8 h-8 flex items-center justify-center relative">
          <svg className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="url(#goldGrad)" stroke="black" strokeWidth="6" />
            <line x1="20" y1="35" x2="80" y2="35" stroke="black" strokeWidth="5" />
            <line x1="15" y1="50" x2="85" y2="50" stroke="black" strokeWidth="5" />
            <line x1="20" y1="65" x2="80" y2="65" stroke="black" strokeWidth="5" />
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE885" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#9A7B1C" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 565 Score Tab */}
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-[#FFE885] shadow-[0_0_6px_#FFE885]" />
          <span className="font-sans font-black text-xl text-[#9BE7FF] tracking-tight">565</span>
        </div>
      </div>

      {/* Inner Image Container with Sliding Stats Panel */}
      <div className="relative w-full aspect-[4/3] rounded-[1.5rem] border-[3px] border-black/80 overflow-hidden bg-slate-950 shadow-inner">
        
        {/* 1. Default Avatar Artwork Panel */}
        <div className="absolute inset-0 z-10 transition-transform duration-500 ease-out group-hover:-translate-y-full flex flex-col items-center justify-center">
          {/* Starry bg */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/80 via-slate-900 to-black" />
          <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:12px_12px]" />
          
          {/* Spotlight beam */}
          <div className="absolute right-[-10%] bottom-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_bottom_right,_rgba(155,231,255,0.5)_0%,_transparent_70%)]" />
          
          <div className="absolute top-6 left-8 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-white rounded-full opacity-45" />
          <div className="absolute bottom-8 left-16 w-1 h-1 bg-white rounded-full opacity-30" />
          
          <img 
            src={avatarUrl} 
            alt="Uthkarsh Mandloi" 
            className="absolute bottom-0 h-[95%] w-auto object-contain z-10 transition-transform duration-300"
          />
        </div>

        {/* 2. Hover Sliding Stats Panel */}
        <div className="absolute inset-0 z-20 bg-slate-900/95 border-t border-white/10 p-3 flex flex-col justify-between transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <span className="text-[10px] font-mono font-black text-neoyellow uppercase tracking-widest flex items-center gap-1">
              <Trophy size={10} className="text-neoyellow" /> Git Stats
            </span>
            <span className="text-[9px] font-mono text-gray-400 uppercase">Rank #1 (Lead Dev)</span>
          </div>
          
          <div className="grid grid-cols-2 gap-1.5 my-1.5 flex-grow text-white">
            <div className="bg-black/45 border border-white/10 p-2 rounded-[0.75rem] flex flex-col justify-center">
              <span className="text-[8px] font-mono text-gray-400 uppercase">Commits</span>
              <span className="text-xs font-black text-neocyan">280+ (Active)</span>
            </div>
            <div className="bg-black/45 border border-white/10 p-2 rounded-[0.75rem] flex flex-col justify-center">
              <span className="text-[8px] font-mono text-gray-400 uppercase">PRs Reviewed</span>
              <span className="text-xs font-black text-neopink">48+ Completed</span>
            </div>
            <div className="bg-black/45 border border-white/10 p-2 rounded-[0.75rem] flex flex-col justify-center">
              <span className="text-[8px] font-mono text-gray-400 uppercase">Followers</span>
              <span className="text-xs font-black text-neogreen">{gitStats.followers} Users</span>
            </div>
            <div className="bg-black/45 border border-white/10 p-2 rounded-[0.75rem] flex flex-col justify-center">
              <span className="text-[8px] font-mono text-gray-400 uppercase">Repos</span>
              <span className="text-xs font-black text-neoyellow">{gitStats.repos} Public</span>
            </div>
          </div>

          <div className="text-[9px] font-semibold text-gray-400 text-center uppercase tracking-wider bg-black/50 py-1 rounded-[6px] border border-white/5">
            Hover out to return &larr;
          </div>
        </div>
      </div>

      {/* Name and STL Dev Badge */}
      <div className="flex items-center justify-between mt-3 z-10">
        <h3 className="font-syne font-black text-2xl text-white uppercase tracking-tighter leading-none">
          UTH MANDLOI
        </h3>
        <div className="bg-white text-black px-2 py-0.5 font-sans font-black text-[10px] uppercase tracking-wider rounded-[6px] border-2 border-black">
          LEAD
        </div>
      </div>

      {/* Stats row with arrows */}
      <div className="flex gap-1.5 sm:gap-2 mt-2 select-none z-10">
        <div className="flex-1 bg-white/10 border border-white/20 py-1 px-1 sm:px-2 text-center rounded-[8px] text-[10px] font-bold text-white uppercase tracking-tighter">
          Repos &rarr; <span className="text-[#FFE885]">{gitStats.repos}</span>
        </div>
        <div className="flex-1 bg-white/10 border border-white/20 py-1 px-1 sm:px-2 text-center rounded-[8px] text-[10px] font-bold text-white uppercase tracking-tighter">
          Follow &rarr; <span className="text-[#FFE885]">{gitStats.followers}</span>
        </div>
        <div className="flex-1 bg-white/10 border border-white/20 py-1 px-1 sm:px-2 text-center rounded-[8px] text-[10px] font-bold text-white uppercase tracking-tighter">
          Stars &rarr; <span className="text-[#FFE885]">48+</span>
        </div>
      </div>

      {/* Tech tag list */}
      <p className="text-gray-400 font-sans font-black text-[11px] uppercase mt-2.5 tracking-tight text-center z-10">
        NextJS &bull; React &bull; Tailwind &bull; Firebase
      </p>

      {/* NEXT GAME Details */}
      <div className="z-10 mt-2">
        <p className="text-[9px] font-mono font-black text-gray-400 uppercase tracking-widest text-left mb-1">Next Build</p>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-white/5 border border-white/10 py-1 px-2 rounded-[8px] text-[9px] font-black text-white uppercase tracking-tight flex items-center justify-center gap-1.5">
            <Cpu size={10} className="text-[#9BE7FF]" /> vs Bugs
          </div>
          <div className="bg-white/5 border border-white/10 py-1 px-2 rounded-[8px] text-[9px] font-black text-white uppercase tracking-tight flex items-center justify-center gap-1.5">
            <Clock size={10} className="text-[#FFE885] animate-pulse" /> 24/7 Live
          </div>
        </div>
      </div>

      {/* slanted Button at bottom */}
      <div className="mt-4 w-full z-10">
        <div className="w-full bg-[#9BE7FF] hover:bg-[#FFE885] text-black font-sans font-black text-xs uppercase py-2.5 rounded-[10px] border-2 border-black shadow-[0_3px_0_0_#000] hover:translate-y-[-2px] active:translate-y-[1px] hover:shadow-[0_5px_0_0_#000] active:shadow-[0_1px_0_0_#000] transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer">
          Activate Profile / Free
        </div>
      </div>

    </div>
  );
}
