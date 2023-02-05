class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    getSummry(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}



// Magazine Subclass
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year)     // inorder to call the parent constructor we use the function is called  "Super"
        this.month = month
    }
}


// Instantiate Magazine
const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan")

console.log(mag1);
console.log(mag1.getSummry());