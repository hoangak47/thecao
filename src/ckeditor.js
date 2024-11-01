import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
// Import other necessary plugins...

class CustomEditor extends ClassicEditorBase {}

CustomEditor.builtinPlugins = [
  FontColor,
  FontBackgroundColor,
  // Include other necessary plugins like Image, Bold, Italic, etc.
];

export default CustomEditor;
