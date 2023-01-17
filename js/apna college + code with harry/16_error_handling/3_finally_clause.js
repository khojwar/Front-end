// finally block always run hunxa.

// try {
//     let a = 0
//     console.log(program);
//     console.log("Program ran successfully");
// } catch (error) {
//     console.log("This is an error");
//     console.log(p);
// }
// finally {
//     console.log("I am a good boy");
// }




const f = () => {

    try {
        let a = 0
        // console.log(program);
        console.log("Program ran successfully");
        return

    } catch (error) {
        console.log("This is an error");
        console.log(p);
    }
    finally {
        console.log("I am a good boy");
    }
    
}

f()
console.log("End");


// "try" block laai return gardaa pani "finally" block run hunxa