/**
 * Write a function that takes dog's age in human years as an argument and converts to dog years.
 * Return the result like so: "Your doggie is NN years old in dog years!"
 */

//paņemsim vecumu
//izreķināsim suņa vecumu suņa gadus
//so vecumu saglabasim return stringā

// function pupperAgeCalculator(age: number): string {
//   const dogAge = age * 7;
//   return `Your doggie is ${dogAge} years old in dog years!`;
// }

// export { pupperAgeCalculator };

const pupperAgeCalculator = (age: number): string => {
  const dogAge = age * 7;
  return `Your doggie is ${dogAge} years old in dog years!`;
};


export default pupperAgeCalculator;