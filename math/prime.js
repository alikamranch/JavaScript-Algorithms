/**
 * Returns true if the provided number is a prime number, false otherwise
 * @param {*} number
 * @returns
 */
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
