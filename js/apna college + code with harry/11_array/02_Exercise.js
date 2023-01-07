const characters = [
    {
        name: "Tarak Mehta",
        height: "172",
        mass: "77",
        eye_color: "Brown",
        gender: "male",
    },
    {
        name: "Jethalal",
        height: "145",
        mass: "136",
        eye_color: "black",
        gender: "male",
    },
    {
        name: "Babita ji",
        height: "150",
        mass: "49",
        eye_color: "gray",
        gender: "female",
    },
    {
        name: "Krishnan Iyer",
        height: "168",
        mass: "84",
        eye_color: "black",
        gender: "male",
    },
]

// --------------------------------------------------------
// Get an array of all names
const names = characters.map((ch) => {
    return ch.name
})
console.log(names)

// compressed above code in one line
const names1 = characters.map(ch => ch.name)
console.log(names1)


//----------------------------------------------------------------------
// Get an array of objects with just name and height properties

const propertiesOfCh = characters.map((ch) => {
    return {name: ch.name ,
            height: ch.height
        }
})
console.log(propertiesOfCh)

// ------------------------------------------------------------
// Get the total height of all characters

const totalHeight = characters.reduce((prevHeight, character) => {
    return prevHeight + Number(character.height)
},0)
console.log(totalHeight)


// ----------------------------------------------------------------
// Get characters with mass greater than 100
const greaterThenMass = characters.filter((character) => {
    return character.mass >100
})

console.log(greaterThenMass);


// -------------------------------------------------------------
// Get all male characters
const maleChar = characters.filter((character) => {
    return character.gender == "male"
})

console.log(maleChar);

// compressed code
const maleChar1 = characters.filter(character => character.gender == "male")

console.log(maleChar1);



// ------------------------------------------------------
// Sort by gender
const sortByGender = characters.sort((char1,char2) => {
    if (char1.gender < char2.gender) {
        return -1
    }
    if (char1.gender > char2.gender) {
        return 1
    }
    return 0
})

console.log(sortByGender);


// -------------------------------------------------------------
// Sort by name
const sortByName = characters.sort((char1,char2) => {
    if (char1.name < char2.name) {
        return -1
    }
    if (char1.name > char2.name) {
        return 1
    }
    return 0
})

console.log(sortByName);

// -----------------------------------------------------------------------
// Does every character have mass more than 40?
console.log(characters.every(charachter =>  charachter.mass > 40))


// ----------------------------------------------------------------
// Does every charachter have blue eyes?
console.log(characters.every(character => character.eye_color == "blue"))


// --------------------------------------------------------------------
// Is there at least one male character?
console.log(characters.some(character => character.gender == "male"))



// Is there at least one character taller than 200?
console.log(characters.some(character => character.height > 200))