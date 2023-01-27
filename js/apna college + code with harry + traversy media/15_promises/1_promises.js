
/*
// syntax:-
let p = new Promise((resolve, reject) => {
    //code
})
*/

let promise = new Promise(function (resolve, reject) {
    console.log("hello");
    resolve(56)
})



console.log("Hello one");

setTimeout(() => {
    console.log("Hello two in 2 seconds");
}, 2000);

console.log("My name is " + "hello three");
console.log(promise);