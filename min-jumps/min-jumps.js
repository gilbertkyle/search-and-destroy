"use strict";

// Complete this algo
const minJumps = (arr) => {
  let start = 0;
  let jumpCounter = 0;
  let myArray = arr.slice(start + 1, arr[start]);

  while (start <= arr.length - 1) {
    let biggestJumpNum = Math.max(...myArray);

    start += myArray.indexOf(biggestJumpNum);

    jumpCounter++;
  }
  return jumpCounter;
};

module.exports = minJumps;

// 1. Start at [0]
// 2. look at all numbers between Array.0 and Array.n
// 3. Get biggest value of that slice
// 4. make that the new starting point
// 5. repeat until starting point is >= Array.length - 1
