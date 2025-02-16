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
    <div className="col-start-2 col-end-2 flex flex-col">
      {editor && <TextMenu editor={editor} />}
      <EditorContent
        editor={editor}
        className="flex-1"
      />
    </div>
  );
};

export default Editor;
