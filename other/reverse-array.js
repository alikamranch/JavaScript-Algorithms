/**
 * Reverses a provided array without any utility functions
 * @param {*} arr Array that needs to be reversed
 * @returns reversed array
 */
function reverseArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - 1 - i];
  }

  return newArr;
}

console.log(reverseArray([5, 4, 3, 2, 1]));
