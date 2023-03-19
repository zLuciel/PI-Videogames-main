import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CreateGames } from "./Routes/CreateGames";
import Header from "./Routes/Header";
import { Home } from "./Routes/Home";
import Information from "./Routes/Information";
import LadingPage from "./Routes/LadingPage";
import axios from "axios"
axios.defaults.baseURL = "https://pi-videogames-main-production-ca73.up.railway.app"

function App() {
  const location = useLocation();
  const [visible,setVisible] = useState(false)
  const handleFlex=()=>{
   !visible ? setVisible(true) : setVisible(false)
  }

  return (
    <div className="app">
      {location.pathname !== '/' && <button onClick={handleFlex} className="hamburgue"><i className="fa-solid fa-bars"></i></button>}
     {location.pathname !== '/' && <Header visible={visible} />}
      <Routes>
        <Route path="/" element={<LadingPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/creategames" element={<CreateGames />} />
        <Route path="/details/:id" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
