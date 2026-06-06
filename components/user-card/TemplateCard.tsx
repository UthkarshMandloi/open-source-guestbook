import React from "react";
import { Sparkles } from "lucide-react";

/**
 * -----------------------------------------------------------------------------
 * OPEN GUESTBOOK CONTRIBUTOR CARD - JUNIOR DEVELOPER GUIDE
 * -----------------------------------------------------------------------------
 * 
 * WELCOME JUNIOR/LEARNER! Use this file as a reference to create 
 * your own card component. Follow these rules carefully:
 * 
 * ✅ WHAT TO DO:
 * 1. Create a copy of this file in this same folder and name it '<your-username>Card.tsx'.
 * 2. Customize the code inside to reflect your own styling, colors, and layout.
 *    💡 NOTE: You are NOT locked into Neo-Pop or Neo-Brutalist designs! Feel free
 *    to design anything you want—gaming cards, sports trading cards (like Uthkarsh's card),
 *    3D hover flips, or interactive hover-swipe panels that slide to reveal stats!
 * 3. Add your details (Name, Short Bio, and GitHub Username).
 * 4. Register your component in 'components/registry.ts' (import and add to list).
 * 5. Practice git branching: git checkout -b add-<your-name>-card, commit, and push!
 * 
 * ❌ WHAT NOT TO DO:
 * 1. ⚠️ DO NOT PUT ANY IMAGE FILES IN THE LOCAL 'public/' FOLDER!
 *    To keep the repository clean, we do not store contributor photos/logos locally.
 *    If you need an image, fetch it from your GitHub profile or use an external URL.
 * 2. DO NOT make elements unresponsive. Use Tailwind's responsive prefixes (sm:, md:, lg:)
 *    so your card fits nicely in the whiteboard grid on all device screen sizes.
 * 3. DO NOT modify other files outside your card, profile, and the registry.ts file.
 * 
 * 💡 HOW TO FETCH YOUR CARD & WEBSITE:
 * - On the home page, the whiteboard loops through the registry and renders your Card component.
 * - Clicking your Card routes visitors to '/profile/<your-username>'.
 * - If you don't create a custom profile file in 'components/user-page', the system will
 *   automatically query the GitHub API to fetch your bio, avatar, and repository statistics!
 */

export function TemplateCard() {
  return (
    <div className="w-full h-full min-h-[220px] p-6 bg-yellow-300 border-4 border-black rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="px-3 py-1 bg-black text-white text-xs font-mono uppercase tracking-wider font-bold rounded-full border-2 border-black">
            Junior Dev
          </span>
          <Sparkles className="text-black fill-black" size={20} />
        </div>
        <h3 className="font-black text-2xl text-black mb-1 uppercase tracking-tight">
          John Doe
        </h3>
        <p className="text-black font-semibold text-sm leading-snug">
          "I am learning Next.js 16 and practicing Git by building cards for this guestbook!"
        </p>
      </div>
      <div className="mt-4 pt-3 border-t-2 border-black flex justify-between items-center">
        <span className="font-mono text-xs text-black font-bold">@johndoe-git</span>
        <span className="font-extrabold text-xs underline uppercase tracking-wider">
          Profile &rarr;
        </span>
      </div>
    </div>
  );
}
