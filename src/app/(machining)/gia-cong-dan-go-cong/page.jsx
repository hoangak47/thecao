/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Gia công dán gờ cong",
  description: `Các chuyên gia của công ty “Dịch vụ băng tải” thực hiện đo đạc, sản xuất và lắp đặt băng tải quay.

Đai quay được sử dụng rộng rãi trong các ngành bánh kẹo, sữa, thịt, gốm sứ, chế biến gỗ, in ấn, hậu cần và sân bay. Công dụng phổ biến nhất của đai quay là thay đổi hướng dòng sản xuất của sản phẩm.`,
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
