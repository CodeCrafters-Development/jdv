export type SubNavigationLinkTypes = {
  name: string;
  href: string;
};

export type NavigationLinkTypes = {
  name: string;
  href: string;
  hasSub: boolean;
  subLinks?: SubNavigationLinkTypes[];
};

export type ImageData = {
  imgUri: string;
  isMain?: boolean;
};

export type ProductType = {
  id: string;
  productName: string;
  slug: string;
  isInStock: "In Stock" | "Out of Stock";
  size: string[];
  price: number;
  installment: {
    id: number;
    name: string;
    numOfInstallments: number;
    brandImg: string;
  }[];
  images: ImageData[];
};

export type pageMetadataTypes = {
  title: string;
  description: string;
};
