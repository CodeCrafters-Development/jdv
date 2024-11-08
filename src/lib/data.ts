import { NavigationLinkTypes, ProductType, pageMetadataTypes } from "./types";

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

export const productsMen: ProductType[] = [
  {
    id: "JDV 01",
    productName: "Black Leather with Chrome Handles",
    slug: "black-leather-with-chrome-handles-1",
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
    id: "JDV 02",
    productName: "Black Leather with Chrome Handles",
    slug: "black-leather-with-chrome-handles-2",
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
    id: "JDV 03",
    productName: "Black Leather with Chrome Handles",
    slug: "black-leather-with-chrome-handles-3",
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

export const productsWomen: ProductType[] = [
  {
    id: "JDV 04",
    productName: "Black Leather with Chrome Handles",
    slug: "black-leather-with-chrome-handles-4",
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
      { imgUri: "/assets/images/bag1.jpeg", isMain: true },
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
    id: "JDV 05",
    productName: "Black Leather with Chrome Handles",
    slug: "black-leather-with-chrome-handles-5",
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
      { imgUri: "/assets/images/bag2.jpeg", isMain: true },
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
    id: "JDV 06",
    productName: "Black Leather with Chrome Handles",
    slug: "black-leather-with-chrome-handles-6",
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
      { imgUri: "/assets/images/bag3.jpeg", isMain: true },
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

export const pageMetadata: pageMetadataTypes[] = [
  {
    title: "Men",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit fermentum posuere volutpat in lorem purus rhoncus laoreet sapien. Placerat at turpis lacus id mattis donec.",
  },
  {
    title: "Shirts",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit fermentum posuere volutpat in lorem purus rhoncus laoreet sapien. Placerat at turpis lacus id mattis donec.",
  },
  {
    title: "T-Shirts",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit fermentum posuere volutpat in lorem purus rhoncus laoreet sapien. Placerat at turpis lacus id mattis donec.",
  },
];

export const singleProduct: ProductType = {
  id: "JDV 01",
  productName: "Black Leather with Chrome Handles",
  slug: "black-leather-with-chrome-handles-1",
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
    {
      imgUri: "/assets/images/sub1.jpeg",
      isMain: true,
    },
    {
      imgUri: "/assets/images/sub2.jpeg",
    },
    {
      imgUri: "/assets/images/sub3.jpeg",
    },
  ],
};
