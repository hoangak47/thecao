import Layout from "@/constants/layout/layout";
import Image from "next/image";
import React from "react";

import com from "@/assets/images/Com.jpg";
import Body_ from "@/constants/body/body2";
import Partner from "@/components/partners";
import partners from "@/assets/images/gold-partners.jpg";

import infomation1 from "@/assets/images/infomation (1).jpg";
import infomation2 from "@/assets/images/infomation (2).jpg";
import infomation3 from "@/assets/images/infomation (3).jpg";
import infomation4 from "@/assets/images/infomation (4).jpg";
import infomation5 from "@/assets/images/infomation (5).jpg";
import infomation6 from "@/assets/images/infomation (6).jpg";
import infomation7 from "@/assets/images/infomation (7).jpg";
import infomation8 from "@/assets/images/infomation (8).jpg";
import infomation9 from "@/assets/images/infomation (9).jpg";

const infomation = [
  {
    img: infomation1,
    title: "infomation 1",
  },
  {
    img: infomation2,
    title: "infomation 2",
  },
  {
    img: infomation3,
    title: "infomation 3",
  },
  {
    img: infomation4,
    title: "infomation 4",
  },
  {
    img: infomation5,
    title: "infomation 5",
  },
  {
    img: infomation6,
    title: "infomation 6",
  },
  {
    img: infomation7,
    title: "infomation 7",
  },
  {
    img: infomation8,
    title: "infomation 8",
  },
  {
    img: infomation9,
    title: "infomation 9",
  },
];

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

      <Image src={partners} alt="infomation" className="w-44 flex mx-auto" />
      <Partner partner={true}></Partner>
      <Partner partner={true} data={infomation} className="mb-8"></Partner>
    </Layout>
  );
}
