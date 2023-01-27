// for in :-  loops through "key" of an object



/*
// object
let animal = {
    name: "Zebra",
    leg: 4
}

for (let key in animal) {
    console.log(key, animal[key]);
}

*/


// array
let names = ["Rahul", "Neha", "Aman", "Rishabh"]
for(let index in names) {
    // console.log(index);      // it print index of the array
    console.log(index, names[index]);
}



// object
let marksSheet = {
    // key: value
    Hari: 66,
    Gita: 55,
    Sita: 88,
    kabita: 99
}

for (let a in marksSheet) {
    // console.log(a);     // it print key of object
    console.log(a +" gets " + marksSheet[a] + " marks.")
}