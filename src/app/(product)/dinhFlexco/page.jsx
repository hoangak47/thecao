/* eslint-disable @next/next/no-img-element */

import ContenPage from "@/components/contentPage/contentPage";
import { GetDataSpecical } from "@/components/getDataProduct/getDataSpecical";
import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

export const metadata = {
  title: "Nẹp FLexco",
  description: `
   Nẹp nối băng tải thương hiệu FLEXCO đến từ Mỹ là một trong những phương pháp tối ưu trong việc kết nối 2 đầu băng tải và được áp dụng trong nhiều ngành công nghiệp sản xuất khác nhau như: nông nghiệp, xử lí bưu kiện, sản xuất gỗ, thực phẩm ,…
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
