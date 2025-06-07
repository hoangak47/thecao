/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Gia công băng tải tại nhà máy",
  description: `Công ty “Dịch vụ băng tải” có sẵn thiết bị đặc biệt để dán kín các cạnh của băng.
Thông thường băng ở hai bên có các cạnh bị cắt không được bảo vệ khỏi tác động bên ngoài. Công nghệ này cho phép bạn "bịt kín" hoàn toàn các cạnh của băng ở cả hai mặt bằng dải nhựa nhiệt dẻo.`,
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
