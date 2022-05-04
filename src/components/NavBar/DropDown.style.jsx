import styled from "styled-components";

export const Section = styled.section`
  background-color: #e8e8e8;

  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`;

export const InnerSecDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Left section
export const DIV1 = styled.div`
  white-space: nowrap;
`;

export const InnerDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const DropwdownBullet = styled.div`
  background-color: #ff7a04;
  width: 13px;
  height: 13px;
  border-radius: 50%;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DrowpdownP1 = styled.p`
  margin-left: 15px;
`;

// Right Section
export const DIV2 = styled.div`
  margin-left: 20px;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const H2 = styled.p`
  font-size: 18px;
  text-align: left;
  text-transform: uppercase;
`;

export const Items = styled.div`
  display: flex;
  width: 202px;

  & > * {
    margin-left: 10px;
    margin-right: 10px;
  }
  & :first-child {
    margin-left: 0px;
  }
  & :last-child {
    margin-right: 0px;
  }
`;

export const InnerItem = styled.div`
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
`;

export const DrowpdownP2 = styled.p`
  font-size: 18px;
  text-align: left;
  font-weight: 600;
`;

export const DrowpdownP3 = styled.p`
  font-size: 14px;
`;

export const DropdownIMG = styled.img`
  width: 202px;
  height: 114px;
`;
