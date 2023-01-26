let isOrderAccepted = false;
let isValetfound = false;
let hasResturentSeenYourOrder = false;
let resturantTimer = null
let valetTimer = null
let valetDeliveryTimer = null
let isOrderDelivered = false

// zomato app - boot up / power up / start
window.addEventListener("load",function () {
    document.getElementById("acceptOrder").addEventListener("click", function(){
        askResturantToAcceptOrReject()
    })

    document.getElementById("findValet").addEventListener("click",()=>{
        startSearchingForValets()
    })

    document.getElementById("deliverOrder").addEventListener("click",()=>{
        setTimeout(() => {
            isOrderDelivered = true
        }, 2000);
    })

    checkIfOrderAcceptedFromResturant()
    .then(isOrderAccepted=>{
        console.log("Update from resturent - ", isOrderAccepted);
        // step - start preparing
        if (isOrderAccepted) startpreparingOrder()
        // step 3 - Order rejected
        else this.alert("Sorry resturent couldnot accept your order! Returning your amount with zomato shares")
    })
    .catch(err=>{
        console.error(err)
        alert("Something went wrong! Please try again later")
    })
})


// step 1  Check whether resturant accepted or not
function askResturantToAcceptOrReject() {
    // callback
    setTimeout(() => {
        isOrderAccepted = confirm("Should resturant accept order")
        hasResturentSeenYourOrder = true
        // console.log(isOrderAccepted); 
    }, 1000);


}


// step 2 - Check if resturant has accepted order
// function checkIfOrderAcceptedFromResturant() {
//     setTimeout(() => {
//         if (isOrderAccepted) alert("order accepted")
//         else alert("order rejected")
//     }, 5000);
// }

// time jati pani laagna sakxa, jatikhara ni setTime out lagaayar check gariraakhna ta sakidaina. so haami promises use garxau (malaai promis gara timi order check gari raakhxau, ani tmi malaai bhana order accept bhayo ki bhayna bhanera, tespaxaadi ko kaam sabai ma garxu)
function checkIfOrderAcceptedFromResturant() {
        // promis - resolve or reject
    return new Promise((resolve, reject) => {
        resturantTimer = setInterval(() => {
            console.log("Checking if order accepted or not");
            if (!hasResturentSeenYourOrder) return

            if (isOrderAccepted) resolve(true)
            else resolve(false)

            clearInterval(resturantTimer)
        }, 2000);
    })
}



// step 4 - start preparing
function startpreparingOrder() {
    Promise.allSettled([
        updateOrderStatus(),
        updateMapView(),
        checkIfValetAssigned(),
        checkForOrderDelivery()
    ])
    .then(res=>{        // res - respond
        console.log(res);
        setTimeout(() => {
            alert("How was your food? Rate your food and delivery partner")
        }, 5000);
    })
    .catch(err=>{
        console.log(err);
    })
}


// Helper functions - Pure functions (yautaikaam ko laagi baneko function eg. button -(button ko yautai kaam hunxa ki light on garxa ko off garxa))
function updateOrderStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("currentStatus").innerText = isOrderDelivered ? "Order delivered successfully" : "Preparing your order" 
            resolve("status updated")
        }, 1500);
    })
}

function updateMapView() {
    // fake delay to get data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector(".mapview").style.opacity = "1";
            resolve("map initialized")
            // reject("map not initialized")
        }, 1000);
    })
}


function startSearchingForValets() {
    // BED
    // Bht complex operations:-
    /*
        1. Get all locations of nearby valets
        2. Sort the valets based on shorts path of resturent + to customer home
        3. select the valet with shortest distance and minimum orders
    */

    //step 1 - get valets
    const valetsPromises = [];
    for (let i=0; i<5; i++) {
        valetsPromises.push(getRandomDriver())
    }
    console.log(valetsPromises);
    Promise.any(valetsPromises)
    .then(selectedValet => {
        console.log("Selected a valet => ",selectedValet);
        isValetfound = true
    })
    .catch(err=>{
        console.log(err);
    })
}


function getRandomDriver() {
    // Fake delay to get location data from riders
    return new Promise((resolve, reject) => {
        const timeout = Math.random()*1000
        setTimeout(() => {
            resolve("Valet - " + timeout)
        }, 1000);
    })
}

function checkIfValetAssigned() {
    return new Promise((resolve, reject) => {
        valetTimer = setInterval(() => {
            console.log("Searching for valet");
            if (isValetfound) {
                updateValetDetails()
                resolve("Updated valet details")
                clearTimeout(valetTimer)
            }
        }, 1000);
    })
}


function checkForOrderDelivery(){
    return new Promise((resolve, reject) => {
        valetDeliveryTimer = setInterval(() => {
            console.log("Is ordered delivered by valet");
            if (isOrderDelivered) {
                resolve("order delivered valet details")
                updateOrderStatus()
                clearTimeout(valetDeliveryTimer)
            }
        }, 1000);
    }) 
}

function updateValetDetails() {
    if (isValetfound) {
        console.log("hello");
        document.getElementById("finding-driver").classList.add("none")
        document.getElementById("found-driver").classList.remove("none")
        // document.getElementById("call").classList.remove("none")
    }
}



// Promsise - then,catch      callback - resolve, reject
// Types of promises
// 1.Promise.all  --> sabai operations call paralley, if one fail, promise.all fails 
// 2.Promise.allsettled  --> sabai operations call paralley, if one fail - dont give a damn, promise.allSettled passes
// 3.Promise.race  --> first promise to complete - whether it is resolved or rejected
// 4.Promise.any   --> first promise to fullfil that is resolved/fullfilled
