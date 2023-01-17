const loadScript = (src) =>{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)

        script.onload = () => {
            resolve("Script has been loaded")
        }

        script.onerror = () => { reject(0)}
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js")

p1.then((value) => {
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js")
}).then((value) => {
    console.log("Second script ready");
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js")
}).then((value) => {
    console.log("Third script ready");
}).catch((error) => {
    console.log("we are sorry but we are having problem loading this script")
})

