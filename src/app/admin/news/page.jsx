/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { FiEdit2, FiTrash2, FiEye, FiCheck, FiX } from "react-icons/fi";
import { BsFilter, BsSearch } from "react-icons/bs";
// import CkeditorComponent from "@/components/CkeditorComponent";
import {
  addData,
  deleteData,
  getData,
  getFromSessionStorage,
  updateData,
} from "@/services";
// import App from "@/components/CkeditorComponent2";

import dynamic from "next/dynamic";
import LayoutAdmin from "@/constants/layout/layoutAdmin";

const App = dynamic(() => import("@/components/CkeditorComponent2"), {
  ssr: false,
});

const News = () => {
  const [posts, setPosts] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    image: null,
    imagePreview: null,
    link: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Tạo một đối tượng FileReader
      const reader = new FileReader();

      // Định nghĩa hàm callback khi file được đọc thành công
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          imagePreview: reader.result, // Lưu chuỗi base64
        });
      };

      // Đọc file dưới dạng Data URL (base64)
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id) {
      const newPost = {
        id: Date.now(),
        title: formData.title,
        summary: formData.summary,
        image: formData.imagePreview,
        content: editorData,
        status: "Published", // or "Published" based on your logic
        link: generateSlug(formData.title),
      };

      try {
        await addData(`news/${newPost.id}`, newPost); // Gọi hàm addData với đường dẫn "news/"
        // Reset form sau khi thêm thành công
        setShowForm(false);
        setFormData({
          title: "",
          summary: "",
          image: null,
          imagePreview: null,
          link: "",
        });
        setEditorData("");

        setPosts((prev) => [newPost, ...prev]);
      } catch (error) {
        console.error("Error adding data: ", error);
      }
    } else {
      const newPost = {
        title: formData.title,
        summary: formData.summary,
        image: formData.imagePreview || formData.image,
        content: editorData,
        status: "Published", // or "Published" based on your logic
        link: generateSlug(formData.title),
      };

      try {
        await updateData(`news`, formData.id, newPost); // Gọi hàm addData với đường dẫn "news/"
        setShowForm(false);
        setFormData({
          title: "",
          summary: "",
          image: null,
          imagePreview: null,
          link: "",
        });
        setEditorData("");

        setPosts((prev) =>
          prev.map((post) => (post.id === formData.id ? newPost : post))
        );
      } catch (error) {
        console.error("Error adding data: ", error);
      }
    }
  };

  const handleDelete = (postId) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));

    deleteData(`news`, postId);
  };

  const [editorData, setEditorData] = useState("");

  useEffect(() => {
    const test = getFromSessionStorage("login");

    if (test) {
      getData(`news`)
        .then((data) => {
          setPosts(Object.values(data) || []);
        })
        .catch((error) => {
          return error;
        });
    }
  }, []);

  return (
    <LayoutAdmin>
      <div className="min-h-screen bg-gray-100 p-4 h-full overflow-y-auto pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Post Management
              </h1>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  aria-label="Add new post"
                >
                  Add New Post
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Post List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-4 text-left">Image</th>
                    <th className="p-4 text-left">Title</th>
                    <th className="p-4 text-left hidden md:table-cell">
                      Summary
                    </th>
                    <th className="p-4 text-left hidden lg:table-cell">
                      Status
                    </th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="p-4 font-medium">{post.title}</td>
                      <td className="p-4 hidden md:table-cell">
                        {post.summary}
                      </td>
                      <td className="p-4 hidden lg:table-cell">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${post.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                        >
                          {post.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            className="p-2 hover:bg-gray-100 rounded-full"
                            aria-label="Edit post"
                            onClick={() => {
                              setShowForm(true);
                              setFormData(post);
                              setEditorData(post.content);
                            }}
                          >
                            <FiEdit2 className="w-5 h-5 text-blue-600" />
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 rounded-full"
                            aria-label="Delete post"
                            onClick={() => handleDelete(post.id)}
                          >
                            <FiTrash2 className="w-5 h-5 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add/Edit Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 default">
              <div className="bg-white rounded-lg max-w-4xl w-full p-6 h-screen overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Add New Post</h2>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setFormData({
                        title: "",
                        summary: "",
                        image: null,
                        imagePreview: null,
                        link: "",
                      });
                      setEditorData("");
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full"
                    aria-label="Close form"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">Image</label>
                    <div className="flex items-center gap-4">
                      <div className="relative w-32 h-32 border-2 border-dashed rounded-lg overflow-hidden">
                        {formData.imagePreview || formData.image ? (
                          <img
                            src={formData.imagePreview || formData.image}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <span className="text-gray-400">No image</span>
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer"
                      >
                        Choose Image
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Summary</label>
                    <input
                      type="text"
                      value={formData.summary}
                      onChange={(e) =>
                        setFormData({ ...formData, summary: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Description
                    </label>
                    {/* <CkeditorComponent
                    data={editorData}
                    onChange={(data) => setEditorData(data)}
                  /> */}
                    <App
                      data={editorData}
                      onChange={(data) => setEditorData(data)}
                      className={"editor-container__editor"}
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setFormData({
                          title: "",
                          summary: "",
                          image: null,
                          imagePreview: null,
                          link: "",
                        });
                        setEditorData("");
                      }}
                      className="px-4 py-2 border rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Save Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </LayoutAdmin>
  );
};

function generateSlug(title) {
  return title
    .toLowerCase() // Chuyển tất cả thành chữ thường
    .trim() // Loại bỏ khoảng trắng đầu và cuối
    .replace(/[^a-z0-9\s-]/g, "") // Loại bỏ ký tự đặc biệt, chỉ giữ lại chữ, số và khoảng trắng
    .replace(/\s+/g, "-") // Thay khoảng trắng thành dấu gạch ngang
    .replace(/-+/g, "-"); // Loại bỏ dấu gạch ngang liên tiếp
}

export default News;
