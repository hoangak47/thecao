"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import nestle from "@/assets/images/home/Nestlé.svg.png";
import pepsi from "@/assets/images/home/Pepsi_logo.png";
import olam from "@/assets/images/home/olam-international.png";
import aceCook from "@/assets/images/home/Logo-AceCook-VN.png";
import jtExpress from "@/assets/images/home/Logo-JT-Express.png";
import gs from "@/assets/images/home/GS.png";
import kenda from "@/assets/images/home/Kenda_Logo.svg.png";

import ino from "@/assets/images/ino.png";
import allstart from "@/assets/images/allstart.jpg";
import kclearngen from "@/assets/images/kclearngen.jpg";
import foshan from "@/assets/images/foshan.jpg";
import flexco from "@/assets/images/flexco.png";
import hongbelt from "@/assets/images/hong'sbelt.webp";
import reoclearn from "@/assets/images/reoclean.png";
import hairise from "@/assets/images/hairise.jpg";
import shiseido from "@/assets/images/shiseido.jpg";

import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

const customer = [
  {
    img: nestle,
    title: "Nestlé",
  },
  {
    img: pepsi,
    title: "Pepsi",
  },
  {
    img: olam,
    title: "Olam",
  },
  {
    img: aceCook,
    title: "AceCook",
  },
  {
    img: jtExpress,
    title: "JT Express",
  },
  {
    img: gs,
    title: "GS",
  },
  {
    img: kenda,
    title: "Kenda",
  },
];

const partners = [
  {
    img: ino,
    title: "INO",
  },
  {
    img: allstart,
    title: "Allstart",
  },
  {
    img: kclearngen,
    title: "Kclearngen",
  },
  {
    img: foshan,
    title: "Foshan",
  },
  {
    img: flexco,
    title: "Flexco",
  },
  {
    img: hongbelt,
    title: "Hong's belt",
  },
  {
    img: reoclearn,
    title: "Reoclean",
  },
  {
    img: hairise,
    title: "Hairise",
  },
  {
    img: shiseido,
    title: "Shiseido",
  },
];

export default function Partner({
  partner = false,
  children,
  className = "",
  slidesPerView = null,
  data = null,
}) {
  const width = useWindowSize().width;

  return (
    <section className={`flex flex-col md:h-[200px] h-[100px] ${className}`}>
      {children}
      <Swiper
        slidesPerView={
          slidesPerView
            ? slidesPerView
            : width > 768
              ? 5
              : width > 640
                ? 4
                : width > 480
                  ? 3
                  : width > 320
                    ? 2
                    : 6
        }
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {data
          ? data.map((partner, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={partner.img}
                  alt={partner.title}
                  className="object-contain aspect-square w-full"
                />
              </SwiperSlide>
            ))
          : partner === false
            ? customer.map((partner, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={partner.img}
                    alt={partner.title}
                    className="!object-contain aspect-square w-full"
                  />
                </SwiperSlide>
              ))
            : partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={partner.img}
                    alt={partner.title}
                    className="!object-contain aspect-square w-full"
                  />
                </SwiperSlide>
              ))}
      </Swiper>
    </section>
  );
}
