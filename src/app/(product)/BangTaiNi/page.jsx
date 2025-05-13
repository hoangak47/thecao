/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Băng tải Nỉ",
  description:
    "Băng tải Nỉ là loại băng tải có độ bền cao, khả năng chịu nhiệt tốt và có thể hoạt động trong môi trường khắc nghiệt. Chúng được sử dụng rộng rãi trong ngành công nghiệp nặng.",
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <ContenPage />

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetData />
      </Body_>
    </Layout>
  );
}
