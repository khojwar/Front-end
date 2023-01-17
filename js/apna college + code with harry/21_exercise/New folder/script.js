// city bike



let url2 = "http://api.citybik.es/v2/networks?fields=id,name,href"

let response = fetch(url2)
response.then((v)=>{
    return v.json()
}).then((citybike)=>{
    console.log(citybike.networks);
    ihtml = ""
    for (item in citybike.networks) {
        let images = [
            "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/10/Electric-Chopper-Bike.jpg",
            "https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-KTM-RC-390-Motorcycle-Bike-PNG-Image.png",
            "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2020/08/bucherer-1-e1598231194611.jpg",
            "https://ic1.maxabout.us/autos/tw_india/U/2020/12/ultraviolette-f77-side-view.jpg",
            "https://wallpapercave.com/wp/wp2463082.jpg"
        ]
        
        let computerGeneratedNum = Math.floor(Math.random()*5)+1
        
        console.log(citybike.networks[item]);
        ihtml += `
            <div class="card mb-3 " style="width: 23%" >
                <img src="${images[computerGeneratedNum]}" class="card-img-top" alt="Electric-Chopper-Bike">
                <div class="card-body">
                  <h5 class="card-title">${citybike.networks[item].name}</h5>
                  <p class="card-text">ID: ${citybike.networks[item].id}</p>
                  <p class="card-text"><small class="text-muted"><a href="${citybike.networks[item].href}" class="btn btn-primary">more</a></small></p>
                </div>
            </div>
        `
    }
    document.getElementById("mainbody").innerHTML = ihtml
})



