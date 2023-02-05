// get model element
let modal = document.getElementById("simplemodal")
// Get open model button
let modalBtn = document.getElementById("modalBtn")
// get close button
let closeBtn = document.getElementsByClassName("closeBtn")[0]

// listen for Open click
modalBtn.addEventListener("click", openModal)
// listen for close click
closeBtn.addEventListener("click", closeModal)
// listen for outside click
window.addEventListener("click", clickOutside)

// function to open model
function openModal() {
    modal.style.display = "block"
}

// function to close model
function closeModal() {
    modal.style.display = "none"

}

// function to close modal if outside click
function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}