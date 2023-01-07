
let first = document.getElementById("first")
// getAttribute  --> get the value of an attribute

let a = first.getAttribute("class")
console.log(a);


// ----------------------------------------------------------------
// hasAttribute   --> check for existance of attribute
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));


// -------------------------------------------------------------------
// setAttribute   --> set the value of an attribute

// last.setAttribute("hidden", "true")            // hidden="true"
last.setAttribute("class", "true sachin")        // class = "true sachin"


// -----------------------------------------------------------------
// removeAttribute  --> remove attribute from the element

lasta.removeAttribute("class")


// -----------------------------------------------------------------
// attributes   --> get the collection of all attribute

console.log(first.attributes);


// -------------------------------------------------------------------
// data - * attribute  --> we can always create custom attribute but the once starting with "data -" are reserved for programmers use. They are available in a property named dataset

console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);



 


