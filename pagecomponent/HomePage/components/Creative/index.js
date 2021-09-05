import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {
  StCreativeContainer,
  StCreativeTitle,
  StCreativeContant,
  StCreativeContantLinks,
  StCreativeContantInfo,
  StCreativeContantSingleLink,
  StCreativeFadeOne,
  StCreativeFadeTwo,
  StCreativeContantInfoBtn,
  StCreativeContantImage,
  StCreativeContantImageSwiper,
  StTinyStylingBoxes,
} from "./styles";

const LIST_ITEMS = [
  "the objective of the campaign",
  "hom much to spend",
  "who to target",
  "the type of advertising you'll see",
];

const Creative = () => {
  SwiperCore.use(Pagination);
  return (
    <StCreativeContainer>
      <StCreativeTitle>
        <span>CREATIVE</span>
        <h3>Know your ads inside and out-perform</h3>
      </StCreativeTitle>
      <StCreativeContant>
        <StCreativeContantLinks>
          {LIST_ITEMS.map((item, index) => (
            <StCreativeContantSingleLink key={index}>
              <img src="./images/pencile.png" alt="pencile" />
              {item}
            </StCreativeContantSingleLink>
          ))}
          <StCreativeFadeOne />
          <StCreativeFadeTwo />
          <StTinyStylingBoxes
            width="8px"
            height="8px"
            top="170px"
            right="100px"
            bgColor
            rotate
          />
          <StTinyStylingBoxes
            width="15px"
            height="15px"
            top="200px"
            left="0px"
            bgColor
            rotate
            borderRadius="5px"
          />
          <StTinyStylingBoxes
            width="15px"
            height="15px"
            bottom="150px"
            left="260px"
            bgColor
            rotate
          />
          <StTinyStylingBoxes
            width="30px"
            height="30px"
            top="120px"
            right="200px"
            borderRadius="8px"
          />
          <StTinyStylingBoxes
            width="40px"
            height="40px"
            bottom="15px"
            left="40px"
            borderRadius="8px"
            bgColor
            zIndex="2"
          />
          <StTinyStylingBoxes
            width="40px"
            height="40px"
            top="85px"
            right="40px"
            borderRadius="8px"
            bgColor
          />
        </StCreativeContantLinks>
        <StCreativeContantInfo>
          <h4>Every secound counts, so Every details matters</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dolores fuga iure quaerat molestiae nostrum explicabo nam dolorum
            cum? Dolorem mollitia tenetur expedita cumque aliquid accusamus
            commodi, esse eaque blanditiis! cumque aliquid accusamus
          </p>
          <StCreativeContantInfoBtn>Learn more</StCreativeContantInfoBtn>
        </StCreativeContantInfo>
      </StCreativeContant>
      <StCreativeContant>
        <StCreativeContantInfo>
          <h4>
            All the cearive you
            <br /> need, when you need it
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            cumque aliquid totam qui similique esse mollitia atque, voluptatum
            eaque modi aspernatur voluptatem deserunt tempora, et recusandae
            hic. Aspernatur, est sit perferendis iusto exercitationem rem quasi?
          </p>
          <StCreativeContantInfoBtn>Learn more</StCreativeContantInfoBtn>
        </StCreativeContantInfo>
        <StCreativeContantImage>
          <StCreativeContantImageSwiper>
            <Swiper slidesPerView="1" centeredSlides grabCursor pagination loop>
              <SwiperSlide>
                <img src="./images/pic-1.png" alt="user" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/image-1.png" alt="user" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/pic-1.png" alt="user" />
              </SwiperSlide>
              <span className="pagenation"></span>
            </Swiper>
          </StCreativeContantImageSwiper>
          <StTinyStylingBoxes
            width="8px"
            height="8px"
            top="170px"
            right="100px"
            bgColor
            rotate
          />
          <StTinyStylingBoxes
            width="15px"
            height="15px"
            top="200px"
            left="0px"
            bgColor
            rotate
            borderRadius="5px"
          />
          <StTinyStylingBoxes
            width="15px"
            height="15px"
            bottom="150px"
            left="260px"
            bgColor
            rotate
          />
          <StTinyStylingBoxes
            width="30px"
            height="30px"
            top="120px"
            right="200px"
            borderRadius="8px"
          />
          <StTinyStylingBoxes
            width="40px"
            height="40px"
            bottom="15px"
            left="40px"
            borderRadius="8px"
            bgColor
            zIndex="2"
          />
          <StTinyStylingBoxes
            width="40px"
            height="40px"
            top="85px"
            right="40px"
            borderRadius="8px"
            bgColor
          />
          <StCreativeFadeOne />
          <StCreativeFadeTwo />
        </StCreativeContantImage>
      </StCreativeContant>
    </StCreativeContainer>
  );
};

export default Creative;
