import { useRouter } from "next/router";

import {
  StyledPageNavBar,
  StyledPageNavBarLinks,
  StyledPageNavBarTitle,
} from "./NavBarStyles";

const NavBar = () => {
  const router = useRouter();
  const navLinkHandler = (page) => () => {
    router.push(`/?page=${page}`);
  };
  return (
    <StyledPageNavBar>
      <StyledPageNavBarTitle onClick={navLinkHandler("home")}>
        Foxxy
      </StyledPageNavBarTitle>

      <StyledPageNavBarLinks>
        <span onClick={navLinkHandler("forproperties")}>for properteis</span>
        <span onClick={navLinkHandler("forrenters")}>for renters</span>
        <span onClick={navLinkHandler("pricing")}>pricing</span>
        <span onClick={navLinkHandler("login")}>login</span>
      </StyledPageNavBarLinks>
    </StyledPageNavBar>
  );
};

export default NavBar;
