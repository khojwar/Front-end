import './App.css';
import Header from './components/Header';
import { TailSpin } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]) 

  useEffect(() => {
    setLoading(true)
    async function getData() {
      const res =  await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      const data = await res.json()

      setData(data)
      // console.log(data);
      setLoading(false)
      toast.success("successfully fetched data")
    }

    getData()

  }, [])



  return (
    <div className="App">
      <Header />
      <ToastContainer />
      
      <div className="main">
        {
          loading ? 
          <TailSpin color='green' height={80}  />
          :
          data.map((e, i) => {
            return(
              <p key={i}>{e.email}</p>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
