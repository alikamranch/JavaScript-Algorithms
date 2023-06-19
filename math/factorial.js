/**
 * Calclates the factorial of a provided number
 * @param {*} number
 * @returns the factorial of number
 */
function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
