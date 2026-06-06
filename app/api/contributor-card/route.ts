import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name") || "Contributor";
  const username = searchParams.get("username") || "github-user";

  const cardApiUrl = process.env.CARD_API_URL;
  const cardApiKey = process.env.CARD_API_KEY;

  if (!cardApiUrl) {
    // Return a beautiful mocked SVG card if the backend URL is not configured
    const svgMock = `
      <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="380" height="230" rx="12" fill="#FFE600" stroke="#000000" stroke-width="4"/>
        <rect x="18" y="18" width="364" height="214" rx="8" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
        
        <!-- Header -->
        <rect x="18" y="18" width="364" height="50" fill="#FF007A" stroke="#000000" stroke-width="2"/>
        <text x="32" y="50" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="20" fill="#FFFFFF">CONTRIBUTOR CARD</text>
        
        <!-- Badge -->
        <rect x="270" y="30" width="100" height="25" rx="4" fill="#39FF14" stroke="#000000" stroke-width="2"/>
        <text x="320" y="47" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="10" fill="#000000" text-anchor="middle">OFFICIAL</text>
        
        <!-- Body Info -->
        <circle cx="60" cy="130" r="30" fill="#00F0FF" stroke="#000000" stroke-width="3"/>
        <text x="60" y="135" font-family="sans-serif" font-weight="bold" font-size="24" fill="#000" text-anchor="middle">${username.substring(0, 2).toUpperCase()}</text>
        
        <text x="110" y="120" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="18" fill="#000000">${name}</text>
        <text x="110" y="140" font-family="monospace" font-size="14" fill="#666666">@${username}</text>
        
        <!-- Stats Mock -->
        <rect x="110" y="155" width="250" height="30" fill="#E6FFFA" stroke="#000000" stroke-width="2" rx="4"/>
        <text x="120" y="174" font-family="monospace" font-size="12" fill="#000000">ROLE: Open Source Learner</text>
        
        <!-- Footer info -->
        <line x1="18" y1="205" x2="382" y2="205" stroke="#000000" stroke-width="2"/>
        <text x="30" y="222" font-family="monospace" font-size="10" fill="#777777">open-source-guestbook (MOCK MODE)</text>
      </svg>
    `;

    return new NextResponse(svgMock, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  }

  try {
    // Make request to secure backend API
    const url = new URL(cardApiUrl);
    url.searchParams.append("name", name);
    url.searchParams.append("username", username);

    const headers: HeadersInit = {};
    if (cardApiKey) {
      headers["Authorization"] = `Bearer ${cardApiKey}`;
      headers["x-api-key"] = cardApiKey; // support multiple API key conventions
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`Backend card API returned status: ${response.status}`);
    }

    const contentType = response.headers.get("Content-Type") || "image/png";
    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(Buffer.from(imageBuffer), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error: any) {
    console.error("Error fetching card from backend:", error);
    return NextResponse.json(
      { error: "Failed to generate contributor card from backend", details: error.message },
      { status: 500 }
    );
  }
}
