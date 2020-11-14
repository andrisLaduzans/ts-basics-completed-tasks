/**
 * Create a function that takes two arguments: the final price and the discount percentage as integers.
 * Return the final price after the discount.
 */

//0.10 x $15.00 = $1.50
function discount(price: number, discount: number) {
  const decimal = discount / 100;
  console.log("decimal", decimal);
  const discountedValue = price * decimal;
  console.log("discountedPrice", discountedValue);
  const result = price - discountedValue;
  return result;
}

export { discount };
