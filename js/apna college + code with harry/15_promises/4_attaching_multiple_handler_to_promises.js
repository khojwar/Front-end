let p1 = new Promise((resolve, reject) => {
    console.log("Hey i am not resolved");
    setTimeout(() => {
        resolve(1)
    }, 2000);
})

// attaching multiple handler ( it means we can write multiple "p1.then()" )
p1.then(()=>{
    console.log("Congratulation this promises is now resolved");
})

p1.then(()=>{
    console.log("Hurray!!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 6000);
    })
}).then((value) => {console.log(value);})