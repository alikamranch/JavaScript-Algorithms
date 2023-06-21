/*
Write a function that returns an equilibrium index or -1 if it doesn’t exist, equilibrium index is the index such that the sum of the elements of the lower indexes is equal to the sum of the elements of the higher indexes.

Example:
Input = [0, 8, 7, 5, 6, -3]
Output = 2

Input = [4, 7, -3, 0, 0, 0, 7, 8]
Output = 6
*/

/**
 * Returns the equilibrium index of an array from which the sum of the lower and higher indexes is the same
 * @param {*} arr array from which the equilibrium index is to be found
 * @returns equilibrium index if it exists, otherwise -1
 */
function equilibriumIndex(arr) {
  let lower = [];
  let lowerSum;
  let higher = [];
  let higherSum;

  for (let i = 0; i < arr.length; i++) {
    lowerSum = 0;
    higherSum = 0;

    if (arr.slice(0, i)) {
      lower = arr.slice(0, i);
    }
    if (arr.slice(i + 1, arr.length)) {
      higher = arr.slice(i + 1, arr.length);
    }

    for (let i = 0; i < lower.length; i++) {
      lowerSum += lower[i];
    }

    for (let i = 0; i < higher.length; i++) {
      higherSum += higher[i];
    }

    if (lowerSum === higherSum) {
      return i;
    }
  }

  return -1;
}

console.log(equilibriumIndex([4, 7, -3, 0, 0, 0, 7, 8]));
