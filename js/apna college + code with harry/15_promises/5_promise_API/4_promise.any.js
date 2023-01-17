let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 1")
        reject("first promise has been rejected")
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


// 2. Promise.race    --> jun pahilaa resolved hunxa tesai laai show garxa

let promise_any = Promise.any([p1, p2, p3])

promise_any.then((value)=>{
    console.log(value);
})

