// textContext or innerHTML 
/*
 
let AddBtn =document.getElementById("add-btn")
AddBtn.addEventListener("click", addChapter)


function addChapter(e) {
    // taking input or grab the input
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling

    // Element create garera aghi grab gareko value laai display gareko
    let newli = document.createElement("li")
    newli.classList.add("list-group-item")      // add html class to classList
    newli.textContent = currentInput.value   // input value laai list maa add gareko

    // Dom maa ul maa li addagareko
    let parentList = document.getElementById("parentList")
    parentList.appendChild(newli)
}

*/


let addBtn =document.getElementById("add-btn")
addBtn.addEventListener("click", addChapter)
let parentList = document.getElementById("parentList")

function addChapter(e) {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove()
    }
    // taking input or grab the input
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentChapterName = currentInput.value

    // Element create garera aghi grab gareko value laai display gareko
    let newli = document.createElement("li")
    // newli.classList.add("list-group-item")      // add html class to classList
    newli.className = "list-group-item d-flex justify-content-between"
    newli.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3> 
            <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
            <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`

    parentList.appendChild(newli)
}


function removeChapter(currElement) {
    currElement.parentElement.remove()
    let parentList = document.getElementById("parentList")
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h3")
        newEmptyMsg.classList.add("emptyMsg")
        newEmptyMsg.textContent = "Nothing is here. Please add a chapter!!"
        parentList.appendChild(newEmptyMsg)
    }
}


function editChapter(currElement) {
    
    if (currElement.textContent == "Done"){
        currElement.textContent ="Edit"
        let currChapterName = currElement.previousElementSibling.value
        let currHeading = document.createElement("h3")
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currChapterName

        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)

    } else {
        currElement.textContent ="Done"
        let currChapterName = currElement.previousElementSibling.textContent
        let currInput = document.createElement("input")
        currInput.type = "text"
        currInput.placeholder = "Chapter Name"
        currInput.className = "form-control"
        currInput.value = currChapterName


        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
}


