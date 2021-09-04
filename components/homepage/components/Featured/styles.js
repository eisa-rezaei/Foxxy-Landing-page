import styled from "styled-components";

export const StFeaturedContainer = styled.div`
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
export const StFeaturedTitle = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  padding: 5% 0;
  & h3 {
    padding: 0 30vw;
    font-size: 3rem;
    font-weight: 600;
    margin: 20px auto;
    color: #3d3045;
    line-height: 4rem;
  }
  & span {
    color: #d386d8;
    font-size: 1rem;
    font-weight: 500;
  }
`;
export const StFeaturedContant = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  margin-bottom: 30px;

  & span {
    width: 30%;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: -10px 15px 25px rgba(100, 100, 100, 0.05);
    transition: all 0.2s linear;
    :hover {
      box-shadow: -10px 15px 25px rgba(100, 100, 100, 0.2);
      cursor: pointer;
    }

    & img {
      width: 250px;
      height: 250px;
      object-fit: contain;
    }
    & p {
      max-width: 220px;
      font-weight: 600;
      color: #3d3045;
      text-align: center;
      font-size: 1rem;
    }
  }
`;
