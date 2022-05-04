import React from "react";
import { DIV, Div2, IconDiv, Img, Text } from "./Icons.style";

export default function IconsBar() {
  return (
    <DIV>
      <Div2>
        <IconDiv>
          <Img src="/Images/dollars.png" alt="dollars" />
          <Text>0 Commissions & Raw Spreads</Text>
        </IconDiv>
        <IconDiv>
          <Img src="/Images/ebook.png" alt="ebook" />
          <Text>Market Analysis & FX Webinars</Text>
        </IconDiv>
        <IconDiv>
          <Img src="/Images/time.png" alt="time" />
          <Text>Instant Trading Execution</Text>
        </IconDiv>
        <IconDiv>
          <Img src="/Images/customer.png" alt="customer" />
          <Text>Live Support In Your Language</Text>
        </IconDiv>
      </Div2>
    </DIV>
  );
}
