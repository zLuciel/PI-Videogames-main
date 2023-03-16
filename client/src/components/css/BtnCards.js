import styled from "styled-components";

export const BtnPersonajePage = styled.button`
border: none;
background: none;
cursor: pointer;
span {
    letter-spacing: 4px;
    font-size: 14px;
    padding: ${props => props.direction === "back" ? "0px 0px 7px 15px" : "0px 15px 7px 0px"};
    text-transform: uppercase;
  }
 svg {
    fill: white;
    transform: ${props => props.direction === "back" ? "translateX(-98px) rotateY(180deg)" : "translateX(-8px)" };// cambiar
    transition: all 0.3s ease;
  }
  :hover svg {
    //transform: translateX(-108px)  rotateY(180deg); // cambiar
    transform: ${props => props.direction === "back" ? "translateX(-108px)  rotateY(180deg)" : "translateX(0)"};
  }
  .hover-underline-animation {
    position: relative;
    color: greenyellow;
    padding-bottom: 20px;
  }
  
  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    right: 0;
    background-color: #ffffff;
    transform-origin: ${props => props.direction === "back" ? "bottom right" : "bottom left "}; //cambiarbottom right
    transition: transform 0.25s ease-out;
  }
  :hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: ${props => props.direction === "back" ? "bottom right" : "bottom left"}; // cambiar
  }
`