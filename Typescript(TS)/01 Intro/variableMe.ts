// type
// ---------------string-----------------

let greetings: string = "Hello Tika Ram"
// greetings = 9       //Type 'number' is not assignable to type 'string'.ts(2322)
greetings.toLowerCase()   // variableName dot(.) gives suggetions
console.log(greetings)



// -----------------number----------------------
let userId: number = 334455.3


// -----------------boolean--------------------
let isLoggedIn: boolean = false



// type inference       --> not all the time we have to write :type . There is special place where you can put columns and type of it.
let usersId = 334455.3       // there is no need to write :number because we used .tofixed() later on.
usersId.toFixed()
// userId = "Tika Ram"     //Type 'string' is not assignable to type 'number'.ts(2322)




// Any      --> when  TS cannot find out that what value is going to come up later on the future, it puts that as "any". Any don't check the type. Use the compiler flag noImplicitAny to flag any implicit any as an error.
let hero;

function getHero() {
    return "thor"
}

hero = getHero()        // when we hover on the hero it shows "let hero: any"

//  ---------------------------------------------------------------------------------------------


let heros: string;    // we inferred string

function getHeros() {
    return "thor"     // when we return true then hover on heros, it gives "Type 'boolean' is not assignable to type 'string'. let heros: string"
}

heros = getHeros() 


export {}





// note       :type is a typescript syntax. So, whenever a javascript compile file is going to come in, it's never going to be a colon



