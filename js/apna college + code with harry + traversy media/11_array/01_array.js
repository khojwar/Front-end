// Declaring array
const array = [1, 2, 4, 5, 6]
// anoter method for declaring array by using Object
const num = new Array(1, 2, 4, 5, 6)


console.log(array);
console.log(array[0]);
console.log(array.length);
console.log(array[array.length-1]);
console.log(num);
console.log(num[num.length-1]);


// push
console.log(num.push(10));
console.log(num);

// unshift    -add element at the starting of the array
num.unshift(3)
console.log(num);

//pop
num.pop()
console.log(num)

// shift  -remove the first element
console.log(num.shift())

// you can assign any value at any index
num[1] = "s"
console.log(num);

num[2] = "{num:5}"
console.log(num);

num[3] = true
console.log(num);

// ------------------------------------------------------------------------


const names = ["Ram", "Shyam", "Hari", "Gita", "Sita", "Kabita", "Ram"]
console.log(names);

// indexOf
console.log(names.indexOf("Ram"));
console.log(names.indexOf("Ram",2));

// lastIndexOf
console.log(names.lastIndexOf("Ram"));


// includes   -- Either item is exist or not
console.log(names.includes("Ram"));
console.log(names.includes("Hari",4));


// -------------------------------------------------------

let channels = [{
    name: "Apna College",
    subscriber: 10000
}, {
    name: "Apna kakshya",
    subscriber: 20000
}, {
    name: "Aman Dhattarwal",
    subscriber: 50000
}
]

// includes only works for primitive datatypes not for reference datatypes
// So it gives false result
console.log(channels.includes({
    name: "Apna College",
    subscriber: 10000
}));

// use find method for reference datatypes
// applying find usig inline callback function
console.log(channels.find(function(element) {
    return element.name === "Apna College"
}));


// applying find usig arrow function

console.log(channels.find((element) => {
    return element.name === "Apna College"
}));

// more compressed way of above code
console.log(channels.find(element =>  element.name === "Apna College"));     // arrow function


// ------------------------------------------------------------------------------

let names1 = ["Ram", "Shyam", "Hari"]
let names2 = ["Ram", "Shyam", "Hari"]

// concat
console.log(names1.concat("Tika"));
console.log(names1.concat(names2));

// slice 
let names3 = names1.concat(names2)
console.log(names3.slice(3,5));

// "spread operaor" --concatination ko kaam garxa
let names4 = [...names1,...names2]
console.log(names4);

// alternative of above code
let names5 = [...["Ram", "Shyam", "Hari"],...["Ram", "Shyam", "Hari"]]
console.log(names5);

// note:-   spred operator Object, variable, list sabaimaa use hunxa



// ----------------------------------------------------------
// const names = ["Ram", "Shyam", "Hari", "Gita", "Sita", "Kabita", "Ram"]

// for loop
for (let i=0; i<names.length; i++) {
    console.log(names[i])
}

// for of 
for (let name of names) {
    console.log(name)
}


// for each
names.forEach(function(name,index){
    console.log(name, index)
})



//join
let student = ["s", "h", "i", "v", "a"]

console.log(student.join()); 
console.log(student.join("")); 
console.log(student.join("-")); 


// Split
student = student.join("_")
console.log(student)

console.log(student.split("_"))



//---------------------------------------------------------------------------
//filter  
let cities = [
    {name: "Mumbai", population:3792621},
    {name: "Delhi", population: 8175133},
    {name: "Bangalore", population: 2695598},
    {name: "Chennai", population: 2099451},
    {name: "Lucknow", population: 1526006},
]

console.log(cities.filter(city => {
    return city.population > 3000000
}));

// more compressed way of above code
console.log(cities.filter(city => city.population > 3000000));

// map
console.log(cities.map(city => city.population * 2));


