let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")


localStorage.setItem(key,value)



console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

if (key=="red" || key == "blue"){
    localStorage.removeItem(key)
}

if (key==0) {
    localStorage.clear()
}




console.log(localStorage.length);
console.log(localStorage.key(1));