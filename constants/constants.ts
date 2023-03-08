import { IObjectTypes, ITeamMembers } from "@/models/constants";

export const PAGES_NAMES: IObjectTypes = {
  home: "Home",
  about: "About Us",
  services: "Services",
  team: "Our Team",
  contact: "Contact Us",
};

export const SOCIAL_LINKS: IObjectTypes = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
  youtube: "https://www.youtube.com/",
};

export const TEAM_MEMBERS: ITeamMembers = {
  dhie: {
    fullName: "Shoo Phar Dhie",
    position: "Founder",
  },
  daanan: {
    fullName: "Arda Daanan",
    position: "CEO",
  },
  palmer: {
    fullName: "Ellis Palmer",
    position: "Designers Team Lead",
  },
  rudd: {
    fullName: "Peter Rudd",
    position: "Designer",
  },
  riddley: {
    fullName: "Ann Riddley",
    position: "Designer",
  },
  stum: {
    fullName: "Jacob Stum",
    position: "Designer",
  },
  norton: {
    fullName: "Sophie Norton",
    position: "HR-manager",
  },
  couper: {
    fullName: "Tom Couper",
    position: "Construction consultant",
  },
};

export const PRODUCT_THEMES: string[] = [
  "Minimalist",
  "Vintage",
  "Modern",
  "Transitional",
];
