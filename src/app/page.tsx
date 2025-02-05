// export default function Home() {
//   return <div className="text-3xl font-bold underline">Hello World</div>;
// }
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
