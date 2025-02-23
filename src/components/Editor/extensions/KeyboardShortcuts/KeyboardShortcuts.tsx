import { Extension, Editor } from '@tiptap/react';

export const KeyboardShortcuts = Extension.create({
  name: 'keyboardShortcuts',
  addKeyboardShortcuts() {
    return {
      'Mod-a': function ({ editor }: { editor: Editor }) {
        const { state } = editor;
        const { selection } = state;
        const { $from, $to } = selection;
        if ($from.pos === 0 && $to.pos === state.doc.content.size) {
          return false; // 保持默认全选行为
        }
        // 5. 创建新的选区
        editor.commands.setTextSelection({ from: $from.start(), to: $from.end() });
        return true;
      },
      Backspace: function ({ editor }: { editor: Editor }) {
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;
        if (empty && $from.pos === 1) {
          return true;
        }
        return false;
      },
    };
  },
});
