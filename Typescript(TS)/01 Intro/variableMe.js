"use strict";
// type
// string
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Tika Ram";
// greetings = 9       //Type 'number' is not assignable to type 'string'.ts(2322)
greetings.toLowerCase(); // variableName dot(.) gives suggetions
console.log(greetings);
// number
var userId = 334455.3;
// boolean
var isLoggedIn = false;
// type inference       --> not all the time we have to write :type . There is special place where you can put columns and type of it.
var usersId = 334455.3; // there is no need to write :number because we used .tofixed() later on.
usersId.toFixed();
// note       :type is a typescript syntax. So, whenever a javascript compile file is going to come in, it's never going to be a colon
