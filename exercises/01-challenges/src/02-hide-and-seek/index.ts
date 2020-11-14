/**
 * A lowercase word is hiding amongst a crowd of uppercase letters!
 * Write a function that returns the hidden name.
 */

function hideAndSeek(crowd: string) {
  const letters = crowd.split("");
  const result = [];
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toLowerCase()) {
      result.push(letters[i]);
    }
  }
  return result.join("");
}

export { hideAndSeek };
