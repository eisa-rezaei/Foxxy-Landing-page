import {
  StPlatformContainer,
  StPlatformTitle,
  StPlatformContant,
  StPlatformContantInfo,
  StPlatformFadeOne,
  StPlatformFadeTwo,
  StPlatformContantInfoBtn,
  StPlatformContantImage,
} from "./styles";
const index = () => {
  return (
    <StPlatformContainer>
      <StPlatformTitle>
        <span>PLATFORM</span>
        <h3>
          the only certifed partner of all <br /> social and digital platforms.
        </h3>
      </StPlatformTitle>
      <StPlatformContant>
        <StPlatformContantImage>
          <img src="./images/boxes.png" alt="image" />
          <StPlatformFadeOne />
          <StPlatformFadeTwo />
        </StPlatformContantImage>
        <StPlatformContantInfo>
          <h4>Ready to got? Let&apos;s chat!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            sint.
          </p>
          <StPlatformContantInfoBtn>Learn more</StPlatformContantInfoBtn>
        </StPlatformContantInfo>
      </StPlatformContant>
    </StPlatformContainer>
  );
};

export default index;
