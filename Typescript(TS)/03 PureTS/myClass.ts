class UserOne {
    email: string
    name: string
    readonly city: string = "Kawasoti"

    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }

}



const tikaramOne = new UserOne("t@t.com", "tikaram")
// tikaramOne.city = "Bharatpur"       // it is not allowed to set. Because it is readonly
// tikaramOne.city         // it is not allowed to set. Because it is readonly but it allowed to access it






// ------------------------------------Private & Public---------------------------
// public and pribate are access modifiers. they limits your ability. eg can you access those properties or how you can access them
// js has private and public also. 


class UserTwo {
    public email: string
    name: string
    // #name: string    // private or # are optional. private is more meaningful. but we can use one of them. ONly difference is # is used in js and private is used in ts.
    private readonly city: string = "Kawasoti"   // it is only accessible inside the class 

    constructor(email: string, name: string) {
        this.email = email
        this.name = name
        // this.city   // it is totally allowed to access it.
    }

}

const tikaramTwo = new UserTwo("t@t.com", "tikaram")
// tikaramTwo.city = "Bharatpur"       // it is not allowed to set. Because it is readonly
// tikaramTwo.city         // it is not allowed to set. Because it is readonly and it is not allowed to access it too. Because it is declared as private.
// tikaramTwo.name 






// ---------------------------------shortcut way of above code ----------------------------
// it also produces the same code in js

class UserThree {

    readonly city: string = "Kawasoti"   
    constructor(public email: string, public name: string, private userId: number) {
    }

}

const tikaramThree = new UserThree("t@t.com", "tikaram", 767)
// tikaramThree.name 






// --------------------------------getter & setter --------------------------------------
// getter & setter are pretty common just like you use them in js. get is used to get any property. it doesnot mean that you always have to get a private property maybe you want to get public property. why some method by adding some additional logic that is also totally void and you can actually use that in most use cases these properties are being accessed or these getters and setters are designed so that any private method can be exposed outside but with some additional logic or additional you can say some restrictions that you want to put up so that is why it is being used and it doesnot any means that always there should be a getter that need to be a setter as well sometimes maybe you want to just have an exposed propery don't want anybody to set it up that is also the case so there could be one there could be both and in the setters the most important part is that there is no return type even if you try to put up something like void TS will yell at you and you should not be doing that in case somebody asks you in the interview that is the case is how TS is designed.

class Userfour {

    // private _courseCount = 1        // whenever user registered on your website he always get at least one course. It is private. So you cannot access this outside of this class but you but you also want to design some getters and setters for this property. so that if anybody wants to access this they are allowed to access it but not directly via that method, which is a "getter" and also if somebody wants to manipulate that method it doesnot allow it to directly set that value. we want to have some setters for it. 
    protected _courseCount = 1          // protected wherever you place this property be accessible in this class as well as in any class which inherits this class. it will not still be available outside of this. you cannot access it directly like tikaramfour dot something.

    readonly city: string = "Kawasoti"
    constructor(public email: string, public name: string) {

    }


    // private method           // this method is only accessible within the class
    private deleteToken() {
        console.log("Token deleted")
    }


    // getter
    get getAppleEmail(): string{        // THIS method return string that is email
        return `apple${this.email}`
    }

    get courseCount(): number {         // if somebody wants to access a coursecount we're going to provide a method just like that. it return number
        return this._courseCount
    }


    // setter --> it has no return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }


}




// ---------------------------------protected and inheritance --------------------------------------
// protected is another type of modifier. whenever there is marked as protected it can be used in the same calss as well as any class which inherits task.

class SubUser extends Userfour {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}



const tikaramfour = new Userfour("t@t.com", "tikaram")
// tikaramfour.deleteToken()        // we can't access this method here. because it is private method. only accessible within the calss
