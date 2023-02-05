// lister for form submit

const myForm = document.getElementById("myForm")

myForm.addEventListener("submit", saveBookmark)

// save bookmarks
function saveBookmark(e) {
    // prevent form from submitting
    e.preventDefault()

    // get form values
    const siteName = document.getElementById("siteName").value
    const siteUrl = document.getElementById("siteUrl").value

    if (!validateForm(siteName, siteUrl)){
        return false
    }


    let bookmark = {
        name : siteName,
        url: siteUrl
    }


    /*
    // local storage Test   --> local storage always store string
    localStorage.setItem("test", "hello world")
    console.log(localStorage.getItem('test'));
    localStorage.removeItem("test")
    console.log(localStorage.getItem('test'));
    */


    // test if bookmarks is null
    if (localStorage.getItem("bookmarks") === null) {
        // init array
        var bookmarks =[]
        // add to array
        bookmarks.push(bookmark)
        // set to localStorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    } else {
        // get bookmarks from localStorage
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
        // add bookmark to array
        bookmarks.push(bookmark)
        // re-set back to localStorage 
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    }

    // clear form
    document.getElementById("myForm").reset()

    // re-fetch bookmarks
    fetchBookmarks()

}


// Delete bookmark
function deleteBookmark(url) {
    // Get bookmarks from localStorage
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    // loop through bookmarks
    for(let i=0; i < bookmarks.length; i++){
        if (bookmarks[i].url == url){
            // remove from array
            bookmarks.splice(i, 1)
        }
    }

    // re-set back to localStorage 
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))

    // re-fetch bookmarks
    fetchBookmarks()

}

// fetch bookmarks
function fetchBookmarks() {
    // Get bookmarks from localStorage
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"))

    // get output id
    var bookmarksResults = document.getElementById("bookmarksResults")

    // build output
    bookmarksResults.innerHTML = ""
    for(let i=0; i < bookmarks.length; i++) {
        let name = bookmarks[i].name
        let url = bookmarks[i].url

        bookmarksResults.innerHTML += "<div class='well'>" +
                                       "<h3>" + name +
                                       "<a class='btn btn-default' target='_blank' href='"+url+"'>Visit</a>"+
                                       "<a onclick='deleteBookmark(\""+url+"\")' class='btn btn-danger' href='#'>Delete</a>"+
                                       "</h3>"+
                                       "</div>"
    }

}


// validate form
function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
        alert("Please fill in the form")
        return false
    }

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert("Please use a valid URL")
        return false
    }

    return true
}