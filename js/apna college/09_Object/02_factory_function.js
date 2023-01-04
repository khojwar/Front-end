

// note: in the factory_function we use camelCase for function name
//------------------------------------------------------------------


/*
function createCourse() {     //function name should in camel case
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
    return course
}

const course = createCourse();

course.enroll()

*/


// Alternative way of above code
/*
function createCourse() {
    return {
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
}

const course = createCourse();

course.enroll()
*/

//-----------------------------------------------------------------------------
// using parameter in function
// easiest way too

function createCourses(title) {      //function name should in camel case
    return {
        title: title,
        enroll() {
            console.log("you are successfully enroll")
        }
    }
}

const courses = createCourses("javascript");

courses.enroll()
console.log(courses);