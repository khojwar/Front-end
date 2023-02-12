import {Header, Footer} from "./component/Header"
import './App.css';
import Student from "./component/Student";

function App() {
  let name = "Tika Ram"

  return (
    <div className="App">
      <Header />
      <h1 style={{color: "red"}}>{name}</h1>
      <Student name="Tika Ram" age={26} />
      {/* <Student name="Manoj" age={28} />
      <Student name="Gaurab" age={25} /> */}
      <Footer />
    </div>
  );
}

export default App;
