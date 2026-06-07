import React from "react";
import { TemplateCard } from "./user-card/TemplateCard";
import { TemplateProfile } from "./user-page/TemplateProfile";
import { UthkarshCard } from "./user-card/UthkarshCard";
import { UthkarshProfile } from "./user-page/UthkarshProfile";
import { GouriAgrawalCard } from "./user-card/gouriagrawal-ietCard";

export interface Contributor {
  username: string; // unique slug used in route /profile/[username]
  name: string; // display name
  gitUsername: string; // github username
  cardColor?: string; // custom highlight color (optional)
  cardComponent: React.ComponentType; // custom card component
  pageComponent?: React.ComponentType; // optional custom profile page component
}

// Contributors registry list
export const contributors: Contributor[] = [
  {
    username: "uthkarsh",
    name: "Uthkarsh Mandloi",
    gitUsername: "UthkarshMandloi",
    cardColor: "#00F0FF", // Electric Cyan
    cardComponent: UthkarshCard,
    pageComponent: UthkarshProfile,
  },
  {
    username: "gouriagrawal",
    name: "Gouri Agrawal",
    gitUsername: "gouriagrawal06",
    cardColor: "#FF69B4", // Hot Pink
    cardComponent: GouriAgrawalCard,
    // pageComponent: GouriAgrawalProfile,
  },
  {
    username: "template",
    name: "John Doe",
    gitUsername: "johndoe-git",
    cardColor: "#FFE600", // Neo-pop Yellow
    cardComponent: TemplateCard,
    pageComponent: TemplateProfile,
  },
  // Junior developers will add their entries below:
];
