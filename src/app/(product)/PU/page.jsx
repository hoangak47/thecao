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
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Băng tải PU
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

          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span> Mặc dù băng tải
            được phân thành các loại khác nhau dựa trên tính chất của chúng,
            nhưng băng tải PU các đặc điểm chung của chúng bao gồm khả năng
            chống mài mòn cao và khả năng chống chịu cao với dầu và mỡ thực vật,
            động vật, khoáng chất và chất béo cũng như băng tải PU có bề mặt
            nhẵn để giảm cặn vi khuẩn và giúp quá trình làm sạch băng tải dễ
            dàng hơn .
          </p>

          <div className="flex justify-center mt-5">
            <Image
              src={pu2}
              alt="PU 2"
              className="w-full md:w-1/2  rounded-2xl object-contain mt-5"
              width={500}
              height={500}
            />
          </div>

          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span>Những yếu tố
            quan trọng này khiến băng tải PU trở nên lý tưởng để sử dụng trong
            ngành thực phẩm với các ứng dụng đòi hỏi khắt khe như trong ngành
            bánh kẹo, đòi hỏi khả năng thích ứng với sự thay đổi nhiệt độ, độ
            mài mòn vượt trội và bề mặt dễ lau chùi.
          </p>

          <div className="flex justify-center mt-5">
            <Image
              src={pu3}
              alt="PU 3"
              className="w-full md:w-1/2 lg:w-1/3 rounded-2xl object-contain mt-5"
              width={500}
              height={500}
            />
          </div>
          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span>Phạm vi nhiệt
            độ: Cả hai vật liệu đều có những hạn chế. Băng tải PVC hoạt động tốt
            ở nhiệt độ vừa phải từ -10°C đến 70°C, trong khi PU cung cấp phạm vi
            rộng hơn từ -40°C đến 100°C, xử lý môi trường nóng và lạnh tốt hơn.
          </p>

          <div className="flex justify-center mt-5">
            <Image
              src={pu4}
              alt="PU 4"
              className="w-full md:w-1/2  rounded-2xl object-contain mt-5"
              width={500}
              height={500}
            />
          </div>
          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span>Mặc dù vật liệu
            Poly Urethane (PU) tương đối đắt tiền cho băng tải nhưng nó rất phù
            hợp với nhiều quy trình thực phẩm hiện đại có yêu cầu đặc biệt về
            tiếp xúc trực tiếp với thực phẩm với băng tải.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetData />
      </Body_>
    </Layout>
  );
}
