count = 0

// Computer generating the Number

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let computerGeneratedNumber = getRandomIntInclusive(1,100);

let userInput = prompt("Guess the number between 1 to 100: ")
userInput = Number(userInput)

while (userInput) {
    if (computerGeneratedNumber > userInput) {
        alert(`Your guess is greater than the ${userInput}`)
        userInput = prompt("Guess the number between 1 to 100 : ")
        count += 1
       
    } else if (computerGeneratedNumber < userInput) {
        alert(`Your guess is less than the ${userInput}`)
        userInput = prompt("Guess the number between 1 to 100: ")
        count += 1
       
    }else if (computerGeneratedNumber == userInput) {
        alert(`Congratulation, You won the game. Actual number is ${computerGeneratedNumber}. You takes ${count} chances.`)
        break
    }
}
        
    
