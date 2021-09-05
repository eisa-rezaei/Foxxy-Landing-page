import styled from "styled-components";

export const StCreativeContainer = styled.section`
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
export const StCreativeTitle = styled.article`
  width: 100%;
  height: 40%;
  text-align: center;
  margin-top: 50px;
  & h3 {
    padding: 0 25vw;
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
      padding: 0 10vw;
      font-size: 2.5rem;
    }
  }
`;
export const StCreativeContant = styled.article`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 50px;
  padding: 0 10vw;
  margin-top: 60px;
  overflow: hidden;
  @media (max-width: 700px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0;
    margin-top: 20px;
  }
`;
export const StCreativeContantInfo = styled.div`
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
    padding-right: 0px;
  }
`;
export const StCreativeContantInfoBtn = styled.button`
  width: 170px;
  padding: 10px;
  margin-top: 25px;
  font-weight: 500;
  color: #d386d8;
  background-color: #fff;
  border: 2px solid #d386d8;
  border-radius: 15px;
  transition: all 0.2s linear;
  :hover {
    cursor: pointer;
    box-shadow: 0 5px 15px #d386d875;
  }
`;

export const StCreativeContantLinks = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  position: relative;
  @media (max-width: 700px) {
    min-height: 500px;
  }
`;
export const StCreativeContantSingleLink = styled.li`
  width: 80%;
  height: 80px;
  padding: 0 30px;
  background-color: #ffffff99;
  z-index: 2;
  color: #aaa;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s linear;
  & img {
    width: 50px;
    margin-right: 30px;
    background-color: inherit;
  }
  :hover {
    color: #3d3045;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const StCreativeContantImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -150px;
  @media (max-width: 700px) {
    margin-right: 0px;
  }
`;
export const StCreativeContantImageSwiper = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
  background-color: #ffffff99;
  border-radius: 20px;
  z-index: 2;
  .swiper-slide {
    height: 100%;
    & img {
      width: 200px;
      height: 300px;
      object-fit: cover;
    }
  }
`;

export const StCreativeFadeOne = styled.div`
  width: 600px;
  height: 100%;
  top: 0px;
  right: -150px;
  position: absolute;
  background: rgb(232, 200, 241);
  background: radial-gradient(
    circle,
    rgba(232, 200, 241, 1) 5%,
    rgba(249, 229, 231, 0) 70%
  );
`;
export const StCreativeFadeTwo = styled.div`
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
  z-index: ${(props) => props.zIndex};
  position: absolute;
`;
