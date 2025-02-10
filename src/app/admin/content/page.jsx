"use client";
import React from "react";
import dynamic from "next/dynamic";
const App = dynamic(() => import("@/components/CkeditorComponent2"), {
  ssr: false,
});

import { addData, getData } from "@/services";
import Dropdown from "@/components/SelectBox/page";
export default function Content({}) {
  const [editorData, setEditorData] = React.useState("");
  const [selected, setSelected] = React.useState("");
  React.useEffect(() => {
    if (!selected) return;
    getData("content/" + selected).then((data) => {
      setEditorData(data?.content || "");
    });
  }, [selected]);

  const handleSubmit = async () => {
    try {
      await addData("content/" + selected, { content: editorData });
      alert("Đã lưu");
    } catch (error) {
      alert("Lỗi");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <Dropdown
        selected={selected}
        setSelected={setSelected}
        className="mb-10"
      />
      <App data={editorData} onChange={(data) => setEditorData(data)} />
      <button className="mt-4 align-items-center" onClick={handleSubmit}>
        Lưu
      </button>
    </div>
  );
}
