
const User = {
    name : "Tika Ram",
    email : "khojwartikaram@gmail.com",
    isActive : true
}



// --------------------------------function-----------------------------------------------

// function createUser({name: string, isPaid: boolean }) {

// }

// createUser({name: "Tika", isPaid: false})



// -----------------------------weird behaviour of ts object (maathikai code ho)----------------------------------------

function createUser({name: string, isPaid: boolean }) {

}
// yasari different information(eg payment info from diffent model or controller or may be google authentication info) haru conbined garera object create garea function maa pass gardaa object maa dherai key-value pair bhayo bhane. we are able to much more inforamation than what expected in the function defination. Previously, it was giving us error but now this is all. 
let newUser = {name: "Tika", isPaid: false, email: "t@t.com"}
createUser(newUser)








// -----------------------------------weird behaviour of ts object---------------------------
 
function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}





// ----------------------------------------Type Aliases--------------------------------
// --> A type alias is exactly that - a name for any type.

// type User = {
//     name : string,
//     email : string, 
//     isActive : boolean
// }


// function createUsers(user: User): User{         // yahaa User laai datatype ko rupmaa use gareko xa
//     return {name: "", email: "", isActive: true}
// }

// createUsers({name: "", email: "", isActive: true})





// -------------------------------------readonly and optional--------------------------------------------- 

type User = {
    readonly _id: string      
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number        //put question mark is not going to complain when not assign the value in object.
}

let myUser: User = {
    _id: "12345",
    name: "T",
    email: "t@t.com",
    isActive: true
    // credcardDetails maa ? mark use gareko xa. So, yasko value assign magardaa ni hunxa
}


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// cardDetails maa cardNumber, cardDate and cvv number sabai huncxa tara cardNumber ra cardDate already defined gari sakeko bhayara talako jasto lekhinxa. cvv laai maatra number ho bhanera lekhna paryo
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "t@gmail.com"        // we can assign the value
// myUser._id = "asa"  // we can't assign the value. because id is declared as readonly.



export {}