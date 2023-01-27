// note: in the constructor_function, we use pascalCase for function name 
//----------------------------------------------------------------------



function Course(title){       // function name must be in pascal Case.  Class ko name j hunxa tehi nai hunxa 
    this.title = title,
    this.enroll = function(){
        console.log("You are successfully enrolled")
    }
}

const course = new Course("Javascript")

course.enroll()

// -----------------------------------------------------------------------

console.log(course)
// delete property
delete course.title
console.log(course)

// ------------------------------------------------------------------------------
// update the above constructor function 
course.checkEnrollment = function() {
    console.log("30 users are enrolled");
}

course.enroll()
console.log(course)
