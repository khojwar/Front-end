import './App.css';
import Header from './components/Header';
import Getfetch from './components/Getfetch';

function App() {
  const [data] = Getfetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")

  return (
    <div className="App">
      <Header />

      {
        data.map((e, i) => {
          return <h1 key={i}>{e.firstName}</h1>
        })
      }

      
    </div>
  );
}

export default App;
