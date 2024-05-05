import { NavigationLinkTypes, ProductType } from "./types";

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

export const products: ProductType[] = [
  {
    id: "JDV 01",
    productName: "Black Leather with Chrome Handles",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    price: 4000,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/recent1.jpeg", isMain: true },
      {
        imgUri: "/assets/images/sub1.jpeg",
      },
      {
        imgUri: "/assets/images/sub2.jpeg",
      },
      {
        imgUri: "/assets/images/sub3.jpeg",
      },
    ],
  },
  {
    id: "JDV 01",
    productName: "Black Leather with Chrome Handles",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    price: 4000,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/recent2.jpeg", isMain: true },
      {
        imgUri: "/assets/images/sub1.jpeg",
      },
      {
        imgUri: "/assets/images/sub2.jpeg",
      },
      {
        imgUri: "/assets/images/sub3.jpeg",
      },
    ],
  },
  {
    id: "JDV 01",
    productName: "Black Leather with Chrome Handles",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    price: 4000,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/recent3.jpeg", isMain: true },
      {
        imgUri: "/assets/images/sub1.jpeg",
      },
      {
        imgUri: "/assets/images/sub2.jpeg",
      },
      {
        imgUri: "/assets/images/sub3.jpeg",
      },
    ],
  },
];
