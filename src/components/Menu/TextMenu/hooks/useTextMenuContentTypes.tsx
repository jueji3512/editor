import { Editor, useEditorState } from '@tiptap/react';

import { ContentTypePickerOption } from '@/components/Menu/TextMenu/components/ContentTypePicker';

export function useTextMenuContentTypes(editor: Editor) {
  return useEditorState({
    editor,
    selector: (ctx): ContentTypePickerOption[] => [
      {
        icon: 'Type',
        label: 'Body Text',
        id: 'body-text',
        type: 'option',
        disabled: () => false,
        isActive: () =>
          ctx.editor.isActive('paragraph') &&
          !ctx.editor.isActive('orderedList') &&
          !ctx.editor.isActive('bulletList') &&
          !ctx.editor.isActive('taskList'),
        onClick: () => ctx.editor.chain().focus().setParagraph().run(),
      },
      {
        icon: 'Heading1',
        label: 'Heading 1',
        id: 'heading-1',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('heading', { level: 1 }),
        onClick: () => ctx.editor.chain().focus().setHeading({ level: 1 }).run(),
      },
      {
        icon: 'Heading2',
        label: 'Heading 2',
        id: 'heading-2',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('heading', { level: 2 }),
        onClick: () => ctx.editor.chain().focus().setHeading({ level: 2 }).run(),
      },
      {
        icon: 'Heading3',
        label: 'Heading 3',
        id: 'heading-3',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('heading', { level: 3 }),
        onClick: () => ctx.editor.chain().focus().setHeading({ level: 3 }).run(),
      },
      {
        icon: 'Heading4',
        label: 'Heading 4',
        id: 'heading-4',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('heading', { level: 4 }),
        onClick: () => ctx.editor.chain().focus().setHeading({ level: 4 }).run(),
      },
      {
        icon: 'Heading5',
        label: 'Heading 5',
        id: 'heading-5',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('heading', { level: 5 }),
        onClick: () => ctx.editor.chain().focus().setHeading({ level: 5 }).run(),
      },
      {
        icon: 'Heading6',
        label: 'Heading 6',
        id: 'heading-6',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('heading', { level: 6 }),
        onClick: () => ctx.editor.chain().focus().setHeading({ level: 6 }).run(),
      },
      {
        icon: 'ListOrdered',
        label: 'Ordered List',
        id: 'ordered-list',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('orderedList'),
        onClick: () => ctx.editor.chain().focus().toggleOrderedList().run(),
      },
      {
        icon: 'List',
        label: 'Unordered List',
        id: 'unordered-list',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('bulletList'),
        onClick: () => ctx.editor.chain().focus().toggleBulletList().run(),
      },
      {
        icon: 'ListTodo',
        label: 'Task List',
        id: 'task-list',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('taskList'),
        onClick: () => ctx.editor.chain().focus().toggleTaskList().run(),
      },
      {
        icon: 'Braces',
        label: 'Code Block',
        id: 'code-block',
        type: 'option',
        disabled: () => false,
        isActive: () => ctx.editor.isActive('codeBlock'),
        onClick: () => ctx.editor.chain().focus().toggleCodeBlock().run(),
      },
    ],
  });
}
