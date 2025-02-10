/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Ngành nhôm",
  description: `Đun nhôm là một kỹ thuật được sử dụng để biến đổi hợp kim nhôm thành các vật thể có mặt cắt ngang rõ ràng cho nhiều mục đích sử dụng. Hợp kim được làm nóng lên trong máy ép đun và ép đun để trở thành các cấu hình. `,
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
