import React from "react";
import {
  H2,
  Section,
  Items,
  DIV1,
  DIV2,
  DropwdownBullet,
  InnerDiv,
  DrowpdownP1,
  DrowpdownP2,
  DrowpdownP3,
  InnerItem,
  DropdownIMG,
  InnerSecDiv,
} from "./DropDown.style";

const listItems = [
  "Market Overview",
  "Real-Time News",
  "Forecasts",
  "Markets Outlook",
];

const SecondList = [
  {
    image: "/Images/image1.png",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ",
  },
  {
    image: "/Images/image2.png",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ",
  },
  {
    image: "/Images/image3.png",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ",
  },
];

export default function DropDown() {
  return (
    <Section>
      <InnerSecDiv>
        <DIV1>
          {listItems.map((item, idx) => (
            <InnerDiv key={idx}>
              <DropwdownBullet></DropwdownBullet>
              <DrowpdownP1>{item}</DrowpdownP1>
            </InnerDiv>
          ))}
        </DIV1>
        <DIV2>
          <div>
            <H2>Market news headlines</H2>
          </div>
          <Items>
            {SecondList.map((items, idx) => (
              <InnerItem key={idx}>
                <DropdownIMG src={items.image} alt="list-img" />
                <DrowpdownP2>{items.title}</DrowpdownP2>
                <DrowpdownP3>{items.text}</DrowpdownP3>
              </InnerItem>
            ))}
          </Items>
        </DIV2>
      </InnerSecDiv>
    </Section>
  );
}
