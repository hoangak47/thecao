/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành gỗ",
  description: `Cho tất cả các ngành công nghiệp như Ngành sản xuất giày, Ngành gỗ, Ngành điện tử, Ngành in ấn - in hoa, Ngành bao bì, Ngành thực phẩm, Ngành thuốc lá, Ngành đá Granit, Ngành hàng không, Ngành thể thao... Với giá ưu đãi nhất hiện nay.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành gỗ
          </h1>
          <p className="text-justify mt-5">
            Cho tất cả các ngành công nghiệp như Ngành sản xuất giày, Ngành gỗ,
            Ngành điện tử, Ngành in ấn - in hoa, Ngành bao bì, Ngành thực phẩm,
            Ngành thuốc lá, Ngành đá Granit, Ngành hàng không, Ngành thể thao...
            Với giá ưu đãi nhất hiện nay.
          </p>

          <p className="text-justify mt-5">
            - Ngành Gỗ băng tải thường dùng trong máy chà nhám, bề mặt băng tải
            phải có độ ma sát cao chủ yếu dùng loại PVC pha cao su, hoặc PVC bề
            mặt gai.
          </p>
          <p className="text-justify mt-5">
            - <strong>Băng Tải Gai</strong> là một trong những băng tải ngành
            gỗ, được ứng dụng rất nhiều trong sản xuất đặc biệt là trong các khu
            công nghiệp, các cụm công nghiệp, các làng nghề. Với khả năng thích
            nghi đa dạng Băng Tải PVC xanh nhám Gai chủ yếu được sử dụng tải vật
            liệu trong môi trường sạch sẽ.
          </p>
          <p className="text-justify mt-5">
            - Ngoài ra còn được ứng dụng trong ngành chế biên thực phẩm ,sản
            xuất bánh kẹo, chế biến gỗ ,nông ,lâm sản…Nghành lắp ráp linh kiện
            điện tử, nghành thuốc lá , chè, cà phê,nghành may mặc v.v…
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
