
/*
async function tika() {
    return 5
}

tika().then((x)=>{
    console.log(x);
})

// maathi ko code bata k thahaa hunxa ki --> kunai pani function ko agaadi ""async"" lekhyo bhane promise return garxa 
*/
// -------------------------------------------------------------------------------


/*
async function tika() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 1000);
    })

    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg")
        }, 2000);
    })

    delhiWeather.then(console.log)
    bangloreWeather.then(console.log)
}

console.log("Welcome to weather control room");
tika()
*/


async function tika() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 2000);
    })

    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg")
        }, 5000);
    })

    // delhiWeather.then(console.log)
    // bangloreWeather.then(console.log)
    console.log("Fetching Delhi Weather Please wait....");
    let delhiW = await delhiWeather
    console.log("fetched Delhi Weather:" + delhiW);

    console.log("Fetching Bangalore Weather Please wait...")
    let bangloreW = await bangloreWeather
    console.log("fetched Banglore Weather:" + bangloreW);
    return [delhiW, bangloreW]
}

// const cherry = ()=>{
//     console.log("Hey I am cherry and I am not waiting");
// }

// console.log("Welcome to weather control room");
// // let a = tika()
// let a = tika()
// let b = cherry()
// a.then((value)=>{
//     console.log(value);
// })

const cherry = async ()=> {
    console.log("Hey I am cherry and I am waiting");
}

const main1 = async ()=> {
    console.log("Welcome to weather control room")
    let a = await tika()
    let b = await cherry()
}

main1()