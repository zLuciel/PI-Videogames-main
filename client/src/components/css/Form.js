import styled from "styled-components";
export const ContainerForm = styled.div`
  width: 374px;
  height: 507px;
  .title-form {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    p {
      display: inline-block;
      color: var(--color-primario);
    }
  }
  form{
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
  form > .btnSumit {
    align-self: center;
    background: var(--color-primario);
    width: 111px;
    height: 31px;
    backdrop-filter: blur(12.5px);
    border-radius: 25px;
  }
`;
