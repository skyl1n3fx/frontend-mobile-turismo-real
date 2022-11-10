export const priceFormat = (price: number): string | 0 => {
  const roundedValue = Math.round(price * 100) / 100;
  const number = roundedValue.toString().split(".");
  const numberFormated =
    number.length > 1
      ? number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "." + number[1]
      : number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return '$' + numberFormated ? '$' + numberFormated : 0;
};

export const truncateString = (
  string: string,
  maxCharacters: number
): string => {
  if (string.length > maxCharacters) {
    return string.substring(0, maxCharacters) + "...";
  }
  return string;
};
