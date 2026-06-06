"use client";

import React, { useState, useEffect } from "react";
import { isFirebaseConfigured, addReview, getReviews, Review } from "@/lib/firebase";
import { Star, MessageSquarePlus, MessageSquare, AlertTriangle } from "lucide-react";

interface RatingSectionProps {
  username: string;
}

export default function RatingSection({ username }: RatingSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(5);
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Load reviews on mount
  useEffect(() => {
    if (isFirebaseConfigured) {
      loadReviews();
    }
  }, [username]);

  const loadReviews = async () => {
    try {
      const data = await getReviews(username);
      setReviews(data);
    } catch (err) {
      console.error("Failed to load reviews", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !suggestion.trim()) {
      setError("Please fill out all fields!");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await addReview({
        username,
        rating,
        suggestion,
        reviewerName: reviewerName.trim(),
      });
      
      setReviewerName("");
      setSuggestion("");
      setRating(5);
      setSuccess(true);
      
      // Reload reviews
      await loadReviews();
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || "Failed to submit review.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isFirebaseConfigured) {
    return (
      <div className="w-full mt-10 p-6 md:p-8 bg-neoyellow border-3 border-black neo-shadow text-center rounded-[2rem]">
        <h3 className="font-syne font-black text-xl md:text-2xl text-black uppercase tracking-tight mb-2 flex items-center justify-center gap-2">
          <AlertTriangle className="text-black animate-bounce" size={24} strokeWidth={2.5} /> welcome contributor check the term before contribution
        </h3>
        <p className="font-mono text-xs sm:text-sm text-black font-extrabold uppercase mt-3 bg-white inline-block border-2 border-black px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#000]">
          Database Connection Required to Submit Ratings
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mt-12 flex flex-col gap-8">
      <div className="border-t-3 border-dashed border-black pt-8">
        <h2 className="font-syne font-black text-3xl uppercase tracking-tight text-black flex items-center gap-2">
          <MessageSquare size={26} className="text-black" strokeWidth={2.5} /> Ratings & Suggestions
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Form Column */}
        <div className="lg:col-span-1 bg-white border-3 border-black p-6 neo-shadow rounded-[2rem]">
          <h3 className="font-extrabold text-xl uppercase tracking-tight mb-4 flex items-center gap-2">
            <MessageSquarePlus size={20} /> Write Feedback
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-black uppercase mb-1">Your Name</label>
              <input
                type="text"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                placeholder="e.g. Alex"
                className="w-full px-3 py-2 border-2 border-black font-semibold text-sm focus:outline-none bg-amber-50/10 rounded-[10px]"
                maxLength={40}
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase mb-1">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`p-1 border-2 border-black transition-all rounded-[6px] ${
                      star <= rating ? "bg-neoyellow" : "bg-white"
                    } hover:scale-110 active:scale-95`}
                  >
                    <Star
                      size={20}
                      className="text-black"
                      fill={star <= rating ? "currentColor" : "none"}
                      strokeWidth={2.5}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase mb-1">Suggestion</label>
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="How can they improve their page? Give suggestions!"
                rows={4}
                className="w-full px-3 py-2 border-2 border-black font-semibold text-sm focus:outline-none bg-amber-50/10 rounded-[15px]"
                maxLength={300}
              />
            </div>

            {error && (
              <div className="p-3 bg-neopink text-white font-bold text-xs uppercase border-2 border-black rounded-[8px]">
                {error}
              </div>
            )}

            {success && (
              <div className="p-3 bg-neogreen text-black font-bold text-xs uppercase border-2 border-black rounded-[8px]">
                Review submitted successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-black text-white border-2 border-black text-xs font-extrabold uppercase tracking-widest hover:bg-neocyan hover:text-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 disabled:opacity-50 rounded-full"
            >
              {isSubmitting ? "Submitting..." : "Send Feedback"}
            </button>
          </form>
        </div>

        {/* Horizontal Feedback Cards List Column */}
        <div className="lg:col-span-2 w-full flex flex-col gap-4">
          <h3 className="font-extrabold text-xl uppercase tracking-tight flex items-center gap-2">
            <MessageSquare size={20} /> Received Suggestions ({reviews.length})
          </h3>

          <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-4 py-2 px-1 w-max">
              {reviews.map((rev, index) => {
                const bgColors = ["bg-neocyan", "bg-neopink", "bg-neogreen", "bg-neopurple", "bg-white"];
                const bgColor = bgColors[index % bgColors.length];
                
                return (
                  <div
                    key={rev.id || index}
                    className={`w-80 p-5 ${bgColor} border-3 border-black neo-shadow-sm flex flex-col justify-between h-48 rounded-[1.5rem]`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-xs font-black uppercase text-black">
                          By: {rev.reviewerName}
                        </span>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={12}
                              className="text-black"
                              fill={star <= rev.rating ? "currentColor" : "none"}
                              strokeWidth={2.5}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="font-semibold text-xs text-black leading-snug line-clamp-4">
                        "{rev.suggestion}"
                      </p>
                    </div>
                    <div className="border-t border-black/20 pt-2 text-right">
                      <span className="text-[10px] font-mono text-black/60">
                        {new Date(rev.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                );
              })}

              {reviews.length === 0 && (
                <div className="w-80 p-8 bg-white border-3 border-dashed border-black flex flex-col items-center justify-center text-center h-48 rounded-[1.5rem]">
                  <MessageSquare className="text-gray-400 mb-2" size={36} strokeWidth={2.5} />
                  <h4 className="font-extrabold text-sm uppercase">No reviews yet</h4>
                  <p className="text-xs text-gray-500 font-semibold mt-1">
                    Be the first to leave a rating and suggestion for this profile!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
