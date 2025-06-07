/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Ngành thuốc lá",
  description: `Quá trình chế biến thuốc lá đòi hỏi nhiều loại băng tải và dây đai chế biến cho các công đoạn sản xuất khác nhau. Chúng tôi cung cấp dây đai polyolefin và polyester không chứa halogen, chất tạo bọt và không chứa nitơ. Chúng cũng là loại thực phẩm (FDA) để đáp ứng tiêu chuẩn an toàn ngày càng tăng.`,
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
