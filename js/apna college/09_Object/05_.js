
// way to applying "pass by value" in object

const course = {
    title: "Javascript",
    enroll() {
        console.log("you are successfully enrolled")
    }
}


const course_1 = { ...course}     // yasari spread operator use garera copy garxau
course.title = "c++"        

console.log(course);
console.log(course_1);


// ------------------------------------------------------------------

// 1st alternative way of above code 

const courses = {
    title: "Javascript",
    enroll() {
        console.log("you are successfully enrolled")
    }
}


const courses_1 = Object.assign({},courses)     // object clone gareko
courses_1.title = "C++"

console.log(courses);
console.log(courses_1);


//----------------------------------------------
// 2nd alternative way of above code

for(let key in course) {
    console.log(key, course[key]);
} 


for (let key of Object.keys(course)) {
    console.log(key, course[key])
}

// -------------------------------------------------
const course_11 = {}
for (let key of Object.keys(course)) {
    course_11[key] = course[key]
}


console.log(course);
console.log(course_11);