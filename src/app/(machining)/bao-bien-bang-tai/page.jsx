/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import { GetDataCareer } from "@/components/getDataProduct/getDataCareer";
import Partner from "@/components/partners";

export const metadata = {
  title: "Bao biên băng tải",
  description: `Công ty “Dịch vụ băng tải” có sẵn thiết bị đặc biệt để dán kín các cạnh của băng.
Thông thường băng ở hai bên có các cạnh bị cắt không được bảo vệ khỏi tác động bên ngoài. Công nghệ này cho phép bạn "bịt kín" hoàn toàn các cạnh của băng ở cả hai mặt bằng dải nhựa nhiệt dẻo.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Bao biên băng tải
          </h1>
          <p className="text-justify mt-5">
            Công ty “Dịch vụ băng tải” có sẵn thiết bị đặc biệt để dán kín các
            cạnh của băng. Thông thường băng ở hai bên có các cạnh bị cắt không
            được bảo vệ khỏi tác động bên ngoài. Công nghệ này cho phép bạn "bịt
            kín" hoàn toàn các cạnh của băng ở cả hai mặt bằng dải nhựa nhiệt
            dẻo.
          </p>
          <p className="text-justify mt-5">
            Băng keo dán cạnh được bảo vệ hoàn toàn khỏi mọi tác động và điều
            kiện bên ngoài. Công nghệ này được ứng dụng cho các loại băng
            polyvinyl clorua (PVC), polyurethane (PU), PE polyethylene
          </p>
          <p className="text-justify mt-5">
            Để bịt kín các cạnh của băng polymer hai lớp hoặc ba lớp, các chuyên
            gia của công ty “Dịch vụ băng tải” tiến hành phay băng trên thiết bị
            đặc biệt, sau đó dán các mép băng xung quanh chu vi bằng máy dải đặc
            biệt. Công nghệ này cũng có thể được sử dụng trên băng một lớp.
          </p>
          <p className="text-justify mt-5">
            Sau khi bảo vệ mép băng, vật liệu phủ ban đầu được đóng hoàn toàn và
            phẳng trên toàn bộ chiều rộng của băng. Điều này giúp làm sạch băng
            dễ dàng hơn và làm cho băng bền hơn về mặt cơ học khi sử dụng lâu
            dài.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetDataCareer />

        <Partner />
      </Body>
    </Layout>
  );
}
