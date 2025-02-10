/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Ngành thủy sản",
  description: `Dựa trên nhiều năm kinh nghiệm trong việc sản xuất băng tải, thế cao đã hợp tác và phát triển nhiều loại sản phẩm băng tải phù hợp với nhu cầu cụ thể của ngành chế biến thịt và hải sản. Dù là để cắt thịt hay đóng gói cá, thế cao ưu tiên hàng đầu cho các yêu cầu vệ sinh của băng tải.`,
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
