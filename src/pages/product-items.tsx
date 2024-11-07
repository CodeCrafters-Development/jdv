import ProductArray from "../components/product-array";
import { productsMen } from "../lib/data";
import { pageMetadataTypes } from "../lib/types";

type ProductItemsProps = {
  metadata: pageMetadataTypes;
};

const ProductItems = ({ metadata }: ProductItemsProps) => {
  return (
    <main>
      <section className="px-5 lg:px-20 ">
        <div className="h-[60px] md:h-[100px] bg-blue-500"></div>
        <div className="w-full flex flex-col gap-y-6 pb-3 md:pt-5 items-center justify-center text-center">
          <h1 className="text-4xl md:text-h2Desktop font-PlayfairDisplay font-medium">
            {metadata.title}
          </h1>
          <hr className="h-[1.5px] w-3/4 bg-secondary opacity-20" />
          <p className="text-sm md:text-lg sm:w-[69%] md:w-[70%] lg:w-[55%]">
            {metadata.description}
          </p>
        </div>
      </section>
      <section className="px-5 lg:px-20 py-10">
        {/* TODO: Implement product fetch */}
        <ProductArray productsList={productsMen} />
      </section>
    </main>
  );
};

export default ProductItems;
