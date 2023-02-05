const myForm = document.getElementById("my-form")
const msg = document.querySelector(".msg")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const userList = document.getElementById("users")



myForm.addEventListener("submit", onsubmit)

function onsubmit(e) {
    // to prevent the default behaviour
    e.preventDefault()

    if (nameInput.value == "" || emailInput.value) {
        msg.textContent = "Fill all the input field"
        msg.classList.add("error")

        setTimeout(() => {
            msg.remove()
        }, 2000);
    }
    console.log(nameInput.value);
    console.log(emailInput.value);

    localStorage.setItem(nameInput.value, emailInput.value)

    const li = document.createElement("li")
    li.appendChild(document.createTextNode(nameInput.value +" : "+ emailInput.value))

    userList.appendChild(li)
    userList.classList.add("li-style")
    

    // clear the input field
    nameInput.value = ""
    emailInput.value = ""

}