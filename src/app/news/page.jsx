/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";

import Partner from "@/components/partners";

export const metadata = {
  title: "Tin tức",
  description: `Công ty “Dịch vụ băng tải” có sẵn thiết bị đặc biệt để dán kín các cạnh của băng.
Thông thường băng ở hai bên có các cạnh bị cắt không được bảo vệ khỏi tác động bên ngoài. Công nghệ này cho phép bạn "bịt kín" hoàn toàn các cạnh của băng ở cả hai mặt bằng dải nhựa nhiệt dẻo.`,
};

import Getdata from "./getdata";

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
          Tin tức
        </h1>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <Getdata />
      </Body_>
      <Partner partner={true} />
    </Layout>
  );
}
