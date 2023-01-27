/*
In this video we will learn how to traverse and move around the DOM with properties like parentNode, parentElement, nextElementSibling and so on. 
We will also learn how to insert elements with createElement() and createTextNode()
*/


// *********************traversing the dom*************************
// *********************parentNode*************************

let itemList = document.querySelector("#items")

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4"

// console.log(itemList.parentNode.parentNode);



// ********************parentElement***********************
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4"

// console.log(itemList.parentElement.parentElement);



// ********************childNodes***********************
// console.log(itemList.childNodes);    // not suggest to use childNode. because it includes white-spaces too as text


// ********************children***********************
// console.log((itemList.children));
// console.log((itemList.children[1]));
// itemList.children[1].style.backgroundColor = "yellow"



// **********************firstChild*****************
// console.log(itemList.firstChild)        // not suggest to use childNode. because it includes white-spaces too as text




// **********************firstElementChild*****************
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello 1"




// **********************lastChild*****************
// console.log(itemList.lastChild)        // not suggest to use childNode. because it includes white-spaces too as text




// **********************lastElementChild*****************
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello 1"



// **********************nextSibiling*****************
// console.log(itemList.nextSibling);

// **********************nextElementSibiling*****************
// console.log(itemList.nextElementSibling);


// **********************previousSibiling*****************
// console.log(itemList.previousSibling);

// **********************previousElementSibiling*****************
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green"




// ***********************createElement*************************** 

// Create a div
var newDiv = document.createElement("div")

// add class
newDiv.className = "hello"

// add id
newDiv.id = "hello1"

// add attr
newDiv.setAttribute("title","Hello Div")

// console.log(newDiv)




// *******************create text node************************
let newDivText = document.createTextNode("Hello World")

// add text to div
newDiv.appendChild(newDivText)

// console.log(newDiv);

let container = document.querySelector("header .container")
let h1 = document.querySelector("header h1")

console.log(newDiv);

newDiv.style.fontSize = "30px"

container.insertBefore(newDiv, h1)

