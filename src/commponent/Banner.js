import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';


export default () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]} effect="fade"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide style={{ background: "red", height: "500px" }}>Slide 1</SwiperSlide>
      <SwiperSlide style={{ background: "gray", height: "500px" }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ background: "blue", height: "500px" }}>Slide 3</SwiperSlide>
      <SwiperSlide style={{ background: "yellow", height: "500px" }}>Slide 4</SwiperSlide>

    </Swiper>
  );
};


