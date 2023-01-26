// ****************forEach ****************

// const items = document.querySelectorAll(".item")

// items.forEach(item => console.log(item))


// ************remove ******************


// const ul = document.querySelector(".items")

// ul.remove()
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = "hello"
// ul.children[1].innerHTML = "Brad"
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>"

// const btn = document.querySelector(".btn")
// btn.style.background = "red"
// btn.style.color = "white"


// *******************addEventListener ***********************
// ********************1. click***********************


// const btn = document.querySelector(".btn")

// btn.addEventListener("click", (e)=>{
    // e.preventDefault()
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log("click")


    // const name = document.getElementById("name").value
    // const msg = document.querySelector(".msg")
    // msg.innerHTML = `<h1>My name is: ${name}</h1>`
    // console.log(name);
// })


// ***************************2. mouseover***************************
const btn = document.querySelector(".btn")
btn.addEventListener("mouseover", (e)=> {
    e.preventDefault
    document.querySelector("#my-form").style.background = "#ccc"
    document.querySelector("body").classList.add("bg-dark")

})


// ****************************3. mouseout****************************
// const btn = document.querySelector(".btn")
// btn.addEventListener("mouseout", (e)=> {
//     e.preventDefault
//     document.querySelector("#my-form").style.background = "#ccc"
//     document.querySelector("body").classList.add("bg-dark")

// })




