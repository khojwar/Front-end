// Situation, where you are not sure what type of data is going to come in. it might be a number, it might be a string or it might be either of two. Now instead of using "any" it is highly recommend that you try to use "union" type. 
// "union" is like a combination of two or three or more types of data that you can include into a variable or an array and whatever that is.


let score: number | string = 33         

score = 44      // we can assign either number or string. Because score is union of both
score = "55"



// ---------------------custom data type------------------------------------
type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let hitesh: User | Admin = {name: "Tikaram", id: 334}

hitesh = {username: "TRK", id: 334}     // assigning value



// -------------------------union type in function---------------------------------------

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is: ${id}`)
// }


getDbId(3)
getDbId("3")


function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}


// -----------------------union type in array-----------------------------

const data: number[] = [2, 3, 5]
const data2: string[] = ["2", "3", "5"]
const data3: (number | string | boolean)[] = ["2", "3", 5, true]        // union array

const data4: any[] = ["2", "3", 5, true]        // we can use any instead of union array but way to strict the type



// -------------------------very strict like pi=3.14 ----------------------------

let pi:3.14 = 3.14      // This is not useful case

// pi = 3.145       // it can't give assign new value




// ------------------------very strict and useful case----------------------------------

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"      // there is only 3 usecases. So, it is not allowed and make your application really secure.



