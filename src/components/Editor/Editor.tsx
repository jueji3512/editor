'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextMenu from '@/components/Menu/TextMenu/TextMenu';
import './index.css';

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
  });

  return (
    <div>
      {editor && <TextMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
