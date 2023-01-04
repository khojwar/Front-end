const Product = class {
    constructor(itemName, price, discount, ProductCode) {
        this.itemName = itemName,
        this.price = price,
        this.discount = discount,
        this.itemCode = ProductCode
    }

    // getter method 
    get getDiscountValue() {
        return this.discount
    }

    // setter method
    set setDiscountValue(value) {
        this.discount = value
    }
}


let chair = new Product("chair", 500, 15, "c10")

console.log(chair.getDiscountValue);        // printing getter method


console.log(chair.setDiscountValue = 10)    // set the value using setter method
console.log(chair.getDiscountValue);        // Again printing getter method





