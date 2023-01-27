 
// let arr = [3, 5] 
// let [a,b] = arr

// // no need to do this:
// // let a = arr[0]
// // let b = arr[1]
// console.log(a,b)


// -------------------------------------------------
// let arr = [3, 5] 
// let [a,b,c] = arr
// console.log(a,b,c)


// -------------------------------------------------------
// let arr = [3, 5, 8, 8, 12, 14] 
// let [a,b,c] = arr
// console.log(a,b,c)


// ------------------------------------------------
// let arr = [3, 5, 8, 8, 12, 14] 
// let [a,b,c,...rest] = arr
// console.log(a,b,c,rest)

// ------------------------------------------------------
// let arr = [3, 5, 8, 8, 12, 14] 
// let [a,,,...rest] = arr
// console.log(a,rest)

// -----------------------------------------------------------
let arr = [3, 5, 8, 8, 12, 14] 
let [a,,b,...rest] = arr
console.log(a,b,rest)