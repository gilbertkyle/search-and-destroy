"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let slow = linkedlist.head;
  if (slow === null) {
    return false;
  }
  let fast = slow.next;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
    if (fast === null || fast.next === null) {
      return false;
    }
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
