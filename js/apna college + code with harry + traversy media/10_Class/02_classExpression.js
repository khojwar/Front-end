const Product1 = class Product {
    constructor(itemName, price, discount, ProductCode) {
        this.itemName = itemName,
        this.price = price,
        this.discount = discount,
        this.itemCode = ProductCode
    }
}


let chair = new Product1("chair", 500, 15, "c10")

console.log(chair);
console.log(Product1.name);   // class name laai print garxa



// ------------------------------------------------------------------------

const Product11 = class {
    constructor(itemName, price, discount, ProductCode) {
        this.itemName = itemName,
        this.price = price,
        this.discount = discount,
        this.itemCode = ProductCode
    }
}


let chair1 = new Product11("chair", 500, 15, "c10")

console.log(chair1);
console.log(Product11.name);   // class name xaina bhane varibale name laai print garxa


