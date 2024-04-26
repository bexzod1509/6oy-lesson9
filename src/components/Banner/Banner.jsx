import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bg from "../../assets/bg3.jpg";
import bg2 from "../../assets/bg5.jpg";
import bg3 from "../../assets/bg4.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={bg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bg3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text container">
        <p>
          <b>100%</b>
          Organic Vegetables
        </p>
        <h1>The best way to stuff your wallet.</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          reiciendis beatae consequuntur.
        </h2>
      </div>
    </>
  );
}
