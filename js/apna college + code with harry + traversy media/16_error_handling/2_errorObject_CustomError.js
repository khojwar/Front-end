// Error object has two properties
// 1   .name
// 2   .message

// try {
//     hey 
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// -----------------------------------------------
// try {
//     throw new Error("Harry is not good")
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


// throw error 
// --------------------------------------------

// try {
//     throw new ReferenceError("Harry is not good")
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


// try {
//     console.log(harry);
//     throw new ReferenceError("Harry is not good")
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }


// --------------------------------------------------
// throw custom Error

try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age>150) {
        throw new ReferenceError("This is probably not true")
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

console.log("The script is still running");


