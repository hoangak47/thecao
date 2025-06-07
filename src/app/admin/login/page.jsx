"use client";

import { useAppDispatch } from "@/lib/hooks";
import { getData, saveToSessionStorage } from "@/services";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData("/admin").then((data) => {
      console.log(data.id, formData.id, data.pass, formData.password);
      if (data.id === formData.id && data.pass === formData.password) {
        saveToSessionStorage("login", true);
        router.push("/admin/PVC");
      }
    });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-200 rounded-lg"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200 rounded-lg"></div>
        <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="text-center mb-6">
            <h1 className="text-red-600 text-2xl font-bold">
              HỆ THỐNG QUẢN TRỊ
            </h1>
            <p className="text-gray-600 text-sm py-8">
              Vui lòng đăng nhập vào tài khoản của bạn!
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Tài khoản</label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="Tài khoản"
                  type="text"
                  id="id"
                  name="id"
                  required
                  value={formData.id}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mật khẩu</label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                  placeholder=".........."
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <input className="mr-2" id="remember" type="checkbox" />
              <label className="text-gray-700" htmlFor="remember">
                Ghi nhớ đăng nhập
              </label>
            </div>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
