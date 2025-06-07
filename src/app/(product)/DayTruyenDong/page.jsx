/* eslint-disable @next/next/no-img-element */

import ContenPage from "@/components/contentPage/contentPage";
import { GetDataSpecical } from "@/components/getDataProduct/getDataSpecical";
import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

export const metadata = {
  title: " Dây Truyền động",
  description: `
   Dây curoa bản dẹt thường là chạy tốc độ cao, lớp giữa của dây là lớp
            nilon, bên ngoài được bọc bằng lớp cao su, da, vải sợi,...
  `,
};
export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <ContenPage />
        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataSpecical />
      </Body_>
    </Layout>
  );
}
