/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: " Ngành thực phẩm",
  description: `Ngành thực phẩm băng tải dùng trong ngành này phải đảm bảo vệ sinh oan toàn thực phẩm, công ty Thế Cao đã cung cấp cho thị trường loại băng PU, PVC có thể chịu dầu thực phẩm... đáp ứng nhu cầu đa dạng của ngành.`,
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
