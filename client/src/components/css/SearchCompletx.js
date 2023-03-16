import styled from "styled-components";

export const SearchComplextFlex = styled.div`
    padding: 0 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 45;
     //**RESPONSIVE */
 @media screen and (max-width: 1070px){
    padding: 0 50px;
}
  @media screen and (max-width: 620px){
    padding: 0 20px;
  }
    .user-main{
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 18px;
      h3{
         p{
           display: inline;
           margin-right: 5px;
           color: var(--color-primario);
         }  
      }
      .foto-user{
        border: 1px solid black;
        overflow: hidden;
        border-radius: 50px;
        width: 45px;
        height: 45px;
        img{
          object-fit: cover;
          object-position: center;
          width: 100%;
          height: 100%;
        }
      }
    }

`