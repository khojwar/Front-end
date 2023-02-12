
// parameter as props 
// -------------------------------------------

// const Comp = (props) => {
//   return (
//     <div>
//         <h3>st comp</h3> 
//         <p>st name: {props.name}</p>   
//     </div>
//   )
// }


// parameter as props object
// -------------------------------------------------

const Comp = ({name, text}) => {
  return (
    <div>
        <h3>st comp</h3> 
        <p>st name: {name}</p>   
        <p>st Desc: {text}</p>   
    </div>
  )
}

export default Comp