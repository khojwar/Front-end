

// Constructor --> is just a function
function Book(title, author, year) {
    // console.log("Book Initialized...")
    this.title = title
    this.author = author
    this.year = year


    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}


// Instatiate an Object
const book1 = new Book("Book one", "John Doe", 2013)
const book2 = new Book("Book two", "jane Doe", "2016")


// console.log(book1);
// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book2);