// "fetch API" maa jailepani dui(2) ota ".then" lekhna parxa 

// let p = fetch("https://anapioficeandfire.com/api/characters/583")
// p.then((value1)=>{
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })


// --------------------------------------------------------------


let p = fetch("https://anapioficeandfire.com/api/characters/583")

p.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);

    // Eiter use .text() or .json(). You cant use both the same time 
    // console.log(response.text());
    return response.json()
}).then((value)=>{
    console.log(value);
})





