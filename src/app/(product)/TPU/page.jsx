/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import Image from "next/image";
import React from "react";

import tpu1 from "@/assets/images/products/TPU/tpu1.png";
import tpu2 from "@/assets/images/products/TPU/tpu2.png";
import tpu3 from "@/assets/images/products/TPU/tpu3.png";
import tpu4 from "@/assets/images/products/TPU/tpu4.png";
import tpu5 from "@/assets/images/products/TPU/tpu5.png";

import { GetData } from "@/components/getDataProduct/getData";

export const metadata = {
  title: "Băng tải PU đồng nhất (TPU)",
  description: `Băng tải PU Đồng Nhất (TPU) của
            chúng tôi tạo ra sự khác biệt đó. Nó cải thiện đáng kể an toàn thực
            phẩm trong quá trình chế biến và giảm tiêu thụ nước trong quá trình
            làm sạch.`,
};

export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <>
          <h1 className="lg:text-4xl text-2xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Băng tải PU đồng nhất (TPU)
          </h1>

          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span> Nhóm phát triển
            sản phẩm tin tưởng mạnh mẽ rằng các sản phẩm trong lĩnh vực tự động
            hóa công nghiệp có khả năng tạo ra sự khác biệt trong tất cả các
            ngành sane xuất.{" "}
            <strong className="blue">Băng tải PU Đồng Nhất (TPU)</strong> của
            chúng tôi tạo ra sự khác biệt đó. Nó cải thiện đáng kể an toàn thực
            phẩm trong quá trình chế biến và giảm tiêu thụ nước trong quá trình
            làm sạch. Một sản phẩm thân thiện với môi trường như vậy nhằm mục
            đích cách mạng hóa ngành công nghiệp chế biến thực phẩm.
          </p>
          <p className="text-justify mt-5">
            <span className="font-black text-xl">&#10045;</span>
            <strong className="blue">Băng tải PU Đồng Nhất (TPU) </strong>
            của chúng tôi có một số ưu điểm chính so với tất cả các lựa chọn
            hiện có khác trên thị trường.
          </p>

          <div className="flex items-center lg:flex-row flex-col justify-center">
            <div className="flex-[4]">
              <div className="flex justify-center mt-5">
                <Image
                  src={tpu1}
                  alt="PU 1"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex-[5]">
              <h1 className="lg:text-4xl text-2xl font-medium mt-5 text-center m-5 text-[--color-primary]">
                Các Ứng Dụng:
              </h1>

              <p className="text-justify mt-5 sm:p-3">
                <strong className="blue">Băng tải PU Đồng Nhất (TPU)</strong> là
                dây đai TPU đảm bảo không làm sờn các lớp vải và không bị nhiễm
                bẩn qua chất làm dẻo. Vì vậy, nó là lý tưởng cho các ứng dụng
                thực phẩm của mọi loại, đặc biệt là nơi dây đai tiếp xúc trực
                tiếp với thực phẩm. Được thiết kế cho tất cả các lĩnh vực của
                ngành công nghiệp chế biến thực phẩm, sản phẩm này làm giảm đáng
                kể số lượng vi khuẩn trong sản xuất thực phẩm, cải thiện an toàn
                thực phẩm, tiết kiệm nước trong quá trình làm sạch và giảm chi
                phí xử lý nước thải. Các ngành công nghiệp tiêu biểu bao gồm
              </p>

              <ul className={"list-disc text-justify mt-5 p-[revert]"}>
                <li>Lò mổ để sản xuất thịt</li>
                <li>Hải sản</li>
                <li>Sản phẩm bơ sữa</li>
                <li>Thức ăn đông lạnh</li>
                <li>Chế biến khoai tây và rau củ</li>
                <li>Và nhiều cái khác.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center lg:flex-row flex-col justify-center mt-6">
            <div className="flex-1 p-3">
              <h1 className="lg:text-4xl text-2xl font-medium mt-5 text-center m-5 text-[--color-primary]">
                Đặc Điểm:
              </h1>
              <p className="text-justify mt-5">
                Nhà phát triển sản phẩm sử dụng các vật liệu và quy trình sản
                xuất hiện đại nhất để cải thiện an toàn thực phẩm. Loại{" "}
                <strong className="blue">băng tải PU Đồng Nhất (TPU)</strong>{" "}
                được làm bằng vật liệu TPU của Đức và có tính năng gia cường
                aramid để đảm bảo chất lượng cao nhất và khắc phục các vấn đề về
                độ giãn dài do tải nặng.{" "}
              </p>
              <h3 className="lg:text-3xl text-xl font-medium mt-5 m-5 text-[--color-primary]">
                Ưu điểm chính:
              </h3>
              <ul className={"list-disc text-justify mt-5 p-[revert]"}>
                <li>Chiều rộng 1420mm</li>
                <li>Dây aramid làm thành viên chịu kéo để tránh kéo dài</li>
                <li>
                  Phạm vi nhiệt độ rộng phù hợp với tất cả các ứng dụng trong
                  một sản phẩm (từ -40 độ C đến 90 độ C)
                </li>
                <li>Chống vi khuẩn & chống thủy phân</li>
                <li>Không bị sờn và tách lớp</li>
                <li>Cắt và chống mài mòn</li>
                <li>Bề mặt làm việc giải phóng cao</li>
                <li>
                  Các răng truyền động trên toàn bộ chiều rộng của dây đai -
                  tránh trơn trượt
                </li>
                <li>
                  Dễ dàng làm sạch có nghĩa là tiêu thụ ít nước hơn + ít nhân
                  lực hơn = hiệu quả cao hơn và số lượng vi khuẩn thấp hơn.
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="flex justify-center mt-5">
                <Image
                  src={tpu2}
                  alt="PU 2"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex justify-center mt-5">
                <Image
                  src={tpu3}
                  alt="PU 3"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <h1 className="lg:text-4xl text-2xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Thông Số Kỹ Thuật:
          </h1>
          <div className="flex items-center lg:flex-row flex-col justify-center mt-6">
            <div className="flex-1 md:p-3">
              <strong className="blue">REO- F30</strong>
              <ul className={"list-disc text-justify mt-5 p-[revert]"}>
                <li>Chiều rộng tối đa 1420mm</li>
                <li>Xây dựng phẳng</li>
                <li>Aramid gia cố</li>
                <li>Vật liệu TPU 95 Shore A</li>
                <li>Phạm vi nhiệt độ từ -40 đến 90oC</li>
              </ul>
              <div className="flex justify-center mt-5">
                <Image
                  src={tpu4}
                  alt="PU 4"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex-1 md:p-3">
              <strong className="blue">REO- F30</strong>
              <ul className={"list-disc text-justify mt-5 p-[revert]"}>
                <li>Chiều rộng tối đa 1420mm</li>
                <li>Cao độ 49,7 mm</li>
                <li>Aramid gia cố</li>
                <li>Vật liệu TPU 95 Shore A</li>
                <li>Phạm vi nhiệt độ từ -40 đến 90oC</li>
              </ul>
              <div className="flex justify-center mt-5">
                <Image
                  src={tpu5}
                  alt="PU 5"
                  className="w-full object-contain"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetData />
      </Body_>
    </Layout>
  );
}
