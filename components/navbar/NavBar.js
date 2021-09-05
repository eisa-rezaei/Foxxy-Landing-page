import { useRouter } from "next/dist/client/router";
import Link from "next/link";
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
        <button onClick={navLinkHandler("forproperties")}>
          for properteis
        </button>
        <button onClick={navLinkHandler("forrenters")}> for renters</button>
        <button onClick={navLinkHandler("pricing")}> pricing </button>
        <button onClick={navLinkHandler("login")}> login</button>
      </StyledPageNavBarLinks>
    </StyledPageNavBar>
  );
};

export default NavBar;
