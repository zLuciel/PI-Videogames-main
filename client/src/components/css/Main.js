import styled from "styled-components";

export const MainContainer = styled.main`
position: relative;
 width: 100%;
 height: 522px;
 .play-main{
  cursor: pointer;
  font-size: 4rem;
  color: var(--color-primario);
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    //**Responsive */
    @media screen and (max-width: 1070px){
    display : none;
}
   }
 .cont-slider{
    overflow: hidden;
    //z-index: 2;
    top: 0;
    position: absolute;
    width: 100%;
    .img-slider{
        position: relative;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 522px;
    }
  ::before {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(rgba(11, 11, 11, 0), rgba(11, 11, 11, 1));
  z-index: 2;
}
    ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(3, 3, 3, 0.94) 19.54%, rgba(34, 34, 34, 0) 96.75%);
    z-index: 1;
  }
  
 }
`
export const InfoPortada = styled.div`
z-index: 4;
position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(0%, -50%);
//border: 1px solid greenyellow;
width: max-content;
display: flex;
flex-direction: column;
row-gap: 20px;
     //**RESPONSIVE */
@media screen and (max-width: 1070px){
    left: 50%;
    transform: translate(-50%, -50%);
}
h1{
font-family: 'Be Vietnam';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 53px;
     //**RESPONSIVE */
@media screen and (max-width: 1070px){
    font-size: 3rem;    
    line-height: 53px;
}
@media screen and (max-width: 800px){
    font-size: 2rem;    
    line-height: 43px;
}
p{
  display: inline-block;
  color: var(--color-primario);
}
}
  .ctn-btn-info{
    display: flex;
    column-gap: 25px;
    //**RESPONSIVE */
@media screen and (max-width: 1070px){
    justify-content: center;
    align-items: center;
}
    .btn-ver,.btn-ver2{
        cursor: pointer;
        font-family: 'Be Vietnam Pro';
        width: 167px;
        height: 36px;
        border-radius: 10px;
        font-size: 1.3rem;
        //**RESPONSIVE */
   @media screen and (max-width: 800px){
     width: 150px;
     font-size: 1.2rem;
}
    }
    .btn-ver{
        background: var(--color-primario);
        border: none;
    }
    .btn-ver2{
        color: white;
        background: none;
        border: 1px solid  white;
    }
  }
`
export const RedeSocial = styled.div`
  position: absolute;
  bottom: 38px;
  right: 100px;
  z-index: 50;
  //**RESPONSIVE */
@media screen and (max-width: 1070px){
    right: 7%;
}
@media screen and (max-width: 518px){
    right: 4%;
    bottom:43px;
}
 ul{
  font-size: 2rem;
  display: flex;
  list-style: none;
  column-gap: 20px;
    //**RESPONSIVE */
@media screen and (max-width: 518px){
  font-size: 1.8rem;
  column-gap: 15px;
}
 }
 ul > li{
  color: #DBDBDB;
  a:hover{
    transform: scale(1.1);
    cursor: pointer;
    color: var(--color-primario);
  }
 }
`