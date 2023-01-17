
function funnyPassword() { 
    funnyPswd = ["iloveyou", 'mulakoachar', "missyoudarling", "hehehehe"]
    // console.log(funnyPswd[Math.floor(Math.random()*funnyPswd.length)]);
    let getText = document.getElementById("getText")
    getText.innerHTML = funnyPswd[Math.floor(Math.random()*funnyPswd.length)]
}

function weakPassword() {
    // console.log("hello");

    getText.innerHTML = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);

}
// ----------------------------------------------------------------------------------------------------------------------
// generate strong password 
function generateP() {
    var pass = ''
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i=1; i<=8; i++) {
        var char = Math.floor(Math.random()*str.length + 1)

        pass += str.charAt(char)
    }

    return pass

}

function strongPassword() {
    getText.innerHTML = generateP()
}

// ------------------------------------------------------------------------------------------------
function generatePswd(n) {
    var pass = ''
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i=1; i<=n; i++) {
        var char = Math.floor(Math.random()*str.length + 1)

        pass += str.charAt(char)
    }

    return pass

}

function superStrongPassword() {
    let pswdLen = prompt("Enter password length: ")
    getText.innerHTML = generatePswd(pswdLen)

}