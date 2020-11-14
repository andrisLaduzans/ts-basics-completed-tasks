/**
 * Write a function that takes 4 arguments: color, name, location, item and
 * returns a fortune prediction like so: "You will meet X in Y, and find Z in a N room together."
 */

//mums ir stirngs
//virknē ir kaut kā jāieliek mainīgie

// function fortuneTeller(
//   color: string,
//   location: string,
//   name: string,
//   item: string
// ): string {
//   const classic: string =
//     "You will meet " +
//     name +
//     " in " +
//     location +
//     ", and find " +
//     item +
//     " in a " +
//     color +
//     " room together.";

//     const interpolated = `You will meet ${name} in ${location}, and find ${item} in a ${color} room together.`;
//   return interpolated;
// }

// export { fortuneTeller };

()=>{} //anonymouys arrow functions
const myVariable = ()=>{} //named arrow functions
const myFunction = function(){} 

export const fortuneTeller = (
  color: string,
  location: string,
  name: string,
  item: string
): string => {
  const classic: string =
    "You will meet " +
    name +
    " in " +
    location +
    ", and find " +
    item +
    " in a " +
    color +
    " room together.";

  const interpolated = `You will meet ${name} in ${location}, and find ${item} in a ${color} room together.`;
  return interpolated;
};
