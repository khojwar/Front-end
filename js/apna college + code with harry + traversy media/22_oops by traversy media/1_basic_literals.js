// const s1 = "hello"
// console.log(typeof s1);    // string

// const s2 = new String("hello")
// console.log(typeof s2);    // object


// console.log(window);    // parent object of everything
// window.alert(1)
// console.log(navigator.appVersion);


// -------------------------------------------------
// ******************Object Literal**********************
const book1 = {
    title: "Book One",
    author: "John Doe",
    year: "2013",
    getSummmary : function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

// console.log(book1.title);
// console.log(book1.getSummmary());


const book2 = {
    title: "Book Two",
    author: "Jane Doe",
    year: "2016",
    getSummmary : function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};

// console.log(book2.getSummmary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));





// pratek Object maa getSummmary lekhna parirrxa. yo ali majaa bhayan. So we need constructor for the convention
