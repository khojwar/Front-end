import './App.css';
import Header from './components.js/Header';
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState(2)
  // const [state2, setState2] = useState(0)
  const [data, setData] = useState([])

  // useEffect(() => {
  //   window.alert("useEffect Called")
  // }, [state])

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      const res = await get.json()

      setData(res)
      console.log(res);
    }

    getData()

    document.title = `(${state}) Employees Online`
  }, [state])

  // console.log("Function Body");

  return (
    <div className="App">
      <Header />
      {/* console.log("Inside jsx"); */}
      <button onClick={() => setState(state+2)} >Click me {state} </button>
      {/* <button onClick={() => setState2(state2+1)} >Click me {state2} </button> */}

      {
        data.map((element, index)=> {
          return(
            <div className='data' key={index}>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
