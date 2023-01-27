


while (true) {
    userInput = prompt("Choose snake for S, water for W and gun for G")
    userInput = String(userInput).toLocaleUpperCase()


    randomNum = Math.floor(Math.random()*3)
    let options = ["S","W","G"]
    let computer = String(options[randomNum])


    if (computer == userInput) {
        alert("Tie the game");
    } else if (computer=="S" && userInput=="W" || computer=="G" && userInput=="S" || computer=="W" && userInput=="G") {
        alert(`Computer Won the game. You choose ${userInput} and computer choose ${computer}`);
    } else if (computer=="W" && userInput=="S" || computer=="S" && userInput=="G" || computer=="G" && userInput=="W"){
        alert(`You Won the game. You choose ${userInput} and computer choose ${computer}`);
    } else if (userInput !="S" || userInput != "W" || userInput != "G"){
        alert("You should choose among (s, w, g)")
    }


    again = confirm("Play Again!!")  
    if (again == 0) {
        break
    }
}

