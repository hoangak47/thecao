/* eslint-disable @next/next/no-img-element */

import { GetDataSpecical } from "@/components/getDataProduct/getDataSpecical";
import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Dây Pu Rang",
  description: `
   Với chất liệu Polyurethane cao cấp cho khả năng chống mài mòn và cắt rất tốt, kết hợp với nhiều loại dây thép khác nhau, đảm bảo độ bền cao và khả năng chống chịu lực kéo. Kết quả tạo ra dây PU răng có độ ổn định kích thước tuyệt vời.
  `,
};
export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <>
          <h1 className="lg:text-4xl text-2xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            PU Răng
          </h1>

          <p className="text-justify mt-5">
            <strong className="text-[--color-blue]">Dây PU răng</strong> được
            sản xuất với quy trình đúc nhiệt rắn độc đáo. Với chất liệu
            Polyurethane cao cấp cho khả năng chống mài mòn và cắt rất tốt, kết
            hợp với nhiều loại dây thép khác nhau, đảm bảo độ bền cao và khả
            năng chống chịu lực kéo. Kết quả tạo ra dây PU răng có độ ổn định
            kích thước tuyệt vời. Dây PU răng được sản xuất với kích thước được
            cố định theo mỗi tiêu chuẩn mã hàng đảm bảo độ dài và độ dày phù
            hợp. Sự kết hợp của các yếu tố này dẫn đến dây PU răng do Thế Cao
            cung cấp hoạt động ở mức vật lý và hóa học cao nhất. đồng thời dây
            PU răng do Thế Cao cung cấp phù hợp với công suất cao, chuyển động
            chính xác và điều khiển ngay cả với tốc độ cao.
          </p>
          <p className="text-justify mt-5">
            <strong className="text-[--color-blue]">Tính năng cơ học:</strong>
          </p>

          <ul className="text-justify p-[revert] list-disc">
            <li>Độ ổn định kích thước nhất quán</li>
            <li>Độ căng sơ bộ thấp</li>
            <li>Độ ồn thấp</li>
            <li>Chống mài mòn cao</li>
            <li>Bảo trì thấp</li>
            <li>Tính linh hoạt cao</li>
            <li>Tốc độ tuyến tính lên đến 80 m / giây</li>
          </ul>

          <p className="text-justify mt-5">
            <strong className="text-[--color-blue]">Tính năng hóa học:</strong>
          </p>

          <ul className="text-justify p-[revert] list-disc">
            <li>Khả năng chống lão hóa, thủy phân tốt, Tia UVA, Ozone</li>
            <li>
              Nhiệt độ làm việc: -25˚C đến 80˚C (lên đến + 110˚C trong thời gian
              ngắn) • Khả năng chống dầu, mỡ và mỡ cao.
            </li>
            <li>
              Khả năng chống chịu tốt với hầu hết các axit và kiềm. Dây PU răng
              do Thế Cao cung cấp hoạt động đặc biệt tốt trên các ổ đĩa (hay còn
              gọi là bánh răng) được đồng bộ hóa và từng bước, trong các ứng
              dụng tự động hóa văn phòng và thiết bị gia dụng.
            </li>
          </ul>
          <p className="text-justify mt-5">
            Dây PU răng ở Thế Cao, chúng mang lại độ tin cậy và độ ổn định kích
            thước tuyệt vời. Việc bổ sung một lớp phủ Nylon trên răng và / hoặc
            mặt sau của dây đai trong quá trình sản xuất, giúp tăng cường các
            đặc tính chạy cho các ứng dụng cụ thể. Mặt sau của dây đai cũng có
            thêm độ dày polyurethane, giúp bảo vệ thêm chống lại sự xâm thực của
            các sản phẩm nặng. Dây PU răng có thể được cung cấp dưới dạng cuộn
            có chiều dài mở hoặc dưới dạng đai có khớp nối vô tận. Đai được sản
            xuất theo chiều dài liên tục, với cốt thép ở dạng song song. Chiều
            dài cuộn tiêu chuẩn là 50 hoặc 100 mét, các chiều dài khác có sẵn
            theo yêu cầu. Dây PU răng thường được sử dụng trong truyền động
            chuyển động thẳng.
          </p>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>

        <GetDataSpecical />
      </Body_>
    </Layout>
  );
}
