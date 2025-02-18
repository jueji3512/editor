'use client';

import { useEditor, EditorContent } from '@tiptap/react';

import TextMenu from '@/components/Menu/TextMenu/TextMenu';

import ExtensionKit from './extensions';

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
