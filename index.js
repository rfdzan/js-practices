function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks"
  } else {
    return "Keep at it until you get it"
  }
}
function doubleChar(str) {
  var toReturn = [];
  for (char of str) {
    toReturn.push(`${char}${char}`);
  }
  return toReturn.join("");
}
/** @param {string} str */
function makeUpperCase(str) {
  return str.toUpperCase()
}
/** @param {string} str */
function solution(str) {
  let length = str.length
  let splitStr = []
  for (i = 0; i < length; i = i + 2) {
    let first = str.at(i);
    let second = () => {
      if (str.at(i + 1) == null) {
        return "_"
      } else {
        return str.at(i + 1)
      }
    }
    splitStr.push(first + second());
    continue;
  }
  return splitStr
}
/** @param {number} value */
function narcissistic(value) {
  let power = value.toString().length;
  let splitNum = value.toString().split("");
  let toThePower = splitNum.map((str) => Number(str) ** power).reduce((l, r) => l + r);
  return value === toThePower
}
/** @param {number[][]} data */
function openOrSenior(data) {
  return data.map((arr) => {
    let age = arr.at(0)
    let handicap = arr.at(1)
    if (age >= 55 && handicap > 7) {
      return "Senior"
    }
    return "Open"
  })
}
/** @param {string} s */
function firstNonRepeatingLetter(s) {
  let checkResult = []
  for (i = 0; i < s.length; i++) {
    let currentChar = s.toLowerCase().at(i)
    let innerCheck = s.toLowerCase().split("").map((char) => currentChar === char ? 1 : 0);
    checkResult.push(innerCheck.reduce((l, r) => l + r))
  }
  for ([idx, num] of checkResult.entries()) {
    if (num === 1) {
      return s.at(idx);
    }
  }
  return ""
}
// var maxSequence = 
// ...
/** @param {number[]} arr */
function maxSequence(arr) {
  let areAllNegative = arr.filter((a) => a > 0)
  if (areAllNegative.length === 0) {
    return 0
  }
  if (arr.filter((a) => a < 0).length === 0) {
    return arr.reduce((l, r) => l + r)
  }

  let myMap = {};

  // outerloop defines window size
  for (window = 1; window <= arr.length; window++) {
    // inner loop moves the window
    for (i = 0; i < arr.length; i++) {
      if (i + window > arr.length) {
        break
      }
      let slice = arr.slice(i, i + window);
      let key = slice.reduce((l, r) => l + r);
      myMap[key] = slice;
    }
  }
  let keys = Object.keys(myMap).map((str) => Number(str));
  let maxNum = Math.max(...keys);
  return maxNum;

}
console.log(maxSequence([35, -26, 7])
);
