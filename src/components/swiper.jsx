/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

export default function SwiperCustom() {
  return (
    <section className="w-full h-[550px] p-3">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper select-none"
      >
        <SwiperSlide>
          <Image
            src={require("@/assets/images/home/slide (1).jpg")}
            alt="Picture of the author"
            className="w-full h-full object-cover"
            width={500}
            height={500}
            quality={100}
          />
          {/* <img
            src="https://i.imgur.com/KBu4qIy.jpeg"
            alt="Picture of the author"
            className="w-full h-full object-cover"
          /> */}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="md:text-9xl font-bold text-[#da251c] mb-4 text-5xl">
              Thế Cao
            </h1>
            <h2 className="md:text-5xl font-bold text-[#1B0E69] mt-8 text-3xl">
              Truyền tải sự tín nhiệm
            </h2>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image
            src={require("@/assets/images/home/slide (2).jpg")}
            alt="Picture of the author"
            className="w-full h-full object-cover"
            width={500}
            height={500}
            quality={100}
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={require("@/assets/images/home/slide (3).jpg")}
            alt="Picture of the author"
            className="w-full h-full object-cover"
            width={500}
            height={500}
            quality={100}
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={require("@/assets/images/home/slide (4).jpg")}
            alt="Picture of the author"
            className="w-full h-full object-cover"
            width={500}
            height={500}
            quality={100}
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={require("@/assets/images/home/slide (5).jpg")}
            alt="Picture of the author"
            className="w-full h-full object-cover"
            width={500}
            height={500}
            quality={100}
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={require("@/assets/images/home/slide (6).jpg")}
            alt="Picture of the author"
            className="w-full h-full object-cover"
            width={500}
            height={500}
            quality={100}
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={require("@/assets/images/home/slide (7).jpg")}
            alt="Picture of the author"
            className="w-full h-full object-cover"
            width={500}
            height={500}
            quality={100}
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={require("@/assets/images/home/slide (8).jpg")}
            alt="Picture of the author"
            className="w-full h-full object-cover"
            width={500}
            height={500}
            quality={100}
            unoptimized
          />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}
