// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement
        this.words = words
        this.txt = ""
        this.wordIndex = 0
        this.wait = parseInt(wait, 10)
        this.type()
        this.isDeleting = false
    }


    type() {
        // Current index of word
        const Current = this.wordIndex % this.words.length
        // Get full text of current word
        const fullTxt = this.words[Current]

        // Check if deleting
        if (this.isDeleting) {
            // remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            // add char
            this.txt = fullTxt.substring(0, this.txt.length+1)
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt"> ${this.txt}</span>`

        // Initial Type Speed
        let typeSpeed = 300

        if (this.isDeleting) {
            typeSpeed /= 2
        }

        // if word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // make pause at end
            typeSpeed = this.wait
            // Set delete to true
            this.isDeleting = true
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false
            // Move to next word
            this.wordIndex++
            // pause before start typing
            typeSpeed =500
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}



// Init On DOM load
document.addEventListener("DOMContentLoaded", init)

//init app
function init() {
    const txtElement = document.querySelector(".txt-type")
    const words = JSON.parse(txtElement.getAttribute("data-words"))
    const wait = txtElement.getAttribute("data-wait")
    // init TypeWriter
    new TypeWriter(txtElement, words, wait)
}