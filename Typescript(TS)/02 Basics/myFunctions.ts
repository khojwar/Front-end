function addTwo(num: number) {
    return num + 2
}


function getUpper(val: string) {
    return val.toUpperCase()
}


function signUpUser(name: string, email: string, isPaid: boolean) {}


let loginUser = (name: string, email: string, isPaid: boolean = false) => {}


addTwo(5)
getUpper("tikaram")

signUpUser("tikaram", "tikaram@gmail.com", false)
loginUser("t", "t@gmail.com")



// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 Ok"
// }


const getHello = (s: string):string => {
    return ""
}



const  heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})





function consoleError(errmsg: string): void {
    console.log(errmsg)
}


function handleError(errmsg: string): never {           //The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
    throw new Error(errmsg)
}


export {}