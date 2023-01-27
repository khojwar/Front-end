document.write("hello")


let a = setTimeout(function () {
    alert("I am inside setTimeout")
}, 2000)

let b = prompt("Do you want to run the settimeout?")

if ("n" == b) {
    clearTimeout(a)
}

console.log(a);



const sum = (a, b) => {
    console.log("Yes I am running " + (a +b));
}

setTimeout(sum, 1000, 1, 2)


// taleko code le 3sec ko time interval maa execute bhairaakhxa
// setInterval(function() {
//     alert("setinterval")
// }, 3000)

