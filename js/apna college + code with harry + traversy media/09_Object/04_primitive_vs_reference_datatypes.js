
// primitive(pass by value) vs reference datatype (pass by reference)
// ---------------------------------------------------------------------


// 1. primitive datatypes
//----------------------

let number = 10

// pass by value
let number_2 = number
number = 15                 // number ko value change gardaa "number" ko value maatra change hunxa "number_2" ko hudaina

console.log(number);
console.log(number_2);


// ------------------------------------------------------------

//2. reference Datatype
//----------------------

let obj = {number : 10}
// pass by reference
let obj2 = obj

obj.number = 15     // "obj.number" ko value change gardaa dubai "obj" ra "obj2" ko value change hunxa

console.log(obj);
console.log(obj2);