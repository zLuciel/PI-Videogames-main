import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-self: flex-start;
  position: sticky;
  top: 0;
  background: #111111;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.83);
  min-width: 280px;
  height: 100vh;
  overflow-y: auto;
  //**RESPONSIVE */
  @media screen and (max-width: 1447px){
    min-width: 270px;
  }
  @media screen and (max-width: 1435px){
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
   display: ${props => props.visible ? "block": "none"};
   position: fixed;
   z-index: 800;
  }
  ::-webkit-scrollbar {
    border-radius: 10px;
  display: initial;
  width: 6px;
  height: 7px;
  background-color: black;
}
::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: var(--color-primario);
}
  .hide {
    padding: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
  }
  .flex-header {
    height: max-content;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
  .logo-header {
    align-self: center;
    h1 {
      font-family: "Jacques Francois";
      font-size: 3rem;
      font-family: "Jacques Francois";
      font-style: normal;
      font-weight: 400;
      color: var(--color-primario);
    }
    i {
      color: var(--color-segundario);
    }
  }
`;
export const NavContainer = styled.div`
  height: max-content;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }
  ul > li {
    font-family: normal;
    font-style: normal;
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 1.2rem;
    column-gap: 10px;
    //**este hover va navlink por ahora esta aqui */
    :hover{
      color: var(--color-primario);
      cursor: pointer;
    }
  }
  .active{
    color: var(--color-primario);
  }
  .link{
    text-decoration: none;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .icon-nav {
    font-size: 1.5rem;
  }
  h2 {
    color: var(--color-primario);
  }
  .suscript {
    font-family: normal;
    font-style: normal;
    font-size: 1.2rem;
  }
  .img-suscript {
    overflow: hidden;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
`;

export const Configuracion = styled.div`
  border-top: 2px solid rgba(255, 255, 255, 0.09);
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  .setting {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    font-size: 1.2rem;
    .ico-setting {
      font-size: 1.5rem;
      color: var(--color-primario);
    }
  }
  .btn-login {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    align-self: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid #d8f90f;
    backdrop-filter: blur(2px);
    border-radius: 15px;
    color: var(--color-segundario);
    width: 100px;
    height: 30px;
    .icon-login{
      color: var(--color-primario);
      font-size: 1rem;
    }
  }
`;
