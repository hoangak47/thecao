"use client";

import { useEffect } from "react";

export default function Editor() {
  useEffect(() => {
    const loadScripts = async () => {
      const ckeditorScript = document.createElement("script");
      ckeditorScript.src = "/ckeditor/ckeditor.js";
      ckeditorScript.onload = () => {
        if (window.CKEDITOR) {
          const editor = window.CKEDITOR.replace("editor1", {
            filebrowserUploadUrl: "/api/upload",
            filebrowserUploadMethod: "form",
            filebrowserImageUploadUrl: "/api/upload", // Đường upload ảnh
            removeDialogTabs: "link:upload;image:Upload",
          });

          editor.on("instanceReady", () => {
            // 🛠️ Khi editor đã sẵn sàng, thêm nút "Tải ảnh lên nhanh"
            const uploadButton = document.createElement("button");
            uploadButton.textContent = "📤 Tải ảnh lên nhanh";
            uploadButton.style.marginBottom = "10px";
            uploadButton.style.padding = "6px 12px";
            uploadButton.style.background = "#4CAF50";
            uploadButton.style.color = "white";
            uploadButton.style.border = "none";
            uploadButton.style.borderRadius = "4px";
            uploadButton.style.cursor = "pointer";

            uploadButton.onclick = async () => {
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "image/*";

              input.onchange = async (e) => {
                const file = e.target?.files?.[0];
                if (!file) return;

                const formData = new FormData();
                formData.append("upload", file);

                const res = await fetch("/api/upload", {
                  method: "POST",
                  body: formData,
                });

                const data = await res.json();
                if (data && data.url) {
                  // 👉 Sau khi upload xong, chèn ảnh luôn vào nội dung
                  editor.insertHtml(
                    `<img src="${data.url}" alt="Uploaded Image" style="max-width:100%;" />`
                  );
                } else {
                  alert("Upload thất bại!");
                }
              };

              input.click();
            };

            // ✅ Thêm nút vào đúng chỗ
            const editorContainer =
              document.getElementById("editor1").parentElement;
            editorContainer.insertBefore(
              uploadButton,
              editorContainer.firstChild
            );
          });
        }
      };
      document.body.appendChild(ckeditorScript);
    };

    loadScripts();
  }, []);

  return (
    <div>
      <h2>CKEditor + Upload + URL tự sinh</h2>
      <textarea id="editor1" />
    </div>
  );
}
