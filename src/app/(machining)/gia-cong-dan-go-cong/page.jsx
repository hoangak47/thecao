/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Gia công dán gờ cong",
  description: `Các chuyên gia của công ty “Dịch vụ băng tải” thực hiện đo đạc, sản xuất và lắp đặt băng tải quay.

Đai quay được sử dụng rộng rãi trong các ngành bánh kẹo, sữa, thịt, gốm sứ, chế biến gỗ, in ấn, hậu cần và sân bay. Công dụng phổ biến nhất của đai quay là thay đổi hướng dòng sản xuất của sản phẩm.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Gia công dán gờ cong
          </h1>
          <p className="text-justify mt-5">
            Các chuyên gia của công ty “Dịch vụ băng tải” thực hiện đo đạc, sản
            xuất và lắp đặt băng tải quay.
          </p>
          <p className="text-justify mt-5">
            Đai quay được sử dụng rộng rãi trong các ngành bánh kẹo, sữa, thịt,
            gốm sứ, chế biến gỗ, in ấn, hậu cần và sân bay. Công dụng phổ biến
            nhất của đai quay là thay đổi hướng dòng sản xuất của sản phẩm.
          </p>
          <p className="text-justify mt-5">
            Các chuyên gia của công ty sản xuất dây đai quay làm bằng PU và PVC
            để sử dụng trong ngành thực phẩm.
          </p>
          <p className="text-justify mt-5">
            Công ty cung cấp các loại đai quay có góc vận chuyển 90°, 180°, 360°
            và các loại khác. Chiều rộng của đai xoay lên tới 2000 mm. Đai xoay
            có thể được trang bị các lỗ có vòng đệm, kẹp, thanh dẫn hướng, v.v.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
