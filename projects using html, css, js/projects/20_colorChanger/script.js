const body = document.querySelector("body")
const buttons = document.querySelectorAll("li")

// console.log(buttons)
buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener("click", function (e) {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.id);

        let color = e.target.id;

        switch (color) {
            case "red":
                body.style.backgroundColor = color
                break;
            case "green":
                body.style.backgroundColor = color
                break;
            case "blue":
                body.style.backgroundColor = color
                break;
            case "yellow":
                body.style.backgroundColor = color
                break;
            
            default:
                console.log("You should click on button");
                break;
        }


    })

})