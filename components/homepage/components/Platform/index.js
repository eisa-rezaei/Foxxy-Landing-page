import {
  StPlatformContainer,
  StPlatformTitle,
  StPlatformContant,
  StPlatformContantInfo,
  StPlatformFadeOne,
  StPlatformFadeTwo,
  StPlatformContactInfoBtn,
  StPlatformContantImage,
  StTinyStylingBoxes,
} from "./styles";
const Platform = () => {
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
          <StTinyStylingBoxes
            width="8px"
            height="8px"
            top="170px"
            right="100px"
            bgColor
            rotate
          />
          <StTinyStylingBoxes
            width="8px"
            height="8px"
            top="200px"
            left="60px"
            bgColor
            rotate
          />
          <StTinyStylingBoxes
            width="15px"
            height="15px"
            bottom="150px"
            left="260px"
            bgColor
            rotate
          />
          <StTinyStylingBoxes
            width="30px"
            height="30px"
            top="120px"
            right="200px"
            borderRadius="8px"
          />
          <StTinyStylingBoxes
            width="40px"
            height="40px"
            bottom="180px"
            left="80px"
            borderRadius="8px"
          />
        </StPlatformContantImage>
        <StPlatformContantInfo>
          <h4>Ready to got? Let&apos;s chat!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            sint.
          </p>
          <StPlatformContactInfoBtn>Learn more</StPlatformContactInfoBtn>
        </StPlatformContantInfo>
      </StPlatformContant>
    </StPlatformContainer>
  );
};

export default Platform;
