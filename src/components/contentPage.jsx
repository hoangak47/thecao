"use client";

import React from "react";

import { getData } from "@/services";

export default function ContenPage({ id }) {
  const [Data, setData] = React.useState("");

  React.useEffect(() => {
    getData(id).then((data) => {
      setData(data);
    });
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: Data?.content }} />;
}
