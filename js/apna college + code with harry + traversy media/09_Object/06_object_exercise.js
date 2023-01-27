const product = {
    itemName: "flower",
    price : 50,
    discount : 20,
    itemCode : "f40"
}


// ---------------------------------------------------------

//making "factory function" of above code
function createProduct(name, price, discount, itemCode) {
    return {
        itemName: name,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
}

const football = createProduct("football", 400, 10, 'f30')
console.log(football);


// ---------------------------------------------------------

//making "constructor function" of root above code

function CreateProducts(name, price, discount, itemCode) {
    this.itemName = name,
    this.price = price,
    this.discount = discount,
    this.itemCode = itemCode
    this.discountValue = function() {
        return price * discount/100
    }
}

const basketball = new CreateProducts("basketball", 400, 30, "f20")
console.log(basketball);
console.log(basketball.discountValue());