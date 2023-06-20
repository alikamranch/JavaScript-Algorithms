/**
 * Checks if a string is a palindrome
 * @param {*} str String to check for palindrome
 * @returns True if a string is palindrome, otherwise false
 */
function isPalindrome(str) {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("madam"));
