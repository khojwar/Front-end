
// ----------------------------------------------------------------------------------------
//                                      normal function
// -----------------------------------------------------------------------------------------

/*
function tika() {
    console.log("This is the best person ever");
}

tika()
*/


// -----------------------------------------------------------------------------------------
// Alternative way 


/*
const tika = function () {
    console.log("This is the best person ever");
}

tika()
*/



// --------------------------------------------------------------------------------------------
// alternative                          -- "Arrow function" --
//---------------------------------------------------------------------------------------------
/*
const tika = () => {
    console.log("This is the best person ever");
}

tika()
*/


// ------------------------------------------------------------------------------------------------
// using  "return" in normal function

/*
const greet = function () {
    return "good morning"
}

console.log(greet()); 
*/

// ----------------------------------------------------------------------------------------------
// alternative of above code         -- "more obtimized code of arrow function" --
//                                     one liners do not require "braces/return"
// ----------------------------------------------------------------------------------------------

/*
const greet = () => "Good Morning"
console.log(greet()); 
*/


// ---------------------------------------------------------------------------------------
// passing one parameter/argument            (not compulsory to use small bracket)

/*
const greet = (name) => "Good morning " + name       // you can write as:-  const greet = name => "Good morning " + name 
console.log(greet("Tika"));
*/


// ---------------------------------------------------------------------------------------
// passing more than one parameters/arguments       (compulsory to use small bracket)

const greet = (firstname, lastname) => "Good morning " + firstname + " " + lastname    
console.log(greet("Tika Ram", "Khojwar"));




// ---------------------------------------------------------------------------------------------
// if you need to return object then use small bracket to wrap object

/*
const greet = () => ({name: "Ram"})
console.log(greet());
*/