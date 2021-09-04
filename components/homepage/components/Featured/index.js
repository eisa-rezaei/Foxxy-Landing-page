import {
  StFeaturedContainer,
  StFeaturedTitle,
  StFeaturedContant,
} from "./styles";

const index = () => {
  return (
    <StFeaturedContainer>
      <StFeaturedTitle>
        <span>FEATURED</span>
        <h3>This is the new creative progcess</h3>
      </StFeaturedTitle>
      <StFeaturedContant>
        <span>
          <img src="./images/book.png" alt="book" />
          <p>
            learn about <br /> your creative
          </p>
        </span>
        <span>
          <img src="./images/paint.png" alt="book" />
          <p>
            learn about <br /> your creative
          </p>
        </span>
        <span>
          <img src="./images/computer.png" alt="book" />
          <p>Constantly avdance your marketing</p>
        </span>
      </StFeaturedContant>
      <p>
        form boring content compign to unexpected one there is us beack your
        email
      </p>
    </StFeaturedContainer>
  );
};

export default index;
