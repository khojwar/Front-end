class Human{
    constructor(name, favfood){
        this.name = name
        this.favfood = favfood
    }

    walk(){
        console.log(this.name + " Human is walking");
    }
}



class Student extends Human{
    walk(){
        console.log(this.name + " Student is walking");
    }
}


let o = new Student("Harrry", "Bhindi")
o.walk()



// instanceof operator
console.log(o instanceof Human);