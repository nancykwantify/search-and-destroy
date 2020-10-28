"use strict";

//Complete this algo
const isLoop = (linkedList) => {
  let current = linkedList.head;
  let obj = {};
  while (current) {
    let value = current["value"];
    // console.log(obj);
    if (obj[value]) {
      return true;
    } else {
      obj[value] = 1;
    }
    current = current.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
