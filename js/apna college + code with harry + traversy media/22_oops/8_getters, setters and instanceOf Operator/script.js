

class Animal {
    constructor(name) {
        this._name = name
    }

    fly() {
        console.log("Mai ud rha hu")
    }

    // getter use garyo bhane print garnaa sakxau

    get name(){ 
        return this._name
    }

    // setter use garera value assign garna sakxau
    set name(newName) {
        this._name = newName
    }
}

class Rabbit extends Animal{
    eatCarrot() {
        console.log("Eating carrot");
    }
}


let a = new Rabbit("bruno")
a.fly()
console.log(a.name)     // getter use garera value laai print gareko
a.name = "Jack"     // setter use garera value assign gareko
console.log(a.name)     //After applying setter then we print again



// ------------------------------------------------------------------
// instanceof check whether an Object belongs to certain class 
// it returns true if object belongs to the class or any other class inheritance from it
 
let c = 56
console.log(a instanceof Animal);
console.log(c instanceof Animal);

console.log(a instanceof Rabbit);