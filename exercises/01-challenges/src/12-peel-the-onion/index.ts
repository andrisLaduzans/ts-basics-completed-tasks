/**
 * You have made a virtual onion and want to peel off the outer layer.
 * Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.
 * 
 * Example:
 * 
 * Input:
[
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
]

 * Output: 
[
  ["f", "g"],
  ["j", "k"]
]
 */
//jānoņem 0 array.last (pedejais)

function peelTheOnion(onion: (string | number)[][]): any[] {
  // console.log("input", onion);

  // const removedHorizontal: any[] = [];

  // for (let index = 0; index < onion.length; index++) {
  //   const thisElement = onion[index];

  //   if (index !== 0 && index !== onion.length - 1) {
  //     console.log("thisElement:", thisElement);

  //     const innerArray:any[] = [];
  //     for (let j = 0; j < thisElement.length; j++) {
  //       const thisCell: string | number = thisElement[j];
  //       if (j !== 0 && j !== thisElement.length - 1) {
  //         innerArray.push(thisCell);
  //       }
  //     }
  //     removedHorizontal.push(innerArray);
  //     console.log("innerArray", innerArray);
  //   }
  // }
  // console.log("removedHorizontal:", removedHorizontal);

  const newOnion = [...onion];
  console.log("onion", newOnion);
  newOnion.pop();
  newOnion.shift();

  console.log(newOnion);

  console.log("popped:", newOnion);
  for (let i = 0; i < newOnion.length; i++) {
    newOnion[i].pop();
    newOnion[i].shift();
  }

  console.log("result", newOnion);
  return newOnion;
}

export { peelTheOnion };
