import {
  StEarlyAccsess,
  StEarlyAccsessBgFadeCtPart,
  StEarlyAccsessBgFadeImgPart,
  StEarlyAccsessContant,
  StEarlyAccsessContantBtn,
  StEarlyAccsessContantTitle,
  StEarlyAccsessImg,
} from "./styles";

const index = () => {
  return (
    <StEarlyAccsess>
      <StEarlyAccsessBgFadeImgPart />
      <StEarlyAccsessImg>
        <img src="./images/books.png" alt="books" />
      </StEarlyAccsessImg>
      <StEarlyAccsessContant>
        <StEarlyAccsessContantTitle>
          We love helping you bring ideas to life
        </StEarlyAccsessContantTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur odio dolor adipisicing elit.
          Tempore animi laborum odio dolor repellat ipsum dolor sit amet id!
        </p>
        <StEarlyAccsessContantBtn>Get early access</StEarlyAccsessContantBtn>
      </StEarlyAccsessContant>
      <StEarlyAccsessBgFadeCtPart />
    </StEarlyAccsess>
  );
};

export default index;
