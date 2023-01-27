let arr = [3,4,5,6,21,7,6]

let newarr = arr.reduce((h1,h2) => {
    return h1 + h2
})

console.log(newarr);


// ----------------------------------------------------
// function banaayar call gareko 

let arr1 = [3,4,5,6,21,7,6]
const reduce_func = (h1, h2) => {
    return h1 + h2
}

let newarr1 = arr1.reduce(reduce_func)
console.log(newarr1);


