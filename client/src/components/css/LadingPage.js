import styled from "styled-components";

export const ContainerLading = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .fondo {
    opacity: 0.6;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.Paisaje}) center center/cover no-repeat;
  }
  .title-lading {
    opacity: 0.7; //0.6
    color: #0d0d0d; //white
    white-space: nowrap;
    position: absolute;
    font-family: "Be Vietnam";
    font-weight: 800;
    font-size: 25rem;
    //text-shadow: -1px 0 #d8f90f, 1px 0 #d8f90f, 0 -1px #d8f90f, 0 1px #d8f90f;
    //probadno
    background-image: url(${(props) => props.Texto});
    background-image: url(https://i.pinimg.com/originals/17/de/2f/17de2fe0215e45888983463bb464fee5.png);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    //**RESPONSIVE */
    @media screen and (max-width: 1590px) {
      font-size: 20rem;
    }
    @media screen and (max-width: 1448px) {
      font-size: 18rem;
    }
    @media screen and (max-width: 1142px) {
      font-size: 15rem;
    }
    @media screen and (max-width: 741px) {
      font-size: 10rem;
    }
  }
  .maga {
    //box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    z-index: 45;
    position: absolute;
    img {
      filter: drop-shadow(-8px 8px 20px #000000) brightness(80%);
      width: 100%;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: scale(1.05);
      }
    }
    //**RESPONSIVE WITH*/
    @media screen and (max-width: 1008px) {
      width: 800px;
      height: 800px;
    }
  }
  .play {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    width: max-content;
    height: max-content;
    bottom: 10%;
    left: 14%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 50;
     //**RESPONSIVE */
     @media screen and (max-width: 1004px) {
      left: 20%;
    }
    @media screen and (max-width: 726px) {
      left: 25%;
    }
    @media screen and (max-width: 742px) {
      left: 55%;
      bottom: 10%;
      transform: translate(-50%,-50%);
    }
    .icon-play {
      cursor: pointer;
      font-size: 5rem;
      color: var(--color-primario);
      transition: transform 400ms ease-in-out;
    //*Responsive*/
    @media screen and (max-width: 586px) {
      font-size: 4rem;
    }
      :hover {
        transform: scale(1.1);
      }
    }
    div {
      height: 0;
      width: 150px;
      border: 1px dashed white;
    }
  }
  .home {
    cursor: pointer;
    position: absolute;
    z-index: 80;
    width: 258px;
    height: 61px;
    left: 45%;
    top: 70%;
    color: white;
    font-size: 2.5rem;
    background: rgba(0, 0, 0, 0.51);
    border: 2px solid #d8f90f;
    border-radius: 6px;
    transition: transform 400ms ease-in-out;
    //585
    //**RESPONSIVE */
    @media screen and (max-width: 1215px) {
      left: 40%;
      bottom: 0%;
    }
    @media screen and (max-width: 778px) {
      left: 35%;
    }
    @media screen and (max-width: 585px) {
      width: 200px;
      height: 50px;
      font-size: 2rem;
    }
    @media screen and (max-width: 460px) {
      width: 170px;
      height: 50px;
      font-size: 1.8rem;
    }
    :hover {
      transform: scale(0.8);
    }
  }
`;

export const Circulo = styled.div`
  backdrop-filter: blur(12.5px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  border: 4px solid;
  border-color: black greenyellow;
  border-radius: 500px;
  animation: spin 25s linear infinite;

  //**RESPONSIVE WITH*/
  @media screen and (max-width: 829px) {
    width: 700px;
    height: 700px;
  }
  @media screen and (max-width: 725px) {
    width: 600px;
    height: 600px;
  }
  @media screen and (max-width: 619px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 532px) {
    display: none;
  }
  ::before {
    content: "";
    background: black;
    opacity: 0.6;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 500px;
    z-index: -1;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .circuloInterno {
    width: 652px;
    height: 652px;
    border: 3px solid black;
    border-radius: 500px;
    //**RESPONSIVE */
    /*@media screen and (max-height: 800px) {
    width: 600PX;
    height: 600px;
  }*/
    //**RESPONSIVE WITH*/
    @media screen and (max-width: 1008px) {
      width: 600px;
      height: 600px;
    }
    @media screen and (max-width: 725px) {
      width: 500px;
      height: 500px;
    }
    @media screen and (max-width: 619px) {
      width: 400px;
      height: 400px;
    }
  }
`;
