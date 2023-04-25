// ---------------------------Tuples-------------------------- 
// Tuple is an array with some restrictions. like order of the array also matters. It is helpful in case of API calls or may be there is some database array where is specific order or may be some likes are there into array and each of this likes are being inserted based on when somebody like 


const user: (string | number)[] = [1, "trk"]        // normal array




// previously we're writting everything outside of the array. now, like below

let tUser: [string, number, boolean]

tUser = ["trk", 12343, true]        // tuple follow the order of array

// tUser = [true, 1234, "fg"]          // tuple follow the order of array. So it gives error.



// -----------------------lets learns from more example------------------------------

let rgb: [number, number, number] = [255, 234, 144]

type User = [number, string]
const newUser: User = [112, "example@google.com"]

newUser[1] = "trk.com"      // we can assign value according to key in the tuple
// newUser.push(true)          // push is possible in tuple





// Reference
// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
// https://github.com/Microsoft/TypeScript/issues/6325


export {}