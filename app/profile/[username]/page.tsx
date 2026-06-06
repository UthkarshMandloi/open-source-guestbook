import Link from "next/link";
import { notFound } from "next/navigation";
import { contributors } from "@/components/registry";
import RatingSection from "@/components/RatingSection";
import { ChevronLeft, Sparkles, FolderGit } from "lucide-react";

interface PageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function ProfilePage({ params }: PageProps) {
  const { username } = await params;

  // Find contributor from registry
  const contributor = contributors.find((c) => c.username === username);
  if (!contributor) {
    notFound();
  }

  const CustomProfile = contributor.pageComponent;

  // Fetch public GitHub details
  let gitUser: any = null;
  try {
    const res = await fetch(`https://api.github.com/users/${contributor.gitUsername}`, {
      headers: {
        "User-Agent": "open-source-guestbook",
      },
      next: { revalidate: 1800 }, // Cache results for 30 minutes
    });
    if (res.ok) {
      gitUser = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch github profile:", err);
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6">
      
      {/* Navigation Breadcrumb */}
      <div>
        <Link
          href="/"
          className="px-5 py-2.5 bg-white border-3 border-black text-xs font-black uppercase tracking-wider inline-flex items-center gap-1 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 rounded-full"
        >
          <ChevronLeft size={16} strokeWidth={2.5} /> Back to Whiteboard
        </Link>
      </div>

      {/* Main Profile Area */}
      <section className="w-full">
        {CustomProfile ? (
          <CustomProfile />
        ) : (
          /* Dynamic Fallback Profile page using GitHub details in sleek round style */
          <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[3rem]">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              
              {/* Profile Avatar */}
              <div className="w-32 h-32 md:w-44 md:h-44 bg-neocyan border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 overflow-hidden relative rounded-[2rem]">
                {gitUser?.avatar_url ? (
                  <img
                    src={gitUser.avatar_url}
                    alt={contributor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl font-black text-black">
                    {contributor.name.substring(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              
              {/* Profile Content */}
              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
                    {contributor.name}
                  </h1>
                  <span className="px-3.5 py-1.5 bg-black text-[#39FF14] text-xs font-mono font-bold uppercase tracking-wider border-2 border-[#39FF14] rounded-full flex items-center gap-1 shadow-[2px_2px_0px_0px_#000]">
                    <FolderGit size={12} /> Git Contributor
                  </span>
                </div>
                
                <p className="text-lg font-bold text-gray-800 mb-6 font-mono">@{contributor.gitUsername}</p>
                
                {/* BIO */}
                <div className="p-5 bg-neoyellow/10 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 text-left rounded-[1.5rem]">
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-black mb-1.5 flex items-center gap-1.5">
                    <Sparkles size={14} className="fill-neoyellow text-black" /> GitHub Bio
                  </h3>
                  <p className="font-semibold text-gray-700 text-sm leading-relaxed">
                    {gitUser?.bio || "This contributor has not set up a GitHub bio yet, or the API rate limit was temporarily exceeded."}
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-neocyan/10 border-2 border-black text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-[12px]">
                    <span className="block text-2xl font-black text-black">{gitUser?.public_repos ?? "-"}</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-tight text-gray-500">Public Repos</span>
                  </div>
                  <div className="p-4 bg-neopink/10 border-2 border-black text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-[12px]">
                    <span className="block text-2xl font-black text-black">{gitUser?.followers ?? "-"}</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-tight text-gray-500">Followers</span>
                  </div>
                  <div className="p-4 bg-neogreen/10 border-2 border-black text-center col-span-2 sm:col-span-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-[12px]">
                    <span className="block text-sm font-black text-black truncate">@{gitUser?.login || contributor.gitUsername}</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-tight text-gray-500">GitHub Login</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </section>

      {/* Ratings & Suggestions Block */}
      <section className="w-full">
        <RatingSection username={contributor.username} />
      </section>

    </div>
  );
}
