import styled from "styled-components";

export const StEarlyAccsess = styled.div`
  width: 95vw;
  height: 75vh;
  margin: 20px auto;
  border-radius: 30px;
  background: #fbe1e3;
  display: grid;
  grid-template-columns: 4fr 5fr;
  align-items: center;
  overflow: hidden;
  position: relative;
  background: rgb(245, 181, 231);
  background: linear-gradient(188deg, rgba(245, 181, 231, 1) 38%, #f4d3d8 94%);
`;
export const StEarlyAccsessBgFadeImgPart = styled.div`
  width: 900px;
  height: 800px;
  top: 100px;
  left: -240px;
  position: absolute;
  background: rgb(173, 133, 222);
  background: radial-gradient(
    circle,
    rgba(173, 133, 222, 1) 0%,
    rgba(173, 133, 222, 1) 20%,
    rgba(251, 225, 227, 0) 68%
  );
`;
export const StEarlyAccsessBgFadeCtPart = styled.div`
  width: 900px;
  height: 800px;
  top: -300px;
  right: -130px;
  position: absolute;
  background: rgb(173, 133, 222);
  background: radial-gradient(
    circle,
    rgba(173, 133, 222, 0.6) 0%,
    rgba(173, 133, 222, 0.6) 30%,
    rgba(251, 225, 227, 0) 68%
  );
`;

export const StEarlyAccsessImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 4;
  & img {
    width: 450px;
    height: 400px;
  }
`;
export const StEarlyAccsessContant = styled.div`
  width: 100%;
  height: 100%;
  padding: 120px 80px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: baseline;
  color: #fff;
  z-index: 3;
  position: relative;
`;
export const StEarlyAccsessContantTitle = styled.p`
  font-size: 2.7rem;
  font-weight: 600;
  line-height: 3.5rem;
  margin: 5px 0;
`;
export const StEarlyAccsessContantBtn = styled.button`
  width: 250px;
  height: 70px;
  color: #3d3045;
  background-color: #fff;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 25px;
  transition: all 0.25s linear;
  :hover {
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;
