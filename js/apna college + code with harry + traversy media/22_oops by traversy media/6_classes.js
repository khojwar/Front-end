class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    getSummry(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge() {
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`
    }

    revise(newYear){
        this.year = newYear
        this.revise = true
    }

    // static method  --> it means we dont have to instanciated object
    static topBookStore(){
        return "Barnes & Noble"
    }
}


// instantiate object
const book1 = new Book("Book One", "Jone Doe", "2013")

console.log(book1);
book1.revise("2018")
console.log(book1);

// static method access garna laai "classs-name_dot(.)_static-method-name" lekhna parxa
console.log(Book.topBookStore());