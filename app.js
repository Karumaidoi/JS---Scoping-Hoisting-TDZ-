"use strict";

//////////////////////////////////////
// HOISTING AND TEMPORAL DEAD ZONE, THIS
// var, let, const,
// Declaration, Expresson and Arrow

console.log(window.name);

console.log(name);
// console.log(name2);
// console.log(name3);

var name = "Alex"; // Global Scope
const name2 = "Maina"; // Undefined
let name3 = "Mwangi"; // undefined

// class App {
//   addDecl() {
//     console.log(this); // Undefined
//   }

//   addExp = function () {
//     console.log(this);
//   };

//   checkArr() {
//     addArr = () => console.log(this);
//   }
// }

// const app = new App();

// app.addArr();
// app.addDecl();
// app.addExp();
