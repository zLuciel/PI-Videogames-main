import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CreateGames } from "./components/CreateGames";
import Header from "./components/Header";
import { Home } from "./components/Home";
import Information from "./components/Information";
import LadingPage from "./components/LadingPage";
//import { GiHamburgerMenu } from 'react-icons/gi';

function App() {
  const location = useLocation();
  const [visible,setVisible] = useState(false)
  const handleFlex=()=>{
   !visible ? setVisible(true) : setVisible(false)
  }

  return (
    <div className="app">
      {location.pathname !== '/' && <button onClick={handleFlex} className="hamburgue">icono de hamburgue</button>}
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
