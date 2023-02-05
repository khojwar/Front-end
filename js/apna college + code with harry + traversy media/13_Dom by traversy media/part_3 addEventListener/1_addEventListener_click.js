/*
In this lesson in the JavaScript DOM, we will be looking at different events and how to attach them to DOM elements with addEventListener();
*/



// let button = document.getElementById("button")
// button.addEventListener("click", ()=>{
//     console.log("Button Clicked");
// })



// **************************Events************************
// *************************1. click Event**********************

let button = document.getElementById("button")
button.addEventListener("click", buttonClick)

// function buttonClick() {
//     // console.log("Button Clicked");
//     document.getElementById("header-title").textContent = "Changed"
//     document.querySelector("#main").style.backgroundColor = "#f4f4f4"
// }


function buttonClick(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById("output")
    // output.innerHTML = "<h3>" +e.target.id+ "</h3>"

    // console.log(e.type);


    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
}

// -----------------------------------------------------------------

button.addEventListener("click", runEvent)

function runEvent(e) {
    console.log("EVENT TYPE: " +e.type);
}