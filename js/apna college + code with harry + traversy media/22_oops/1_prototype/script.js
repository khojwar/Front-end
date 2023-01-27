// let a = {
//     name: "Harry",
//     language: "JavaScript"
// }

// console.log(a)



// let p = {
//     run: () => {
//         alert("run")
//     }
// }

// a.__proto__ = p   
// a.run()



// ---------------------------------------------------------
// 1)
// a.__proto__ = p  --> a bhanne object ko prototype p bhanne object ho
// a.run()    --> yadi run() bhanne function "a" object maa xaina bhane "p" object maa function laai khojxa 
// --------------------------------------------------------------------

// let a = {
//     name: "Harry",
//     language: "JavaScript",
//     run: () => {
//         alert(" self run")
//     }
// }

// console.log(a)



// let p = {
//     run: () => {
//         alert("run")
//     }
// }

// a.__proto__ = p   
// a.run()




// ----------------------------------------------------------------
// 2)    prototype ko pani prototype hunxa
// -------------------------------------------------------------------

let a = {
    name2: "Harry",
    language: "JavaScript",
    run: () => {
        alert(" self run")
    }
}
console.log(a)



let p = {
    run: () => {
        alert("run")
    }
}

// first prototype
a.__proto__ = p   
a.run()


// second prototype 
p.__proto__ ={
    name : "Jackie"
}

console.log(a.name);