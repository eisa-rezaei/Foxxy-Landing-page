import styled from "styled-components";

export const StLinkBarContainer = styled.div`
  width: 100vw;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  font-size: 1.2rem;
  & span {
    transition: all 0.2s linear;
    :hover {
      cursor: pointer;
      text-shadow: 0 0px 5px #d386d8;
    }
  }
  & span:last-child {
    font-family: "Satisfy", cursive;
    font-size: 2rem;
  }
`;
