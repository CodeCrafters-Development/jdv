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
    <div className="flex flex-col w-[382px] gap-y-[19px]">
      <img
        src={images[0].imgUri}
        className="w-[382px] h-[326px] object-cover"
      />
      <div className="flex flex-col">
        <span className="text-xs font-bold">{id}</span>
        <span className="text-[20px] font-medium font-NeueMontreal">
          {productName}
        </span>
        <div className="flex items-center gap-x-[10px]">
          <span className="text-[18px] font-normal">LKR {price}</span>
          <span className="text-xs font-normal">
            or LKR {getRoundedNumber(price)} with
          </span>
          <img src={installment[0].brandImg} className="h-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
