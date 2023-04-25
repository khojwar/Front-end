var UserOne = /** @class */ (function () {
    function UserOne(email, name) {
        this.city = "Kawasoti";
        this.email = email;
        this.name = name;
    }
    return UserOne;
}());
var tikaramOne = new UserOne("t@t.com", "tikaram");
// tikaramOne.city = "Bharatpur"       // it is not allowed to set. Because it is readonly
// tikaramOne.city         // it is not allowed to set. Because it is readonly but it allowed to access it
// ------------------------------------Private & Public---------------------------
// js has private and public also. 
var UserTwo = /** @class */ (function () {
    function UserTwo(email, name) {
        // #name: string    // private or # are optional. private is more meaningful. but we can use one of them. ONly difference is # is used in js and private is used in ts.
        this.city = "Kawasoti"; // it is only accessible inside the class 
        this.email = email;
        this.name = name;
        // this.city   // it is totally allowed to access it.
    }
    return UserTwo;
}());
var tikaramTwo = new UserTwo("t@t.com", "tikaram");
// tikaramTwo.city = "Bharatpur"       // it is not allowed to set. Because it is readonly
// tikaramTwo.city         // it is not allowed to set. Because it is readonly and it is not allowed to access it too. Because it is declared as private.
// tikaramTwo.name 
// ---------------------------------shortcut way of above code ----------------------------
// it also produces the same code in js
var UserThree = /** @class */ (function () {
    function UserThree(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Kawasoti";
    }
    return UserThree;
}());
var tikaramThree = new UserThree("t@t.com", "tikaram", 767);
// tikaramThree.name 
