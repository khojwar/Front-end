class Employee{
   login() {
    console.log(`Employee has logged in`);
   }

   logout() {
    console.log(`Employee has logged out`);
   }

   requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves - Auto approved`);
   }
}



class Programmer extends Employee {
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
let e = new Programmer()
e.login()
e.requestLeaves(3)