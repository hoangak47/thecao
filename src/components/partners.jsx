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
import Image from "next/image";
import useWidth from "@/hooks/useWidth";

const partners = [
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

export default function Partner() {
  const width = useWidth();

  return (
    <section className="flex flex-col mt-20 md:h-[200px] h-[100px]">
      <Swiper
        slidesPerView={
          width > 768
            ? 6
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
        {partners.map((partner, index) => (
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
