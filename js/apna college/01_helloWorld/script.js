

/*
let namasteBtn = document.querySelector("button")
namasteBtn.addEventListener("click", showMsg)


function showMsg(){
    alert("Hello World!")
}
*/







let namasteButton = document.querySelector("button")

namasteButton.addEventListener("click", inputMsg)


function inputMsg()
{
    // alert("Hello world ")
    let name = prompt("Enter name of student")
    namasteButton.textContent= "Roll no. 1:"+name
}

