import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Div2 = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LeftSection = styled.div`
  margin-top: 90px;
  @media (max-width: 1200px) {
    margin-top: 0;
  }
`;

export const H1 = styled.h1`
  font-size: 70px;
  font-weight: bolder;
  text-align: left;
  @media (max-width: 920px) {
    text-align: center;
    font-size: 50px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const Button = styled.button`
  font-size: 28px;
  width: 218px;
  height: 64px;
  color: white;
  background-color: #1259ff;
  border: none;
  border-radius: 18px;
  font-weight: 600;
  margin-top: -20px;

  @media (max-width: 920px) {
    font-size: 20px;
    width: 160px;
    height: 50px;
  }
`;

export const IMG = styled.img`
  height: 730px;
  width: 670px;

  @media (max-width: 920px) {
    height: 500px;
    width: 430px;
  }
  @media (max-width: 420px) {
    height: 370px;
    width: 340px;
  }
`;
