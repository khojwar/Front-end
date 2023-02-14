import './App.css';
import Header from './components/Header';
import { useState, useEffect, useRef } from 'react';


// ------------------------------------------------

// function App() {
//   const [input, setInput] = useState("")
//   // const counter = useRef(0)
//   // const prevState = useRef("")
//   const inputField = useRef()


//   // useEffect(() => {
//   //   counter.current = counter.current + 1
//   // })

//   // useEffect(() => {
//   //   prevState.current = input
//   // }, [input])

//   const formHandler = (e) => {
//     setInput(e.target.value)
//   }

//   const clickHandler = () => {
//     inputField.current.focus()
//     inputField.current.value = "Tika Ram"
//   }


//   return (
//     <div className="App">

//       <Header />

//       <input ref={inputField} value={input} onChange={formHandler} />
//       {/* <h4>Application has been rendered {counter.current} times </h4> */}
//       {/* <h4>Prev state was {prevState.current}</h4> */}
//       <button onClick={clickHandler}>Click me</button>

//     </div>
//   );
// }



// ------------------------------------------------------

function App() {
  const inputField = useRef()

  const clickHandler = () => {
    console.log(inputField.current.value);
    inputField.current.style.border = "2px solid red"
  }


  return(
    <div className="App">
      <Header />

      <input ref={inputField} />
      <button onClick={clickHandler}>Submit</button>

    </div>
  )
}


export default App;
