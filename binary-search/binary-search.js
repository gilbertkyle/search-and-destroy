"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  let lowerBound = 0;
  let upperBound = array.length - 1;
  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((upperBound + lowerBound) / 2);
    if (array[midpoint] === target) {
      return true;
    } else if (target < array[midpoint]) {
      upperBound = midpoint - 1;
    } else if (target > array[midpoint]) {
      lowerBound = midpoint + 1;
    }
  }
  //console.log("lower: ", lowerBound, "upper: ", upperBound);
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
