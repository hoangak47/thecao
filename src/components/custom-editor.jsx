// components/custom-editor.js
"use client"; // only in App Router

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  Table,
  TableToolbar,
} from "ckeditor5";
import { SlashCommand } from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

function CustomEditor() {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "bold",
            "italic",
            "|",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "insertTable",
          ],
        },
        plugins: [
          Bold,
          Essentials,
          Italic,
          Mention,
          Paragraph,
          SlashCommand,
          Undo,
          FontSize,
          FontFamily,
          FontColor,
          FontBackgroundColor,
          Table,
          TableToolbar,
        ],
        table: {
          defaultHeadings: { rows: 1, columns: 1 },
        },
        licenseKey:
          "ZXJEalJQSHhnM3pGWXB4RDc2VUc4RmRuVnA5Lzk4V2pKR0dJT3l2a29wYS9QNlk1WDRUQ1pzaHJKQnRGK2c9PS1NakF5TkRBNU1qUT0",
        mention: {
          // Mention configuration
        },
        initialData: "<p></p>",
      }}
    />
  );
}

export default CustomEditor;
