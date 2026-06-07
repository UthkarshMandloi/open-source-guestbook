"use client";

import React, { useEffect, useState } from "react";

export function GouriAgrawalCard() {
    const [repoCount, setRepoCount] = useState<number | null>(null);
    const [avatarUrl, setAvatarUrl] = useState(
  "https://github.com/Gouri-292.png"
);

useEffect(() => {
  fetch("https://api.github.com/users/Gouri-292")
    .then((res) => res.json())
    .then((data) => {
      setRepoCount(data.public_repos);
      setAvatarUrl(data.avatar_url);
    })
    .catch((err) => {
      console.error(err);
    });
}, []);
  return (
    <div className="group relative w-full min-h-[320px] overflow-hidden rounded-[2rem] border border-purple-400/40 bg-gradient-to-br from-slate-900 via-gray-900 to-purple-950 p-4 sm:p-5 shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]">

      
      {/* Doodles */}
      <div className="absolute top-4 right-4 text-xl opacity-100 animate-pulse transition-transform duration-300 group-hover:rotate-12">
        ✨
      </div>

      <div className="absolute left-3 bottom-16 text-lg opacity-100">
        🌸
      </div>

      {/* Sticky Note */}
      <div className="inline-block rotate-[-3deg] rounded-md bg-yellow-200 px-3 py-1 text-xs font-bold text-black shadow-md">
        📌 CSE Undergrad
      </div>
        <div className="mt-4 flex justify-center">
  <img
    src={avatarUrl}
    alt="Gouri Agrawal"
    className="h-30 w-30 rounded-lg bg-purple p-1 shadow-lg rotate-[-4deg] transition-all duration-300 group-hover:rotate-0"
  />
</div>
      {/* Name */}
      <h3 className="mt-4 text-3xl font-black text-white">
        Gouri Agrawal
      </h3>

      {/* Roles */}
      <div className="mt-3 flex flex-col gap-1 text-sm font-medium text-gray-300">
        <span> Web Developer </span>
        <span> Graphic Designer </span>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm italic text-gray-400">
        &quot;Learning, building &amp; creating.&quot;
      </p>

      {/* Tech Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-white/10 border border-purple-400/20 px-3 py-1 text-xs font-semibold text-purple-200 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
          ☕ Java
        </span>

        <span className="rounded-full bg-white/10 border border-purple-400/20 px-3 py-1 text-xs font-semibold text-purple-200 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
          🐍 Python
        </span>

        <span className="rounded-full bg-white/10 border border-purple-400/20 px-3 py-1 text-xs font-semibold text-purple-200 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
          💡 Flask
        </span>

        <span className="rounded-full bg-white/10 border border-purple-400/20 px-3 py-1 text-xs font-semibold text-purple-200 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
          🗄 MySQL
        </span>

        <span className="rounded-full bg-white/10 border border-purple-400/20 px-3 py-1 text-xs font-semibold text-purple-200 transition-all duration-200 hover:scale-110 hover:-translate-y-1">
          ⚡ C++
        </span>
      </div>

      {/* LeetCode */}
      <div className="mt-4 grid grid-cols-2 gap-2">
  <div className="rounded-xl bg-white/50 p-2 text-center text-sm font-bold text-white">
    📚 150+
    <br />
    LeetCode
  </div>

  <div className="rounded-xl bg-white/50 p-2 text-center text-sm font-bold text-white">
    Repos → {repoCount ?? "..."}
    <br />
    Projects → 1
  </div>
</div>

      {/* Footer */}
      <div className="mt-4 border-t border-pink-300 pt-3 flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-gray-300">
          @gouriagrawal06
        </span>

        <span className="rounded-full bg-purple-100 px-2 py-1 text-[10px] font-bold text-purple-700">
  Profile →
</span>
      </div>

      {/* Panda */}
      <div className="absolute -bottom-7 right-2 text-5xl transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-110">
        🐼
      </div>

    </div>
  );
}