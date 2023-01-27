// callback function:- passing function as an argument


function name(src, callback) {
    var script = document.createElement("script")
    script.src = src


    // script load bhayako thahaa hudain aso talako code lekhinxa. kinaki script load bhayasi script dekhauxa
    script.onload = function() {
        console.log("Loaded script with SRC: " + src);
        callback(null, src)
    }

    // error aayo bhane yo code run hunxa
    script.onerror = function() {
        console.log("Error loading script with SRC: " + src)
        callback(new Error("Src got some error"))
    }

    document.body.appendChild(script)
}

function hello(error, src) {
    if(error) {
        console.log(error)
        return
    }
    alert("hello world" + src)
}

function goodmorning(error, src) {
    if(error) {
        console.log(error)
        return
    }
    alert("good morning" + src)
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js", hello) 