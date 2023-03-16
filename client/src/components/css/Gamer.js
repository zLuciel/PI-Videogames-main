import styled from "styled-components";

export const GamersContainer = styled.div`
  position: relative;
  transform: translateY(-5%);//5
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 40;
  //**RESPONSIVE */
  @media screen and (max-width: 1825px){
    transform: translateY(-3%);
  }
  @media screen and (max-width: 1220px){
    transform: translateY(0%);
  }
  .flex{
    width: 1500px;//1549 width: 1111px;
    //**RESPONSIVE */
    @media screen and (max-width: 1825px){
      width: 1344px;
     //width: 1300px;
     //width: 1111px;
    }
    @media screen and (max-width: 1690px){
      width: 90%;
    }
    @media screen and (max-width: 1660px){//1578
      width: 1236px;
    }
    @media screen and (max-width: 1578px){
    width: 95%; //1445
   }
   @media screen and (max-width: 1220px){
    //border: 1px solid red;
    width: 870px;
   }
   @media screen and (max-width: 876px){
    width: 100%;
   }
   @media screen and (max-width: 865px){
    width: 600px;
   }
   @media screen and (max-width: 626px){
    width: 100%;
   }
  }
  .grid-gamers-card {
    margin-top: 25px;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fill, minmax(359px, 1fr));
    row-gap: 20px;
    column-gap: 10px;
    margin-bottom:10px;
    //**RESPONSIVE */
    @media screen and (max-width: 1825px){
      place-items: start;
    }
    //**CARD VERTICAL RESPONSIVE */
    @media screen and (max-width: 1300px){
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  @media screen and (max-width: 1220px){
      place-items: center;
  }
  @media screen and (max-width: 575px){
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    column-gap: 5px;
   }
   @media screen and (max-width: 500px){
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }
  @media screen and (max-width: 481px){
    grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  }
  }
`;
