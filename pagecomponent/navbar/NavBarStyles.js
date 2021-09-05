import styled from "styled-components";

export const StyledPageNavBar = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3vh 8vw;
  text-transform: capitalize;
  @media (max-width: 700px) {
    padding: 1.5vh 4vw;
  }
`;
export const StyledPageNavBarTitle = styled.button`
  width: 10vw;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s linear;
  :hover {
    cursor: pointer;
    text-shadow: 0 0px 3px #d386d8;
  }
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;
export const StyledPageNavBarLinks = styled.div`
  width: 45vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & button {
    padding: 5px 0;
    text-align: center;
    transition: all 0.2s linear;
    :hover {
      cursor: pointer;
      text-shadow: 0 0px 3px #d386d8;
    }
    :last-child {
      width: 20%;
      color: #fff;
      border-radius: 15px;
      background-color: #3d3045;
      :hover {
        cursor: pointer;
        background-color: #5d5065;
      }
    }
  }
  @media (max-width: 700px) {
    width: 65vw;
    & button {
      font-size: 0.6rem;
    }
  }
`;
