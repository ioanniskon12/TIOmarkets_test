import React from "react";
import list from "./list.js";
import {
  Currency,
  Div,
  Image,
  ViewMore,
  LeftCol,
  MainElement,
  Price,
  RightElement,
  Runner,
  DivViewMore,
} from "./Header.style.jsx";

export default function Header() {
  return (
    <Div>
      {list.map((listItem) => (
        <MainElement key={listItem.instrument}>
          <LeftCol>
            <Currency>{listItem.instrument}</Currency>
            <Runner>{listItem.sentiment}</Runner>
          </LeftCol>
          <RightElement>
            <Price>{listItem.price}</Price>
            <Image src={listItem.image} alt="graph-img" />
          </RightElement>
        </MainElement>
      ))}
      <DivViewMore>
        <ViewMore>
          VIEW <br />
          MORE >
        </ViewMore>
      </DivViewMore>
    </Div>
  );
}
