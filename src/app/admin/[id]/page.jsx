/* eslint-disable @next/next/no-img-element */
"use client";

import LayoutAdmin from "@/constants/layout/layoutAdmin";
import {
  addData,
  deleteData,
  getData,
  getFromSessionStorage,
  updateData,
} from "@/services";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiEdit2, FiTrash2, FiSave, FiPlus } from "react-icons/fi";

const AdminProductList = () => {
  const ref = useParams().id || "PVC";
  const [editMode, setEditMode] = useState({});
  const [editedProduct, setEditedProduct] = useState({});

  const handleEdit = (productId) => {
    setEditMode((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
    setEditedProduct((prev) => ({
      ...prev,
      [productId]: { ...data.find((p) => p.id === productId) },
    }));
  };

  const handleSave = async (productId) => {
    setData((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...editedProduct[productId] } : product
      )
    );
    setEditMode((prev) => ({ ...prev, [productId]: false }));

    const root = `products/${ref}/data`;

    const updatedProduct = editedProduct[productId];

    await updateData(root, productId, updatedProduct);
  };

  const handleDelete = async (productId) => {
    setData((prev) => prev.filter((product) => product.id !== productId));

    setEditMode((prev) => ({ ...prev, [productId]: false }));

    const index = data.findIndex((product) => product.id === productId);

    if (index !== -1) {
      const root = `products/${ref}/data/`;
      await deleteData(root, productId);
    }
  };

  const handleFieldChange = (productId, field, value) => {
    setEditedProduct((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [field]: value,
      },
    }));
  };

  const handleInfoChange = async (productId, index, value) => {
    setEditedProduct((prev) => {
      const newInfo = [...prev[productId].info];
      newInfo[index] = value;
      return {
        ...prev,
        [productId]: {
          ...prev[productId],
          info: newInfo,
        },
      };
    });
  };

  const addNewProduct = async () => {
    const newProduct = {
      id: Date.now(),
      img: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc",
      name: "New Product",
      material: "Material",
      info: ["Feature 1", "Feature 2", "Feature 3"],
      parentId: 0,
      productTypeID: 0,
      type: 1,
    };

    setData((prev) => [newProduct, ...prev]);

    const root = `products/${ref}/data/${newProduct.id}`;
    await addData(root, newProduct);
  };

  const addNewInfo = (productId) => {
    setEditedProduct((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        info: ["New Feature", ...prev[productId].info],
      },
    }));
  };

  const deleteInfo = (productId, infoIndex) => {
    setEditedProduct((prev) => {
      const newInfo = [...prev[productId].info];
      newInfo.splice(infoIndex, 1);
      return {
        ...prev,
        [productId]: {
          ...prev[productId],
          info: newInfo,
        },
      };
    });
  };

  const [data, setData] = React.useState([]);
  useEffect(() => {
    const test = getFromSessionStorage("login");

    if (test) {
      getData(`products/${ref}/data`)
        .then((data) => {
          setData(Object.values(data) || []);
        })
        .catch((error) => {
          return error;
        });
    }
  }, []);

  return (
    <LayoutAdmin>
      <div className="container mx-auto p-6 max-w-7xl bg-white rounded shadow-md h-full overflow-y-auto pb-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Management
          </h1>
          <button
            onClick={addNewProduct}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Add new product"
          >
            <FiPlus className="mr-2" /> Add Product
          </button>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Material
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Info
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {editMode[product.id] ? (
                      <input
                        type="text"
                        value={editedProduct[product.id]?.img || ""}
                        onChange={(e) =>
                          handleFieldChange(product.id, "img", e.target.value)
                        }
                        className="block w-full px-3 py-1 text-sm border rounded focus:outline-none focus:border-blue-500"
                      />
                    ) : product.img.startsWith("https") ? (
                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-20 w-20 rounded-md object-cover"
                        width={500}
                        height={500}
                      />
                    ) : (
                      <Image
                        src={require(
                          `@/assets/images/PVC/${product.img.split("/")[4]}`
                        )}
                        alt={product.name}
                        className="h-20 w-20 rounded-md object-cover"
                        width={500}
                        height={500}
                      />
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {editMode[product.id] ? (
                      <input
                        type="text"
                        value={editedProduct[product.id]?.name || ""}
                        onChange={(e) =>
                          handleFieldChange(product.id, "name", e.target.value)
                        }
                        className="block w-full px-3 py-1 text-sm border rounded focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {editMode[product.id] ? (
                      <input
                        type="text"
                        value={editedProduct[product.id]?.material || ""}
                        onChange={(e) =>
                          handleFieldChange(
                            product.id,
                            "material",
                            e.target.value
                          )
                        }
                        className="block w-full px-3 py-1 text-sm border rounded focus:outline-none focus:border-blue-500"
                      />
                    ) : (
                      product.material
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editMode[product.id] ? (
                      <div className="space-y-2">
                        {editedProduct[product.id]?.info.map((info, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="text"
                              value={info}
                              onChange={(e) =>
                                handleInfoChange(
                                  product.id,
                                  index,
                                  e.target.value
                                )
                              }
                              className="block w-full px-3 py-1 text-sm border rounded focus:outline-none focus:border-blue-500"
                            />
                            <button
                              onClick={() => deleteInfo(product.id, index)}
                              className="text-red-600 hover:text-red-800 transition-colors"
                            >
                              <FiTrash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => addNewInfo(product.id)}
                          className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                        >
                          <FiPlus className="w-4 h-4 mr-1" /> Add Info
                        </button>
                      </div>
                    ) : (
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {product.info.map((info, index) => (
                          <li key={index}>{info}</li>
                        ))}
                      </ul>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-3">
                      {editMode[product.id] ? (
                        <button
                          onClick={() => handleSave(product.id)}
                          className="text-green-600 hover:text-green-800 transition-colors"
                          aria-label="Save changes"
                        >
                          <FiSave className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEdit(product.id)}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          aria-label="Edit product"
                        >
                          <FiEdit2 className="w-5 h-5" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                        aria-label="Delete product"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default AdminProductList;
