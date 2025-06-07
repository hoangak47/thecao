/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Layout from "@/constants/layout/layout";
import React from "react";

import Body from "@/constants/body";
import Partner from "@/components/partners";
import { FormContact } from "./formContact";

export const metadata = {
  title: "Băng tải Thế Cao | Băng Tải",
  description: `Công ty “Dịch vụ băng tải” có sẵn thiết bị đặc biệt để dán kín các cạnh của băng.
Thông thường băng ở hai bên có các cạnh bị cắt không được bảo vệ khỏi tác động bên ngoài. Công nghệ này cho phép bạn "bịt kín" hoàn toàn các cạnh của băng ở cả hai mặt bằng dải nhựa nhiệt dẻo.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body>
        <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
          Liên hệ
        </h1>

        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex-1">
            <p className="mt-3">
              Địa chỉ: 362/109 Hiệp Thành 13, Khu Phố 7, P. Hiệp Thành, Q.12,
              TP. Hồ Chí Minh
            </p>
            <p className="mt-3">Email: lamtanvu232@gmail.com</p>
            <p className="mt-3">Hotline: 0788 388 588</p>
            <p className="mt-3">Website: </p>
          </div>
          <div className="flex-[2] mt-3">
            <FormContact />
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62687.61607181222!2d106.636351!3d10.889428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d76f4c1da9e9%3A0x3be48d475c70e47a!2zQ8O0bmcgdHkgVE5ISCBNVFYgVGjhur8gQ2Fv!5e0!3m2!1svi!2sus!4v1730551286846!5m2!1svi!2sus"
          className="w-full h-96"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <Partner />
      </Body>
    </Layout>
  );
}
