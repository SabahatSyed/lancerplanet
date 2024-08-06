"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

// import required modules
import { EffectCards, Autoplay } from "swiper";
import Slide from "./Slide";

export default function Slider() {
  return (
    <div className="lg:w-fit w-[90%]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
