"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Award, CreditCard, Home } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Board", path: "/", icon: Home, color: "bg-neoyellow" },
    { name: "Leaderboard", path: "/leaderboard", icon: Award, color: "bg-neocyan" },
    { name: "Get Card", path: "/get-card", icon: CreditCard, color: "bg-neopink" },
  ];

  return (
    <header className="w-full bg-white border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-neoyellow border-3 border-black p-1.5 sm:p-2 font-black text-sm sm:text-base md:text-xl tracking-tighter uppercase neo-shadow-sm group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all select-none rounded-[12px] flex items-center gap-1">
            <Sparkles size={16} className="fill-black text-black animate-pulse sm:w-5 sm:h-5 w-4 h-4" /> Open <span className="bg-black text-white px-1.5 py-0.5 ml-1 rounded-[6px]">Guestbook</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1.5 sm:gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-1 px-2.5 py-1 sm:px-4 sm:py-2 border-3 border-black text-xs sm:text-sm font-extrabold uppercase tracking-tight transition-all duration-100 rounded-full ${
                  isActive
                    ? `${item.color} translate-x-[-2px] translate-y-[-2px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`
                    : "bg-white hover:bg-gray-50 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                }`}
              >
                <Icon size={14} className="sm:w-4 sm:h-4 w-3.5 h-3.5" strokeWidth={2.5} />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Join Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 bg-neogreen border-3 border-black font-extrabold text-xs uppercase neo-shadow-sm select-none animate-bounce rounded-full">
          <Sparkles size={14} /> Open Source Practice
        </div>
      </div>
    </header>
  );
}
