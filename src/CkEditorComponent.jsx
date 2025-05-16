// components/CKEditorEditor.js
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CKEditorEditor({ data, onChange }) {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfig}
        data={data}
        onChange={(event, editor) => onChange(editor.getData())}
      />
    </div>
  );
}
