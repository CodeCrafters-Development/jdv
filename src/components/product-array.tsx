import React from "react";
import ProductCard from "./product-card";
import { ProductType } from "../lib/types";

type ProductArrayType = {
  productsList: ProductType[];
  link: string;
};

const ProductArray = ({ productsList, link }: ProductArrayType) => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-y-[34px] gap-x-[34px]">
      {productsList.map((item, index) => (
        <React.Fragment key={index}>
          <ProductCard {...item} />
        </React.Fragment>
      ))}
      <div className="lg:col-span-3 flex items-center justify-center ">
        <a
          href={link}
          className="bg-primary text-secondary font-NeueMontrealMedium w-full text-center py-4 lg:w-[282px]"
        >
          View Collection
        </a>
      </div>
    </div>
  );
};

export default ProductArray;
