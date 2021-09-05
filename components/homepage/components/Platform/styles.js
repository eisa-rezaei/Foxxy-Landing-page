import styled from "styled-components";

export const StPlatformContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 0.8rem;
  }
`;
export const StPlatformTitle = styled.article`
  width: 100%;
  height: 40%;
  text-align: center;
  margin-top: 50px;
  & h3 {
    padding: 0 10vw;
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    margin-top: 20px;
    color: #3d3045;
    line-height: 4rem;
  }
  & span {
    color: #d386d8;
    font-size: 1rem;
    font-weight: 500;
  }
  @media (max-width: 700px) {
    & h3 {
      padding: 0 5vw;
      font-size: 2rem;
    }
  }
`;
export const StPlatformContant = styled.article`
  width: 100%;
  height: 500px;
  padding: 0 10vw;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 50px;
  @media (max-width: 700px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0;
    padding: 0;
  }
`;
export const StPlatformContantInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 50px;
  z-index: 1;
  & h4 {
    color: #3d3045;
    font-size: 2rem;
    font-weight: 600;
    margin: 10px 0;
  }
  & p {
    color: #867f87;
  }
  @media (max-width: 700px) {
    padding: 0 10vw;
  }
`;
export const StPlatformContantImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  & img {
    width: 400px;
    height: 300px;
    z-index: 3;
  }
  @media (max-width: 700px) {
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StPlatformFadeOne = styled.div`
  width: 600px;
  height: 100%;
  top: 0px;
  right: 0px;
  position: absolute;
  background: rgb(232, 200, 241);
  background: radial-gradient(
    circle,
    rgba(232, 200, 241, 1) 5%,
    rgba(249, 229, 231, 0) 70%
  );
`;
export const StPlatformFadeTwo = styled.div`
  width: 600px;
  height: 100%;
  bottom: -100px;
  left: -90px;
  position: absolute;
  background: rgb(249, 229, 231);
  background: radial-gradient(
    circle,
    rgba(249, 229, 231, 1) 5%,
    rgba(249, 229, 231, 0) 70%
  );
`;

export const StPlatformContactInfoBtn = styled.button`
  width: 170px;
  padding: 10px;
  margin-top: 25px;
  font-weight: 500;
  color: #d386d8;
  background-color: inherit;
  border: 2px solid #d386d8;
  border-radius: 15px;
  transition: all 0.2s linear;
  :hover {
    cursor: pointer;
    box-shadow: 0 5px 15px #d386d875;
  }
`;
export const StTinyStylingBoxes = styled.span`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  ${(props) =>
    props.bgColor
      ? ` background: rgb(155, 100, 246);
  background: linear-gradient(
    -45deg,
    rgba(155, 100, 246, 1) 0%,
    rgba(227, 102, 224, 1) 100%
  );`
      : `background-color : #fff;`}
  ${(props) => props.rotate && `transform: rotate(45deg);`}
  border-radius: ${(props) => props.borderRadius};
  z-index: 2;
  position: absolute;
`;
