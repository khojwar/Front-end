const course = {
    // property/key : value,
    lecture: 10,
    Section: 3,
    title: "javascript",
    notes: {
        introduction: "Welcome to js course"   // nested object
    },
    // method or function
    enroll() {
        console.log("you are successfully enroll")
    }
}

/*
function enroll() {
    console.log("you are successfully enroll")
}

*/

course.enroll()
console.log(course);

course.price = 999
console.log(course);