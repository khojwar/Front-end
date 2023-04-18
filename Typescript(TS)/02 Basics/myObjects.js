"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Tika Ram",
    email: "khojwartikaram@gmail.com",
    isActive: true
};
// --------------------------------function-----------------------------------------------
// function createUser({name: string, isPaid: boolean }) {
// }
// createUser({name: "Tika", isPaid: false})
// -----------------------------weird behaviour of ts object (maathikai code ho)----------------------------------------
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// yasari different information(eg payment info from diffent model or controller or may be google authentication info) haru conbined garera object create garea function maa pass gardaa object maa dherai key-value pair bhayo bhane. we are able to much more inforamation than what expected in the function defination. Previously, it was giving us error but now this is all. 
var newUser = { name: "Tika", isPaid: false, email: "t@t.com" };
createUser(newUser);
// -----------------------------------weird behaviour of ts object---------------------------
function createCourse() {
    return { name: "reactjs", price: 399 };
}
var myUser = {
    _id: "12345",
    name: "T",
    email: "t@t.com",
    isActive: true
    // credcardDetails maa ? mark use gareko xa. So, yasko value assign magardaa ni hunxa
};
myUser.email = "t@gmail.com"; // we can assign the value
