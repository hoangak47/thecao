/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Gia công đục lỗ",
  description: `Đai đục lỗ được sử dụng trong các nhà máy phun bi và phun cát, trong sàng để khử nước các vật liệu rời, để phân loại và tách vật liệu theo phân số, và cũng được sử dụng trên băng tải có cố định chân không vật liệu trên băng tải.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Gia công đục lỗ
          </h1>
          <p className="text-justify mt-5">
            Đai đục lỗ được sử dụng trong các nhà máy phun bi và phun cát, trong
            sàng để khử nước các vật liệu rời, để phân loại và tách vật liệu
            theo phân số, và cũng được sử dụng trên băng tải có cố định chân
            không vật liệu trên băng tải.
          </p>
          <p className="text-justify mt-5">
            Nếu bạn quan tâm đến ứng dụng của sản phẩm “băng tải có lỗ thủng”,
            hãy xem ảnh trên trang web của chúng tôi.
          </p>
          <p className="text-justify mt-5">
            Các chuyên gia tư vấn của chúng tôi sẽ giúp bạn có sự lựa chọn đúng
            đắn.
          </p>
          <p className="text-justify mt-5">
            Sản phẩm mua từ chúng tôi sẽ là một giao dịch mua thực sự có lợi
            nhuận.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
