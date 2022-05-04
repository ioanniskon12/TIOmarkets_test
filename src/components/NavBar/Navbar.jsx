import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDown from "./DropDown";

import {
  Button,
  Div2,
  Element1,
  Element2,
  FirstIte,
  IMG1,
  IMG2,
  NavBar,
  SecondIte,
} from "./Navbar.style";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <NavBar>
      <Div2>
        <FirstIte>
          <IMG1 src="/Images/TIOmarkets.png" alt="tiomarkets-logo" />
          <Element1
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {showDropdown && <DropDown />}
            <p>Market News</p>
            <span>
              <MdKeyboardArrowDown size={20} />
            </span>
          </Element1>
          <Element2>
            Market Strategies <MdKeyboardArrowDown size={20} />
          </Element2>
        </FirstIte>
        <SecondIte>
          <p>
            <IMG2 src="/Images/UK.png" />
            <MdKeyboardArrowDown size={20} />
          </p>
          <Button>Register</Button>
        </SecondIte>
      </Div2>
    </NavBar>
  );
}
