let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 1000);
})


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 2")
    }, 2000);
})


let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 3000);
})

// -------------------------------------------------------------------
// normal case maa yasari individual tarikaale promise receive garxau
// p1.then((value)=>{
//     console.log(value);
// })

// p2.then((value)=>{
//     console.log(value);
// })

// p3.then((value)=>{
//     console.log(value);
// })


// ----------------------------------------------------------
// using "promise API" sabai promises yakai saath wait garnako laagi
// ---------------------------------------------------------------------------

// 1. promise.all
let promise_all = Promise.all([p1,p2,p3])

promise_all.then((value)=> {
    console.log(value);
})

  