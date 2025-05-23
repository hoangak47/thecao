"use client";
import React from "react";
import dynamic from "next/dynamic";
const LegacyCKEditor = dynamic(() => import("@/components/LegacyCKEditor"), {
  ssr: false,
});
import { addData, getData } from "@/services";
import Dropdown from "@/components/SelectBox/page";
import LayoutAdmin from "@/constants/layout/layoutAdmin";

export default function Content({}) {
  const [editorData, setEditorData] = React.useState("");
  const [selected, setSelected] = React.useState("");

  React.useEffect(() => {
    if (!selected) return;
    getData("content/" + selected)
      .then((data) => {
        setEditorData(data?.content || "");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setEditorData("");
      });
  }, [selected]);

  const handleSubmit = async () => {
    try {
      // console.log("editorData:", editorData);
      await addData("content/" + selected, { content: editorData });
      alert("Đã lưu");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Lỗi");
    }
  };

  return (
    <LayoutAdmin>
      <div className="container mx-auto p-4 max-w-7xl h-full overflow-y-auto pb-32 relative">
        <div className="flex mb-4 sticky top-0 left-0 right-0 bg-white p-4 rounded shadow-md z-10">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSubmit}
          >
            Lưu
          </button>
          <Dropdown
            selected={selected}
            setSelected={setSelected}
            className=""
          />
        </div>
        <LegacyCKEditor
          data={editorData}
          onChange={(data) => {
            setEditorData(data);
          }}
        />
      </div>
    </LayoutAdmin>
  );
}
