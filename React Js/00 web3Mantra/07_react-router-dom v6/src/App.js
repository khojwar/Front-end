import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Instagram from './components/Instagram';
import Mail from './components/Mail';
import Userdetails from './components/Userdetails';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path='/:userId' element={<Userdetails />} />

          {/* About */}
          <Route path="about" element={<About />} />

          {/* Contact */}
          <Route path="contact" element={<Contact />} >
            <Route index element={<Instagram />} />
            <Route path='instagram' element={<Instagram />} />
            <Route path='mail' element={<Mail />} />
          </Route>

          {/* Error */}
          <Route path="*" element={<Error />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
