


// making async function
async function hackerman() {

    // creating promises

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initializing Network...")
        }, 2000);
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Connecting to service.")
            resolve()
        }, 4000);
    })

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 6000);
    })

    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 8000);
    })

    let p5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 10000);
    })

    let p6 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 12000);
    })


    let p7 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 14000);
    })




    // applying await for each promeses to wait execution
    let P1 = await p1
    document.getElementById("sentence1").innerHTML = P1

    let P2 = await p2
    document.getElementById("sentence2").innerHTML = "Connecting to service..."

    let P3 = await p3
    document.getElementById("sentence3").innerHTML = "Retreiving username..."

    let P4 = await p4
    document.getElementById("sentence4").innerHTML = "Username found..."

    let P5 = await p5
    document.getElementById("sentence5").innerHTML = "Trying a combination of 4.5 Trillion passwords..."

    let P6 = await p6
    document.getElementById("sentence6").innerHTML = "Password found..."

    let P7 = await p7
    document.getElementById("sentence7").innerHTML = "UserID:@jit-Ace got hacked."




}



let a = hackerman()
a.then((value)=>{
    console.log(value)
})