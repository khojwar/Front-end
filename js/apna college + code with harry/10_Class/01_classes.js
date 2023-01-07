// Declaring classes

class Product {
    constructor(itemName, price, discount, itemCode) {
        this.itemName = itemName,
        this.price = price,
        this.discount = discount,
        this.itemCode = itemCode
    }
}

let pencil = new Product("pencil", 100, 10, "p10")
console.log(pencil);

