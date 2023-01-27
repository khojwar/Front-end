/*
In this part we will talk about what the JavaScript DOM (Document Object Model) is and we will look at the different selectors like 

document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

We will also look at how to change content and styles via these selectors
*/




// ***********************Examine the document object***********************


// console.dir(document)
// console.dir(document.URL)

// console.log(document)
// console.log(document.body)
// console.log(document.head)
// console.log(document.title)
// // document.title = 123 
// console.log(document.doctype)
// console.log(document.all)
// console.log(document.all[10])
// // document.all[10].textContent = "Hello"  // it is not way to change textContent in dom


// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images); bb  



// *************************getElementById************************** 
// console.log(document.getElementById("header-title"));

var headerTitle = document.getElementById("header-title")
var header = document.getElementById("main-header")
// console.log(headerTitle);
// headerTitle.textContent = "Hello"
// headerTitle.innerText = "Say Hello"



// **********************innerText vs textContent******************
// console.log(headerTitle.textContent);     // output:- Item lister 123    --> display none hudaa-ni 123 print hunxa
// console.log(headerTitle.innerText);         // output:- Item lister


// headerTitle.innerHTML = "<h3>Hello</h3>"

header.style.borderBottom = "3px solid #000";     // use camelCase for css key property


// *******************getElementsByClassName ************************
// var items = document.getElementsByClassName("list-group-item")
// console.log(items);
// console.log(items[1]);
// items[1].innerHTML = "Hello 2";
// items[1].style.fontWeight = "bold"
// items[1].style.backgroundColor = "Yellow"

// // items.style.backgroundColor = "#f4f4f4"     // it does not work, we must use loop


// for (let i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4"
// }



// ****************************getElementsByTagName************************
var li = document.getElementsByTagName("li")
// console.log(li);
// console.log(li[1]);
// li[1].innerHTML = "Hello 2";
// li[1].style.fontWeight = "bold"
// li[1].style.backgroundColor = "Yellow"

// // li.style.backgroundColor = "#f4f4f4"     // it does not work, we must use loop


// for (let i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = "#f4f4f4"
// }



//  ***************querySelector**********************
// let headerr = document.querySelector("#main-header")
// headerr.style.borderBottom = "solid 4px #ccc"

// var input = document.querySelector("input")
// input.value = "hello world"

// let submit = document.querySelector("input[type='submit']")
// submit.value = "SEND"


// var itemm = document.querySelector(".list-group-item")
// itemm.style.color = "blue"

// var lastitem = document.querySelector(".list-group-item:last-child")
// lastitem.style.color = "blue"

// var seconditem = document.querySelector(".list-group-item:nth-child(2)")
// seconditem.style.color = "coral"


// *********************querySelectorAll ********************

let titles = document.querySelectorAll(".title")
console.log(titles);
titles[0].textContent = "hello"


let odd = document.querySelectorAll("li:nth-child(odd)")
let even = document.querySelectorAll("li:nth-child(even)")

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "#f4f4f4"  
}
for (let i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = "#ccc"  
}
