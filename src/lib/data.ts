import { NavigationLinkTypes, ProductType, pageMetadataTypes } from "./types";

export const navlinks: NavigationLinkTypes[] = [
  { 
    name: "Women", 
    href: "/women", 
    hasSub: true,
    subLinks: [
      { name: "Pants", href: "/women/pants" },
    ],
  },
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
    productName: "Long sleeve regular collar shirt",
    slug: "black-leather-with-chrome-handles-1",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Elevate your wardrobe with our long sleeve shirt, designed for both comfort and style. a timeless piece that effortlessly combines sophistication and style. made from premium, lightweight meterial. The deep navy hue exudes an air of refined elegance, making it a perfect foundation for both casual and upscale ensembles.",
    price: 4200,
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
        imgUri: "/assets/images/recent1.jpeg",
      },
      {
        imgUri: "/assets/images/recent1.jpeg",
      },
      {
        imgUri: "/assets/images/recent1.jpeg",
      },
    ],
  },
  {
    id: "JDV 02",
    productName: "Long sleeve regular knitted sweater",
    slug: "black-leather-with-chrome-handles-2",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Introducing our long sleeve regular knitted sweater, featuring a light turtleneck for a touch of warmth and classic knit pattern that adds subtle texture. Crafted from soft, breathable yarn with a light transparent effect. this sweater combines comfort with a refined fit that gently hugs your silhouette without being oversized.",
    price: 3800,
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
    productName: "Long sleeve crew sweater",
    slug: "black-leather-with-chrome-handles-3",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Transform your casual attire with our long sleeve crew neck sweater, a must-have addition to your wardrobe that combines timeless design with modern functionality.This sweater is your key to versatile, effortless style.",
    price: 3600,
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
  {
    id: "JDV 04",
    productName: "Long sleeve turtleneck sweater",
    slug: "long-sleeve-turtleneck-sweater",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Introducing our long sleeve turtleneck sweater, designed for ultimate comfort and style. Made from soft stretch cotton, this cozy piece envelops you in warmth while offering a flattering, snug fit. The classic turtleneck design adds a sophisticated touch, making it perfect for layering or wearing solo.This sweater-type shirt features a lightweight yet warm fabric that drapes beautifully.",
    price: 3600,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/recent4.jpeg", isMain: true },
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
    description: "",
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
    description: "",
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
    description: "",
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

export const cargoPants: ProductType[] = [
  {
    id: "JDV 06",
    productName: "Modish cargo pant",
    slug: "modish-cargo-pant",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Elevate your casual wardrobe with our Modish cargo pants, designed for both style and comfort. Featuring a relaxed silhouette,and a V-shaped front line.The unique pant leg edge slit adds a modern touch, allowing for a playful peek of your footwear and enhancing the overall flow of the design.",
    price: 4800,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/pants1-new.jpeg", isMain: true },
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
    id: "JDV 07",
    productName: "City stride cargo pant",
    slug: "city-stride-cargo-pant",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Unleash your adventurous spirit with our City Stride cargo pants, designed for those who crave both functionality and flair.These straight-leg pants feature multiple pockets, providing ample storage for your essentials while maintaining a sleek, casual silhouette and these pants offers a relaxed yet polished look, making them easy to pair with a variety of tops.",
    price: 5500,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/pants2.jpeg", isMain: true },
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
    id: "JDV 08",
    productName: "Venture cargo pant",
    slug: "venture-cargo-pant",
    isInStock: "In Stock",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Step into effortless style with our Venture cargo pants, designed for the urban explorer who embraces street style with a relaxed twist. These straight-leg pants feature an array of multiple pockets, perfect for stashing your essentials while adding a distinctive edge to your outfit.these pants effortlessly blend comfort and style, making them a must-have for any fashion-forward wardrobe.",
    price: 5500,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/pants3.jpeg", isMain: true },
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
      "Explore our curated collection for men, where timeless elegance meets modern sophistication. From premium fabrics to impeccable tailoring, redefine your wardrobe with our exclusive range.",
  },
  {
    title: "Shirts",
    description:
      "Discover our luxurious selection of men's shirts, crafted from the finest materials. Whether for business or leisure, our designs offer unparalleled comfort and effortless style.",
  },
  {
    title: "T-Shirts",
    description:
      "Elevate your casual wardrobe with our premium T-shirts. Designed for both comfort and style, each piece reflects a perfect blend of contemporary trends and timeless appeal.",
  },
  {
    title: "Pants",
    description:
      "Redefine versatility with our collection of men's pants, tailored to perfection. From sleek chinos to classic trousers, experience unparalleled comfort and refined aesthetics.",
  },
];


export const singleProduct: ProductType = {
  id: "JDV 01",
  productName: "Black Leather with Chrome Handles",
  slug: "black-leather-with-chrome-handles-1",
  isInStock: "In Stock",
  size: ["XS", "S", "M", "L", "XL", "XXL"],
  description: "",
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


export const allProducts: ProductType[] = [
  {
    id: "JDV 01",
    productName: "Long sleeve regular collar shirt",
    slug: "black-leather-with-chrome-handles-1",
    isInStock: "In Stock",
    size: ["S", "M", "L"],
    description: "Elevate your wardrobe with our long sleeve shirt, designed for both comfort and style. a timeless piece that effortlessly combines sophistication and style. made from premium, lightweight meterial. The deep navy hue exudes an air of refined elegance, making it a perfect foundation for both casual and upscale ensembles.",
    price: 4200,
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
    ],
  },
  {
    id: "JDV 02",
    productName: "Long sleeve regular knitted sweater",
    slug: "black-leather-with-chrome-handles-2",
    isInStock: "In Stock",
    size: ["S", "M", "L"],
    description: "Introducing our long sleeve regular knitted sweater, featuring a light turtleneck for a touch of warmth and classic knit pattern that adds subtle texture. Crafted from soft, breathable yarn with a light transparent effect. this sweater combines comfort with a refined fit that gently hugs your silhouette without being oversized.",
    price: 3800,
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
    ],
  },
  {
    id: "JDV 03",
    productName: "Long sleeve crew sweater",
    slug: "black-leather-with-chrome-handles-3",
    isInStock: "In Stock",
    size: ["S", "M", "L"],
    description: "Transform your casual attire with our long sleeve crew neck sweater, a must-have addition to your wardrobe that combines timeless design with modern functionality.This sweater is your key to versatile, effortless style.",
    price: 3600,
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
    ],
  },
  {
    id: "JDV 04",
    productName: "Long sleeve turtleneck sweater",
    slug: "long-sleeve-turtleneck-sweater",
    isInStock: "In Stock",
    size: ["S", "M", "L"],
    description: "Introducing our long sleeve turtleneck sweater, designed for ultimate comfort and style. Made from soft stretch cotton, this cozy piece envelops you in warmth while offering a flattering, snug fit. The classic turtleneck design adds a sophisticated touch, making it perfect for layering or wearing solo.This sweater-type shirt features a lightweight yet warm fabric that drapes beautifully.",
    price: 3600,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/recent4.jpeg", isMain: true },
    ],
  },
  {
    id: "JDV 06",
    productName: "Modish cargo pant",
    slug: "modish-cargo-pant",
    isInStock: "In Stock",
    size: ["S", "M", "L"],
    description: "Elevate your casual wardrobe with our Modish cargo pants, designed for both style and comfort. Featuring a relaxed silhouette,and a V-shaped front line.The unique pant leg edge slit adds a modern touch, allowing for a playful peek of your footwear and enhancing the overall flow of the design.",
    price: 4800,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/pants1-new.jpeg", isMain: true },
    ],
  },
  {
    id: "JDV 07",
    productName: "City stride cargo pant",
    slug: "city-stride-cargo-pant",
    isInStock: "In Stock",
    size: ["S", "M", "L"],
    description: "Unleash your adventurous spirit with our City Stride cargo pants, designed for those who crave both functionality and flair.These straight-leg pants feature multiple pockets, providing ample storage for your essentials while maintaining a sleek, casual silhouette and these pants offers a relaxed yet polished look, making them easy to pair with a variety of tops.",
    price: 5500,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/pants2.jpeg", isMain: true },
    ],
  },
  {
    id: "JDV 08",
    productName: "Venture cargo pant",
    slug: "venture-cargo-pant",
    isInStock: "In Stock",
    size: ["S", "M", "L"],
    description: "Step into effortless style with our Venture cargo pants, designed for the urban explorer who embraces street style with a relaxed twist. These straight-leg pants feature an array of multiple pockets, perfect for stashing your essentials while adding a distinctive edge to your outfit.these pants effortlessly blend comfort and style, making them a must-have for any fashion-forward wardrobe.",
    price: 5500,
    installment: [
      {
        id: 1,
        name: "KOKO",
        numOfInstallments: 3,
        brandImg: "/assets/images/koko.png",
      },
    ],
    images: [
      { imgUri: "/assets/images/pants3.jpeg", isMain: true },
    ],
  },
];