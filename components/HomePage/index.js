import EarlyAccsessPart from "./components/EarlyAccsess";
import LinkBarPart from "./components/LinkBar";
import FeaturedPart from "./components/Featured";
import CreativePart from "./components/Creative";
import PlatformPart from "./components/Platform";

import { StyledHomePageContainer } from "./styles";

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      <EarlyAccsessPart />
      <LinkBarPart />
      <FeaturedPart />
      <CreativePart />
      <PlatformPart />
    </StyledHomePageContainer>
  );
};

export default HomePage;
