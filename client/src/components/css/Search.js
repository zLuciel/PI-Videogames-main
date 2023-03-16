import styled from "styled-components";
export const ContainerSearch = styled.div`
  //width: max-content;
  z-index: 5;
  position: relative;
  .input-search {
    padding: 0 8px;
    width: 300px;
    height: 30px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(25px);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    input::placeholder {
      color: #d2d1d1;
    }
    //**Responsive */
    @media screen and (max-width: 1126px) {
      width: 300px;
    }
    @media screen and (max-width: 665px) {
      width: 250px;
    }
    @media screen and (max-width: 637px) {
      width: 200px;
    }
  }
  .input-search > button {
    height: 20px;
    width: 30px;
    border: none;
    background: none;
    color: greenyellow;
    .icon-search {
      width: 100%;
      height: 100%;
    }
  }
  .input-search > input {
    width: 100%;
    color: white;
    background: none;
    outline: none;
    border: none;
  }
  .search-view {
    margin-top: 10px;
    display: ${(props) => (props.mostrar ? "block" : "none")};
    padding: 10px 20px;
    overflow-y: auto;
    position: absolute;
    border: 1px solid #00000075;
    background: rgb(0 0 0 / 6%);
    backdrop-filter: blur(25px);
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    width: 100%;
    max-height: 170px;
    height: max-content;
    ::-webkit-scrollbar {
      border-radius: 10px;
      display: initial;
      width: 6px;
      height: 7px;
      background-color: black;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: greenyellow;
    }
  }
  /* @media screen and (max-width: 902px){
  display: none;
}*/
`;
