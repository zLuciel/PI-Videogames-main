import styled from "styled-components";

export const CardsContainer = styled.div`
  position: relative;
  width: 359px;
  height: 214px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  backdrop-filter: blur(25px);
   //**RESPONSIVE */
   @media screen and (max-width: 1825px){
    width: 429px;
   }
   @media screen and (max-width: 1690px){
    width: 399px;
   }
   @media screen and (max-width: 1578px){
    width: 358px;
   }
   @media screen and (max-width: 1447px){
    width: 359px;
  }
  @media screen and (max-width: 1435px){
   width: 400px;
   }
   //**tarjeta vertical */
   @media screen and (max-width: 1300px){
     width: 280px;
     height: 400px;
  }
  @media screen and (max-width: 1220px){
     width: 280px;
  }
  @media screen and (max-width: 870px){
    width: 300px;
   }
   @media screen and (max-width: 893px){
    width: 270px;
   }
   @media screen and (max-width: 664px){
    width: 280px;
   }

   @media screen and (max-width: 575px){
    width: 245px;
   }
   @media screen and (max-width: 500px){
    width: 230px;
    height: 350px;
  }
  @media screen and (max-width: 481px){
    width: 205px;
  }
  @media screen and (max-width: 414px){
    width: 250px;
  }
//1290
  ::before {
    z-index: -1;
    left: 20px;
    top: 15px;
    filter: blur(25px);
    border-radius: 150px;
    content: "";
    background: #ccff00;
    position: absolute;
    width: 164px;
    height: 164px;
    //**RESPONSIVE VERTICAÑ */
    @media screen and (max-width: 1300px){
      filter: blur(28px);
      left: 45px;
      top: 20px;
      width: 175px;
      height: 175px;
}
@media screen and (max-width: 500px){
      width: 145px;
      height: 145px;
  }
  }
  .center-div-card-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    column-gap: 20px;
      //**RESPONSIVE */
   @media screen and (max-width: 1825px){
    justify-content: space-evenly;
   }
   @media screen and (max-width: 1300px){
     flex-direction: column;
    }
  }
`;
export const ImgCard = styled.div`
  position: relative;
  overflow: hidden;
  width: 141px;
  height: 180px;
  border-radius: 20px;
  background: #161616 url("https://blog.teamtreehouse.com/wp-content/uploads/2015/05/loading.gif") 50% no-repeat;
  @media screen and (max-width: 1300px){
     width: 210px;
     border-radius: 10px;
  }
  @media screen and (max-width: 575px){
    width: 200px;
  }
  @media screen and (max-width: 500px){
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 414px){
    width: 180px;
  }
  img {
    object-position: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const InfoCard = styled.div`
display: flex;
flex-direction: column;
row-gap: 5px;
//**Responsive vertical */
@media screen and (max-width: 1300px){
     justify-content: center;
     align-items: center;
}
@media screen and (max-width: 500px){
    font-size: 0.9rem;
}
h3{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 163px;
  height: 20px;
  @media screen and (max-width: 1300px){
     width: max-content;
     max-width: 163px;
}
}
.genres-card{
  width: max-content;
  max-width: 163px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fecha-card{
    p:first-of-type{
        color: var(--color-primario);
    }
    p{
        display: inline-block;
    }
}
.rating{
   color: rgba(255, 255, 255, 0.62);
}
.icon-star{
    font-size: 1.2rem;
    display: flex;
    gap: 10px;
    li{
      font-size: 0.8rem;
        list-style: none;
        color: var(--color-primario);
    }
  //**responsive */
    @media screen and (max-width: 500px){
    font-size: 0.9rem;
  }
}
  .btn-content {
    display: flex;
    align-items: center;
    button {
      font-size: 0.9rem;
      border: none;
      width: 115px;
      height: 28px;
      background: #d8f90f;
      box-shadow: inset -4px 4px 2px rgba(0, 0, 0, 0.23);
      border-radius: 50px;
      background: var(--color-primario);
    }
  }
`;
