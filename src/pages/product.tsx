import { useParams } from "react-router-dom";
import ImageGallery from "../components/image-gallery";
import { singleProduct } from "../lib/data";
import React, { useState } from "react";
import { getRoundedNumber } from "../lib/utils";

const Product = () => {
  const { slug } = useParams();

  const product = singleProduct;
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <main>
      <section className="px-0 lg:px-20 pb-10">
        <div className="h-[60px] xl:h-[100px]"></div>
        <div className="flex flex-col md:flex-row items-center gap-y-3 md:gap-x-11">
          <ImageGallery slug={slug} images={product.images} />
          <div className="flex-1 w-full p-1 font-NeueMontrealMedium flex flex-col gap-y-9 max-md:px-5">
            <div className="flex flex-col gap-y-2">
              <p className="text-sm font-bold">{product.id}</p>
              <h3 className="text-4xl font-medium">{product.productName}</h3>
              <p
                className={`${
                  product.isInStock === "In Stock"
                    ? "text-green-500"
                    : "text-red-500"
                } text-xs `}
              >
                {product.isInStock}
              </p>
            </div>
            <div className="flex flex-col gap-y-2 font-NeueMontrealLight font-bold">
              <p>Size:</p>
              <div className="flex gap-x-4">
                {product.size.map((item, index) => (
                  <React.Fragment key={index}>
                    <button
                      onClick={() => setSelectedSize(index)}
                      className={`border border-secondary/95 w-9 h-9 flex items-center justify-center ${
                        selectedSize === index && "border-none bg-primary"
                      }`}
                    >
                      <span
                        className={`${
                          selectedSize === index && "font-extrabold"
                        }`}
                      >
                        {item}
                      </span>
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-2xl">LKR {product.price}</h4>
              <div className="flex items-center gap-x-1">
                <p className="text-xs">
                  or {product.installment[0].numOfInstallments} x LKR{" "}
                  {new Intl.NumberFormat().format(
                    getRoundedNumber(product.price)
                  )}{" "}
                  with
                </p>
                <img
                  src={product.installment[0].brandImg}
                  className="h-[16px] lg:h-[18px]"
                />
              </div>
            </div>
            <div className="flex w-full gap-x-4">
              <a
                href="/"
                className="bg-primary text-secondary font-NeueMontrealMedium w-full text-center py-3 lg:w-[252px]"
              >
                Call for Inquiry
              </a>
              <a
                href="/"
                className="bg-white text-secondary font-NeueMontrealMedium w-full text-center py-3 lg:w-[252px] hover:bg-gray-300/25"
              >
                Available Stores
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
