/**@param {number} int */
function decomposer(int) {
  let howManyDigits = int.toString().length;
  let result = [];
  for (currentDigit = 0; currentDigit < howManyDigits; currentDigit++) {
    result.push(int.toString().at(currentDigit) + '0'.repeat(howManyDigits - currentDigit - 1));
  }
  return result.map((str) => parseInt(str));
}

class RomanNumerals {
  static romanNumeralsDictionary() {
    return {
      "M": 1000,
      "D": 500,
      "C": 100,
      "L": 50,
      "X": 10,
      "V": 5,
      "I": 1
    };
  }
  /**@param {number} num */
  static toRoman(num) {
  }
  /**@param {string} str */
  static fromRoman(str) {
  }
}
function romanNumeralMain() {
  console.log(decomposer(15483));
}
romanNumeralMain();
