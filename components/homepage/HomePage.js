import EarlyAccsess from "./components/EarlyAccsess";
import LinkBar from "./components/LinkBar";
import Featured from "./components/Featured";
import Creative from "./components/Creative";
import Platform from "./components/Platform";

import { StyledHomePageContainer } from "./HomePageStyles";

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      <EarlyAccsess />
      <LinkBar />
      <Featured />
      <Creative />
      <Platform />
    </StyledHomePageContainer>
  );
};

export default HomePage;
