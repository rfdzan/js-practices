/**@param {number[]} arr */
function minMax(arr) {
  let lowest = Math.min(...arr);
  let highest = Math.max(...arr);
  return [lowest, highest]
}
console.log(minMax([1, 2, 3, 4, 5]));

