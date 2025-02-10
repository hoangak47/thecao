/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Ngành công nghiệp nặng",
  description: `Băng tải cao su sở hữu cấu tạo gồm hai phần: Lớp bố vải chịu kéo bên trong và lớp cao su chịu mài mòn phủ bên ngoài. Lớp bố vải được khiến từ những sợi polyeste tổng hợp (hay còn gọi là bố EP) sở hữu độ bền cao, là phần chịu kéo chính của băng vận tải. Lớp cao su phủ ngoài sở hữu tác dụng bảo vệ lớp bố vải bên trong tránh tác động của môi trường bên ngoài và các nhân tố cơ học xung quanh gây hư hỏng.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <ContenPage />

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
