
let jokesArr = ["A pair of cows were talking in the field. One says, \“Have you heard about the mad cow disease that\’s going around?\” \n\n \“Yeah,\” the other cow says. \“Makes me glad I’m a penguin.\” ", 
" \“Once, my father came home and found me in front of a roaring fire. That made my father very mad, as we didn\’t have a fireplace.\” ",
" Why don\’t pirates take a shower before they walk the plank? \n\n They just wash up on shore. ", 
" In Denver, the members of a Sunday­-school class were asked to set down their favorite biblical truths. One youngster laboriously printed: \“Do one to others as others do one to you.\” ",
" One of the oddities of Wall Street is that it is the dealer and not the customer who is called broker. ", 
" Two Hollywood stars ran into each other at the door of their psychiatrist\’s office. \n\n \“Hello, there,\” said one. \“Are you coming or going?\” \n\n \“If I knew that,\” said the other, \“I wouldn’t be here.\” "]

let joke1 = document.getElementById("joke")
let btn1 = document.getElementById("btn")

// generating random number 
let selectedjoke = () => {
    return jokesArr[Math.floor(Math.random()*6)]
}


x = function () {
    joke1.innerHTML = selectedjoke()
    console.log("ranNum")
}



btn1.addEventListener('click', x)

