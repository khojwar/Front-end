let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 1000);
})

let promise_resolve = Promise.resolve(6)

promise_resolve.then((value)=>{
    console.log(value);
})
