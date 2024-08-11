/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import Image from "next/image";
import React from "react";

import pu1 from "@/assets/images/products/PU/pu1.png";
import pu2 from "@/assets/images/products/PU/pu2.png";
import pu3 from "@/assets/images/products/PU/pu3.png";
import pu4 from "@/assets/images/products/PU/pu4.png";

import { GetData } from "@/components/getDataProduct/getData";

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Băng tải PU đồng nhất (TPU)
          </h1>

          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span> Băng tải Poly
            Urethane (PU) an toàn 100% và không độc hại khi tiếp xúc với thực
            phẩm có khả năng kháng cơ học và hóa học vượt trội hơn nhiều so với
            băng tải PVC. Băng tải PUđảm bảo vận chuyển thực phẩm và các vật
            liệu nhẹ khác như linh kiện điện tử, v.v. không độc hại. Được sản
            xuất bằng màu thực phẩm màu trắng cấp thực phẩm, màu xanh lá cây và
            đen với 1 lớp, 2 lớp, 3 lớp có độ dày từ 0.4 mm đến 3 mm để sử dụng
            trong chuyển tải nhẹ công nghiệp vật liệu và thay thế các tiêu chuẩn
            chất lượng FDA.
          </p>

          <div className="flex justify-center mt-5">
            <Image
              src={pu1}
              alt="PU 1"
              className="w-full md:w-1/2  rounded-2xl object-contain"
              width={500}
              height={500}
            />
          </div>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetData />
      </Body_>
    </Layout>
  );
}
