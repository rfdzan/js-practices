/**@param {number} int */
function decomposer(int) {
  let howManyDigits = int.toString().length;
  let result = [];
  for (currentDigit = 0; currentDigit < howManyDigits; currentDigit++) {
    result.push(int.toString().at(currentDigit) + '0'.repeat(howManyDigits - currentDigit - 1));
  }
  return result.map((str) => parseInt(str));
}
/**@param {number[]} decomposed */
function buildRomanNumerals(decomposed) {

}
/**@param {number} int */
function nearestLowestKey(int) {
  let left = Object.entries(RomanNumerals.dict());
  let right = Array.from(left);
  right.pop()
  left.splice(0, 1);
  // what's left is to zip these two iterables, find where in these two does 'int' resides. then take the left [key,value].
  let zip = left.map((leftMembers) => [])

}
class RomanNumerals {
  static dict() {
    return {
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
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
  console.log(decomposer(3756));
  console.log(3 % 5)
}
nearestLowestKey(700);
