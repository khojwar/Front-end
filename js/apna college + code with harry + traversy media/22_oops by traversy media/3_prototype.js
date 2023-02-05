// Constructor --> is just a function



// function Book(title, author, year) {
//     // console.log("Book Initialized...")
//     this.title = title
//     this.author = author
//     this.year = year


//     this.getSummary = function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }



// --------------------------------------------------------------
// Alternative 

// constructor function
function Book(title, author, year) {
    this.title =title;
    this.author = author;
    this.year = year;
}

// getSummary     ************prototype**************
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}


// getAge   ****************another prototype******************
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`
}

// revise / change year   ******************another prototype**************
Book.prototype.revise = function(newYear) {
    this.year = newYear
    this.revise = true
}

// Instatiate an Object
const book1 = new Book("Book one", "John Doe", "2013")
const book2 = new Book("Book two", "jane Doe", "2016")


// console.log(book1);
// console.log(book2.getSummary());
// console.log(book2);
// console.log(book2.getAge());

console.log(book2);
book2.revise("2018")
console.log(book2);
