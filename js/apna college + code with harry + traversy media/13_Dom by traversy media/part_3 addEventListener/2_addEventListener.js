// **********************Events******************** 

let button = document.getElementById("button")
let box = document.getElementById("box")



// button.addEventListener("click", runEvent)
// button.addEventListener("dblclick", runEvent)
// button.addEventListener("mousedown", runEvent)
// button.addEventListener("mouseup", runEvent)



// ----------------------mouseenter vs mouseover-----------------------
// mouseenter is only for own element itself but mouseover is for chield elements too

// box.addEventListener("mouseenter", runEvent)
// box.addEventListener("mouseleave", runEvent)

// box.addEventListener("mouseover", runEvent)
// box.addEventListener("mouseout", runEvent)

// box.addEventListener("mousemove", runEvent)



let itemInput = document.querySelector("input[type='text']")
let form = document.querySelector('form')
let select = document.querySelector("select")

// itemInput.addEventListener("keydown", runEvent)
// itemInput.addEventListener("keyup", runEvent)
// itemInput.addEventListener("keypress", runEvent)

// itemInput.addEventListener("focus", runEvent)
// itemInput.addEventListener("blur", runEvent)

// itemInput.addEventListener("copy", runEvent)
// itemInput.addEventListener("cut", runEvent)
// itemInput.addEventListener("paste", runEvent)

// itemInput.addEventListener("input", runEvent)

// select.addEventListener("change", runEvent)
// select.addEventListener("input", runEvent)

form.addEventListener("submit", runEvent)



function runEvent(e) {
    e.preventDefault()
    console.log("EVENT TYPE: " +e.type);

    // document.body.style.display = "none"

    // output.innerHTML = "<h3> MouseX: " +e.offsetX+ "</h3> <h3> MouseY: "+e.offsetY+ "</h3>"

    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"

    // console.log(e.target.value);
    // document.getElementById("output").innerHTML = "<h3>"+e.target.value+"</h3>"

}