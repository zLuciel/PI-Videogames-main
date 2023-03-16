import styled from "styled-components";

export const DetailsContainer = styled.div`
position: relative;
width: 100%;
min-height: 100vh;
display: flex;
.bg{
z-index: -1;
position: absolute;
width: 100%;
background: url(${props => props.img}) center center/cover no-repeat;
opacity: 0.1;
filter: blur(12.5px);
min-height: 100vh;
}
.img-details{
    position: relative;
    width: 578px;
    min-width: 578px;
    height: 100vh;
    img{
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 99%;
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
  .play-ico{
    position: absolute;
    font-size: 2rem;
    color: var(--color-primario);
    z-index: 4;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
`
export const DetailsInfo = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
column-gap: 120px;
.center-details{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 80%;
}
h1{
    color: var(--color-primario);
    font-size: 4rem;
}
h3{
    color: var(--color-primario);
}
.description{
    max-height: 151px;
    font-size: 1.2rem;
    overflow: auto;
}
`