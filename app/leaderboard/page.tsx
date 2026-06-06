"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getLeaderboard, isFirebaseConfigured, LeaderboardEntry } from "@/lib/firebase";
import { contributors, Contributor } from "@/components/registry";
import { Award, Star, ArrowRight, Sparkles, AlertTriangle, Users, Crown } from "lucide-react";

interface JoinedLeaderboardEntry extends Contributor {
  averageRating: number;
  totalRatings: number;
  rank: number;
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<JoinedLeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeaderboardData();
  }, []);

  const loadLeaderboardData = async () => {
    setLoading(true);
    try {
      let data: LeaderboardEntry[] = [];
      if (isFirebaseConfigured) {
        data = await getLeaderboard();
      }

      // Map Firestore database stats with registry profile display info
      const joined: JoinedLeaderboardEntry[] = contributors.map((contrib) => {
        const stats = data.find((d) => d.username === contrib.username);
        return {
          ...contrib,
          averageRating: stats ? stats.averageRating : 5.0, // fallback if no ratings yet
          totalRatings: stats ? stats.totalRatings : 0,
          rank: 0, // calculated below
        };
      });

      // Sort: highest average rating first. If tied, sort by total votes.
      joined.sort((a, b) => {
        if (b.averageRating !== a.averageRating) {
          return b.averageRating - a.averageRating;
        }
        return b.totalRatings - a.totalRatings;
      });

      // Assign ranks
      const ranked = joined.map((entry, idx) => ({
        ...entry,
        rank: idx + 1,
      }));

      setLeaderboard(ranked);
    } catch (err) {
      console.error("Failed to load leaderboard", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
      
      {/* Page Header */}
      <section className="bg-neocyan border-3 border-black p-8 neo-shadow relative overflow-hidden rounded-[2.5rem]">
        <div className="absolute right-4 top-4 text-7xl opacity-10 select-none font-black rotate-12">
          RANKINGS
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-black text-white text-xs font-mono font-bold uppercase mb-3 neo-shadow-sm rounded-full">
            <Award size={14} className="text-neoyellow fill-current" /> Leaderboard
          </div>
          <h1 className="font-syne font-black text-4xl sm:text-5xl text-black uppercase tracking-tight leading-none mb-2">
            The Leaderboard Page
          </h1>
          <p className="text-black text-sm sm:text-md font-bold max-w-2xl">
            See who has the most-rated and highly-suggested profile card on our board! Rankings are updated in real-time as users submit suggestions.
          </p>
        </div>
      </section>

      {/* Database warning notice if Firebase is not configured */}
      {!isFirebaseConfigured && (
        <div className="w-full p-6 bg-neoyellow border-3 border-black neo-shadow text-center rounded-[2rem]">
          <h3 className="font-syne font-black text-lg md:text-xl text-black uppercase tracking-tight flex items-center justify-center gap-2">
            <AlertTriangle className="text-black animate-bounce" size={22} strokeWidth={2.5} /> welcome contributor check the term before contribution
          </h3>
          <p className="font-semibold text-xs text-black/80 mt-2 leading-snug">
            Firebase database environment variables are missing. Displaying a preview leaderboard of registered contributors with dummy scores.
          </p>
        </div>
      )}

      {/* Leaderboard Lists */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Sparkles size={20} className="text-neopink fill-current animate-pulse" />
          <h2 className="font-syne font-black text-2xl uppercase tracking-tight text-black">
            Contributor Standings
          </h2>
        </div>

        {loading ? (
          <div className="flex flex-col gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-24 bg-white border-3 border-black animate-pulse rounded-[2rem]" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {leaderboard.map((user) => {
              // Highlight top 3 ranks with different background colors
              let rankBg = "bg-white";
              let rankBadgeColor = "bg-gray-100";
              let rankText = `#${user.rank}`;
              let isTopThree = user.rank <= 3;

              if (user.rank === 1) {
                rankBg = "bg-neoyellow/30";
                rankBadgeColor = "bg-black text-white";
                rankText = "1ST PLACE";
              } else if (user.rank === 2) {
                rankBg = "bg-white";
                rankBadgeColor = "bg-neopink text-white";
                rankText = "2ND PLACE";
              } else if (user.rank === 3) {
                rankBg = "bg-white";
                rankBadgeColor = "bg-neocyan text-black";
                rankText = "3RD PLACE";
              }

              return (
                <div
                  key={user.username}
                  className={`w-full p-4 md:p-6 ${rankBg} border-3 border-black neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[2rem]`}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full sm:w-auto">
                    {/* Rank Badge */}
                    <div className={`px-4 py-2 border-2 border-black text-xs font-black uppercase tracking-wider ${rankBadgeColor} min-w-[100px] text-center rounded-full flex items-center justify-center gap-1`}>
                      {user.rank === 1 && <Crown size={12} className="fill-neoyellow text-neoyellow" />}
                      {rankText}
                    </div>

                    {/* Name */}
                    <div>
                      <h3 className="font-black text-xl text-black uppercase tracking-tight">
                        {user.name}
                      </h3>
                      <span className="font-mono text-xs text-gray-500 font-bold">
                        @{user.gitUsername}
                      </span>
                    </div>
                  </div>

                  {/* Ratings displays */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 md:gap-8 w-full sm:w-auto">
                    <div className="flex items-center gap-3">
                      <div className="text-center bg-white border-2 border-black px-4 py-1.5 shadow-[2px_2px_0px_0px_#000] rounded-[12px]">
                        <span className="font-mono text-[9px] font-black uppercase block text-gray-400">Rating</span>
                        <div className="flex items-center gap-1 justify-center">
                          <span className="font-black text-sm">{user.averageRating.toFixed(1)}</span>
                          <Star size={12} className="text-black fill-neoyellow" />
                        </div>
                      </div>

                      <div className="text-center bg-white border-2 border-black px-4 py-1.5 shadow-[2px_2px_0px_0px_#000] min-w-[75px] rounded-[12px]">
                        <span className="font-mono text-[9px] font-black uppercase block text-gray-400">Reviews</span>
                        <span className="font-black text-sm">{user.totalRatings}</span>
                      </div>
                    </div>

                    {/* Action link */}
                    <Link
                      href={`/profile/${user.username}`}
                      className="px-5 py-2.5 bg-black text-white border-2 border-black text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 hover:bg-neocyan hover:text-black transition-all rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#000]"
                    >
                      Profile <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              );
            })}

            {leaderboard.length === 0 && (
              <div className="bg-white border-3 border-dashed border-black p-12 text-center rounded-[2rem] flex flex-col items-center justify-center">
                <Users className="text-gray-400 mb-2 animate-pulse" size={48} strokeWidth={2} />
                <h3 className="font-black text-lg uppercase">No standings yet!</h3>
                <p className="text-sm font-semibold text-gray-400">
                  Be the first contributor to register and rate pages!
                </p>
              </div>
            )}
          </div>
        )}
      </section>

    </div>
  );
}
