// using classs

class AreaCal {
    constructor(length) {
        this.length = length
    }

    get sqrCal() {
        return this.length * this.length
    }
}

let square = new AreaCal(5)
console.log(square.sqrCal);



// -------------------------------------------------------------------------------------------
// using literal function

let square1 = {
    side : 5,

    get area() {
        return this.side ** 2
    }
}

square1.side = 10
console.log(square1.area)