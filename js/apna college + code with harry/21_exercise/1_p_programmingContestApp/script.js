// city bike
// let url2 = "http://api.citybik.es/v2/networks?fields=id,name,href"


// contest
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((contests)=>{
    console.log(contests);
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])
        ihtml +=`
        <div class="card" style="width: 23%;">
            <img class="card-img-top" src="https://s1.wallpapermaiden.com/image/2016/10/24/coding-numbers-binary-code-developer-nightmare-technology-8213.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${contests[item].name}</h5>
                <p class="card-text">Status is ${contests[item].status}</p>
                <p class="card-text">In 24 Hours? ${contests[item].in_24_hours}</p>
                <p>Starts at: ${contests[item].start_time}</p>
                <p>Ends at: ${contests[item].end_time}</p>
                <a href="${contests[item].url}" class="btn btn-primary">Visit contest</a>
            </div>
        </div>
        `
    }
    cardContainer.innerHTML = ihtml
})

