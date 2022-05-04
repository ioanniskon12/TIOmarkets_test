import React from "react";
import {
  H1,
  IMG,
  Section,
  Button,
  LeftSection,
  Div2,
} from "./MainSection.style";

export default function MainSection() {
  return (
    <Section>
      <Div2>
        <LeftSection>
          <H1>
            Trade Forex & <br />
            Stocks online
          </H1>
          <Button>Register</Button>
        </LeftSection>
        <div>
          <IMG src="/Images/dol-phone.jpg" />
        </div>
      </Div2>
    </Section>
  );
}
