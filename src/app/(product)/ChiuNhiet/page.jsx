/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import Image from "next/image";
import React from "react";

import cn1 from "@/assets/images/products/HeatResistant/CN1.jpg";
import cn2 from "@/assets/images/products/HeatResistant/CN2.jpg";
import cn3 from "@/assets/images/products/HeatResistant/CN3.png";
import cn4 from "@/assets/images/products/HeatResistant/CN4.png";
import cn5 from "@/assets/images/products/HeatResistant/CN5.png";

import { GetData } from "@/components/getDataProduct/getData";

export const metadata = {
  title: "Chịu nhiệt",
  description:
    "Băng tải lưới teflon là gì: Băng tải lưới Teflon, còn được gọi là băng tải lưới PTFE, là một loại băng tải được sản xuất bằng sợi thủy tinh và được phủ màng chất liệu PTFE",
};
export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <>
          <h1 className="lg:text-4xl text-2xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Băng tải Chịu nhiệt
          </h1>

          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span>
            <strong className="blue"> Băng tải lưới teflon</strong> là gì: Băng
            tải lưới Teflon, còn được gọi là băng tải lưới PTFE, là một loại
            băng tải được sản xuất bằng sợi thủy tinh và được phủ màng chất liệu
            PTFE (Polytetrafluoroethylene) - một loại nhựa fluoropolymer không
            dẻo có đặc tính chịu nhiệt và chống dính cực kỳ tốt. Loại băng tải
            này thường được sử dụng trong các ứng dụng công nghiệp đòi hỏi khả
            năng chịu nhiệt cao và tính năng chống dính.
          </p>
          <div className="flex items-center lg:flex-row flex-col justify-center mt-6">
            <div className="flex-1 md:p-3">
              <div className="flex justify-center">
                <Image
                  src={cn1}
                  alt="CN 1"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex-1 md:p-3">
              <div className="flex justify-center">
                <Image
                  src={cn2}
                  alt="CN 2"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-medium mt-5 text-[--color-primary]">
            Băng tải lưới Teflon thường có những ưu điểm sau:
          </h3>
          <ul className="text-justify mt-5 p-[revert] list-decimal">
            <li>
              Khả năng chịu nhiệt cao: PTFE có khả năng chịu nhiệt lên đến
              khoảng 260°C (500°F) mà không bị biến dạng hoặc mất tính chất cơ
              học. Điều này làm cho băng tải lưới Teflon phù hợp cho quá trình
              công nghiệp yêu cầu nhiệt độ cao.
            </li>
            <li>
              Chống dính: Băng tải lưới Teflon có bề mặt chống dính tự nhiên,
              không cần sử dụng dầu mỡ hoặc chất tạo dính bổ sung. Điều này làm
              cho nó lý tưởng cho việc vận chuyển các sản phẩm yêu cầu tính chất
              chống dính.
            </li>
            <li>
              Khả năng chống hóa chất: PTFE là một chất liệu khá chống hóa chất,
              giúp băng tải lưới Teflon thích hợp cho việc tiếp xúc với nhiều
              loại hóa chất.
            </li>
            <li>
              Tính ổn định cơ học: Băng tải lưới Teflon thường có tính đều đặn
              trong việc truyền tải và đảm bảo sự ổn định trong quá trình sản
              xuất.
            </li>
          </ul>

          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045; </span>
            <strong className="blue">Băng tải lưới Teflon</strong> thường được
            sử dụng trong các ngành công nghiệp thực phẩm, chế biến hóa chất, in
            ấn, dệt may, và nhiều ứng dụng khác đòi hỏi tính chất chịu nhiệt và
            chống dính.
          </p>

          <h4 className="text-xl font-medium mt-5 text-[--color-primary]">
            Pro&Con Của Băng Tải Lưới Teflon
          </h4>

          <h4 className="text-xl font-medium text-[--color-blue]">Pro</h4>
          <ul className="text-justify mt-5 p-[revert] list-disc">
            <li>
              Độ bền cao: Băng tải lưới teflon có độ bền cao hơn so với các loại
              băng tải khác.
            </li>
            <li>
              Khả năng chịu nhiệt: Teflon là một vật liệu chịu nhiệt tốt, giúp
              cho băng tải lưới teflon có thể sử dụng trong các môi trường nhiệt
              độ cao.
            </li>
            <li>
              Không bám dính: Băng tải lưới teflon không bám dính, giúp cho sản
              phẩm được chuyển đến một cách an toàn và hiệu quả.
            </li>
          </ul>
          <h4 className="text-xl font-medium text-[--color-blue]">Con</h4>
          <ul className="text-justify mt-5 p-[revert] list-disc">
            <li>
              Giá thành cao: Băng tải lưới teflon có giá thành cao hơn so với
              các loại băng tải khác.
            </li>
            <li>
              Khó vệ sinh: Vì băng tải lưới teflon có cấu trúc lưới kim loại bên
              trong, việc vệ sinh băng tải này sẽ khó khăn hơn so với các loại
              băng tải khác.
            </li>
          </ul>

          <h3 className="text-2xl font-medium mt-5 text-[--color-primary]">
            Các loại mối nối cho băng tải lưới.
          </h3>
          <p className="text-justify mt-5">
            Hiện tại, chúng ta có nhiều phương pháp chung: Khớp mũi bull, khớp
            cá sấu, khớp gắn mũi.
          </p>

          <div className="flex items-center lg:flex-row flex-col justify-center mt-6">
            <div className="flex-1 md:p-3">
              <div className="flex justify-center">
                <Image
                  src={cn3}
                  alt="CN 3"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex-1 md:p-3">
              <div className="flex justify-center">
                <Image
                  src={cn4}
                  alt="CN 4"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex-1 md:p-3">
              <div className="flex justify-center">
                <Image
                  src={cn5}
                  alt="CN 5"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-medium mt-5 text-[--color-primary]">
            Băng Tải Lưới Teflon Được Sử Dụng Trong Ngành Công Nghiệp Nào?
          </h3>
          <p className="text-justify">
            Băng tải lưới teflon được sử dụng rộng rãi trong ngành công nghiệp
            thực phẩm, đặc biệt là trong quá trình chế biến bánh kẹo và sô cô
            la.
          </p>
          <h3 className="text-2xl font-medium mt-5 text-[--color-primary]">
            Băng Tải Lưới Teflon Có Những Ưu Điểm Gì?
          </h3>
          <p className="text-justify">
            Băng tải lưới teflon có độ bền cao, khả năng chịu nhiệt tốt và không
            bám dính, giúp cho sản phẩm được chuyển đến một cách an toàn và hiệu
            quả
          </p>
          <h3 className="text-2xl font-medium mt-5 text-[--color-primary]">
            Băng Tải Lưới Teflon Có Nhược Điểm Gì?
          </h3>
          <p className="text-justify">
            Băng tải lưới teflon có giá thành cao hơn so với các loại băng tải
            khác, và việc vệ sinh băng tải này cũng sẽ khó khăn hơn so với các
            loại băng tải khác.
          </p>
          <h3 className="text-2xl font-medium mt-5 text-[--color-primary]">
            Kết Luận
          </h3>
          <p className="text-justify">
            Băng tải lưới teflon cũng là một lựa chọn tốt trong ngành thực phẩm,
            đặc biệt trong quá trình chế biến bánh kẹo và sô cô la. Tuy nhiên,
            băng tải lưới teflon cũng có những ưu điểm và nhược điểm riêng. Vì
            vậy, khi lựa chọn loại băng tải phù hợp, các nhà sản xuất cần cân
            nhắc về yêu cầu của sản phẩm và môi trường làm việc để có thể đưa ra
            quyết định chính xác.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetData />
      </Body_>
    </Layout>
  );
}
