/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { FiEdit2, FiTrash2, FiEye, FiCheck, FiX } from "react-icons/fi";
import { BsFilter, BsSearch } from "react-icons/bs";
import CkeditorComponent from "@/components/CkeditorComponent";
import { addData, getData, getFromSessionStorage } from "@/services";

const News = () => {
  const [posts, setPosts] = useState([]);

  const [selectedPosts, setSelectedPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    image: null,
    imagePreview: null,
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
    // Logic to save the post, including the title, summary, and editorData
    const newPost = {
      id: Date.now(),
      title: formData.title,
      summary: formData.summary,
      image: formData.imagePreview,
      content: editorData,
      status: "Published", // or "Published" based on your logic
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
      });
      setEditorData("");
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };

  const togglePostSelection = (postId) => {
    setSelectedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const handleBulkDelete = () => {
    setPosts((prev) => prev.filter((post) => !selectedPosts.includes(post.id)));
    setSelectedPosts([]);
  };
  const [editorData, setEditorData] = useState("");
  const [indexEdit, setIndexEdit] = useState(null);

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
    <div className="min-h-screen bg-gray-100 p-4">
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
              {selectedPosts.length > 0 && (
                <button
                  onClick={handleBulkDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  aria-label="Delete selected posts"
                >
                  Delete Selected ({selectedPosts.length})
                </button>
              )}
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
                  <th className="w-8 p-4">
                    <input
                      type="checkbox"
                      className="rounded"
                      onChange={() => {}}
                    />
                  </th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left hidden md:table-cell">
                    Summary
                  </th>
                  <th className="p-4 text-left hidden lg:table-cell">Status</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr key={post.id} className="border-t hover:bg-gray-50">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedPosts.includes(post.id)}
                        onChange={() => togglePostSelection(post.id)}
                        className="rounded"
                      />
                    </td>
                    <td className="p-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="p-4 font-medium">{post.title}</td>
                    <td className="p-4 hidden md:table-cell">{post.summary}</td>
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
                            setIndexEdit(index);
                            setShowForm(true);
                          }}
                        >
                          <FiEdit2 className="w-5 h-5 text-blue-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-full"
                          aria-label="Delete post"
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
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full p-6 h-screen overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Add New Post</h2>
                <button
                  onClick={() => setShowForm(false)}
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
                      {formData.imagePreview ? (
                        <img
                          src={formData.imagePreview}
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
                    value={
                      indexEdit !== null
                        ? posts[indexEdit].title
                        : formData.title
                    }
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
                    value={
                      indexEdit !== null
                        ? posts[indexEdit].summary
                        : formData.summary
                    }
                    onChange={(e) =>
                      setFormData({ ...formData, summary: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Description</label>
                  <CkeditorComponent
                    data={
                      indexEdit !== null ? posts[indexEdit].content : editorData
                    }
                    onChange={(data) => setEditorData(data)}
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
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
  );
};

export default News;