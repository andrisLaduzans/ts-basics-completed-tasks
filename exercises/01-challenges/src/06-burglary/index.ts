/**
 * You just returned home to find your mansion has been robbed!
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */

interface Input {
  [key: string]: number;
}

const array = ["andris", "janis", "liga"];
const name = array[1];
//name = 'janis'

const object = {
  a: 1,
  b: "Andris",
  "this is some key": "and this is some value",
};
const name = object.b;
const someValue = object["this is some key"];
//name = 'Andris'

function burglary(input: Input): number | string {
  console.log("input:", input);
  const keysArray = Object.keys(input);
  console.log("keys", keysArray);

  let sum = 0;
  for (let index = 0; index < keysArray.length; index++) {
    console.log("thisIndex:", index, "thisElament", keysArray[index]);
    const thisKey = keysArray[index];
    console.log("current key:", thisKey);
    const thisValue = input[thisKey];
    console.log("this value:", thisValue);
    sum += thisValue;
  }

  console.log("sum", sum);
  //falsy = false, 0, '' .....
  if (sum) {
    return sum;
  }
  return "Lucky you!";
}

export { burglary };
