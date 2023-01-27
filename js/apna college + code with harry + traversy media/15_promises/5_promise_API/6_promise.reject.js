let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 1000);
})

let promise_reject = Promise.reject(new Error("Hey"))

promise_reject.then((value)=>{
    console.log(value);
})
