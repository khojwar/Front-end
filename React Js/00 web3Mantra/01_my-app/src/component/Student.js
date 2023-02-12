import Comp from "./Comp.js"
import propTypes from 'prop-types'

// 1st metod: parameter maa props lekhera pass gareko
// ---------------------------------------------------

const Student = (props) => {
  return (
    <div>
        <h1>Student</h1> 
        <p>name: {props.name}</p>
        <p>age: {props.age}</p> 
        <Comp name={props.name} text="This is me" />
    </div>
  )
}



// parameter maa passing props as object
// -----------------------------------------------------

// const Student = ({name, age}) => {
//   return (
//     <div>
//         <h1>Student</h1> 
//         <p>name: {name}</p>
//         <p>age: {age}</p> 
//         <Comp name={name} />
//     </div>
//   )
// }


Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

Student.defaultProps = {
    name: "Name",
    age: 0
}


export default Student