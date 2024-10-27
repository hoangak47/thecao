/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import Partner from "@/components/partners";

export const metadata = {
  title: "Tin tức",
  description: `Công ty “Dịch vụ băng tải” có sẵn thiết bị đặc biệt để dán kín các cạnh của băng.
Thông thường băng ở hai bên có các cạnh bị cắt không được bảo vệ khỏi tác động bên ngoài. Công nghệ này cho phép bạn "bịt kín" hoàn toàn các cạnh của băng ở cả hai mặt bằng dải nhựa nhiệt dẻo.`,
};

import dynamic from "next/dynamic";
import Getdata from "./getdata";

const CustomEditor = dynamic(() => import("@/components/custom-editor"), {
  ssr: false,
});

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
          Tin tức
        </h1>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        {/* <CustomEditor /> */}
        <Getdata />
        <Partner />
      </Body>
    </Layout>
  );
}
