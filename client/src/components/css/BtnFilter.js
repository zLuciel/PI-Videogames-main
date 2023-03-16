import styled from "styled-components";

export const BtnSyled = styled.select`
  font-family: "Biet vietnam";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 25px;
  border: none;
  cursor: pointer;
  color: var(--color-segundario);
  height: 33px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12.5px);
  border-radius: 5px;
  max-width: 120px;
  padding: 0 10px;
  outline: none;
  option {
    max-width: 120px;
    background: #0b0b0b;
    border-radius: none;
    outline: none;
  }
`;


export const SortContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 50;
  .xd{
    position: absolute;
    top: 40px;
    width: 100px;
  }
`;

export const SortSelect = styled.select`
   font-family: "Biet vietnam";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 25px;
  border: none;
  cursor: pointer;
  color: var(--color-segundario);
  height: 33px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12.5px);
  border-radius: 5px;
  max-width: 120px;
  padding: 0 10px;
  outline: none;
  option {
    max-width: 120px;
    background: #0b0b0b;
    border-radius: none;
    outline: none;
  }
`;

