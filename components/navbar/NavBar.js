import Link from "next/link";
import {
  StyledPageNavBar,
  StyledPageNavBarLinks,
  StyledPageNavBarTitle,
} from "./NavBarStyles";

const NavBar = () => {
  return (
    <StyledPageNavBar>
      <StyledPageNavBarTitle>
        <Link href="/"> Foxxy</Link>
      </StyledPageNavBarTitle>
      <StyledPageNavBarLinks>
        <Link href="/for-properteis"> for properteis</Link>
        <Link href="/for-renters"> for renters</Link>
        <Link href="/pricing"> pricing </Link>
        <Link href="/login"> login</Link>
      </StyledPageNavBarLinks>
    </StyledPageNavBar>
  );
};

export default NavBar;
