/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành thể thao",
  description: `Hưởng lợi từ nhiều năm kinh nghiệm, thế cao có chuyên môn sản xuất dây đai máy chạy bộ đáng tin cậy tuân thủ các tiêu chuẩn chất lượng quốc tế. Dây đai máy chạy bộ thé cao đảm bảo hiệu suất ổn định trong một thời gian dài, khiến việc chạy bộ trở thành niềm vui thực sự.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành thể thao
          </h1>
          <p className="text-justify mt-5">
            Hưởng lợi từ nhiều năm kinh nghiệm, thế cao có chuyên môn sản xuất
            dây đai máy chạy bộ đáng tin cậy tuân thủ các tiêu chuẩn chất lượng
            quốc tế. Dây đai máy chạy bộ thé cao đảm bảo hiệu suất ổn định trong
            một thời gian dài, khiến việc chạy bộ trở thành niềm vui thực sự.
          </p>
          <p className="text-justify mt-5">
            Đai máy chạy bộ thế cao có nhiều độ dày, độ bền và kết cấu vỏ ngoài
            khác nhau. Đai được thiết kế để đảm bảo tuổi thọ lâu dài cho máy
            chạy bộ tại nhà và phòng tập.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
