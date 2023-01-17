// sessionStorage.setItem("name","harry")
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.key("name")
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name","tika")

// storage event
window.onstorage = (e) => {
    alert("Changed")
    console.log(e);
}