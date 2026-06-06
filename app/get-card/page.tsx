"use client";

import React, { useState } from "react";
import { CreditCard, Download, Share2, Sparkles, Loader2, ChevronRight, Settings } from "lucide-react";
import { Linkedin, Twitter, Instagram } from "@/components/Icons";

export default function GetCardPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [cardUrl, setCardUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !username.trim()) {
      setError("Please fill in both Name and GitHub Username!");
      return;
    }

    setError(null);
    setLoading(true);
    setImageLoading(true);

    // Formulate the local proxy route URL
    // We add a timestamp query parameter to bypass browser image cache
    const queryUrl = `/api/contributor-card?name=${encodeURIComponent(
      name.trim()
    )}&username=${encodeURIComponent(username.trim())}&t=${Date.now()}`;
    
    setCardUrl(queryUrl);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setLoading(false);
    setCardUrl(null);
    setError("Failed to generate contributor card from backend. Verify configuration and try again.");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
      
      {/* Hero Header */}
      <section className="bg-neopink border-3 border-black p-5 neo-shadow relative overflow-hidden rounded-[2rem]">
        <div className="absolute right-4 top-4 text-5xl opacity-10 select-none font-black rotate-12">
          CARDS
        </div>
        <div className="relative z-10 text-white">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-black text-neopink text-[10px] font-mono font-bold uppercase mb-2 neo-shadow-sm border-2 border-neopink rounded-full">
            <CreditCard size={12} className="fill-current" /> Badge Generator
          </div>
          <h1 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight leading-none mb-1.5">
            Get Your Contributor Card
          </h1>
          <p className="font-bold text-xs sm:text-sm max-w-xl text-black">
            Generate your official developer badge backed by your GitHub avatar, repository stats, and custom name. Ready to download and share on social media!
          </p>
        </div>
      </section>

      <div className="relative">
        {/* Blurred Content Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start filter blur-md pointer-events-none select-none">
          
          {/* Form Input Block */}
          <div className="lg:col-span-5 bg-white border-3 border-black p-5 neo-shadow rounded-[1.5rem]">
            <h2 className="font-extrabold text-lg uppercase tracking-tight mb-3 flex items-center gap-1.5">
              <Sparkles size={16} className="text-neoyellow fill-current" /> Contributor Details
            </h2>

            <form onSubmit={handleGenerate} className="flex flex-col gap-3">
              <div>
                <label className="block text-[10px] font-black uppercase mb-1">Your Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-2.5 py-2 border-3 border-black font-semibold text-xs focus:outline-none bg-amber-50/10 rounded-[10px]"
                  required
                  disabled
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase mb-1">GitHub Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. johndoe-git"
                  className="w-full px-2.5 py-2 border-3 border-black font-semibold text-xs focus:outline-none bg-amber-50/10 rounded-[10px]"
                  required
                  disabled
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full py-2 bg-black text-white border-3 border-black text-[10px] font-extrabold uppercase tracking-widest flex items-center justify-center gap-1.5 rounded-full"
              >
                Generate Card <ChevronRight size={14} />
              </button>
            </form>
          </div>

          {/* Display / Download Preview Block */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full items-center">
            
            {/* Card Frame */}
            <div className="w-full max-w-sm bg-white border-3 border-black p-4 neo-shadow flex flex-col items-center justify-center min-h-[220px] relative rounded-[1.5rem]">
              <div className="absolute left-3 top-3 px-2 py-0.5 bg-black text-white text-[9px] font-mono font-bold uppercase select-none rounded-full">
                Card Preview
              </div>

              <div className="flex flex-col items-center justify-center text-center p-4">
                <CreditCard size={32} className="text-gray-400 mb-1.5" strokeWidth={2} />
                <h3 className="font-extrabold text-sm uppercase">Your Card displays here</h3>
                <p className="text-[10px] font-semibold text-gray-400 max-w-[240px] mt-0.5">
                  Enter your Name and GitHub username, and hit generate to query the secure card backend.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Coming Soon Overlay Layer */}
        <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-transparent">
          <div className="bg-neoyellow border-3 border-black p-5 md:p-6 text-center neo-shadow max-w-xs sm:max-w-sm rotate-[-1deg] rounded-[1.5rem] animate-float">
            <CreditCard size={40} className="text-black mb-2 animate-bounce mx-auto" strokeWidth={2} />
            <h2 className="font-syne font-black text-xl sm:text-2xl uppercase tracking-tight text-black mb-1.5">
              Coming Soon!
            </h2>
            <p className="font-bold text-xs text-black leading-relaxed">
              The secure backend card generator API is currently being configured by the lead maintainer. 
              Check back soon to download and share your official contributor card!
            </p>
            <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-[1.5px_1.5px_0px_0px_#FFE885] border-2 border-white rounded-full">
              <Settings size={10} className="animate-spin text-neoyellow" /> Under Configuration
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
