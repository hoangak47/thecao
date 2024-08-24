/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành công nghiệp nặng",
  description: `Băng tải cao su sở hữu cấu tạo gồm hai phần: Lớp bố vải chịu kéo bên trong và lớp cao su chịu mài mòn phủ bên ngoài. Lớp bố vải được khiến từ những sợi polyeste tổng hợp (hay còn gọi là bố EP) sở hữu độ bền cao, là phần chịu kéo chính của băng vận tải. Lớp cao su phủ ngoài sở hữu tác dụng bảo vệ lớp bố vải bên trong tránh tác động của môi trường bên ngoài và các nhân tố cơ học xung quanh gây hư hỏng.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành công nghiệp nặng
          </h1>
          <p className="text-justify mt-5">
            Băng tải cao su sở hữu cấu tạo gồm hai phần: Lớp bố vải chịu kéo bên
            trong và lớp cao su chịu mài mòn phủ bên ngoài. Lớp bố vải được
            khiến từ những sợi polyeste tổng hợp (hay còn gọi là bố EP) sở hữu
            độ bền cao, là phần chịu kéo chính của băng vận tải. Lớp cao su phủ
            ngoài sở hữu tác dụng bảo vệ lớp bố vải bên trong tránh tác động của
            môi trường bên ngoài và các nhân tố cơ học xung quanh gây hư hỏng.
            Băng tải cao su mang 2 lớp cao su: mặt trên và mặt dưới, lớp cao su
            mặt trên là mặt tiếp xúc mang vật liệu mang độ dày chao đảo (3 ÷
            6)mm dày hơn lớp cao su mặt dưới là phần ko xúc tiếp sở hữu nguyên
            liệu mang độ dày nghiêng ngả (1.15 ÷ 3)Mm.
          </p>
          <p className="text-justify mt-5">
            Đối tượng khách hàng: Ngành CN nặng như - Nhà máy xi măng - Nhà máy
            nhiệt điện - Nhà máy phân bón - Nhà máy thép - Khai thác mỏ, khoáng
            sản - Khai thác than - Cảng tàu
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
