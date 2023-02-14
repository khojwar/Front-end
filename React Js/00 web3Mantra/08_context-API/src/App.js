import './App.css';
import Header from './components/Header';
import Comp1 from './components/Comp1';
import { useState, createContext } from 'react';

const AppState = createContext()




function App() {
  const [data, setData] = useState("Tika Ram")
  const [name, setName] = useState({name:"Tika", age:25})


  return (
      <div className="App">
        {/* <AppState.Provider value={data}> */}
        <AppState.Provider value={{data, name}}>

          <Header />

          {/* <Comp1 data={data} /> */}

          <Comp1 />
        
        </AppState.Provider>

      </div>
  );
}

export default App;
export { AppState }
