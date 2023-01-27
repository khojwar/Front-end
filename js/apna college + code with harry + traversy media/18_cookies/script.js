// console.log(document.cookie);

// cookies add garne tarika
document.cookie = "name=tika11332244"
document.cookie = "name2=tika113322442"

// yadi key value pair maa key same xa bhane keyvalue replace hunxa
document.cookie = "name=tika"

let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);

