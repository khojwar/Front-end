
let a = prompt("Enter your note")
if (a) {
    localStorage.setItem("note",a)
}

let n = localStorage.getItem("note")
alert("Your note is " + n)

if (localStorage.length) {
    let c = confirm("Do you want to delete your note")
    if (c) {
        localStorage.removeItem("note")
        alert("Note deleted successfully")
    }
}


