"use strict";

//////////////////////////////////////
// HOISTING AND TEMPORAL DEAD ZONE
console.log(name);
// console.log(job);
// console.log(year);

var name = "Alex";
let job = "teacher";
const year = 1991;

console.log(addDecl(2, 3));

console.log(addExp(2, 5));

console.log(addArr(2, 3));

// Functions
function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

const addArr = (a, b) => a + b;
