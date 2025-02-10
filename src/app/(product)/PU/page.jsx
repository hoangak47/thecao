/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import ContenPage from "@/components/contentPage/contentPage";

export const metadata = {
  title: "Băng tải PU",
  description: `Băng tải Poly
            Urethane (PU) an toàn 100% và không độc hại khi tiếp xúc với thực
            phẩm có khả năng kháng cơ học và hóa học vượt trội hơn nhiều so với
            băng tải PVC. Băng tải PUđảm bảo vận chuyển thực phẩm và các vật
            liệu nhẹ khác như linh kiện điện tử, v.v. không độc hại. Được sản
            xuất bằng màu thực phẩm màu trắng cấp thực phẩm, màu xanh lá cây và
            đen với 1 lớp, 2 lớp, 3 lớp có độ dày từ 0.4 mm đến 3 mm để sử dụng
            trong chuyển tải nhẹ công nghiệp vật liệu và thay thế các tiêu chuẩn
            chất lượng FDA.`,
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
