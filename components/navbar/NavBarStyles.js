import styled from "styled-components";

export const StyledPageNavBar = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3vh 8vw;
  text-transform: capitalize;
`;
export const StyledPageNavBarTitle = styled.span`
  width: 10vw;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #3d3045;
`;
export const StyledPageNavBarLinks = styled.span`
  width: 45vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.8rem;
  & a {
    padding: 5px 0;
    text-align: center;
    :last-child {
      width: 4.8rem;
      color: #fff;
      border-radius: 15px;
      background-color: #3d3045;
    }
  }
`;
