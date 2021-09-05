import LinkBarPart from "./components/LinkBar/index";
import FeaturedPart from "./components/Featured/index";
import CreativePart from "./components/Creative/index";
import PlatformPart from "./components/Platform/index";

import { StyledHomePageContainer } from "./styles";

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      <LinkBarPart />
      <FeaturedPart />
      <CreativePart />
      <PlatformPart />
    </StyledHomePageContainer>
  );
};

export default HomePage;
