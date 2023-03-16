import styled from "styled-components";
export const ContainerSlider = styled.div`
width: 100%;
height: 522px;
overflow: hidden;
position: relative;
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
`
export const ContainerSlideShow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
`
export const Slide = styled.div`
min-width: 100%;
height: 100%;
overflow: hidden;
transition: 3s ease all;
//z-index: 10;
position: relative;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

` 
export const BtnSlider = styled.div`
position: absolute;
bottom: 10%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 45;
ul{
    display: flex;
    column-gap: 30px;
    .active{
        color: greenyellow;
    }
    li{
        font-size: 1.5rem;
        cursor: pointer;
        width: 10px;
        height: 10px;
        :hover{
            color: greenyellow;
        }
    }
}
`