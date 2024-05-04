import { NavigationLinkTypes } from "./types";

export const navlinks: NavigationLinkTypes[] = [
  { name: "Women", href: "/women", hasSub: false },
  {
    name: "Men",
    href: "/men",
    hasSub: true,
    subLinks: [
      { name: "Shirts", href: "/men/shirts" },
      { name: "T-shirts", href: "/men/t-shirts" },
    ],
  },
  { name: "Kids", href: "/kids", hasSub: false },
];
