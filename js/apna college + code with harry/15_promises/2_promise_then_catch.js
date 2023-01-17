

// This is the case when promise is fulfilled
 
let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        // console.log("I am a promise and I am fulfilled");
        resolve(true)
    }, 5000);
})



// this is the case when promise is resolve

let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        // console.log("I am a promise and I am rejected");
        // resolve(true)
        reject(new Error("I am an error"))
    }, 5000);
})


// of we execite both above code parallelly then it executes parallelly. it takes 5s not 10s
// console.log(p1,p2);


p1.then((value) => {
    console.log(value);
})

p2.catch((error)=>{
    console.log("some error occured in p2");
})