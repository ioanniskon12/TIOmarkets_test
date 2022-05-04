import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 19%) 5%;
  justify-content: space-between;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const MainElement = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  border-right: 1px solid #707070;

  @media (max-width: 1200px) {
    border-right: 2px solid #707070;
    border-bottom: 2px solid #707070;
  }
  > & :nth-child(1) {
    border-right: none;
  }
`;

export const LeftCol = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-top: 22px;
`;

export const Currency = styled.div`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

export const Runner = styled.div`
  font-size: 17px;
  font-weight: normal;
  color: #0062ff;
  margin-top: 15px;
  @media (max-width: 1400px) {
    font-size: 15px;
  }
`;

export const RightElement = styled.div`
  text-align: right;
  margin-top: 22px;
  margin-right: 15px;
`;

export const Price = styled.div`
  font-size: 20px;
  color: #747474;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  margin-top: 10px;
  height: 37px;
  width: 170px;
  @media (max-width: 1400px) {
    height: 30px;
    width: 130px;
  }
`;

// Last element (View more)

export const DivViewMore = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    border-bottom: 2px solid #707070;
    /* border-right: 2px solid #707070; */
  }
`;

export const ViewMore = styled.p`
  font-size: 17px;
  color: #0062ff;
  margin: auto;
  @media (max-width: 1500px) {
    font-size: 14px;
  }
`;
