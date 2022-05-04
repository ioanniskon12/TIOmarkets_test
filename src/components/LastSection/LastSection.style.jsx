import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Div2 = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const Number = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  margin-right: 20px;
  font-size: 100px;
  align-self: flex-start;
  font-weight: 300;
  color: #1259ff;
  @media (max-width: 950px) {
    font-size: 60px;
    align-self: center;
  }
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 28px;
  text-align: left;
  @media (max-width: 950px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const LoremText1 = styled.p`
  font-size: 17px;
  max-width: 398px;
  @media (max-width: 950px) {
    max-width: 290px;
    font-size: 15px;
  }
`;

export const Icons = styled.p`
  @media (max-width: 950px) {
    display: none;
  }
`;

export const IMG = styled.img`
  width: 377px;
  height: 500px;
  margin-top: -40px;
  @media (max-width: 950px) {
    margin-top: 0;
    width: 270px;
    height: 380px;
  }
`;
