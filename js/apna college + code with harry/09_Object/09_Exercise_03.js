/*
arr = [1,2,3,4,5,6,7,8]
let first = arr[0]
let second = arr[1]
let third = arr[2]
let others = arr.slice(3)
*/

// Or
// that de-structuring is came during es6
let [first, second, third,...others] = [1,2,3,4,5,6,7,8]

// To print
console.log(first)
console.log(second)
console.log(third)
console.log(others)