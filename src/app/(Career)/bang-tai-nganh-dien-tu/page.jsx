/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";
import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Ngành điện tử",
  description: `CÔNG TY THẾ CAO chuyên sản suất và cung cấp trên toàn quốc Băng tải PVC - PU - PE, băng tải chịu nhiệt, băng tải lưới nhựa, băng tải xích nhựa, băng tải xích inox, băng tải cao su, dây đai dẹt, dây curoa, dây đai răng, Nẹp móc nối băng tải, ...`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Ngành điện tử
          </h1>
          <p className="text-justify mt-5">
            <strong>CÔNG TY THẾ CAO</strong> chuyên sản suất và cung cấp trên
            toàn quốc <strong>Băng tải PVC - PU - PE</strong>, băng tải chịu
            nhiệt, băng tải lưới nhựa, băng tải xích nhựa, băng tải xích inox,
            băng tải cao su, dây đai dẹt, dây curoa, dây đai răng, Nẹp móc nối
            băng tải, ...
          </p>

          <p className="text-justify mt-5">
            Cho tất cả các ngành công nghiệp như Ngành sản xuất giày, Ngành gỗ,
            <strong>Ngành điện tử</strong>, Ngành in ấn - in hoa, Ngành bao bì,
            Ngành thực phẩm, Ngành thuốc lá, Ngành đá Granit, Ngành hàng không,
            Ngành thể thao ... Với giá ưu đãi nhất hiện nay.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
