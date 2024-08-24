/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Gia công",
  description: `362/109 Hiệp Thành 13, Khu Phố 7, Phường Hiệp Thành, Quận 12, Thành phố Hồ Chí Minh`,
};
export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
          Gia công
        </h1>

        <GetDataCareer />
      </Body_>

      <Partner />
    </Layout>
  );
}
