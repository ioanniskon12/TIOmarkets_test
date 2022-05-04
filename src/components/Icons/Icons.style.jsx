import styled from "styled-components";

export const DIV = styled.div`
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
`;

export const Div2 = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const Img = styled.img`
  height: 109px;
  width: 109px;
  margin: 0 auto;
  @media (max-width: 950px) {
    height: 80px;
    width: 80px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: #5c5c5c;
  @media (max-width: 1200px) {
    font-size: 15px;
    text-align: center;
  }
`;
