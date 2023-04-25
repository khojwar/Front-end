// -----------------------------generics---------------------------------
// generics makes your components reusable. by the time component (all of your functions even your arrays are generics behind the scene)

const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number {         // it takes either boolean or number val and return also either boolean or number val not work for string
    return val
}


function identityTwo(val: any): any{        // TS has no idea what the value is comprised of. The defination and the information about the type is gone in this case.
    return val
}


// ------------------------------this is how to defining  generics------------------------------------
// most important for syntax is use "angular bracket" and define a type and take the parameter
function identityThree<Type>(val: Type): Type{      // locking the value 
    return val
}

identityThree(3)        // if we give 3 as input, it return number 3
identityThree("3")      // if we give string, as input it return string 
identityThree(true)     // if we give boolean, as input it return boolean





// --------------------------------------any vs Type----------------------------------------------
// difference between any and type is:- 
// value of "any" could be anything and return value also could be anything. So, we can take any type of value, return any type of value. Take number as input, return as string not a good idea.
// Once you actually pass on anything that value type is logged. whenever we give number as an input, the number is the input type that is comming up so the value you are accepting is going to be of number but the return type automatcally becomes a number. That is the advantages of using this.






// --------------------------------------shortcut of identityThree---------------------------------------

function identityFour<T>(val: T): T{        // it doesnot mean it always have to be "Type" or "T". You can call it as "H" every places that's also totally valid.
    return val
}




// having this data type is you can actually define your own types and pass on into this one, it's generics. anything can be passed on to it.

interface Bootle{
    brand: string,
    type: number
}


// identityFour<Bootle>({})





// --------------------------------------------------------------------------------------------
// --------------------------------generic in array and arrow functions--------------------------------------


function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}




// --------------------------------generic in Arrow Functions-----------------------------------

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}





// ----------------------using comma as <T,>----------------------------------------
// coder like to use these generics and they put this comma to mention that this is not a JSX syntax but rather a syntax for generic



const getMoreSearchProductss = <T,>(products: T[]): T => {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}





// -------------------------------------------------------------------------------------------
// ------------------------generic class-------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

function anotherFunction<T, U> (valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}


anotherFunction(3, "3")




// it restricts the generic U by extending number.
function anotherFunctionOne<T, U extends number > (valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}


anotherFunctionOne(3, 3)





// it is exactly same situation but by extending Database interface
interface Database {
    connection: string,
    username: string,
    password: string
}


function anotherFunctionTwo<T, U extends Database > (valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}


anotherFunctionTwo(3, {})





// ------------------------------------------------------------------------

interface Quiz{
    name: string,
    type: string
}


interface Course{
    name: string,
    author: string,
    subject: string
}



class Sellable<T> {
    public cart: T[] = []


    addToCart(product: T) {
        this.cart.push(product)
    }
}







