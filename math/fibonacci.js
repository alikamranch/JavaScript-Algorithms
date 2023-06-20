/**
 * Calculates the fibonacci sequence based on the given number
 * @param {*} number
 * @returns the fibonacci sequence
 */
function fibonacci(number) {
  const response = [0, 1];

  for (let i = 2; i <= number; i++) {
    response[i] = response[i - 1] + response[i - 2];
  }

  return response;
}

console.log(fibonacci(5));
