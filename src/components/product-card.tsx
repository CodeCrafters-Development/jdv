import { ProductType } from "../lib/types";

const ProductCard = ({
  id,
  images,
  installment,
  price,
  productName,
}: ProductType) => {
  const getRoundedNumber = (price: number): number => {
    const installmentPrice = price / 3;
    const rounded = Math.round(installmentPrice * 100) / 100;

    return rounded;
  };

  return (
    <div className="mx-auto">
      <img
        src={images[0].imgUri}
        className="w-[191px] h-[163px] object-cover lg:w-[382px] lg:h-[326px]"
      />
      <div className="flex flex-col w-[140px] lg:w-[382px] mt-2">
        <span className="text-xs text-gray-500/40 font-bold">{id}</span>
        <span className="text-[14px] lg:text-[20px] font-medium font-NeueMontreal">
          {productName}
        </span>
        <span className="text-[14px] lg:text-[20px]">
          LKR{" " + new Intl.NumberFormat().format(price)}
        </span>
        <div className="lg:flex gap-x-1">
          <span className="text-xs lg:text-sm text-gray-500/60">
            or pay in 3 x{" "}
            <span className="font-bold">
              LKR{" "}
              {" " + new Intl.NumberFormat().format(getRoundedNumber(price))}
            </span>
          </span>
          <span className="flex items-center gap-x-1 text-xs lg:text-sm text-gray-500/60">
            with{" "}
            <img
              src={installment[0].brandImg}
              className="h-[16px] lg:h-[18px]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
