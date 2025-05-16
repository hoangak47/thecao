import { useEffect, useRef } from "react";

export default function Editor({ data = "", onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      const ckeditorScript = document.createElement("script");
      ckeditorScript.src = "https://hoangak47.github.io/ckeditor/ckeditor.js";
      ckeditorScript.onload = () => {
        if (window.CKEDITOR && !window.CKEDITOR.instances.editor1) {
          const editor = window.CKEDITOR.replace("editor1", {
            filebrowserUploadUrl: "/api/upload",
            filebrowserUploadMethod: "form",
            filebrowserImageUploadUrl: "/api/upload",
            removeDialogTabs: "link:upload;image:Upload",
          });
          editorRef.current = editor;

          editor.on("instanceReady", () => {
            if (data) {
              editor.setData(data);
            }
            if (onChange) {
              editor.on("change", function () {
                const content = editor.getData();
                onChange(content);
              });
            }

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
                  editor.insertHtml(
                    `<img src="${data.url}" alt="Uploaded Image" style="max-width:100%;" />`
                  );
                } else {
                  alert("Upload thất bại!");
                }
              };

              input.click();
            };

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

  useEffect(() => {
    if (editorRef.current && data !== editorRef.current.getData()) {
      editorRef.current.setData(data);
    }
  }, [data]);

  return (
    <div>
      <h2>CKEditor + Upload + URL tự sinh</h2>
      <textarea id="editor1" />
    </div>
  );
}
