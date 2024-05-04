type SubNavigationLinkTypes = {
  name: string;
  href: string;
};

export type NavigationLinkTypes = {
  name: string;
  href: string;
  hasSub: boolean;
  subLinks?: SubNavigationLinkTypes[];
};
