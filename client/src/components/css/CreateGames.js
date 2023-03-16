import styled from "styled-components";
export const CreateContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  .bg {
    z-index: -1;
    position: absolute;
    width: 100%;
    background: url(${(props) => props.fondo}) center center/cover no-repeat;
    opacity: 0.15;
    filter: blur(17.5px);
    min-height: 100vh;
  }
`;
export const ContainerForm = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .CardForm {
    position: relative;
    width: 1056px;
    height: 632px;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: -4px 4px 4px #d8f90f, inset -8px 8px 25px rgba(0, 0, 0, 0.76);
    backdrop-filter: blur(12.5px);
    border-radius: 20px;
    display: grid;
    grid-template-columns: 530px 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    .flex-center{
    }
  }
`;

export const ContainerLoli = styled.div`
      position: relative;
      overflow: hidden;
      height: 632px;
      width: 100%;
      .loli{
        top: -100px;
        left: -20px;
        position: absolute;
        width: 100%;
        height: 800px;
        img{
        filter: drop-shadow(-4px 4px 15px #000000) saturate(1.5);
          object-fit: cover;
          object-position: center;
        width: 100%;
        height: 100%;
      }
      }
      .absolute-text{
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 10px;
        width: 400px;
        padding: 20px;
        background: rgba(1, 1, 1, 0.56);
        //backdrop-filter: blur(25px);
        position: absolute;
        z-index: 1;
        button{
          border: 1px solid black;
          cursor: pointer;
          background: var(--color-primario);
          padding: 5px 10px;
          border-radius: 20px;
          margin-right: 5px;
        }
      }
    
`