"use client";

import { SVGnext } from "@/assets/svg";
import SwiperCustom from "@/components/swiper";
import Body from "@/constants/body";
import Layout from "@/constants/layout/layout";
import Image from "next/image";
import Link from "next/link";

const Intro = () => (
  <div className="flex md:flex-row flex-col">
    <div className="flex-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] overflow-hidden p-6">
      <Image
        src={require("@/assets/images/home/CongTy.jpg")}
        alt="Picture of the author"
        className="w-full h-full rounded-2xl object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col p-5">
      <h1 className="text-center text-4xl font-medium mt-5">CHÚNG TÔI LÀ</h1>
      <h2 className="text-center mb-5 text-3xl font-medium">
        CÔNG TY TNHH MTV THẾ CAO
      </h2>
      <p className={`text-[--color-gray] text-base mb-3`}>
        Công ty THẾ CAO luôn đi song song giữa chất lượng và số lượng có kiểm
        định quốc tế và đội ngũ nhân viên lâu năm với hơn 10 năm trong nghề cùng
        với máy móc trang thiết bị tân tiến, luôn luôn cập nhật thiết bị và mẫu
        mã mới để phù hợp với từng nhu cầu của khách hàng...
      </p>
      <p className={`text-[--color-gray] text-base mb-3`}>
        Công ty chúng tôi luôn nỗ lực phấn đấu để trở thành “Nhà cung cấp chuyên
        nghiệp về các mẫu mã mới của băng tải và dây đai truyền động” cho quý
        khách hàng.
      </p>
      <p className={`text-[--color-gray] text-base mb-3`}>
        Đến với Thế Cao, Quý khách hàng sẽ được tư vấn giải pháp tốt nhất, hiệu
        quả nhất cho nhu cầu băng tải của quý khách hàng.
      </p>
      <div className="flex justify-center">
        <figure className="flex-1 p-1">
          <Image
            src={require("@/assets/images/home/mau-beo-go.jpg")}
            alt="mau-beo-go"
            className="h-full"
          />
        </figure>
        <figure className="flex-1 p-1">
          <Image
            src={require("@/assets/images/home/mau-bang-tai-cua.jpg")}
            alt="mau-bang-tai-cua"
            className="h-full"
          />
        </figure>
        <figure className="flex-1 p-1">
          <Image
            src={require("@/assets/images/home/mau-xich-nhua.jpg")}
            alt="mau-xich-nhua"
            className="h-full"
          />
        </figure>
      </div>

      <div className="flex-1 flex align-items-center justify-end mt-5">
        <Link
          href="/infomation"
          className="text-md font-normal text-[--color-primary] py-3 px-6 border border-[--color-primary] rounded-md flex items-center justify-center hover:bg-[--color-primary] hover:text-white transition-all duration-300 ease-in-out"
        >
          Xem thêm
          <SVGnext height="1.5em" width="1.5em" fill="currentColor" />
        </Link>
      </div>
    </div>
  </div>
);

import PVC from "@/assets/images/home/PVC.jpg";
import PU from "@/assets/images/home/PU.jpg";
import TPU from "@/assets/images/home/TPU.jpeg";
import Luoi from "@/assets/images/home/Luoi.jpg";
import XichNhua from "@/assets/images/home/4255b3ed72f3454da42feec4a2b4b7ff.jpg";
import PURang from "@/assets/images/home/PURang.jpg";
import DayTruyenDong from "@/assets/images/home/day-dai-truyen-dong.jpg";
import dinhFlexco from "@/assets/images/home/10_Flexco Belt Fasteners.jpg";

export const products = [
  {
    img: PVC,
    title: "Băng tải PVC",
    url: "/PVC",
  },
  {
    img: PU,
    title: "Băng tải PU",
    url: "/PU",
  },
  {
    img: TPU,
    title: "Băng tải TPU",
    url: "/TPU",
  },
  {
    img: Luoi,
    title: "Băng tải chịu nhiệt",
    url: "/ChiuNhiet",
  },
  {
    img: XichNhua,
    title: "Băng tải xích nhựa HONG'S BELT",
    url: "/XichNhua",
  },
  {
    img: PURang,
    title: "Dây PU răng",
    url: "/PURang",
  },
  {
    img: DayTruyenDong,
    title: "Dây đai truyền động",
    url: "/DayTruyenDong",
  },
  {
    img: dinhFlexco,
    title: "Nẹp FLexco",
    url: "/dinhFlexco",
  },
];

const Products = () => (
  <section className="flex flex-col">
    <h1 className="text-4xl font-medium mt-5 text-center m-5">SẢN PHẨM</h1>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product, index) => (
        <Link
          href={product.url}
          key={index}
          className="flex-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] overflow-hidden bg-white rounded-2xl p-2 flex flex-col"
        >
          <Image
            src={product.img}
            alt={product.title}
            className="object-cover aspect-square"
          />
          <div className="flex items-center justify-center flex-1 mt-3">
            <h2 className="text-center text-2xl font-medium mt-1 line-clamp-2">
              {product.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

import HangKhong from "@/assets/images/home/hang_khong.png";
import BanhXe from "@/assets/images/home/banh_xe.png";
import ThucPham from "@/assets/images/home/thuc_pham.png";
import Go from "@/assets/images/home/go.png";
import BaoBi from "@/assets/images/home/bao_bi.png";
import DienTu from "@/assets/images/home/dien_tu.png";
import ThuocLa from "@/assets/images/home/thuoc_la.png";
import InAnMayMac from "@/assets/images/home/inan_maymac.png";
const industry = [
  {
    img: HangKhong,
    title: "Hàng không",
    url: "/HangKhong",
  },
  {
    img: BanhXe,
    title: "Sản xuất bánh xe",
    url: "/BanhXe",
  },
  {
    img: ThucPham,
    title: "Thực phẩm",
    url: "/ThucPham",
  },
  {
    img: Go,
    title: "Ngành Gỗ",
    url: "/Go",
  },
  {
    img: BaoBi,
    title: "Bao bì",
    url: "/BaoBi",
  },
  {
    img: DienTu,
    title: "Ngành điện tử",
    url: "/DienTu",
  },
  {
    img: ThuocLa,
    title: "Ngành thuốc lá",
    url: "/ThuocLa",
  },
  {
    img: InAnMayMac,
    title: "In ấn, may mặc",
    url: "/InAnMayMac",
  },
];

const Industry = () => (
  <section className="flex flex-col mt-20">
    <h1 className="text-4xl font-medium mt-5 text-center m-5">
      NGÀNH NGHỀ ỨNG DỤNG
    </h1>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {industry.map((item, index) => (
        <Link
          href={item.url}
          key={index}
          className="flex-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] overflow-hidden bg-white rounded-2xl p-2 flex flex-col"
        >
          <Image
            src={item.img}
            alt={item.title}
            className="object-cover aspect-square"
          />
          <div className="flex items-center justify-center flex-1 mt-3">
            <h2 className="text-center text-2xl font-medium mt-1">
              {item.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

import delivery from "@/assets/images/home/f-delivery.png";
import technique from "@/assets/images/home/technique.png";
import quality from "@/assets/images/home/quality.png";
import Partner from "@/components/partners";

const rate = [
  {
    img: delivery,
    title: "Giao hàng nhanh",
    description:
      "Bộ phận kỹ thuật toàn thời gian của chúng tôi luôn sẵn sàng với mọi trách nhiệm để đảm bảo tất cả các sản phẩm đã cắt theo đúng quy cách của khách hàng yêu cầu và giao hàng đúng hoặc sớm hơn ngày đã hẹn.",
  },
  {
    img: technique,
    title: "Kỹ thuật cao",
    description:
      "Với Đội ngũ kỹ thuật có hơn 20 năm kinh nghiệm, chúng tôi hoan nghênh bất kỳ yêu cầu thách thức nào và phát triển mạnh trong việc cung cấp các giải pháp kỹ thuật trên nhiều loại sản phẩm của chúng tôi.",
  },
  {
    img: quality,
    title: "Chất lượng tốt",
    description:
      "Tất cả mọi mặt hàng của công ty thế cao luôn đạt tiêu chuẩn của quốc tế có giấy giám định đảm bảo của các công ty cung cấp và đặc biệt rằng nhà cung cấp của thế cao luôn nằm trong top 50 trong ngành băng tải.",
  },
];

const Rate = () => (
  <section className="flex flex-col mt-32">
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {rate.map((item, index) => (
        <div
          key={index}
          className="flex-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] overflow-hidden bg-white rounded-2xl p-5 flex flex-col items-center"
        >
          <Image
            src={item.img}
            alt={item.title}
            className="object-contain aspect-square my-6 invert"
          />
          <div className="flex items-center justify-center flex-1 mt-3">
            <h2 className="text-center text-4xl font-medium mt-1 uppercase text-[--color-primary] mb-6">
              {item.title}
            </h2>
          </div>
          <p className="text-left text-base mb-3 text-[--color-primary] px-3">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

import { useEffect, useState } from "react";
import { getData } from "@/services";

export default function Home() {
  const [getData_, setData] = useState([]);

  useEffect(() => {
    getData("/blogs").then((data) => {
      setData(Object.values(data).reverse());
    });
  }, []);

  return (
    <Layout>
      <SwiperCustom />

      <Body>
        <Intro />
        <Products />
        <Industry />
        <Rate />
        <Partner />
        <section className="flex flex-col mt-20">
          <h1 className="text-4xl font-medium mt-5 text-center m-5">BLOGS</h1>
          <div className="flex mt-10 md:flex-row flex-col">
            <div className="flex-1 flex flex-col p-5">
              {getData_[0]?.images[0]?.img && (
                <Image
                  src={getData_[0]?.images[0]?.img}
                  alt={"as"}
                  className="object-contain aspect-4/3 w-full"
                  width={500}
                  height={300}
                />
              )}

              <h1 className="text-2xl font-medium mt-5 line-clamp-2">
                {getData_[0]?.title}
              </h1>
              <p className="text-base mt-1 text-[--color-gray] line-clamp-2">
                {getData_[0]?.summary}
              </p>
              {/* day */}
              <p className="text-base mt-1 text-[--color-gray]">
                Monday 23, 2023
              </p>
            </div>
            <div className="flex-1 flex flex-col ml-5">
              {getData_.slice(1, 4).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col hover:bg-gray-100 p-5 rounded-md cursor-pointer"
                >
                  <div className="flex">
                    <Image
                      src={item.images[0]?.img}
                      alt={"as"}
                      className="object-contain aspect-4/3"
                      width={150}
                      height={150}
                    />
                    <div className="flex-1 ml-5">
                      <h1 className="text-2xl font-medium mt-5 line-clamp-2">
                        {item.title}
                      </h1>
                      <p className="text-base mt-1 text-[--color-gray] line-clamp-2">
                        {item.summary}
                      </p>
                      {/* day */}
                      <p className="text-base mt-1 text-[--color-gray]">
                        Monday 23, 2023
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Body>
    </Layout>
  );
}
