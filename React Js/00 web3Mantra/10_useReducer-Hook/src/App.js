import './App.css';
import Header from './components/Header';
import { useReducer } from 'react';

const reducer = (state, action) => {
  // console.log("state: ", state);
  // console.log("action: ", action);
  // return state

  if (action.type === "INC") {
    return state + 1
  } else if (action.type === "DEC") {
    return state - 1
  } else if (action.type === "MUL") {
    return state * 2
  }
}


function App() {
  // syntax of useReducer 
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [state, dispatch] = useReducer(reducer, 0)


  return (
    <div className="App">
      <Header />
      <h1>{state}</h1>
      <button onClick={() => dispatch({type: "INC"})} >Increment</button>
      <button onClick={() => dispatch({type: "DEC"})} >Decrement</button>
      <button onClick={() => dispatch({type: "MUL"})} >Multiply</button>

      
    </div>
  );
}

export default App;
