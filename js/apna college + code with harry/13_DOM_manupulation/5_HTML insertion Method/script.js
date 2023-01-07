// Some ways to "insert element" in the dom 
//------------------------------------------------

let a = document.getElementsByTagName("div")[0]

a.innerHTML = a.innerHTML + "<h1> Hello World!! </h1>"


// -----------------------------------------------------
let div = document.createElement("div")      // naya element banaauxa
div.innerHTML = "<h1> Hello World!! </h1>"
a.appendChild(div) 
// a.append(div)
// a.prepend(div)     // container ko vitra hunxa tara maathi hunxa
// a.before(div)         // container bata bahira niskinxa
// a.after(div)     // container ko bahira, tala add hunxa
// a.replaceWith(div)