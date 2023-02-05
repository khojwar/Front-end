let form = document.getElementById("addForm")
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")

// form submit event
form.addEventListener("submit", addItem)
// delete event
itemList.addEventListener("click", removeItem)
// filter event
filter.addEventListener("keyup", filterItems)


function addItem(e) {
    e.preventDefault()

    // get input value
    let newItem = document.getElementById("item")
    
    // create new li element
    let li = document.createElement("li")
    // add class
    li.className = "list-group-item"
    // add text node with input value
    li.appendChild(document.createTextNode(newItem.value))

    //create delete button element
    let deleteBtn = document.createElement("button")

    //add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-end delete"

    // add text node
    deleteBtn.appendChild(document.createTextNode("X"))

    // append btn to li
    li.appendChild(deleteBtn)
    
    itemList.appendChild(li)
}



// remove item
function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are You Sure?")){
            let li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
    
}


// Filter Items
function filterItems(e) {
    // convert text to lowercase
    let text = e.target.value.toLowerCase()

    //get list
    let items = document.getElementsByTagName("li")

    // convert to an array
    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent
        if (itemName.toLowerCase().indexOf(text) != -1){
            // console.log("hello block");
            item.style.display="block"
        }else{
            item.style.display="none"
            // console.log("hello none");

        }
    })
}