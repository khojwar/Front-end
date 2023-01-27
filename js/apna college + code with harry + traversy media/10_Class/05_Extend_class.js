// inheritance laai extends bhaneko ho

// Declaring a class
class Product {
    constructor(itemName) {
        this.itemName = itemName
    }

    getItemName() {
        return this.itemName + " is a Product"
    }
}


class Furniture extends Product {
    constructor(itemName) {
        super(itemName)
    }

    getItemName() {
        return this.itemName + " is a Furniture"
    }
}


let pencil = new Product("Pencil")
console.log(pencil.getItemName());

let chair = new Furniture("Chair")
console.log(chair.getItemName());