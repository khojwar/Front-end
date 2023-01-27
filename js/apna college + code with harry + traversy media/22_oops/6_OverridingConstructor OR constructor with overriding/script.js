class Employee{
    constructor(name){
        this.name = name
        console.log(`${name} - Employee's constructor is here`);
    }

    login() {
        console.log(`Employee has logged in`);
    }

    logout() {
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved `);
    }
}



class Programmer extends Employee {

    // -->if there is no constructor in the child class, this is created automatically
    // constructor(...args) {        
    //     super(...args)
    // }


    // if child class inherits parents class and you want child class should have own constructor then you need to inherit "super constructor" first then use "this.args" otherwise it gives error
    constructor(name) {
        super(name)
        console.log(`This is a newly written constructor`);
    }

    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }

    // method overriding
    requestLeaves(leaves){
        // console.log(`Employee has requested ${leaves+1} leaves (one extra)`);
        super.requestLeaves(4)
        console.log("One extra is granted");
    }
}

// let e = new Employee()
let e = new Programmer("Harry")
e.login()
e.requestLeaves(3)