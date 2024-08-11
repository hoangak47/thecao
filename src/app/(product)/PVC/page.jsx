/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import Image from "next/image";
import React from "react";

import pvc1 from "@/assets/images/products/PVC/pvc1.png";
import pvc2 from "@/assets/images/products/PVC/pvc2.png";
import pvc3 from "@/assets/images/products/PVC/pvc3.png";
import pvc4 from "@/assets/images/products/PVC/pvc4.png";
import pvc5 from "@/assets/images/products/PVC/pvc5.png";
import { GetData } from "@/components/getDataProduct/getData";

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <>
          <h1 className="text-4xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Băng tải PVC
          </h1>
          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span>{" "}
            <strong>Băng tải PVC</strong> là loại băng tải cơ bản, phổ biến nhất
            và giá cả phải chăng nhất. Chúng nhẹ, mạnh mẽ, dễ kết nối. Chúng
            vượt trội về sức mạnh, độ bền và tuổi thọ lâu dài.
          </p>
          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span>{" "}
            <strong>Băng tải PVC</strong> có đa dạng các loại băng tải khác
            nhau, với độ cứng, hình dạng và màu sắc khác nhau và bao gồm nhiều
            loại đặc biệt dành riêng cho các ngành sản xuất khác nhau.
          </p>

          <div className="flex mt-5 items-center sm:flex-row flex-col">
            <div className="flex-1 flex justify-center">
              <Image
                src={pvc1}
                alt="PVC 1"
                className="lg:w-2/3 rounded-2xl object-contain"
                width={500}
                height={500}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src={pvc2}
                alt="PVC 2"
                className="lg:w-2/3 rounded-2xl object-contain"
                width={500}
                height={500}
              />
            </div>
          </div>

          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span>{" "}
            <strong>Cấu trúc của băng tải PVC </strong>
          </p>

          <span>
            Băng tải PVC có lõi là vải sợi tổng hợp cùng với nhựa PVC được bọc
            bên ngoài. Giúp vận chuyển sản phẩm có trọng lượng nhẹ hoặc trung
            bình. Lõi sợi tổng hợp được sử dụng trong dây đai này là polyester,
            nylon, Velen, sợi carbon và các loại tương tự. Băng tải PVC thường
            được làm từ 1 đến 3 lớp vải, mỗi lớp vải có độ dày 0,5 ~ 0,8 mm.
          </span>

          <div className="flex justify-center mt-5">
            <Image
              src={pvc3}
              alt="PVC 3"
              className="w-full md:w-1/2 lg:w-1/3 rounded-2xl object-contain"
              width={500}
              height={500}
            />
          </div>

          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span> Một trong những
            ưu điểm chính của băng tải PVC là tính năng đa dạng của bề mặt chịu
            lực của băng. Trong những năm gần đây, nó đã được sử dụng rộng rãi
            trong băng tải nhẹ PVC vì độ bền cao, độ giãn dài nhỏ và khả năng
            chịu nhiệt độ tốt.
          </p>
          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span> Với khả năng
            chống mài mòn hạn chế và khả năng chống chịu dung môi, dầu mỡ hạn
            chế, dây đai PVC phù hợp nhất để chế biến trái cây và rau quả và các
            hoạt động đơn giản hơn với các yêu cầu đặc biệt hạn chế.
          </p>
          <div className="flex justify-center mt-5">
            <Image
              src={pvc4}
              alt="PVC 4"
              className="w-full md:w-1/2 lg:w-1/3 rounded-2xl object-contain"
              width={500}
              height={500}
            />
          </div>

          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span> Những đai PVC
            chống tĩnh điện này có khả năng kháng hóa chất tốt cũng như chịu
            được nước nóng và hơi nước. Dựa trên nhu cầu cụ thể và nhà sản xuất
            băng tải, cũng có sẵn các mẫu băng tải chống cháy.
          </p>
          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span> Đối với những
            người chưa biết rõ về thông số kỹ thuật cho quá trình chế biến thực
            phẩm của mình thì băng tải PVC là sự lựa chọn đáng tin cậy và có giá
            thành ưu đãi so với các loại băng tải khác.
          </p>
          <div className="flex justify-center mt-5">
            <Image
              src={pvc5}
              alt="PVC 5"
              className="w-full md:w-1/2 lg:w-1/3 rounded-2xl object-contain"
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
