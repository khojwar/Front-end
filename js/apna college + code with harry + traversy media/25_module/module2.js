// const hello = require("./module1")
// hello.hello()
// hello.ahello("Shivani")
// hello.ahello("Nikita")
// hello.ahello("Garima")



// mathiko arusaar lekhyo bhane pratek palta "hello.ahello" or "hello.hello" lekhnaprxa. so "destructuring" garera "hello" ra "ahello" laai bahiraa nikaaleko
const {hello, ahello} = require("./module1")        // destructuring gareko

hello()
ahello("Garima")
ahello("Shibani")