let arr = [2,3,5]

let obj = {...arr}
console.log(obj);


// array laai function maa  three dot (...) use garera pass garna saskinxa

function sum(v1,v2,v3) {
    return v1+v2+v3
}

console.log(sum(...arr));   // passing array as argument using three dot

// ------------------------------------------------------

let obj2 ={
    name: "Harry",
    company: "Company xyz",
    address: "XYZ",
}

console.log({...obj2, name: "John"});    // name change hunxa