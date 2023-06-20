/**
 * Tells if two string are anagrams or not
 * @param {*} str1 first string to compare
 * @param {*} str2 second string to compare
 * @returns true if provided strings are anagrams, otherwise returns false
 */
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let newStr1 = str1.split("").sort().join();
  let newStr2 = str2.split("").sort().join();

  if (newStr1 !== newStr2) {
    return false;
  }

  return true;
}

console.log(isAnagram("care", "race"));
