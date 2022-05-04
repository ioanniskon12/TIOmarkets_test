import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  position: relative;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;

  /* Navbar Stulying */

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FirstIte = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const IMG1 = styled.img`
  width: 228px;
  height: 40px;
  margin-right: 10px;
  @media (max-width: 769px) {
    margin: 10px auto;
    width: 178px;
    height: 30px;
  }
`;

export const Element1 = styled.div`
  font-size: 18px;
  color: #000000;
  margin-right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: #e8e8e8;
    font-weight: 600;
  }
  &:hover > span {
    transform: rotate(180deg);
  }
  @media (max-width: 769px) {
    margin: 10px auto;
    width: 178px;
    height: 30px;
  }
`;

export const Element2 = styled.div`
  font-size: 18px;
  color: #000000;
`;

export const SecondIte = styled.div`
  display: flex;
  @media (max-width: 769px) {
    margin: 10px auto;
  }
`;

export const IMG2 = styled.img`
  width: 34px;
  height: 22px;
`;

export const Button = styled.button`
  width: 250px;
  height: 64px;
  text-align: center;
  color: white;
  font-size: 28px;
  font-weight: 600;
  background-color: #ff7a04;
  border: none;
  border-radius: 18px;
  margin-left: 20px;
  @media (max-width: 1200px) {
    font-size: 24px;
    width: 160px;
    height: 52px;
  }
`;
