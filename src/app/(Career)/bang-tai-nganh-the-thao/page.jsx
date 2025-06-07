/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Ngành thể thao",
  description: `Hưởng lợi từ nhiều năm kinh nghiệm, thế cao có chuyên môn sản xuất dây đai máy chạy bộ đáng tin cậy tuân thủ các tiêu chuẩn chất lượng quốc tế. Dây đai máy chạy bộ thé cao đảm bảo hiệu suất ổn định trong một thời gian dài, khiến việc chạy bộ trở thành niềm vui thực sự.`,
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
