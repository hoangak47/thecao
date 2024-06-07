"use client";

import Image from "next/image";
import React from "react";
import "./header.css";
import { usePathname } from "next/navigation";
import { SVGmenu } from "@/assets/svg";

import HangKhong from "@/assets/images/home/hang_khong.png";
import BanhXe from "@/assets/images/home/banh_xe.png";
import ThucPham from "@/assets/images/home/thuc_pham.png";
import Go from "@/assets/images/home/go.png";
import BaoBi from "@/assets/images/home/bao_bi.png";
import DienTu from "@/assets/images/home/dien_tu.png";
import ThuocLa from "@/assets/images/home/thuoc_la.png";
import InAnMayMac from "@/assets/images/home/inan_maymac.png";
export const industry = [
  {
    img: HangKhong,
    title: "Hàng không",
    link: "/HangKhong",
  },
  {
    img: BanhXe,
    title: "Sản xuất bánh xe",
    link: "/BanhXe",
  },
  {
    img: ThucPham,
    title: "Thực phẩm",
    link: "/ThucPham",
  },
  {
    img: Go,
    title: "Ngành Gỗ",
    link: "/Go",
  },
  {
    img: BaoBi,
    title: "Bao bì",
    link: "/BaoBi",
  },
  {
    img: DienTu,
    title: "Ngành điện tử",
    link: "/DienTu",
  },
  {
    img: ThuocLa,
    title: "Ngành thuốc lá",
    link: "/ThuocLa",
  },
  {
    img: InAnMayMac,
    title: "In ấn, may mặc",
    link: "/InAnMayMac",
  },
];

const menu = [
  {
    title: "Trang chủ",
    link: "/",
  },
  {
    title: "Giới thiệu",
    link: "/infomation",
  },
  {
    title: "Sản phẩm",
    link: "#",
    nav: "products",
    children: [
      {
        title: "Băng tải PVC",
        link: "/PVC",
      },
      {
        title: "Băng tải PU",
        link: "/PU",
      },
      {
        title: "Băng tải TPU",
        link: "/TPU",
      },
      {
        title: "Băng tải chịu nhiệt",
        link: "/ChiuNhiet",
      },
      {
        title: "Băng tải xích nhựa",
        link: "/XichNhua",
      },
      {
        title: "Dây PU răng",
        link: "/PURang",
      },
      {
        title: "Dây đai truyền động",
        link: "/DayTruyenDong",
      },
      {
        title: "Nẹp FLexco",
        link: "/dinhFlexco",
      },
    ],
  },
  {
    title: "Ngành nghề",
    link: "/Career",
    children: industry,
  },
  {
    title: "Dịch vụ",
    link: "/services",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Liên hệ",
    link: "/contact",
  },
];

export default function Header() {
  const currentPath = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative">
      <div className="flex flex-wrap md:items-center justify-between mx-auto md:px-11 py-5 px-4  md:flex-row flex-col">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={require("@/assets/images/logo.png")}
            alt="The Cao"
            width={200}
          />
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="flex md:hidden border-2 p-2 rounded-md cursor-pointer absolute top-4 right-4 z-50"
        >
          <SVGmenu width="30" height="30" fill="#000" />
        </div>
        <div
          className={`md:flex flex-col md:w-auto flex-1 items-end ps-4 md:visible md:opacity-100 ${
            open ? "visible opacity-100 flex" : "invisible opacity-0 hidden"
          }`}
        >
          <div className="flex text-[#9e9e9e] w-full justify-end  border-b border-[#e2e8f0] text-sm p-2">
            <a href="tel:+84788388588" className="mr-2">
              0788 388 588
            </a>
            <a href="#" className="text-black mr-2 underline">
              VN
            </a>
            <p className="mr-2">/</p>
            <a href="#" className="mr-2">
              EU
            </a>
            <p className="mr-2">/</p>
            <a href="#" className="mr-2">
              CN
            </a>
          </div>
          <div className="flex md:flex-row flex-col w-full justify-end">
            {menu.map((item, index) => {
              return (
                <div className="p-2 ml-3 text-md dropdown" key={index}>
                  <a
                    href={item.link}
                    className={`nav-link position-relative dropdown-toggle text-nowrap text-lg  text-[#9e9e9e] ${
                      currentPath === item.link ||
                      currentPath.split("/")[1] === item.nav
                        ? "active text-black"
                        : ""
                    }`}
                  >
                    {item.title}
                  </a>
                  <ul className="dropdown-menu bg-white overflow-hidden">
                    {item?.children?.map((child) => {
                      return (
                        <li
                          key={child.link}
                          className="py-1  p-2 hover:bg-gray-100"
                        >
                          <a href={child.link} className="dropdown-item">
                            {child.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
