import React from "react";

export function GouriAgrawalCard() {
  return (
    <div className="group relative w-full min-h-[320px] overflow-hidden rounded-[2rem] border-4 border-white bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Washi Tape */}
      <div className="absolute top-2 left-1/2 h-4 w-16 -translate-x-1/2 rotate-2 bg-yellow-100 opacity-70"></div>

      {/* Doodles */}
      <div className="absolute top-4 right-4 text-xl opacity-70 transition-transform duration-300 group-hover:rotate-12">
        ✨
      </div>

      <div className="absolute left-3 bottom-16 text-lg opacity-60">
        🌸
      </div>

      {/* Sticky Note */}
      <div className="inline-block rotate-[-3deg] rounded-md bg-yellow-200 px-3 py-1 text-xs font-bold text-black shadow-md">
        📌 CS Student
      </div>

      {/* Name */}
      <h3 className="mt-4 text-3xl font-black text-gray-800">
        Gouri Agrawal
      </h3>

      {/* Roles */}
      <div className="mt-3 flex flex-col gap-1 text-sm font-medium text-gray-700">
        <span>🎨 Artist</span>
        <span>🏐 Volleyball Player</span>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm italic text-gray-600">
        "Learning, building & creating."
      </p>

      {/* Tech Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">
          ☕ Java
        </span>

        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">
          🐍 Python
        </span>

        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">
          🌶 Flask
        </span>

        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">
          🗄 MySQL
        </span>

        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">
          ⚡ C++
        </span>
      </div>

      {/* LeetCode */}
      <div className="mt-4 rounded-xl bg-white/50 p-2 text-center text-sm font-bold text-gray-700">
        📚 150+ LeetCode Problems
      </div>

      {/* Footer */}
      <div className="mt-4 border-t border-pink-300 pt-3 flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-gray-700">
          @gouriagrawal06
        </span>

        <span className="text-xs font-bold text-purple-700">
          Profile →
        </span>
      </div>

      {/* Panda */}
      <div className="absolute -bottom-2 right-2 text-5xl transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110">
        🐼
      </div>

    </div>
  );
}