let x = function(e){
    // console.log(e)
    // console.log(e.target);
    console.log(e.type, e.clientX, e.clientY);
    alert("Hello World1!!")
}

let y = function(e){
    alert("Hello World2!!")
}


btn.addEventListener('click', x)


btn.addEventListener('click', y)

let a = prompt("What is your favorite number? ")

if (a== "2") {
    btn.removeEventListener('click', x)    // handler must be the same function object for this to work
}