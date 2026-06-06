import React from "react";

/**
 * -----------------------------------------------------------------------------
 * OPEN GUESTBOOK CONTRIBUTOR PROFILE - JUNIOR DEVELOPER GUIDE
 * -----------------------------------------------------------------------------
 * 
 * WELCOME JUNIOR/LEARNER! Use this file as a reference to create 
 * your own profile page component. Follow these rules carefully:
 * 
 * ✅ WHAT TO DO:
 * 1. Create a copy of this file in this same folder and name it '<your-username>Profile.tsx'.
 * 2. Customize the code inside to reflect your own styling, colors, and layout.
 *    💡 NOTE: You are completely free to design your profile page with any aesthetic,
 *    theme, or layout you choose (like Uthkarsh's gaming/stadium cards showcase theme!).
 *    Incorporate hover animations, custom tabs, or sub-component grid widgets.
 * 3. Link your social profiles (Website, LinkedIn, Twitter) and list your goals/skills.
 * 4. Register your component in 'components/registry.ts' (import and add to list as `pageComponent`).
 * 
 * ❌ WHAT NOT TO DO:
 * 1. ⚠️ DO NOT PUT ANY IMAGE FILES IN THE LOCAL 'public/' FOLDER!
 *    If you need photos, link to external URLs or pull your GitHub avatar from 'https://github.com/<username>.png'.
 * 2. DO NOT forget about page padding and responsiveness. Ensure that the profile container
 *    looks stunning on mobile phones (where screens are narrow) as well as desktops.
 * 
 * 💡 HOW TO FETCH YOUR CARD & WEBSITE:
 * - On the home page, the whiteboard loops through the registry and renders your Card component.
 * - Clicking your Card routes visitors to '/profile/<your-username>'.
 * - If you don't create a custom profile file in 'components/user-page', the system will
 *   automatically query the GitHub API to fetch your bio, avatar, and repository statistics!
 */

export function TemplateProfile() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[2rem]">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar block */}
        <div className="w-32 h-32 md:w-48 md:h-48 bg-cyan-300 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 rounded-[2rem]">
          <span className="text-6xl font-black select-none text-black">JD</span>
        </div>
        
        {/* Profile info */}
        <div className="flex-1 w-full">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
              John Doe
            </h1>
            <span className="px-3 py-1 bg-black text-[#39FF14] text-xs font-mono font-bold uppercase tracking-wider border-2 border-[#39FF14] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-full">
              Level 1 Dev
            </span>
          </div>
          <p className="text-xl font-bold text-gray-800 mb-6 font-mono">@johndoe-git</p>
          
          <div className="p-5 bg-pink-100 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 rounded-[1.5rem]">
            <h3 className="font-extrabold text-lg text-black mb-1 uppercase tracking-tight">Bio</h3>
            <p className="font-semibold text-black/95 leading-relaxed">
              Hey there! I'm John, a junior web developer exploring the open-source world. I love playing around with CSS grids, animations, and learning modern frontend frameworks like Next.js 16 and React 19.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-yellow-100 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-[1.5rem]">
              <h3 className="font-extrabold text-lg text-black mb-2 uppercase tracking-tight">My Skills</h3>
              <ul className="list-disc pl-5 font-bold text-black/80 space-y-1">
                <li>React 19 & Next.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Git & GitHub Workflow</li>
              </ul>
            </div>
            <div className="p-5 bg-purple-100 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-[1.5rem]">
              <h3 className="font-extrabold text-lg text-black mb-2 uppercase tracking-tight">Current Goals</h3>
              <ul className="list-disc pl-5 font-bold text-black/80 space-y-1">
                <li>Complete 5 open-source PRs</li>
                <li>Build a full-stack project</li>
                <li>Master CSS Flexbox & Grid</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
