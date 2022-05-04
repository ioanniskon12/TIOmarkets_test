import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import {
  H2,
  Icons,
  LoremText1,
  Section,
  IMG,
  Number,
  Div2,
} from "./LastSection.style";

export default function LastSection() {
  return (
    <Section>
      <Div2>
        <Icons>
          <IoIosArrowBack size={65} color="#1259ff" />
        </Icons>
        <Number>2</Number>
        <div>
          <H2>Verify you account</H2>
          <LoremText1>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua.
          </LoremText1>
          <LoremText1>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </LoremText1>
          <LoremText1 style={{ color: "#989898" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </LoremText1>
        </div>
        <div>
          <IMG src="/Images/phone2.png" alt="verify account img" />
        </div>
        <Icons>
          <IoIosArrowForward size={65} color="#1259ff" />
        </Icons>
      </Div2>
    </Section>
  );
}
