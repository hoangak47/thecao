/* eslint-disable @next/next/no-img-element */

import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import React from "react";

import { GetData } from "@/components/getDataProduct/getData";

export const metadata = {
  title: "Xich nhựa",
  description: `
            Giúp tăng năng lực sản xuất, giảm chi phí và giảm thiểu thời gian ngừng hoạt
            động trong các nhà máy.`,
};
export default function Page({}) {
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <>
          <h1 className="lg:text-4xl text-2xl font-medium mt-5 text-center m-5 text-[--color-primary]">
            Băng tải Xích nhựa
          </h1>

          <p className="text-justify mt-5">
            HONGSBELT là nhà sản xuất chuyên nghiệp chuyên về Dây băng tải, Dây
            đai mô-đun, Dây chuyền dẹt, Băng tải PVC & PU và các thành phần nhựa
            khác như UHMW profile cho phép khách hàng trên toàn thế giới tăng
            năng lực sản xuất, giảm chi phí và giảm thiểu thời gian ngừng hoạt
            động trong các nhà máy.
          </p>

          <p className="text-justify mt-5">
            Trong mười lăm năm qua, chúng tôi cung cấp cho khách hàng nhiều loại
            sản phẩm sáng tạo và các sản phẩm song song có thể sánh ngang với
            đối thủ cạnh tranh của chúng tôi. Với kiến thức chuyên môn của mình,
            chúng tôi có thể tư vấn các sản phẩm tốt hơn cho các ngành công
            nghiệp khác nhau như bánh mì, chế biến trái cây và rau quả, thịt và
            gia cầm, lốp xe, bao bì, tủ đông IQS và đèn chạy bằng pin hoạt tính.
            Chúng tôi cung cấp các giải pháp chính xác và giúp khách hàng giảm
            chi phí vận hành.
          </p>
          <p className="text-justify mt-5">
            Trong các ứng dụng thực phẩm, vệ sinh vành đai là một yếu tố quan
            trọng trong các yêu cầu an toàn của khách hàng. Để đảm bảo các tiêu
            chuẩn an toàn cao, tất cả các thiết bị và dây đai phải được làm sạch
            sâu bằng cách sử dụng chất tẩy rửa mạnh trước khi được rửa sạch. Sau
            đây là những ưu điểm:
          </p>

          <span className="text-justify mt-5">
            <h4 className="text-xl mt-5 text-[--color-primary]">
              Khả năng chống lại các điều kiện khắc nghiệt
            </h4>
            HONGSBELT là nhà sản xuất chuyên nghiệp chuyên về Dây băng tải, Dây
            đai mô-đun, Dây chuyền dẹt, Băng tải PVC & PU và các thành phần nhựa
            khác như UHMW profile cho phép khách hàng trên toàn thế giới tăng
            năng lực sản xuất, giảm chi phí và giảm thiểu thời gian ngừng hoạt
            động trong các nhà máy.
          </span>
          <span className="text-justify mt-5">
            <h4 className="text-xl mt-5 text-[--color-primary]">
              Khả năng chống lại các điều kiện khắc nghiệt
            </h4>
            HONGSBELT là nhà sản xuất chuyên nghiệp chuyên về Dây băng tải, Dây
            đai mô-đun, Dây chuyền dẹt, Băng tải PVC & PU và các thành phần nhựa
            khác như UHMW profile cho phép khách hàng trên toàn thế giới tăng
            năng lực sản xuất, giảm chi phí và giảm thiểu thời gian ngừng hoạt
            động trong các nhà máy.
          </span>
          <span className="text-justify mt-5">
            <h4 className="text-xl mt-5 text-[--color-primary]">
              Thời gian tồn tại lâu hơn
            </h4>
            Trong điều kiện tiêu chuẩn, dây đai mô-đun bằng nhựa thường có tuổi
            thọ rất cao, kéo dài trong nhiều năm mà không thay đổi hiệu suất và
            ít hoặc không cần bảo dưỡng.
          </span>
          <span className="text-justify mt-5">
            <h4 className="text-xl mt-5 text-[--color-primary]">
              Cường độ cao
            </h4>
            So với các giải pháp dây đai khác, dây đai mô-đun nhựa có độ bền rất
            cao, có thể đáp ứng tất cả các ứng dụng khắt khe nhất của ngành.
            Đồng thời, chúng cũng thích hợp cho các ứng dụng tích lũy và chuyển
            hướng có ảnh hưởng đến hoạt động và tuổi thọ của các giải pháp dây
            đai khác.
          </span>
          <span className="text-justify mt-5">
            <h4 className="text-xl mt-5 text-[--color-primary]">
              Nhiều loại bề mặt
            </h4>
            Thắt lưng mô-đun nhựa HONGSBELT cung cấp nhiều loại bề mặt khác nhau
            để mang lại các đặc tính cụ thể cần thiết. Từ lưới phẳng đến đỉnh
            con lăn có một bề mặt phù hợp với các yêu cầu của ứng dụng băng tải
            của bạn.
          </span>
        </>

        <div className="w-full h-[1px] bg-[#000] my-10"></div>
        <GetData />
      </Body_>
    </Layout>
  );
}
