"use client";

import Layout from "@/constants/layout/layout";
import Image from "next/image";
import React from "react";

import com from "@/assets/images/Com.jpg";
import Body_ from "@/constants/body/body2";
import Partner from "@/components/partners";

export default function Infomation() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Image src={com} alt="infomation" className="w-full" />
      </div>
      <Body_>
        <h3 className="text-2xl font-bold text-center text-slate-900">
          Chúng tôi là <br />
          Công ty TNHH MTV Thế Cao
        </h3>

        <div className="text-base text-justify text-slate-500 mt-8">
          <p>
            Công ty Thế Cao được thành lập vào năm 1999, sau gần 20 năm hoạt
            động và phát triển, Công ty Thế Cao trở thành một trong những nhà
            cung cấp sỉ-lẻ băng tải PVC, PU, TPU, băng tải xích,nhựa và dây đai
            truyền động dùng trong ngành công nghiệp HÀNG ĐẦU TẠI VIỆT NAM.
          </p>
          <br />
          <p>
            Với nhiều năm kinh nghiệm trong lĩnh vực thiết kế chế tạo, gia công
            và cung cấp các sản phẩm: băng tải PVC,PU,TPU băng tải in hoa, băng
            tải chịu nhiệt, băng tải nhựa, băng tải xích, dây đai truyền động,
            dây đai răng, móc thép, ...
          </p>
          <br />
          <p>
            Sản phẩm của Công ty Thế Cao được sản xuất và gia công trên máy móc
            thiết bị tiên tiến từ các hãng nổi tiếng hàng đầu thế giới như:
            Almex, Volta, Flexco, Jiuluo. ....
          </p>
          <br />
          <p>
            Công ty thế cao luôn đi song song giữa chất lượng và số lượng có
            kiểm đỉnh quốc tế và đội ngũ nhân viên lâu năm với hơn 10 năm trong
            nghề cùng với máy móc trang thiết bị tân tiến, luôn luôn cập nhật
            thiết bị và mẫu mã mới để phù hợp với nhu cầu của khách hàng.
          </p>
          <br />
          <p>
            Chúng tôi tự hào là doanh nghiệp có khả năng đáp ứng mọi nhu cầu của
            khách hàng một cách trọn vẹn nhất.
          </p>
          <br />
          <p>
            Chúng tôi luôn cam kết cung cấp sản phẩm chất lượng tốt nhất , giao
            hàng nhanh nhất, độ chính xác cao nhất và được bảo hành dài lâu
            nhất.
          </p>
          <br />
          <p>
            Chúng tôi luôn sẵn sàng và lấy làm vinh hạnh được phục vụ Quý khách.
          </p>
          <br />
          <p>Rất mong nhận được sự ủng hộ và hợp tác của Quý khách!</p>
        </div>
      </Body_>

      <Partner partner={true}>
        <h1>
          <p className="text-4xl font-medium mt-5 text-center m-5">
            Đối tác và khách hàng của{" "}
            <span className="text-[--color-primary]">Thế Cao</span>
          </p>
        </h1>
      </Partner>
      <Partner />
    </Layout>
  );
}
