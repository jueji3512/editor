'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import ExtensionKit from './extensions';
import TextMenu from '@/components/Menu/TextMenu/TextMenu';

const Editor = () => {
  const editor = useEditor({
    extensions: [...ExtensionKit()],
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
