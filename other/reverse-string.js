/**
 * Reverses a string without any utility functions
 * @param {*} str string to reverse
 * @returns reversed string
 */
function reverseString(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

console.log(reverseString("Ali"));
