// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     walk() {
//         console.log("Animal " + Animal.capitalize(this.name) + " is walking")    // static method le classlaai belong garxa. tesaile "Animal.staticMethod(...)" form maa lekheko

//     }

//     static capitalize(name) {
//         return name.charAt(0).toUpperCase() + name.substr(1, name.length)        // string ko first letter laai capital banaayako
//     }
// }


// j = new Animal("jack") 
// j.walk()




// ------------------------------------------------------------------------------------------
// alternative 


// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     walk() {
//         // console.log("Animal " + Animal.capitalize(this.name) + " is walking")
//         console.log("Animal " + this.name + " is walking")

//     }

//     static capitalize(name) {
//         return name.charAt(0).toUpperCase() + name.substr(1, name.length)        // string ko first letter laai capital banaayako
//     }
// }


// // j = new Animal("jack") 
// j = new Animal(Animal.capitalize("jack"))    // static method le classlaai belong garxa. tesaile "Animal.staticMethod(...)" form maa lekheko
// j.walk()



// ----------------------------------------------------------------------------
// Alternative

class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name)     // static method le classlaai belong garxa. tesaile yasari lekhelo
    }

    walk() {
        console.log("Animal " + this.name + " is walking")

    }

    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)       // string ko first letter laai capital banaayako
    }
}


j = new Animal("jack") 
j.walk()

// console.log(j.capitalize("this"));   --> this doesnt work        // static method le classlaai belong garxa tara particular object laai gardaina