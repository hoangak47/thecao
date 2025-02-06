"use client";
import React from "react";
import dynamic from "next/dynamic";
const App = dynamic(() => import("@/components/CkeditorComponent2"), {
  ssr: false,
});

import { addData, getData } from "@/services";
export default function Aviation() {
  const [editorData, setEditorData] = React.useState("");

  React.useEffect(() => {
    getData("aviation").then((data) => {
      console.log(data);
      setEditorData(data.content);
    });
  }, []);

  const handleSubmit = async () => {
    try {
      await addData("aviation", { content: editorData });
      alert("Đã lưu");
    } catch (error) {
      alert("Lỗi");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <App data={editorData} onChange={(data) => setEditorData(data)} />
      <button className="mt-4 align-items-center" onClick={handleSubmit}>
        Lưu
      </button>
    </div>
  );
}
