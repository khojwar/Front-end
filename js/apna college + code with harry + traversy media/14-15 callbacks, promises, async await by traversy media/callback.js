const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post Two"}
]

// maanau setTimeout hypothetically dealing with surver 

// function getPosts() {
//     setTimeout(() => {
//         let output = ""
//         posts.forEach((post) => {
//             output += `<li> ${post.title} </li>`
//         })
//         document.body.innerHTML = output
//     }, 1000);

// }

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000);
// }


// getPosts()

// createPost({title: "Post Three", body: "This is post Three"})





// --------------------------------------------------------------------
// in the above example createPost is late than the getPosts so we cant see the third post in the page. so we need the "callback function" 



function getPosts() {
    setTimeout(() => {
        let output = ""
        posts.forEach((post) => {
            output += `<li> ${post.title} </li>`
        })
        document.body.innerHTML = output
    }, 1000);

}

function createPost(post, callback) {           // pass callback as parameter. you can named any name
    setTimeout(() => {
        posts.push(post)
        callback()                              // call the callback
    }, 2000);
}


createPost({title: "Post Three", body: "This is post Three"}, getPosts)     // call the function getPosts
