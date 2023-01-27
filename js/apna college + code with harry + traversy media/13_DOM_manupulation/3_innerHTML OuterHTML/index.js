// console.log    --> shows the element of the dom tree
// console.dir    --> show the Element as object with its properties

let x = document.getElementsByTagName("span")[0]
console.log(x)
let y = document.getElementsByTagName("span")[0]
console.dir(y)



// ------------------------------------------------------------------------
// tagName vs nodeName
// read tag name of an elements
// tagName   --> only exist for element node
// nodeName  --> define for any node (comments, text etc)

console.log(document.body.firstChild.nodeName)     // reslt:  #text
console.log(document.body.firstElementChild.nodeName)      // result span


// -------------------------------------------------
// innerHTML  --> it is only valid for elementNodes. Not works for textNode, commentNode

let z = document.getElementById("first")
console.log(z.innerHTML)


// we can set innerHTML 
z.innerHTML = "<i>hey i am italic</i>"


// ---------------------------------------------------------------------
// outerHTML   --> innerHTML + element itself

console.log(z.outerHTML)

// we can set outerHTML 
z.outerHTML = "<div>hey</div>"


// --------------------------------------------------------------------
// .data  and    .nodeValue 

console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)



// ------------------------------------------------------------------
// textContext    --> provide access to the text inside the element: only text, minus all tags

console.log(document.body.textContent);     // website as a text copy garna xa bhane yasari copy garna sakinxxa


// -----------------------------------------------------------------------
// hidden property    --> the hidden attribute and the DOM property specifies whether the element is visible or not

last.hidden = false