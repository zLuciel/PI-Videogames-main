import React from "react";
import {NavLink} from "react-router-dom"
import { Configuracion, HeaderContainer, NavContainer } from "./css/Header";
const Header = ({visible}) => {
  return (
    <HeaderContainer visible={visible}>
      <div className="hide">
      <div className="flex-header">
        <div className="logo-header">
          <h1>
            <i>z</i>Luciel
          </h1>
        </div>
        <NavContainer>
          <ul>
            <li ><NavLink className="link" to="/home" ><i className="fa-solid fa-house-chimney icon-nav"></i> Home</NavLink></li>
            <li><i className="fa-solid fa-heart icon-nav"></i>Favorite</li>
            <li><NavLink className="link" to="/creategames" ><i className="fa-solid fa-gamepad icon-nav"></i>Create Game</NavLink></li>
            <li><i className="fa-solid fa-heart icon-nav"/> Favorite</li>
            <h2>Suscription</h2>
            <li className="suscript"><div className="img-suscript"><img src="https://cache.desktopnexus.com/thumbseg/2625/2625537-bigthumbnail.jpg" alt="Henry Cavill" /></div> Henry Cavill</li>
            <li className="suscript"><div className="img-suscript"><img src="https://d2halst20r4hcy.cloudfront.net/48e/3e06a/af5d/4e15/a038/a31b0d4b01c0/normal/1854.jpg" alt="" /></div> Hikiraya</li>
            <li className="suscript"><div className="img-suscript"><img src="https://i.pinimg.com/736x/bb/7f/96/bb7f9655580798673472efd227226f4a.jpg" alt="Keanu Reeves" /></div> Keanu Reeves</li>
            <li className="suscript"><div className="img-suscript"><img src="https://lthumb.lisimg.com/060/21987060.jpg?width=320&sharpen=true" alt="Daniel Radcliffe" /></div> Daniel Radcliffe</li>
            <li className="suscript"><div className="img-suscript"><img src="http://scanday.ru/uploads/posts/2012-10/1349269522_03.10.jjovovich.jpg" alt="Milla Jovovich" /></div> Milla Jovovich</li>
          </ul>
        </NavContainer>
        <Configuracion>
            <div className="setting"><i className="fa-solid fa-gear ico-setting"></i>Configuration</div>
            <button className="btn-login"><i className="fa-solid fa-arrow-right-from-bracket icon-login"></i>Log out</button>
        </Configuracion>
      </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
