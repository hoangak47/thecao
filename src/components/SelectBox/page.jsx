"use client";

import { useState, useEffect } from "react";

export default function Dropdown({ selected, setSelected, className = "" }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Giả lập gọi API lấy danh mục nhiều cấp và một số danh mục chỉ có một cấp
    const fetchCategories = async () => {
      const data = [
        {
          value: "infomation",
          label: "Giới thiệu",
          subcategories: [],
        },
        {
          value: "product",
          label: "Sản phẩm",
          subcategories: [
            { value: "PVC", label: "PVC" },
            { value: "PU", label: "PU" },
            { value: "TPU", label: "TPU" },
            { value: "ChiuNhiet", label: "Chịu Nhiệt" },
            { value: "XichNhua", label: "Xích Nhựa" },
            { value: "PURang", label: "PU Răng" },
            { value: "DayTruyenDong", label: "Truyền Động" },
            { value: "dinhFlexco", label: "Nẹp" },
          ],
        },
        {
          value: "career",
          label: "Ngành nghề",
          subcategories: [
            { value: "bang-tai-thuc-pham", label: "Băng tải thực phẩm" },
            {
              value: "bang-tai-san-xuat-banh-xe",
              label: "Băng tải sản xuất bánh xe",
            },
            {
              value: "bang-tai-nganh-hang-khong",
              label: "Băng tải ngành hàng không",
            },
            { value: "bang-tai-nganh-go", label: "Băng tải ngành gỗ" },
            { value: "bang-tai-nganh-bao-bi", label: "Băng tải ngành bao bì" },
            {
              value: "bang-tai-nganh-may-mac",
              label: "Băng tải ngành in ấn, may mặc",
            },
            {
              value: "bang-tai-nganh-dien-tu",
              label: "Băng tải ngành điện tử",
            },
            { value: "bang-tai-thuoc-la", label: "Băng tải ngành thuốc lá" },
            {
              value: "bang-tai-nganh-da-granite",
              label: "Băng tải ngành đá Granite",
            },
            {
              value: "bang-tai-che-bien-thuy-san",
              label: "Băng tải ngành chế biến thủy sản",
            },
            {
              value: "bang-tai-nganh-ton-thep",
              label: "Băng tải ngành tôn thép",
            },
            { value: "bang-tai-nganh-nhom", label: "Băng tải ngành nhôm" },
            {
              value: "bang-tai-nganh-the-thao",
              label: "Băng tải ngành thể thao",
            },
            {
              value: "bang-tai-khai-thac-quang",
              label: "Băng tải khai thác quặng",
            },
          ],
        },
        {
          value: "",
          label: "Gia công",
          subcategories: [
            { value: "gia-cong-dan-go-thang", label: "Gia công dán gờ thẳng" },
            { value: "gia-cong-dan-gan", label: "Gia công dán gân" },
            { value: "gia-cong-dan-beo", label: "Gia công dán bèo" },
            { value: "gia-cong-dan-duc-lo", label: "Gia công đục lỗ" },
            { value: "gia-cong-dan-go-cong", label: "Gia công dán gờ cong" },
            { value: "bao-bien-bang-tai", label: "Bao biên băng tải" },
            { value: "gia-cong-dap-cao-su-pu-muss", label: "Gia công đắp cao su, PU, Muss" },
            { value: "gia-cong-bang-tai-tai-nha-may", label: "Gia công băng tải tại nhà máy" },
      
          ],
        },
      ];
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className={className + " w-64 mx-auto"}>
      <select
        id="dropdown"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((category) =>
          category.subcategories.length > 0 ? (
            <optgroup key={category.value} label={category.label}>
              {category.subcategories.map((sub) => (
                <option key={sub.value} value={sub.value}>
                  {sub.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          )
        )}
      </select>
    </div>
  );
}
