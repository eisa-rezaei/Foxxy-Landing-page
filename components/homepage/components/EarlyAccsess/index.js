import {
  StEarlyAccsess,
  StEarlyAccsessBgFadeCtPart,
  StEarlyAccsessBgFadeImgPart,
  StEarlyAccsessContant,
  StEarlyAccsessContactBtn,
  StEarlyAccsessContantTitle,
  StEarlyAccsessImg,
} from "./styles";

const EarlyAccsess = () => {
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
        <StEarlyAccsessContactBtn>Get early access</StEarlyAccsessContactBtn>
      </StEarlyAccsessContant>
      <StEarlyAccsessBgFadeCtPart />
    </StEarlyAccsess>
  );
};

export default EarlyAccsess;
