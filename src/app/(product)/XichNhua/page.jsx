/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Xich nhựa",
  description: `
            Giúp tăng năng lực sản xuất, giảm chi phí và giảm thiểu thời gian ngừng hoạt
            động trong các nhà máy.`,
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
