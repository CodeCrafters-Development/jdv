export const getRoundedNumber = (price: number): number => {
  const installmentPrice = price / 3;
  const rounded = Math.round(installmentPrice * 100) / 100;

  return rounded;
};
