import React from "react";
import { InfoPortada, MainContainer, RedeSocial } from "./css/Main";
import SearchComplet from "./SearchComplet";
import SliderAut from "./SliderAut";

const Main = () => {
  return (
    <MainContainer>
      <RedeSocial>
        <ul>
          <li><a href="https://www.facebook.com/emmanuel.abregu.92" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href="https://www.linkedin.com/in/emmanuel-abregù-270175220/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="https://github.com/zLuciel" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li>
        </ul>
      </RedeSocial>
      <SliderAut/>
      <SearchComplet />
      <InfoPortada>
        <h1>
        Find all the games available at <br/><p>Api Gamer</p>.
        </h1>
        <div className="ctn-btn-info">
          <button className="btn-ver">View all</button>{" "}
          <button className="btn-ver2">View all</button>
        </div>
      </InfoPortada>
    </MainContainer>
  );
};

export default Main;
