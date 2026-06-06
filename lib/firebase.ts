import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const isFirebaseConfigured = !!(
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
);

let db: any = null;
let analytics: any = null;

if (isFirebaseConfigured) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    
    // Initialize analytics only on the client side (browser env)
    if (typeof window !== "undefined") {
      isSupported().then((supported) => {
        if (supported) {
          analytics = getAnalytics(app);
        }
      }).catch((err) => {
        console.warn("Firebase Analytics is not supported in this environment:", err);
      });
    }
  } catch (error) {
    console.error("Failed to initialize Firebase:", error);
  }
}

export { db, analytics };

export interface Review {
  id?: string;
  username: string;
  rating: number; // 1 to 5
  suggestion: string;
  reviewerName: string;
  timestamp: string;
}

export async function addReview(review: Omit<Review, "id" | "timestamp">): Promise<string> {
  if (!isFirebaseConfigured || !db) {
    throw new Error("Firebase is not configured. Please check the terms before contributing.");
  }
  const reviewsCol = collection(db, "reviews");
  const docRef = await addDoc(reviewsCol, {
    ...review,
    timestamp: new Date().toISOString(),
  });
  return docRef.id;
}

export async function getReviews(username: string): Promise<Review[]> {
  if (!isFirebaseConfigured || !db) {
    return [];
  }
  try {
    const reviewsCol = collection(db, "reviews");
    const q = query(reviewsCol, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    const results: Review[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      results.push({
        id: doc.id,
        username: data.username,
        rating: data.rating,
        suggestion: data.suggestion,
        reviewerName: data.reviewerName,
        timestamp: data.timestamp || new Date().toISOString(),
      });
    });
    // Sort in-memory by timestamp descending
    return results.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}

export interface LeaderboardEntry {
  username: string;
  averageRating: number;
  totalRatings: number;
}

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  if (!isFirebaseConfigured || !db) {
    return [];
  }
  try {
    const reviewsCol = collection(db, "reviews");
    const querySnapshot = await getDocs(reviewsCol);
    const ratingsMap: Record<string, { total: number; count: number }> = {};
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const username = data.username;
      const rating = Number(data.rating) || 0;
      if (username) {
        if (!ratingsMap[username]) {
          ratingsMap[username] = { total: 0, count: 0 };
        }
        ratingsMap[username].total += rating;
        ratingsMap[username].count += 1;
      }
    });
    
    const leaderboard: LeaderboardEntry[] = Object.keys(ratingsMap).map((username) => ({
      username,
      averageRating: Number((ratingsMap[username].total / ratingsMap[username].count).toFixed(2)),
      totalRatings: ratingsMap[username].count,
    }));
    
    // Sort by average rating descending, then total ratings descending
    return leaderboard.sort((a, b) => {
      if (b.averageRating !== a.averageRating) {
        return b.averageRating - a.averageRating;
      }
      return b.totalRatings - a.totalRatings;
    });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
}
